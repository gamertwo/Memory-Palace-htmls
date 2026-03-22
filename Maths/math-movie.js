(function () {
  var config = window.bernoulliMovieConfig;
  if (!config || document.querySelector(".movie-generated-section")) return;

  function typesetNode(node) {
    if (!node) return;
    if (window.MathJax && typeof window.MathJax.typesetPromise === "function") {
      window.MathJax.typesetPromise([node]).catch(function () {});
    }
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function slugFromPath() {
    var path = window.location.pathname || "";
    var name = path.split(/[\\/]/).pop() || document.title || "page";
    return name.replace(/\.html?$/i, "").replace(/[^a-z0-9]+/gi, "_").toLowerCase();
  }

  var storageKey = config.storageKey || (slugFromPath() + "_movie_stations_v1");
  var hero = document.querySelector(".hero");
  var toolRow = hero ? hero.querySelector(".tool-row") : null;
  var body = document.body;
  var mainStack = document.querySelector(".main-stack");
  var memoryPanel = document.getElementById("memory-anchor");
  var examPanel = Array.prototype.slice.call(document.querySelectorAll(".panel")).find(function (panel) {
    return panel.querySelector(".room");
  });
  var sidebar = document.querySelector(".palace-sidebar");
  var promptBox = document.getElementById("prompt-text");
  var originalStations = [];
  var stationState = {};

  try {
    stationState = JSON.parse(localStorage.getItem(storageKey) || "{}") || {};
  } catch (error) {
    stationState = {};
  }

  function saveStations() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(stationState));
    } catch (error) {}
  }

  function buttonClass(isActive) {
    return isActive ? "tool-btn is-active" : "ghost-btn";
  }

  function buildControls() {
    var wrap = document.createElement("div");
    wrap.className = "movie-controls-wrap";
    wrap.innerHTML =
      '<div class="movie-control-block">' +
        '<div class="eyebrow">View Switch</div>' +
        '<div class="movie-control-row">' +
          '<button class="tool-btn is-active" type="button" data-movie-view="movie">Movie View</button>' +
          '<button class="ghost-btn" type="button" data-movie-view="exam">Exam View</button>' +
          '<button class="ghost-btn" type="button" data-movie-jump="freeze">Freeze Frames</button>' +
          '<button class="ghost-btn" type="button" data-movie-open-prompt>AI Prompt</button>' +
        "</div>" +
      "</div>" +
      '<div class="movie-control-block movie-only">' +
        '<div class="eyebrow">Movie Modes</div>' +
        '<div class="movie-mode-row">' +
          '<button class="tool-btn is-active" type="button" data-movie-mode="movie">Watch Forward</button>' +
          '<button class="ghost-btn" type="button" data-movie-mode="recall">Recall Mode</button>' +
          '<button class="ghost-btn" type="button" data-movie-mode="reverse">Reverse Recall</button>' +
          '<button class="ghost-btn" type="button" data-movie-mode="speed">Speed Run</button>' +
        "</div>" +
      "</div>";
    return wrap;
  }

  function buildTriggerSection() {
    var section = document.createElement("section");
    section.className = "panel movie-only movie-generated-trigger";
    section.innerHTML =
      '<div class="section-title">Trigger Frame</div>' +
      '<p class="movie-copy">' + config.trigger + "</p>";
    return section;
  }

  function buildStation(station, index) {
    var article = document.createElement("article");
    article.className = "movie-stop";
    article.dataset.station = station.id || ("station_" + (index + 1));
    article.dataset.order = String(index + 1);
    article.innerHTML =
      '<div class="movie-top">' +
        "<div>" +
          '<div class="movie-peg-chip">' + escapeHtml(station.peg || station.place || ("Station " + (index + 1))) + "</div>" +
          "<h2>" + escapeHtml(station.title) + "</h2>" +
        "</div>" +
        '<div class="movie-dominant-image">' + escapeHtml(station.image || "") + "</div>" +
      "</div>" +
      '<p class="movie-camera-line">' + station.camera + "</p>" +
      (station.sensory ? '<p class="movie-sensory-line">' + station.sensory + "</p>" : "") +
      (station.math ? '<div class="movie-math-overlay">' + station.math + "</div>" : "") +
      (station.result ? '<div class="movie-result-line">' + station.result + "</div>" : "") +
      '<p class="movie-trigger-line">' + station.trigger + "</p>" +
      '<p class="movie-push-line">' + station.push + "</p>" +
      '<div class="movie-station-toolbar">' +
        '<button class="ghost-btn" type="button" data-station-mark="' + article.dataset.station + '">Mark Locked</button>' +
        '<p class="movie-status" data-station-status="' + article.dataset.station + '">Not marked yet.</p>' +
      "</div>";
    return article;
  }

  function buildMovieSection() {
    var section = document.createElement("section");
    section.className = "panel movie-only movie-generated-section";
    section.id = "movie-anchor";
    section.innerHTML =
      '<div class="section-title">Movie Path</div>' +
      '<p class="movie-copy">' + escapeHtml(config.movieIntro || "Walk it as a single first-person corridor. Each station performs one algebraic decision, leaves one visible result, and physically pushes you into the next station.") + "</p>" +
      '<div class="movie-track" id="movie-track"></div>' +
      '<div class="movie-generated-mini">' +
        "<h3>Best Review Sequence</h3>" +
        '<ol class="movie-seq">' +
          "<li>Walk the movie forward with full scene detail.</li>" +
          "<li>Say only the station names.</li>" +
          "<li>Recover the formulas from the station names.</li>" +
          "<li>Walk backward from the final answer to the trigger frame.</li>" +
          "<li>Switch to Exam View and rewrite the clean solution without the pegs.</li>" +
        "</ol>" +
      "</div>";

    var track = section.querySelector("#movie-track");
    config.stations.forEach(function (station, index) {
      track.appendChild(buildStation(station, index));
    });
    originalStations = Array.prototype.slice.call(track.children);
    return section;
  }

  function renderSidebar() {
    if (!sidebar) return;
    sidebar.classList.add("movie-palace-sidebar", "movie-only");
    var freezeHtml = config.stations
      .map(function (station) {
        return (
          '<article class="movie-freeze-card">' +
            "<h3>" + escapeHtml(station.title) + "</h3>" +
            "<p>" + (station.freeze || station.trigger) + "</p>" +
          "</article>"
        );
      })
      .join("");

    sidebar.innerHTML =
      '<div><div class="section-title">Step Freeze-Frames</div><p class="movie-palace-intro">These are the still images you should be able to recall when the full movie has faded.</p></div>' +
      '<div class="movie-freeze-grid" id="freeze-anchor">' + freezeHtml + "</div>" +
      '<div class="movie-generated-mini"><h3>Peg Grammar</h3><p>Keep the permanent meanings fixed: 21 = net for swap or capture, 28 = knife for integral cut, 84 = fire for exponential ignition, 31 = mat for product-rule collapse, 70 = case for +C, and 71 = coat for back-substitution.</p></div>';
    typesetNode(sidebar);
  }

  function renderStationMark(id) {
    var button = document.querySelector('[data-station-mark="' + id + '"]');
    var status = document.querySelector('[data-station-status="' + id + '"]');
    var locked = Boolean(stationState[id]);
    if (button) {
      button.textContent = locked ? "Locked In" : "Mark Locked";
      button.classList.toggle("is-active", locked);
    }
    if (status) {
      status.textContent = locked ? "Saved as locked on this device." : "Not marked yet.";
    }
  }

  function setView(view) {
    body.dataset.view = view;
    document.querySelectorAll("[data-movie-view]").forEach(function (button) {
      var active = button.getAttribute("data-movie-view") === view;
      button.className = buttonClass(active);
    });
  }

  function setMode(mode) {
    body.dataset.mode = mode === "reverse" ? "movie" : mode;
    document.querySelectorAll("[data-movie-mode]").forEach(function (button) {
      var active = button.getAttribute("data-movie-mode") === mode;
      button.className = buttonClass(active);
    });
    var track = document.getElementById("movie-track");
    var ordered = mode === "reverse" ? originalStations.slice().reverse() : originalStations.slice();
    ordered.forEach(function (node) {
      track.appendChild(node);
    });
    setView("movie");
  }

  function updatePrompt() {
    if (!promptBox) return;
    var stationNames = config.stations.map(function (station) { return station.title; }).join(", ");
    var sourceText = (config.promptSource || []).map(function (item, index) {
      return (index + 1) + ". " + item;
    }).join("\n");

    promptBox.value =
      "Create a first-person memory movie in exactly one connected paragraph for this differential-equation page. " +
      "Use a fixed forward route with these stations only: " + stationNames + ". " +
      "Keep the permanent peg meanings fixed: 21 = net for substitution or capture, 28 = knife for the integral cut, 84 = fire for the exponential integrating factor, 31 = mat for the product-rule collapse, 70 = case for +C, and 71 = coat for back-substitution. " +
      "Make the images perform the algebra, not just decorate it. Use motion, collision, sound, and physical handoff between stations. Do not use bullet points.\n\n" +
      "Source material:\n" + sourceText;
  }

  if (hero) {
    var controls = buildControls();
    if (toolRow) {
      toolRow.replaceWith(controls);
    } else {
      hero.appendChild(controls);
    }
  }

  if (examPanel) {
    examPanel.classList.add("movie-generated-exam-panel");
    var title = examPanel.querySelector(".section-title");
    if (title) title.textContent = "Exam View: Compact Solution";
    if (!examPanel.querySelector(".movie-exam-copy")) {
      var copy = document.createElement("p");
      copy.className = "movie-exam-copy";
      copy.textContent = config.examIntro || "This is the stripped-down retrieval version. No theater, just the algebra in the right order.";
      examPanel.insertBefore(copy, examPanel.querySelector(".rooms") || examPanel.firstChild);
    }
    if (config.retrievalRule && !examPanel.querySelector(".movie-generated-mini")) {
      var mini = document.createElement("div");
      mini.className = "movie-generated-mini";
      mini.innerHTML = "<h3>One-Line Retrieval Rule</h3><p>" + config.retrievalRule + "</p>";
      examPanel.appendChild(mini);
    }
  }

  if (memoryPanel) {
    memoryPanel.classList.add("movie-generated-hidden-always");
  }

  if (mainStack) {
    var triggerSection = buildTriggerSection();
    var movieSection = buildMovieSection();
    if (memoryPanel && memoryPanel.parentNode === mainStack) {
      mainStack.insertBefore(movieSection, memoryPanel);
      mainStack.insertBefore(triggerSection, movieSection);
    } else if (examPanel && examPanel.parentNode === mainStack) {
      examPanel.insertAdjacentElement("afterend", triggerSection);
      triggerSection.insertAdjacentElement("afterend", movieSection);
    } else {
      mainStack.appendChild(triggerSection);
      mainStack.appendChild(movieSection);
    }
    typesetNode(triggerSection);
    typesetNode(movieSection);
  }

  renderSidebar();
  updatePrompt();
  setView("movie");
  setMode("movie");

  document.querySelectorAll("[data-station-mark]").forEach(function (button) {
    var id = button.getAttribute("data-station-mark");
    renderStationMark(id);
    button.addEventListener("click", function () {
      stationState[id] = !stationState[id];
      saveStations();
      renderStationMark(id);
    });
  });

  document.querySelectorAll("[data-movie-view]").forEach(function (button) {
    button.addEventListener("click", function () {
      setView(button.getAttribute("data-movie-view"));
    });
  });

  document.querySelectorAll("[data-movie-mode]").forEach(function (button) {
    button.addEventListener("click", function () {
      setMode(button.getAttribute("data-movie-mode"));
    });
  });

  document.querySelectorAll("[data-movie-jump]").forEach(function (button) {
    button.addEventListener("click", function () {
      var target = document.getElementById("freeze-anchor");
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  var openPrompt = document.querySelector("[data-movie-open-prompt]");
  if (openPrompt) {
    openPrompt.addEventListener("click", function () {
      var modal = document.getElementById("prompt-modal");
      if (modal) {
        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
        return;
      }
      var existing = document.querySelector("[data-open-prompt]");
      if (existing) existing.click();
    });
  }
})();
