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

  trackPageVisit();
})();
