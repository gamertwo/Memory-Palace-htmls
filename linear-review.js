(function () {
  var visitLogStorageKey = "page_visit_log_v1";
  var reviewFallbacks = {
    line: "rgba(255, 255, 255, 0.12)",
    panel2: "rgba(255, 255, 255, 0.04)",
    accent: "#ffd08a",
    text: "#f7f1e8",
    muted: "rgba(247, 241, 232, 0.78)"
  };

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

  function firstSelector(selectors) {
    for (var index = 0; index < selectors.length; index += 1) {
      var node = document.querySelector(selectors[index]);
      if (node) return node;
    }
    return null;
  }

  function firstMatchingSelector(selectors) {
    for (var index = 0; index < selectors.length; index += 1) {
      if (document.querySelector(selectors[index])) return selectors[index];
    }
    return null;
  }

  function textFromNode(node, selectors, fallback) {
    if (!node) return fallback;
    for (var index = 0; index < selectors.length; index += 1) {
      var target = node.querySelector(selectors[index]);
      if (target && target.textContent && target.textContent.trim()) {
        return target.textContent.trim().replace(/\s+/g, " ");
      }
    }
    return fallback;
  }

  function hintsFromRoomHtml(html) {
    var wrapper = document.createElement("div");
    var hints = [];
    wrapper.innerHTML = html || "";

    Array.prototype.slice.call(wrapper.querySelectorAll("li, p")).forEach(function (node) {
      var text = (node.textContent || "").trim().replace(/\s+/g, " ");
      if (!text) return;
      if (text.length > 90) {
        text = text.slice(0, 87).trim() + "...";
      }
      if (hints.indexOf(text) === -1) {
        hints.push(text);
      }
    });

    return hints.slice(0, 3);
  }

  function ensureReviewThemeVariables() {
    var root = document.documentElement;
    var computed = window.getComputedStyle(root);

    if (!computed.getPropertyValue("--line").trim()) {
      root.style.setProperty("--line", computed.getPropertyValue("--border").trim() || reviewFallbacks.line);
    }
    if (!computed.getPropertyValue("--panel2").trim()) {
      root.style.setProperty("--panel2", computed.getPropertyValue("--panel").trim() || reviewFallbacks.panel2);
    }
    if (!computed.getPropertyValue("--accent").trim()) {
      root.style.setProperty(
        "--accent",
        computed.getPropertyValue("--cyan").trim() ||
          computed.getPropertyValue("--gold").trim() ||
          reviewFallbacks.accent
      );
    }
    if (!computed.getPropertyValue("--text").trim()) {
      root.style.setProperty("--text", reviewFallbacks.text);
    }
    if (!computed.getPropertyValue("--muted").trim()) {
      root.style.setProperty("--muted", reviewFallbacks.muted);
    }
  }

  function ensureBuilderUpgradeStyles() {
    if (document.getElementById("memory-builder-compat-styles")) return;

    var style = document.createElement("style");
    style.id = "memory-builder-compat-styles";
    style.textContent =
      ".memory-upgrade-tool-row,.tool-row{" +
        "display:flex;flex-wrap:wrap;gap:.6rem;margin-top:.9rem;" +
      "}" +
      ".memory-upgrade-btn,.tool-btn{" +
        "display:inline-flex;align-items:center;justify-content:center;" +
        "text-decoration:none;border-radius:999px;padding:.58rem .95rem;" +
        "font-size:.82rem;font-weight:700;" +
        "border:1px solid var(--line,rgba(255,255,255,.12));" +
        "background:rgba(255,255,255,.04);color:var(--text,#eef6ff);" +
      "}" +
      ".memory-upgrade-btn:hover,.tool-btn:hover{" +
        "background:rgba(255,255,255,.08);" +
      "}" +
      ".room-source-link{" +
        "display:inline-flex;margin:.3rem 0 .55rem;font-size:.72rem;font-weight:700;" +
        "text-decoration:none;color:var(--accent,#ffd08a);" +
      "}" +
      ".memory-request-panel{" +
        "margin-top:1rem;" +
      "}" +
      ".request-form{" +
        "display:grid;gap:.8rem;" +
      "}" +
      ".field-stack{" +
        "display:grid;gap:.35rem;" +
      "}" +
      ".field-stack span{" +
        "font-size:.78rem;font-weight:700;color:var(--muted,rgba(247,241,232,.78));" +
      "}" +
      ".request-input,.request-textarea{" +
        "width:100%;border-radius:12px;border:1px solid var(--line,rgba(255,255,255,.12));" +
        "background:var(--panel2,rgba(255,255,255,.04));color:var(--text,#eef6ff);" +
        "padding:.75rem .85rem;font:inherit;" +
      "}" +
      ".request-textarea{min-height:140px;resize:vertical;}" +
      ".request-note,.memory-status{" +
        "font-size:.8rem;color:var(--muted,rgba(247,241,232,.78));line-height:1.6;" +
      "}";
    document.head.appendChild(style);
  }

  function pageFileName() {
    return fileNameFromPath();
  }

  function builderSlug(value) {
    return String(value || "page")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "page";
  }

  function roomHeadingNode(room) {
    return firstSelector(["h2", "h3", ".rt", ".pc-title", ".move-name", ".k", ".tag", ".t"], room);
  }

  function roomTitleText(room, index) {
    if (!room) return "Room " + (index + 1);
    var title = room.getAttribute("data-room-title");
    if (title && title.trim()) return title.trim();
    var heading = roomHeadingNode(room);
    return heading && heading.textContent ? heading.textContent.trim() : "Room " + (index + 1);
  }

  function ensureBuilderRoomMetadata() {
    var pageFilename = pageFileName();
    Array.prototype.slice.call(document.querySelectorAll(".room")).forEach(function (room, index) {
      var title = roomTitleText(room, index);
      var roomId = room.getAttribute("data-room-id") || (builderSlug(pageFilename.replace(/\.html?$/i, "")) + "-room-" + (index + 1));
      room.setAttribute("data-room-id", roomId);
      room.setAttribute("data-room-title", title);
      room.setAttribute("data-source-page", room.getAttribute("data-source-page") || pageFilename);
      if (!room.id) room.id = "room-" + roomId;
    });
  }

  function extractBuilderSummary(room) {
    var firstParagraph = room.querySelector("p");
    if (firstParagraph && firstParagraph.textContent) return firstParagraph.textContent.trim().replace(/\s+/g, " ");
    var firstListItem = room.querySelector("li");
    if (firstListItem && firstListItem.textContent) return firstListItem.textContent.trim().replace(/\s+/g, " ");
    return "";
  }

  function extractBuilderTags(room, title) {
    var explicit = room.getAttribute("data-tags");
    if (explicit) {
      return explicit.split(",").map(function (tag) { return tag.trim().toLowerCase(); }).filter(Boolean);
    }
    return String(title || "")
      .replace(/^room\s+\d+\s*:\s*/i, "")
      .split(/[^a-z0-9]+/i)
      .map(function (tag) { return String(tag || "").trim().toLowerCase(); })
      .filter(function (tag) { return tag.length > 3; })
      .slice(0, 4);
  }

  function buildBuilderPayload() {
    ensureBuilderRoomMetadata();
    var pageFilename = pageFileName();
    var pageTitle = (document.title || "").trim() ||
      textFromNode(document, [".hero h1", "h1"], pageFilename) ||
      pageFilename;

    var rooms = Array.prototype.slice.call(document.querySelectorAll(".room")).map(function (room, index) {
      var title = roomTitleText(room, index);
      var roomId = room.getAttribute("data-room-id");
      var anchorId = room.id;
      return {
        id: roomId,
        anchorId: anchorId,
        title: title,
        summary: extractBuilderSummary(room),
        contentHtml: room.innerHTML.trim(),
        sourcePage: pageFilename,
        sourcePageTitle: pageTitle,
        sourceUrl: pageFilename + "#" + anchorId,
        tags: extractBuilderTags(room, title),
        order: index
      };
    });

    return {
      sourcePage: pageFilename,
      sourcePageTitle: pageTitle,
      rooms: rooms
    };
  }

  function storeBuilderHandoffCompat() {
    try {
      var payload = buildBuilderPayload();
      sessionStorage.setItem("memory-builder-handoff:" + payload.sourcePage, JSON.stringify(payload));
    } catch (error) {}
  }

  function ensureBuilderToolbar() {
    if (!document.querySelector(".room")) return;

    ensureBuilderUpgradeStyles();
    ensureBuilderRoomMetadata();

    var pageFilename = pageFileName();
    var row = document.querySelector(".hero .tool-row, .memory-upgrade-tool-row");
    if (!row) {
      row = document.createElement("div");
      row.className = "tool-row memory-upgrade-tool-row";

      var hero = document.querySelector(".hero");
      if (hero) {
        hero.appendChild(row);
      } else {
        var inner = firstSelector([".inner", ".main-stack", ".shell", ".main"]);
        var anchor = firstSelector([".lead", "h1", ".block", ".panel"], inner || document.body);
        if (anchor && anchor.parentNode) {
          if (anchor.matches(".lead")) {
            anchor.insertAdjacentElement("afterend", row);
          } else {
            anchor.parentNode.insertBefore(row, anchor.nextSibling);
          }
        } else if (inner) {
          inner.insertBefore(row, inner.firstChild);
        }
      }
    }

    if (!row.querySelector("[data-builder-link]")) {
      var builderLink = document.createElement("a");
      builderLink.className = "tool-btn memory-upgrade-btn";
      builderLink.href = "math-exact-memory-builder.html?pages=" + encodeURIComponent(pageFilename);
      builderLink.textContent = "Open in Memory Builder";
      builderLink.setAttribute("data-builder-link", "true");
      row.appendChild(builderLink);
    }

    if (!row.querySelector("[data-formula-index-link]")) {
      var formulaLink = document.createElement("a");
      formulaLink.className = "tool-btn memory-upgrade-btn";
      formulaLink.href = "math-formula-index.html#page-" + builderSlug(pageFilename.replace(/\.html?$/i, ""));
      formulaLink.textContent = "Formula Sheet";
      formulaLink.setAttribute("data-formula-index-link", "true");
      row.appendChild(formulaLink);
    }
  }

  function ensureRoomSendLinks() {
    if (!document.querySelector(".room")) return;
    var pageFilename = pageFileName();

    Array.prototype.slice.call(document.querySelectorAll(".room")).forEach(function (room) {
      var heading = roomHeadingNode(room);
      if (!heading || room.querySelector(".room-source-link")) return;
      var roomId = room.id;
      if (!roomId) return;

      var link = document.createElement("a");
      link.className = "room-source-link";
      link.href = "math-exact-memory-builder.html?pages=" + encodeURIComponent(pageFilename) + "&focus=" + encodeURIComponent(roomId);
      link.textContent = "Send to Builder";
      heading.insertAdjacentElement("afterend", link);
    });
  }

  function ensureRequestPanel() {
    if (!document.querySelector(".room") || document.querySelector("[data-txt-save]")) return;

    ensureBuilderUpgradeStyles();

    var pageKey = builderSlug((document.body.getAttribute("data-page-key") || pageFileName()).replace(/\.html?$/i, ""));
    var host = firstSelector([".main-stack", ".inner", ".shell", ".main"]);
    if (!host) return;

    var panel = document.createElement("section");
    panel.className = "block panel section memory-request-panel";
    panel.id = "request-anchor";
    panel.innerHTML =
      '<div class="section-title">Save Change Request</div>' +
      '<p class="palace-copy">Type what you want changed on this page, press Enter, and save the note.</p>' +
      '<form class="request-form" data-txt-save>' +
        '<label class="field-stack"><span>File Name</span><input class="request-input" data-note-filename type="text" value="' + pageKey + '-request.txt" /></label>' +
        '<label class="field-stack"><span>Text</span><textarea class="request-textarea" data-note-body placeholder="Example: Add one more memory cue or formula reminder on this page."></textarea></label>' +
        '<div class="tool-row"><button class="tool-btn memory-upgrade-btn" type="submit">Save .txt</button></div>' +
        '<p class="request-note">Press Enter to save. Use Shift+Enter for a new line.</p>' +
        '<p class="memory-status" data-note-status>Nothing saved yet.</p>' +
      '</form>';
    host.appendChild(panel);

    var row = document.querySelector(".memory-upgrade-tool-row, .hero .tool-row");
    if (row && !row.querySelector("[data-request-jump]")) {
      var requestLink = document.createElement("a");
      requestLink.className = "tool-btn memory-upgrade-btn";
      requestLink.href = "#request-anchor";
      requestLink.textContent = "Save Notes";
      requestLink.setAttribute("data-request-jump", "true");
      row.appendChild(requestLink);
    }

    typesetNode(panel);
  }

  function initTxtSaveCompat() {
    Array.prototype.slice.call(document.querySelectorAll("[data-txt-save]")).forEach(function (form) {
      if (form.getAttribute("data-save-wired") === "true") return;
      form.setAttribute("data-save-wired", "true");

      var pageKey = builderSlug(document.body.getAttribute("data-page-key") || pageFileName());
      var filenameInput = form.querySelector("[data-note-filename]");
      var bodyInput = form.querySelector("[data-note-body]");
      var status = form.querySelector("[data-note-status]");
      if (!bodyInput) return;

      function setStatus(message) {
        if (status) status.textContent = message;
      }

      function ensureFilename(value) {
        var clean = String(value || "").trim() || (pageKey + "_request");
        clean = clean.replace(/[<>:"/\\|?*]+/g, "_");
        return /\.txt$/i.test(clean) ? clean : clean + ".txt";
      }

      function saveTextFile(filename, text) {
        if (window.showSaveFilePicker) {
          return window.showSaveFilePicker({
            suggestedName: filename,
            types: [{ description: "Text Files", accept: { "text/plain": [".txt"] } }]
          }).then(function (handle) {
            return handle.createWritable().then(function (writable) {
              return writable.write(text).then(function () {
                return writable.close();
              });
            });
          });
        }

        return new Promise(function (resolve) {
          var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
          var link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = filename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.setTimeout(function () { URL.revokeObjectURL(link.href); }, 1000);
          resolve();
        });
      }

      function handleSave() {
        var text = String(bodyInput.value || "").trim();
        if (!text) {
          setStatus("Type some text first.");
          bodyInput.focus();
          return;
        }

        var filename = ensureFilename(filenameInput && filenameInput.value);
        saveTextFile(filename, text)
          .then(function () { setStatus("Saved " + filename + "."); })
          .catch(function () { setStatus("Save cancelled or blocked."); });
      }

      form.addEventListener("submit", function (event) {
        event.preventDefault();
        handleSave();
      });

      bodyInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && !event.shiftKey) {
          event.preventDefault();
          handleSave();
        }
      });
    });
  }

  function initMemoryBuilderCompat() {
    if (!document.querySelector(".room")) return;
    ensureBuilderToolbar();
    ensureRoomSendLinks();
    ensureRequestPanel();
    initTxtSaveCompat();

    if (document.body.getAttribute("data-builder-compat-bound") === "true") return;
    document.body.setAttribute("data-builder-compat-bound", "true");

    document.addEventListener("click", function (event) {
      var link = event.target.closest('a[href*="math-exact-memory-builder.html"]');
      if (!link) return;
      storeBuilderHandoffCompat();
    });
  }

  function initLinearReview() {
    if (document.getElementById("linear-review")) return;

    ensureReviewThemeVariables();

    var reviewSelector = firstMatchingSelector([
      ".room",
      ".sol",
      ".q",
      ".problem-card",
      ".move-chip",
      ".chip",
      ".fact",
      ".cue",
      ".pill"
    ]);
    var rooms = reviewSelector ? Array.prototype.slice.call(document.querySelectorAll(reviewSelector)) : [];
    var mainStack = firstSelector([".main-stack", ".inner", ".main-inner", ".stage", ".main"]);
    var aside = document.querySelector(".palace-sidebar");
    var hero = document.querySelector(".hero");
    var toolRow = hero ? hero.querySelector(".tool-row") : null;

    if (!rooms.length || !mainStack) return;

    var roomData = rooms.map(function (room, index) {
      var clone = room.cloneNode(true);
      var title = textFromNode(
        clone,
        ["h2", "h3", ".rt", ".pc-title", ".move-name", ".k", ".tag", ".t"],
        "Room " + (index + 1)
      );
      var heading = clone.querySelector("h2, h3, .rt, .pc-title, .move-name, .k, .tag, .t");
      if (heading) heading.remove();
      return {
        title: title,
        html: clone.innerHTML.trim() || "<p>No saved content for this room.</p>",
        hints: hintsFromRoomHtml(clone.innerHTML.trim())
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
      if (toolRow) {
        toolRow.insertBefore(button, toolRow.firstChild || null);
      } else {
        var launchRow = document.createElement("div");
        launchRow.className = "tool-row review-launch-row";
        launchRow.appendChild(button);
        if (hero) {
          hero.appendChild(launchRow);
        } else {
          mainStack.insertBefore(launchRow, mainStack.firstChild || null);
        }
      }
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
            '<p class="review-copy">This review is sequential, not random. It starts at Room 1 and moves to the last room in order. Reveal a room, score it as hard, medium, or easy, add your own confidence percentage, and the page remembers every attempt in this browser.</p>' +
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
              '<p id="review-hidden-copy">Reveal the current room when you are ready. After that, save hard, medium, or easy with your percentage.</p>' +
              '<div class="review-hint-title">Quick Hints</div>' +
              '<div class="review-hints" id="review-hints"></div>' +
              '<button class="tool-btn" type="button" id="review-reveal">Reveal Room</button>' +
            "</div>" +
            '<div class="review-answer" id="review-answer" hidden></div>' +
            '<div class="review-bottom-controls">' +
              '<div class="review-bottom-head">' +
                '<div class="review-hint-title">Bottom Controls</div>' +
                '<p class="review-note review-bottom-copy">Rate from here after you check the answer. The confidence slider and easy, medium, hard buttons now stay directly under the current room.</p>' +
              "</div>" +
              '<div class="review-bottom-grid">' +
                '<div class="review-bottom-block">' +
                  "<h3>Confidence</h3>" +
                  '<div class="slider-row review-slider-row">' +
                    '<input class="confidence-slider" id="review-confidence" type="range" min="0" max="100" step="5" value="' + defaultConfidence + '" />' +
                    '<div class="confidence-value" id="review-confidence-value">' + defaultConfidence + "%</div>" +
                  "</div>" +
                "</div>" +
                '<div class="review-bottom-block">' +
                  "<h3>Rate This Room</h3>" +
                  '<div class="rating-buttons review-bottom-ratings">' +
                    '<button class="rate-btn rate-hard" type="button" data-rating="hard" disabled><div><strong>Hard</strong><small>needs another pass</small></div><span>save + next</span></button>' +
                    '<button class="rate-btn rate-medium" type="button" data-rating="medium" disabled><div><strong>Medium</strong><small>partly remembered</small></div><span>save + next</span></button>' +
                    '<button class="rate-btn rate-easy" type="button" data-rating="easy" disabled><div><strong>Easy</strong><small>felt solid</small></div><span>save + next</span></button>' +
                  "</div>" +
                  '<p class="review-note" id="review-action-note">Reveal the room first. Rating is locked until the current room is open.</p>' +
                "</div>" +
              "</div>" +
            "</div>" +
          "</div>" +
        "</div>";
      return panel;
    }

    function createReviewDock() {
      var dock = document.createElement("section");
      dock.className = "review-dock";
      dock.innerHTML =
        '<div class="section-title">Review Controls</div>' +
        '<p class="palace-intro dock-copy">The rating controls now live at the bottom of the active review card, so this dock stays focused on your attempt history and room tracker while you move through the sequence.</p>' +
        '<div class="review-block"><h3>Previous Attempts</h3><div class="history-list" id="review-history"></div></div>' +
        '<div class="review-block"><h3>Room Tracker</h3><div class="tracker-list" id="review-room-tracker"></div></div>';
      return dock;
    }

    var jumpButton = createButtonIfNeeded();
    var reviewPanel = createReviewPanel();
    var reviewDock = createReviewDock();
    var firstRoomsPanel = Array.prototype.slice.call(mainStack.children).find(function (node) {
      return node.contains && rooms[0] && node.contains(rooms[0]);
    });

    if (firstRoomsPanel) {
      mainStack.insertBefore(reviewPanel, firstRoomsPanel);
    } else {
      mainStack.insertBefore(reviewPanel, mainStack.firstChild || null);
    }
    if (aside) {
      aside.insertBefore(reviewDock, aside.firstChild || null);
    } else {
      reviewDock.classList.add("review-dock-inline");
      reviewPanel.insertAdjacentElement("afterend", reviewDock);
    }

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
      hints: document.getElementById("review-hints"),
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

    function renderHints(index) {
      var hints = roomData[index].hints || [];
      if (!hints.length) {
        elements.hints.innerHTML = '<div class="review-hint-chip">Focus on the room title and the main idea first.</div>';
        return;
      }

      elements.hints.innerHTML = hints
        .map(function (hint) {
          return '<div class="review-hint-chip">' + escapeHtml(hint) + "</div>";
        })
        .join("");
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
        ". The tracker keeps earlier room scores and percentages visible.";
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
          : "Reveal the current room when you are ready. After that, save hard, medium, or easy with your percentage.";
        renderHints(currentIndex);
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
    document.addEventListener("DOMContentLoaded", function () {
      initMemoryBuilderCompat();
      initLinearReview();
    });
  } else {
    initMemoryBuilderCompat();
    initLinearReview();
  }
})();
