(function () {
  function safeSlug(value) {
    return String(value || "page").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || "page";
  }
  var pageKey = safeSlug(document.body.getAttribute("data-page-key") || window.location.pathname);
  var memoryKey = pageKey + "_memory_marks_v1";
  var memoryState = {};
  try {
    memoryState = JSON.parse(localStorage.getItem(memoryKey) || "{}") || {};
  } catch (error) {
    memoryState = {};
  }
  function saveMemory() {
    try { localStorage.setItem(memoryKey, JSON.stringify(memoryState)); } catch (error) {}
  }
  function renderMark(id) {
    var button = document.querySelector('[data-memory-mark="' + id + '"]');
    var status = document.querySelector('[data-memory-status="' + id + '"]');
    var remembered = Boolean(memoryState[id]);
    if (button) {
      button.textContent = remembered ? "Remembered" : "Mark Remembered";
      button.classList.toggle("is-active", remembered);
    }
    if (status) {
      status.textContent = remembered ? "Saved as remembered on this device." : "Not marked yet.";
    }
  }
  document.querySelectorAll("[data-memory-toggle]").forEach(function (button) {
    button.addEventListener("click", function () {
      var answer = document.getElementById(button.getAttribute("data-memory-toggle"));
      if (!answer) return;
      var shouldOpen = answer.hasAttribute("hidden");
      if (shouldOpen) {
        answer.removeAttribute("hidden");
        button.textContent = "Hide Answer";
      } else {
        answer.setAttribute("hidden", "");
        button.textContent = "Reveal Answer";
      }
    });
  });
  document.querySelectorAll("[data-memory-mark]").forEach(function (button) {
    var id = button.getAttribute("data-memory-mark");
    renderMark(id);
    button.addEventListener("click", function () {
      memoryState[id] = !memoryState[id];
      saveMemory();
      renderMark(id);
    });
  });
  document.querySelectorAll("[data-jump]").forEach(function (button) {
    button.addEventListener("click", function () {
      var target = document.getElementById(button.getAttribute("data-jump"));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
  var modal = document.getElementById("prompt-modal");
  var promptText = document.getElementById("prompt-text");
  if (modal) {
    document.querySelectorAll("[data-open-prompt]").forEach(function (button) {
      button.addEventListener("click", function () {
        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
      });
    });
    document.querySelectorAll("[data-close-prompt]").forEach(function (button) {
      button.addEventListener("click", function () {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
      });
    });
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
      }
    });
  }
  var copyButton = document.getElementById("copy-prompt");
  if (copyButton && promptText) {
    copyButton.addEventListener("click", async function () {
      try {
        await navigator.clipboard.writeText(promptText.value);
      } catch (error) {
        promptText.focus();
        promptText.select();
      }
    });
  }
})();
