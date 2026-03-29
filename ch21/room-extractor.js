(function (global) {
  function safeText(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
  }

  function slugify(value) {
    return safeText(value)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'room';
  }

  function getSourcePageFromDocument(doc, fallbackPage) {
    var canonical = doc.querySelector('meta[name="memory-source-page"]');
    if (canonical && canonical.content) return canonical.content;
    return fallbackPage || 'unknown-page.html';
  }

  function getSourcePageTitle(doc) {
    var title = safeText(doc.title);
    if (title) return title;
    var heroHeading = doc.querySelector('.hero h1, h1');
    return safeText(heroHeading && heroHeading.textContent) || 'Untitled Study Page';
  }

  function extractSummary(roomEl) {
    var firstParagraph = roomEl.querySelector('p');
    if (firstParagraph) return safeText(firstParagraph.textContent);
    var firstListItem = roomEl.querySelector('li');
    if (firstListItem) return safeText(firstListItem.textContent);
    return '';
  }

  function extractTags(roomEl, titleText) {
    var explicit = roomEl.getAttribute('data-tags');
    if (explicit) {
      return explicit
        .split(',')
        .map(function (tag) { return safeText(tag); })
        .filter(Boolean);
    }

    var fromTitle = safeText(titleText)
      .replace(/^room\s+\d+\s*:\s*/i, '')
      .split(/[^a-z0-9]+/i)
      .map(function (tag) { return safeText(tag).toLowerCase(); })
      .filter(function (tag) { return tag.length > 3; });

    return Array.from(new Set(fromTitle)).slice(0, 4);
  }

  function normalizeRoom(roomEl, index, sourcePage, sourcePageTitle) {
    var heading = roomEl.querySelector('h2, h3');
    var title = roomEl.getAttribute('data-room-title') || safeText(heading && heading.textContent) || 'Room ' + (index + 1);
    var roomId = roomEl.getAttribute('data-room-id') || slugify(sourcePage.replace(/\.html$/i, '')) + '-room-' + (index + 1);
    var anchorId = roomEl.id || 'room-' + roomId;

    return {
      id: roomId,
      anchorId: anchorId,
      title: title,
      summary: extractSummary(roomEl),
      contentHtml: roomEl.innerHTML.trim(),
      sourcePage: sourcePage,
      sourcePageTitle: sourcePageTitle,
      sourceUrl: sourcePage + '#' + anchorId,
      tags: extractTags(roomEl, title),
      order: index,
    };
  }

  function extractRoomsFromDocument(doc, options) {
    var sourcePage = getSourcePageFromDocument(doc, options && options.sourcePage);
    var sourcePageTitle = getSourcePageTitle(doc);
    var roomEls = Array.from(doc.querySelectorAll('.room'));
    return roomEls.map(function (roomEl, index) {
      return normalizeRoom(roomEl, index, sourcePage, sourcePageTitle);
    });
  }

  function parseRoomDocument(html, sourcePage) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');
    return {
      doc: doc,
      rooms: extractRoomsFromDocument(doc, { sourcePage: sourcePage }),
      sourcePage: getSourcePageFromDocument(doc, sourcePage),
      sourcePageTitle: getSourcePageTitle(doc),
    };
  }

  function pageBasename(pageUrl) {
    return String(pageUrl || '').replace(/\\/g, '/').split('/').pop() || String(pageUrl || '');
  }

  function readStoredPayload(pageUrl) {
    try {
      var direct = sessionStorage.getItem('memory-builder-handoff:' + pageUrl);
      var basename = pageBasename(pageUrl);
      var fallback = basename !== pageUrl ? sessionStorage.getItem('memory-builder-handoff:' + basename) : null;
      var raw = direct || fallback;
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.rooms) || !parsed.rooms.length) return null;
      return {
        doc: null,
        rooms: parsed.rooms,
        sourcePage: parsed.sourcePage || basename,
        sourcePageTitle: parsed.sourcePageTitle || basename,
      };
    } catch (error) {
      return null;
    }
  }

  function loadViaXhr(pageUrl) {
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      request.open('GET', pageUrl, true);
      request.onreadystatechange = function () {
        if (request.readyState !== 4) return;
        if ((request.status >= 200 && request.status < 300) || (request.status === 0 && request.responseText)) {
          try {
            resolve(parseRoomDocument(request.responseText, pageUrl));
          } catch (error) {
            reject(error);
          }
          return;
        }
        reject(new Error('Failed to load ' + pageUrl + ' with XHR.'));
      };
      request.onerror = function () {
        reject(new Error('Failed to load ' + pageUrl + ' with XHR.'));
      };
      request.send();
    });
  }

  function loadViaIframe(pageUrl) {
    return new Promise(function (resolve, reject) {
      var iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = pageUrl;
      iframe.onload = function () {
        try {
          var doc = iframe.contentDocument;
          if (!doc) throw new Error('Could not read local document.');
          var payload = {
            doc: doc,
            rooms: extractRoomsFromDocument(doc, { sourcePage: pageUrl }),
            sourcePage: getSourcePageFromDocument(doc, pageUrl),
            sourcePageTitle: getSourcePageTitle(doc),
          };
          document.body.removeChild(iframe);
          resolve(payload);
        } catch (error) {
          document.body.removeChild(iframe);
          reject(error);
        }
      };
      iframe.onerror = function () {
        document.body.removeChild(iframe);
        reject(new Error('Failed to load ' + pageUrl + ' from the local filesystem.'));
      };
      document.body.appendChild(iframe);
    });
  }

  function fetchRoomsFromPage(pageUrl) {
    var stored = readStoredPayload(pageUrl);
    if (stored) return Promise.resolve(stored);

    if (typeof fetch !== 'function') {
      return loadViaXhr(pageUrl).catch(function () {
        return loadViaIframe(pageUrl);
      });
    }

    return fetch(pageUrl, { credentials: 'same-origin' })
      .then(function (response) {
        if (!response.ok) throw new Error('Failed to load ' + pageUrl + ' (' + response.status + ')');
        return response.text();
      })
      .then(function (html) {
        return parseRoomDocument(html, pageUrl);
      })
      .catch(function (error) {
        return loadViaXhr(pageUrl).catch(function () {
          if (window.location.protocol === 'file:') {
            return loadViaIframe(pageUrl);
          }
          throw error;
        });
      })
      .catch(function (error) {
        // This fallback keeps imports working when the chapter is opened directly with file://
        // and fetch is blocked by the browser's local-file security rules.
        if (window.location.protocol === 'file:') {
          return loadViaIframe(pageUrl);
        }
        throw error;
      });
  }

  global.RoomExtractor = {
    extractRoomsFromDocument: extractRoomsFromDocument,
    parseRoomDocument: parseRoomDocument,
    fetchRoomsFromPage: fetchRoomsFromPage,
  };
})(window);
