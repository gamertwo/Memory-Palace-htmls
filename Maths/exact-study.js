(function () {
  function safeSlug(value) {
    return String(value || 'page')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'page';
  }

  function getPageFilename() {
    var path = window.location.pathname || '';
    return path.split('/').pop() || 'index.html';
  }

  function safeText(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
  }

  function extractSummary(room) {
    var firstParagraph = room.querySelector('p');
    if (firstParagraph) return safeText(firstParagraph.textContent);
    var firstListItem = room.querySelector('li');
    if (firstListItem) return safeText(firstListItem.textContent);
    return '';
  }

  function extractTags(room, title) {
    var explicit = room.getAttribute('data-tags');
    if (explicit) {
      return explicit.split(',').map(function (tag) { return safeText(tag).toLowerCase(); }).filter(Boolean);
    }
    return safeText(title)
      .replace(/^room\s+\d+\s*:\s*/i, '')
      .split(/[^a-z0-9]+/i)
      .map(function (tag) { return safeText(tag).toLowerCase(); })
      .filter(function (tag) { return tag.length > 3; })
      .slice(0, 4);
  }

  function buildRoomPayload() {
    var pageFilename = getPageFilename();
    var title = safeText(document.title) || safeText(document.querySelector('.hero h1, h1') && document.querySelector('.hero h1, h1').textContent) || pageFilename;
    var rooms = Array.from(document.querySelectorAll('.room')).map(function (room, index) {
      var heading = room.querySelector('h2, h3');
      var roomTitle = room.getAttribute('data-room-title') || safeText(heading && heading.textContent) || ('Room ' + (index + 1));
      var roomId = room.getAttribute('data-room-id') || (safeSlug(pageFilename.replace(/\.html$/i, '')) + '-room-' + (index + 1));
      var anchorId = room.id || ('room-' + roomId);
      return {
        id: roomId,
        anchorId: anchorId,
        title: roomTitle,
        summary: extractSummary(room),
        contentHtml: room.innerHTML.trim(),
        sourcePage: pageFilename,
        sourcePageTitle: title,
        sourceUrl: pageFilename + '#' + anchorId,
        tags: extractTags(room, roomTitle),
        order: index,
      };
    });

    return {
      sourcePage: pageFilename,
      sourcePageTitle: title,
      rooms: rooms,
    };
  }

  function storeBuilderHandoff() {
    try {
      var payload = buildRoomPayload();
      sessionStorage.setItem('memory-builder-handoff:' + payload.sourcePage, JSON.stringify(payload));
    } catch (error) {}
  }

  function addBuilderLinks() {
    var pageFilename = getPageFilename();
    var heroToolRows = document.querySelectorAll('.hero .tool-row');
    heroToolRows.forEach(function (row) {
      if (row.querySelector('[data-builder-link]')) return;
      var link = document.createElement('a');
      link.className = 'tool-btn';
      link.href = 'math-exact-memory-builder.html?pages=' + encodeURIComponent(pageFilename);
      link.textContent = 'Open in Memory Builder';
      link.setAttribute('data-builder-link', 'true');
      row.appendChild(link);
    });

    document.querySelectorAll('.room').forEach(function (room) {
      var heading = room.querySelector('h2');
      if (!heading || room.querySelector('.room-source-link')) return;
      var roomId = room.getAttribute('id');
      if (!roomId) return;
      var link = document.createElement('a');
      link.className = 'room-source-link';
      link.href = 'math-exact-memory-builder.html?pages=' + encodeURIComponent(pageFilename) + '&focus=' + encodeURIComponent(roomId);
      link.textContent = 'Send to Builder';
      heading.insertAdjacentElement('afterend', link);
    });
  }

  function normalizeRoomMetadata() {
    var pageFilename = getPageFilename();
    document.querySelectorAll('.room').forEach(function (room, index) {
      var heading = room.querySelector('h2');
      var title = room.getAttribute('data-room-title') || (heading ? heading.textContent.trim() : 'Room ' + (index + 1));
      var roomId = room.getAttribute('data-room-id') || (safeSlug(pageFilename.replace(/\.html$/i, '')) + '-room-' + (index + 1));
      room.setAttribute('data-room-id', roomId);
      room.setAttribute('data-room-title', title);
      room.setAttribute('data-source-page', room.getAttribute('data-source-page') || pageFilename);
      if (!room.id) {
        room.id = 'room-' + roomId;
      }
    });
  }

  document.querySelectorAll('[data-jump]').forEach(function (button) {
    button.addEventListener('click', function () {
      var target = document.getElementById(button.getAttribute('data-jump'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.querySelectorAll('[data-txt-save]').forEach(function (form) {
    var pageKey = safeSlug(document.body.getAttribute('data-page-key') || getPageFilename());
    var filenameInput = form.querySelector('[data-note-filename]');
    var bodyInput = form.querySelector('[data-note-body]');
    var status = form.querySelector('[data-note-status]');
    if (!bodyInput) return;

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    function ensureFilename(value) {
      var clean = String(value || '').trim() || (pageKey + '_request');
      clean = clean.replace(/[<>:"/\\|?*]+/g, '_');
      return clean.toLowerCase().endsWith('.txt') ? clean : clean + '.txt';
    }

    async function saveTextFile(filename, text) {
      if (window.showSaveFilePicker) {
        var handle = await window.showSaveFilePicker({
          suggestedName: filename,
          types: [{ description: 'Text Files', accept: { 'text/plain': ['.txt'] } }]
        });
        var writable = await handle.createWritable();
        await writable.write(text);
        await writable.close();
        return;
      }

      var blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      var link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(function () {
        URL.revokeObjectURL(link.href);
      }, 1000);
    }

    async function handleSave() {
      var text = String(bodyInput.value || '').trim();
      if (!text) {
        setStatus('Type some text first.');
        bodyInput.focus();
        return;
      }
      var filename = ensureFilename(filenameInput && filenameInput.value);
      try {
        await saveTextFile(filename, text);
        setStatus('Saved ' + filename + '.');
      } catch (error) {
        setStatus('Save cancelled or blocked.');
      }
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      handleSave();
    });

    bodyInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        handleSave();
      }
    });
  });

  normalizeRoomMetadata();
  addBuilderLinks();
  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[href*="math-exact-memory-builder.html"]');
    if (!link) return;
    storeBuilderHandoff();
  });
})();
