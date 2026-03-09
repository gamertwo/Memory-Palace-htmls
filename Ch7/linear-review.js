(function () {
  var visitLogStorageKey = "page_visit_log_v1";

  function slugFromPath() {
    var path = window.location.pathname || "";
    var name = path.split(/[\\/]/).pop() || document.title || "page";
    return name.replace(/\.html?$/i, "").replace(/[^a-z0-9]+/gi, "_").toLowerCase();
  }

  function fileNameFromPath() {
    var path = window.location.pathname || "";
    return path.split(/[\\/]/).pop() || (document.title || "page");
  }

  function trackPageVisit() {
    var slug = slugFromPath();
    var now = Date.now();
    var log = {};

    try {
      log = JSON.parse(localStorage.getItem(visitLogStorageKey) || "{}") || {};
    } catch (error) {
      log = {};
    }

    var current = log[slug] && typeof log[slug] === "object" ? log[slug] : {};
    var lastOpened = Number(current.lastOpened) || 0;
    var shouldIncrementOpenCount = !lastOpened || now - lastOpened > 5 * 60 * 1000;

    log[slug] = {
      slug: slug,
      file: fileNameFromPath(),
      title: document.title || fileNameFromPath(),
      lastOpened: now,
      lastOpenedIso: new Date(now).toISOString(),
      openCount: (Number(current.openCount) || 0) + (shouldIncrementOpenCount ? 1 : 0)
    };

    try {
      localStorage.setItem(visitLogStorageKey, JSON.stringify(log));
    } catch (error) {}
  }

  function blankRoomState() {
    return {
      attempts: 0,
      easy: 0,
      medium: 0,
      hard: 0,
      lastRating: null,
      lastPercentage: null,
      history: []
    };
  }

  function toSafeNumber(value) {
    var number = Number(value);
    return Number.isFinite(number) && number >= 0 ? number : 0;
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function badgeClass(rating) {
    if (rating === "hard") return "badge-hard";
    if (rating === "medium") return "badge-medium";
    if (rating === "easy") return "badge-easy";
    return "badge-none";
  }

  function ratingLabel(rating) {
    if (rating === "hard") return "Hard";
    if (rating === "medium") return "Medium";
    if (rating === "easy") return "Easy";
    return "None";
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function formatTime(value) {
    try {
      return new Date(value).toLocaleString();
    } catch (error) {
      return String(value);
    }
  }

  function typesetNode(node, attempt) {
    if (!node) return;
    if (window.MathJax && typeof window.MathJax.typesetPromise === "function") {
      window.MathJax.typesetPromise([node]).catch(function () {});
      return;
    }

    if ((attempt || 0) < 10) {
      window.setTimeout(function () {
        typesetNode(node, (attempt || 0) + 1);
      }, 400);
    }
  }

  function initLinearReview() {
    if (document.getElementById("linear-review")) return;

    var rooms = Array.prototype.slice.call(document.querySelectorAll(".room"));
    if (!rooms.length) return;

    var hero = document.querySelector(".hero");
    var shell = document.querySelector(".shell") || document.querySelector("main");
    var contentGrid = document.querySelector(".content-grid");
    var mainStack = document.querySelector(".main-stack");
    var aside = document.querySelector(".palace-sidebar");
    var toolRow = hero ? hero.querySelector(".tool-row") : null;

    if (hero && !toolRow) {
      toolRow = document.createElement("div");
      toolRow.className = "tool-row";
      hero.appendChild(toolRow);
    }

    if (!contentGrid && shell && hero) {
      contentGrid = document.createElement("div");
      contentGrid.className = "content-grid";
      mainStack = document.createElement("div");
      mainStack.className = "main-stack";

      while (hero.nextSibling) {
        var next = hero.nextSibling;
        if (next.nodeType === 1) {
          mainStack.appendChild(next);
        } else {
          shell.removeChild(next);
        }
      }

      contentGrid.appendChild(mainStack);
      shell.appendChild(contentGrid);
    }

    if (contentGrid && !mainStack) {
      mainStack = document.createElement("div");
      mainStack.className = "main-stack";

      Array.prototype.slice.call(contentGrid.children).forEach(function (child) {
        if (!child.classList || !child.classList.contains("palace-sidebar")) {
          mainStack.appendChild(child);
        }
      });

      contentGrid.insertBefore(mainStack, contentGrid.firstChild || null);
    }

    if (contentGrid && !aside) {
      aside = document.createElement("aside");
      aside.className = "palace-sidebar";
      contentGrid.appendChild(aside);
    }

    if (!mainStack || !aside || !toolRow) return;

    var roomData = rooms.map(function (room, index) {
      var clone = room.cloneNode(true);
      var heading = clone.querySelector("h2");
      var title = heading ? heading.textContent.trim() : "Room " + (index + 1);
      if (heading) heading.remove();
      return {
        title: title,
        html: clone.innerHTML.trim() || "<p>No saved content for this room.</p>"
      };
    });

    var totalRooms = roomData.length;
    var storageKey = "linear_review_" + slugFromPath() + "_v1";
    var defaultConfidence = 50;
    var revealed = false;

    function normalizeRoom(rawRoom) {
      var state = blankRoomState();
      if (!rawRoom || typeof rawRoom !== "object") return state;
      state.attempts = toSafeNumber(rawRoom.attempts);
      state.easy = toSafeNumber(rawRoom.easy);
      state.medium = toSafeNumber(rawRoom.medium);
      state.hard = toSafeNumber(rawRoom.hard);
      state.lastRating = ["easy", "medium", "hard"].indexOf(rawRoom.lastRating) >= 0 ? rawRoom.lastRating : null;
      state.lastPercentage = rawRoom.lastPercentage === null || rawRoom.lastPercentage === undefined
        ? null
        : clamp(toSafeNumber(rawRoom.lastPercentage), 0, 100);
      state.history = Array.isArray(rawRoom.history)
        ? rawRoom.history
            .filter(function (item) {
              return item && ["easy", "medium", "hard"].indexOf(item.rating) >= 0;
            })
            .slice(0, 8)
            .map(function (item) {
              return {
                rating: item.rating,
                percentage: clamp(toSafeNumber(item.percentage), 0, 100),
                time: item.time || new Date().toISOString()
              };
            })
        : [];
      return state;
    }

    function loadState() {
      var raw = {};
      try {
        raw = JSON.parse(localStorage.getItem(storageKey) || "{}") || {};
      } catch (error) {
        raw = {};
      }

      return {
        currentIndex: clamp(toSafeNumber(raw.currentIndex), 0, Math.max(totalRooms - 1, 0)),
        completed: Boolean(raw.completed && totalRooms),
        rooms: roomData.map(function (_, index) {
          return normalizeRoom(raw.rooms && raw.rooms[index]);
        })
      };
    }

    function saveState() {
      try {
        localStorage.setItem(storageKey, JSON.stringify(reviewState));
      } catch (error) {}
    }

    function createButtonIfNeeded() {
      var existingButton = document.getElementById("jump-review");
      if (existingButton) return existingButton;
      var button = document.createElement("button");
      button.className = "tool-btn";
      button.type = "button";
      button.id = "jump-review";
      button.textContent = "Linear Review";
      toolRow.insertBefore(button, toolRow.firstChild || null);
      return button;
    }

    function createReviewPanel() {
      var panel = document.createElement("section");
      panel.className = "panel review-panel";
      panel.id = "linear-review";
      panel.innerHTML =
        '<div class="review-top">' +
          '<div>' +
            '<div class="section-title">Linear Review Mode</div>' +
            '<p class="review-copy">This review is sequential, not random. It starts at Room 1 and moves to the last room in order. Reveal a room, score it from the right side as hard, medium, or easy, add your own confidence percentage, and the page remembers every attempt in this browser.</p>' +
          '</div>' +
          '<div class="review-actions">' +
            '<button class="tool-btn" type="button" id="review-restart">Restart From Room 1</button>' +
            '<button class="ghost-btn" type="button" id="review-continue">Continue Saved Position</button>' +
          '</div>' +
        '</div>' +
        '<div class="review-progress">' +
          '<div class="review-track"><div class="review-fill" id="review-fill"></div></div>' +
          '<div class="review-step" id="review-step">Room 1 of ' + totalRooms + "</div>" +
        "</div>" +
        '<div class="review-banner" id="review-banner"></div>' +
        '<div class="review-card">' +
          '<div class="review-kicker" id="review-kicker">Current Room</div>' +
          '<h2 class="review-room-title" id="review-room-title">Room 1</h2>' +
          '<p class="review-room-prompt" id="review-room-prompt">Try to recall this room from memory first. Reveal it only when you want to check yourself.</p>' +
          '<div class="review-stats">' +
            '<div class="review-stat"><div class="review-stat-label">Attempts</div><div class="review-stat-value" id="stat-attempts">0</div></div>' +
            '<div class="review-stat"><div class="review-stat-label">Easy</div><div class="review-stat-value" id="stat-easy">0</div></div>' +
            '<div class="review-stat"><div class="review-stat-label">Medium</div><div class="review-stat-value" id="stat-medium">0</div></div>' +
            '<div class="review-stat"><div class="review-stat-label">Hard</div><div class="review-stat-value" id="stat-hard">0</div></div>' +
            '<div class="review-stat"><div class="review-stat-label">Last Rating</div><div class="review-stat-value" id="stat-rating">None yet</div></div>' +
            '<div class="review-stat"><div class="review-stat-label">Last Confidence</div><div class="review-stat-value" id="stat-confidence">--</div></div>' +
          "</div>" +
          '<div class="review-answer-wrap">' +
            '<div class="review-hidden-state" id="review-hidden">' +
              '<p id="review-hidden-copy">Reveal the current room when you are ready. After that, use the right sidebar to save hard, medium, or easy with your percentage.</p>' +
              '<button class="tool-btn" type="button" id="review-reveal">Reveal Room</button>' +
            "</div>" +
            '<div class="review-answer" id="review-answer" hidden></div>' +
          "</div>" +
        "</div>";
      return panel;
    }

    function createReviewDock() {
      var dock = document.createElement("section");
      dock.className = "review-dock";
      dock.innerHTML =
        '<div class="section-title">Review Controls</div>' +
        '<p class="palace-intro dock-copy">The buttons below stay linear: rate the current room and the review jumps to the next room. Your previous scores and confidence percentages stay visible on retries.</p>' +
        '<div class="review-block">' +
          "<h3>Confidence</h3>" +
          '<div class="slider-row">' +
            '<input class="confidence-slider" id="review-confidence" type="range" min="0" max="100" step="5" value="' + defaultConfidence + '" />' +
            '<div class="confidence-value" id="review-confidence-value">' + defaultConfidence + "%</div>" +
          "</div>" +
          '<p class="review-note">Use this for how much of the room you know. The saved percentage stays visible in the tracker while you move forward.</p>' +
        "</div>" +
        '<div class="review-block">' +
          "<h3>Rate This Room</h3>" +
          '<div class="rating-buttons">' +
            '<button class="rate-btn rate-hard" type="button" data-rating="hard" disabled><div><strong>Hard</strong><small>needs another pass</small></div><span>save + next</span></button>' +
            '<button class="rate-btn rate-medium" type="button" data-rating="medium" disabled><div><strong>Medium</strong><small>partly remembered</small></div><span>save + next</span></button>' +
            '<button class="rate-btn rate-easy" type="button" data-rating="easy" disabled><div><strong>Easy</strong><small>felt solid</small></div><span>save + next</span></button>' +
          "</div>" +
          '<p class="review-note" id="review-action-note">Reveal the room first. Rating is locked until the current room is open.</p>' +
        "</div>" +
        '<div class="review-block"><h3>Previous Attempts</h3><div class="history-list" id="review-history"></div></div>' +
        '<div class="review-block"><h3>Room Tracker</h3><div class="tracker-list" id="review-room-tracker"></div></div>';
      return dock;
    }

    var jumpButton = createButtonIfNeeded();
    var reviewPanel = createReviewPanel();
    var reviewDock = createReviewDock();
    var firstRoomsPanel = Array.prototype.slice.call(mainStack.children).find(function (node) {
      return node.classList && node.classList.contains("panel") && node.querySelector(".room");
    });

    if (firstRoomsPanel) {
      mainStack.insertBefore(reviewPanel, firstRoomsPanel);
    } else {
      mainStack.appendChild(reviewPanel);
    }
    aside.insertBefore(reviewDock, aside.firstChild || null);

    var reviewState = loadState();

    var elements = {
      jump: jumpButton,
      panel: reviewPanel,
      restart: document.getElementById("review-restart"),
      continueReview: document.getElementById("review-continue"),
      fill: document.getElementById("review-fill"),
      step: document.getElementById("review-step"),
      banner: document.getElementById("review-banner"),
      kicker: document.getElementById("review-kicker"),
      title: document.getElementById("review-room-title"),
      prompt: document.getElementById("review-room-prompt"),
      statAttempts: document.getElementById("stat-attempts"),
      statEasy: document.getElementById("stat-easy"),
      statMedium: document.getElementById("stat-medium"),
      statHard: document.getElementById("stat-hard"),
      statRating: document.getElementById("stat-rating"),
      statConfidence: document.getElementById("stat-confidence"),
      hiddenState: document.getElementById("review-hidden"),
      hiddenCopy: document.getElementById("review-hidden-copy"),
      reveal: document.getElementById("review-reveal"),
      answer: document.getElementById("review-answer"),
      confidence: document.getElementById("review-confidence"),
      confidenceValue: document.getElementById("review-confidence-value"),
      actionNote: document.getElementById("review-action-note"),
      history: document.getElementById("review-history"),
      tracker: document.getElementById("review-room-tracker"),
      ratingButtons: Array.prototype.slice.call(document.querySelectorAll("[data-rating]"))
    };

    function scrollToReview() {
      elements.panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function syncConfidenceDisplay() {
      elements.confidenceValue.textContent = elements.confidence.value + "%";
    }

    function setRatingButtonsEnabled(enabled) {
      elements.ratingButtons.forEach(function (button) {
        button.disabled = !enabled;
      });
    }

    function renderHistory(roomReview) {
      if (!roomReview.history.length) {
        elements.history.innerHTML = '<div class="history-empty">No saved attempts for this room yet.</div>';
        return;
      }

      elements.history.innerHTML = roomReview.history
        .map(function (item) {
          return (
            '<div class="history-item">' +
              '<div class="history-row">' +
                '<div class="tracker-title">' + escapeHtml(ratingLabel(item.rating)) + "</div>" +
                '<span class="history-badge ' + badgeClass(item.rating) + '">' + escapeHtml(ratingLabel(item.rating)) + "</span>" +
              "</div>" +
              '<div class="history-meta">Confidence: ' + item.percentage + "% | " + escapeHtml(formatTime(item.time)) + "</div>" +
            "</div>"
          );
        })
        .join("");
    }

    function renderTracker() {
      elements.tracker.innerHTML = reviewState.rooms
        .map(function (roomReview, index) {
          var confidenceText = roomReview.lastPercentage === null ? "--" : roomReview.lastPercentage + "%";
          return (
            '<div class="tracker-item' + (index === reviewState.currentIndex ? " active" : "") + '">' +
              '<div class="tracker-top">' +
                '<div class="tracker-title">' + escapeHtml(roomData[index].title) + "</div>" +
                '<span class="tracker-badge ' + badgeClass(roomReview.lastRating) + '">' + escapeHtml(ratingLabel(roomReview.lastRating)) + "</span>" +
              "</div>" +
              '<div class="tracker-meta">Attempts: ' + roomReview.attempts +
              " | Easy: " + roomReview.easy +
              " | Medium: " + roomReview.medium +
              " | Hard: " + roomReview.hard +
              " | Last confidence: " + confidenceText +
              "</div>" +
            "</div>"
          );
        })
        .join("");
    }

    function renderStats(roomReview) {
      elements.statAttempts.textContent = String(roomReview.attempts);
      elements.statEasy.textContent = String(roomReview.easy);
      elements.statMedium.textContent = String(roomReview.medium);
      elements.statHard.textContent = String(roomReview.hard);
      elements.statRating.textContent = ratingLabel(roomReview.lastRating);
      elements.statConfidence.textContent = roomReview.lastPercentage === null ? "--" : roomReview.lastPercentage + "%";
    }

    function renderAnswer(index) {
      elements.answer.innerHTML = roomData[index].html;
      typesetNode(elements.answer);
    }

    function renderBanner(roomReview) {
      if (reviewState.completed) {
        elements.banner.textContent = "Review complete. Restart from Room 1 when you want another full pass.";
        return;
      }

      if (roomReview.attempts) {
        elements.banner.textContent =
          "Previous result here: " +
          ratingLabel(roomReview.lastRating) +
          (roomReview.lastPercentage === null ? "" : " at " + roomReview.lastPercentage + "%") +
          ".";
        return;
      }

      if (reviewState.currentIndex === 0) {
        elements.banner.textContent = "Start at Room 1. Rate each room to move forward in order.";
        return;
      }

      elements.banner.textContent =
        "Now on Room " + (reviewState.currentIndex + 1) +
        ". The tracker on the right keeps earlier room scores and percentages visible.";
    }

    function render() {
      var currentIndex = reviewState.currentIndex;
      var roomReview = reviewState.rooms[currentIndex];

      elements.fill.style.width = (reviewState.completed ? 100 : ((currentIndex + 1) / totalRooms) * 100) + "%";
      elements.step.textContent = "Room " + (currentIndex + 1) + " of " + totalRooms;
      elements.kicker.textContent = reviewState.completed ? "Review Complete" : "Current Room";
      elements.title.textContent = roomData[currentIndex].title;
      elements.prompt.textContent = reviewState.completed
        ? "You are at the final saved room. Review the stats here or restart from Room 1."
        : "Try to recall this room from memory first. Reveal it only when you want to check yourself.";

      renderStats(roomReview);
      renderHistory(roomReview);
      renderTracker();
      renderBanner(roomReview);

      elements.confidence.value = roomReview.lastPercentage === null ? String(defaultConfidence) : String(roomReview.lastPercentage);
      syncConfidenceDisplay();

      if (revealed || reviewState.completed) {
        elements.hiddenState.hidden = true;
        elements.answer.hidden = false;
        renderAnswer(currentIndex);
      } else {
        elements.hiddenState.hidden = false;
        elements.answer.hidden = true;
        elements.answer.innerHTML = "";
        elements.hiddenCopy.textContent = roomReview.attempts
          ? "This room already has saved attempts. Reveal it when you are ready, then rate it again to move forward."
          : "Reveal the current room when you are ready. After that, use the right sidebar to save hard, medium, or easy with your percentage.";
      }

      if (reviewState.completed) {
        setRatingButtonsEnabled(false);
        elements.actionNote.textContent = "Review complete. Restart from Room 1 to begin another full linear pass.";
      } else if (revealed) {
        setRatingButtonsEnabled(true);
        elements.actionNote.textContent = "Choose hard, medium, or easy. The page saves your rating and confidence, then advances to the next room.";
      } else {
        setRatingButtonsEnabled(false);
        elements.actionNote.textContent = "Reveal the room first. Rating is locked until the current room is open.";
      }
    }

    function revealCurrentRoom() {
      revealed = true;
      render();
    }

    function rateCurrentRoom(rating) {
      if (!revealed || reviewState.completed) return;

      var currentIndex = reviewState.currentIndex;
      var roomReview = reviewState.rooms[currentIndex];
      var percentage = clamp(toSafeNumber(elements.confidence.value), 0, 100);

      roomReview.attempts += 1;
      roomReview[rating] += 1;
      roomReview.lastRating = rating;
      roomReview.lastPercentage = percentage;
      roomReview.history.unshift({
        rating: rating,
        percentage: percentage,
        time: new Date().toISOString()
      });
      roomReview.history = roomReview.history.slice(0, 8);

      if (currentIndex < totalRooms - 1) {
        reviewState.currentIndex = currentIndex + 1;
        reviewState.completed = false;
        revealed = false;
      } else {
        reviewState.currentIndex = currentIndex;
        reviewState.completed = true;
        revealed = true;
      }

      saveState();
      render();
      scrollToReview();
    }

    elements.jump.addEventListener("click", function () {
      render();
      scrollToReview();
    });

    elements.restart.addEventListener("click", function () {
      reviewState.currentIndex = 0;
      reviewState.completed = false;
      revealed = false;
      saveState();
      render();
      scrollToReview();
    });

    elements.continueReview.addEventListener("click", function () {
      revealed = reviewState.completed;
      render();
      scrollToReview();
    });

    elements.reveal.addEventListener("click", revealCurrentRoom);
    elements.confidence.addEventListener("input", syncConfidenceDisplay);

    elements.ratingButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        rateCurrentRoom(button.getAttribute("data-rating"));
      });
    });

    render();
  }

  trackPageVisit();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLinearReview);
  } else {
    initLinearReview();
  }
})();
