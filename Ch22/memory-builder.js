(function () {
  'use strict';

  var STORAGE_KEY = 'memory-palace-builder-ch22-v1';
  var UI_STORAGE_KEY = 'memory-palace-builder-ch22-ui-v1';
  var STORAGE_VERSION = 2;
  var BLOCK_BASE_HEIGHT = 165;
  var BLOCK_ROOM_LINE_HEIGHT = 20;

  /* ── Utils ─────────────────────────────────────────────────────── */
  function byId(id) { return document.getElementById(id); }
  function queryAll(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }
  function makeId(prefix) { return (prefix || 'id') + '-' + Math.random().toString(36).slice(2, 10); }
  function clamp(v, lo, hi) { return Math.min(hi, Math.max(lo, v)); }
  function parseTags(raw) { return String(raw || '').split(',').map(function (t) { return t.trim(); }).filter(Boolean); }
  function escHtml(v) {
    return String(v || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function escSel(v) {
    if (window.CSS && CSS.escape) return CSS.escape(v);
    return String(v || '').replace(/["\\]/g, '\\$&');
  }
  function cloneJson(v) { return JSON.parse(JSON.stringify(v)); }
  function isFullPalacePayload(raw) {
    return !!(raw && (Array.isArray(raw.importedRooms) || Array.isArray(raw.blocks) || Array.isArray(raw.edges) || Array.isArray(raw.sketches)));
  }
  function uniquifyPalaceId(baseId) {
    var id = baseId || makeId('palace');
    while (state && state.data && state.data.palaces.some(function (p) { return p.id === id; })) {
      id = makeId('palace');
    }
    return id;
  }

  /* ── Data normalization ─────────────────────────────────────────── */
  function safeRoom(r, i) {
    var sp = r && r.sourcePage ? r.sourcePage : 'unknown.html';
    var id = r && r.id ? r.id : makeId('room');
    var anc = r && r.anchorId ? r.anchorId : 'room-' + id;
    return {
      id: id, anchorId: anc,
      title: r && r.title ? r.title : 'Room ' + (i + 1),
      summary: r && r.summary ? r.summary : '',
      contentHtml: r && r.contentHtml ? r.contentHtml : '',
      sourcePage: sp,
      sourcePageTitle: r && r.sourcePageTitle ? r.sourcePageTitle : sp,
      sourceUrl: r && r.sourceUrl ? r.sourceUrl : sp + '#' + anc,
      tags: Array.isArray(r && r.tags) ? r.tags.filter(Boolean) : [],
      order: typeof (r && r.order) === 'number' ? r.order : i,
    };
  }

  function safeImage(img, i) {
    var width = typeof (img && img.width) === 'number' ? img.width : 320;
    var height = typeof (img && img.height) === 'number' ? img.height : 220;
    return {
      id: img && img.id ? img.id : makeId('img'),
      x: typeof (img && img.x) === 'number' ? img.x : 140 + i * 24,
      y: typeof (img && img.y) === 'number' ? img.y : 140 + i * 24,
      width: clamp(width, 80, 1400),
      height: clamp(height, 80, 1400),
      src: img && img.src ? img.src : '',
      name: img && img.name ? img.name : 'Pasted image',
    };
  }

  function safeBlock(b, roomsById, i) {
    var ids = Array.isArray(b && b.sourceRoomIds)
      ? b.sourceRoomIds.filter(function (id) { return Boolean(roomsById[id]); }) : [];
    return {
      id: b && b.id ? b.id : makeId('block'),
      x: typeof (b && b.x) === 'number' ? b.x : 180 + i * 120,
      y: typeof (b && b.y) === 'number' ? b.y : 180 + i * 65,
      width: typeof (b && b.width) === 'number' ? b.width : 270,
      height: typeof (b && b.height) === 'number' ? b.height : BLOCK_BASE_HEIGHT,
      title: b && b.title ? b.title : (ids[0] && roomsById[ids[0]] ? roomsById[ids[0]].title : 'Memory Block'),
      sourceRoomIds: ids,
      mnemonicPeg: b && b.mnemonicPeg ? b.mnemonicPeg : '',
      memoryCues: b && b.memoryCues ? b.memoryCues : '',
      relationType: b && b.relationType ? b.relationType : 'sequence',
      tags: Array.isArray(b && b.tags) ? b.tags.filter(Boolean) : [],
      icon: b && b.icon ? b.icon : 'token',
      accentVariant: b && b.accentVariant ? b.accentVariant : 'cyan',
      revisionNote: b && b.revisionNote ? b.revisionNote : '',
      status: b && b.status ? b.status : 'draft',
      sceneType: b && b.sceneType ? b.sceneType : 'room',
      objectShape: b && b.objectShape ? b.objectShape : 'cube',
      objectShapeCustom: b && b.objectShapeCustom ? b.objectShapeCustom : '',
      emotionCue: b && b.emotionCue ? b.emotionCue : '',
      motionCue: b && b.motionCue ? b.motionCue : '',
      sequenceIndex: typeof (b && b.sequenceIndex) === 'number' ? b.sequenceIndex : null,
    };
  }

  function safePalace(p, i) {
    var rooms = Array.isArray(p && p.importedRooms)
      ? p.importedRooms.map(function (r, ri) { return safeRoom(r, ri); }) : [];
    var byId = rooms.reduce(function (acc, r) { acc[r.id] = r; return acc; }, {});
    var blocks = Array.isArray(p && p.blocks)
      ? p.blocks.map(function (b, bi) { return safeBlock(b, byId, bi); })
          .filter(function (b) { return b.sourceRoomIds.length > 0 || b.title; }) : [];
    var validIds = blocks.reduce(function (acc, b) { acc[b.id] = true; return acc; }, {});
    var edges = Array.isArray(p && p.edges)
      ? p.edges.filter(function (e) { return e && validIds[e.fromBlockId] && validIds[e.toBlockId]; })
          .map(function (e) { return { id: e.id || makeId('edge'), fromBlockId: e.fromBlockId, toBlockId: e.toBlockId, label: e.label || 'sequence' }; })
      : [];
    var sketches = Array.isArray(p && p.sketches)
      ? p.sketches.filter(function (s) { return s && Array.isArray(s.points) && s.points.length; })
          .map(function (s) {
            return {
              points: s.points.map(function (pt) { return { x: typeof pt.x === 'number' ? pt.x : 0, y: typeof pt.y === 'number' ? pt.y : 0 }; }),
              color: typeof s.color === 'string' ? s.color : '#f5c245',
              width: typeof s.width === 'number' ? s.width : 3,
            };
          })
      : [];
    var images = Array.isArray(p && p.images)
      ? p.images.filter(function (img) { return img && img.src; }).map(function (img, ii) { return safeImage(img, ii); })
      : [];
    return {
      id: p && p.id ? p.id : 'palace-' + i,
      name: p && p.name ? p.name : 'Memory Palace ' + (i + 1),
      importedPages: Array.isArray(p && p.importedPages) ? p.importedPages.filter(Boolean) : [],
      importedRooms: rooms, blocks: blocks, edges: edges, sketches: sketches, images: images,
      viewport: { zoom: typeof (p && p.viewport && p.viewport.zoom) === 'number' ? clamp(p.viewport.zoom, 0.4, 2) : 1 },
    };
  }

  function normalizeState(raw) {
    var src = raw || {};
    var palaces = Array.isArray(src.palaces)
      ? src.palaces.map(function (p, i) { return safePalace(p, i); }) : [];
    if (!palaces.length && window.MemoryBuilderSeed && typeof window.MemoryBuilderSeed.buildDefaultState === 'function') {
      return normalizeState(window.MemoryBuilderSeed.buildDefaultState());
    }
    if (!palaces.length) palaces = [safePalace({}, 0)];
    return {
      version: STORAGE_VERSION,
      selectedPalaceId: src.selectedPalaceId && palaces.some(function (p) { return p.id === src.selectedPalaceId; })
        ? src.selectedPalaceId : palaces[0].id,
      palaces: palaces,
    };
  }

  function loadState() {
    try {
      var parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      if (parsed && parsed.version === STORAGE_VERSION) return normalizeState(parsed);
    } catch (e) {}
    return normalizeState(null);
  }
  function saveState(data) { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) {} }
  function loadUiState() {
    try {
      var parsed = JSON.parse(localStorage.getItem(UI_STORAGE_KEY) || 'null');
      if (parsed && typeof parsed === 'object') {
        return {
          leftSidebarOpen: parsed.leftSidebarOpen !== false,
          rightSidebarOpen: parsed.rightSidebarOpen !== false,
        };
      }
    } catch (e) {}
    return { leftSidebarOpen: true, rightSidebarOpen: true };
  }
  function saveUiState(ui) {
    try { localStorage.setItem(UI_STORAGE_KEY, JSON.stringify(ui)); } catch (e) {}
  }

  /* ── DOM elements ───────────────────────────────────────────────── */
  var els = {
    palaceSelect: byId('palace-select'), palaceName: byId('palace-name'),
    roomSearch: byId('room-search'),
    importInput: byId('import-pages-input'),
    importPalaceFileInput: byId('import-palace-file-input'),
    roomScrollArea: byId('room-scroll-area'),
    importedCount: byId('imported-room-count'),
    importedPages: byId('imported-pages'), importedPageCount: byId('imported-page-count'),
    canvasViewport: byId('canvas-viewport'), canvasStage: byId('canvas-stage'),
    imageLayer: byId('canvas-image-layer'),
    blockLayer: byId('canvas-block-layer'),
    edgeLayer: byId('edge-layer'), sketchLayer: byId('sketch-layer'),
    blockEditor: byId('block-editor'), emptyEditor: byId('empty-editor'),
    editorTitle: byId('editor-title'), editorPeg: byId('editor-peg'),
    editorCues: byId('editor-cues'), editorTags: byId('editor-tags'),
    editorStatus: byId('editor-status'), editorAccent: byId('editor-accent'),
    editorRelation: byId('editor-relation'),
    editorSceneType: byId('editor-scene-type'),
    editorObjectShape: byId('editor-object-shape'),
    editorObjectShapeCustom: byId('editor-object-shape-custom'),
    editorIcon: byId('editor-icon'), editorSequenceIndex: byId('editor-sequence-index'),
    editorEmotionCue: byId('editor-emotion-cue'), editorMotionCue: byId('editor-motion-cue'),
    editorRevisionNote: byId('editor-revision-note'),
    editorSources: byId('editor-sources'),
    editorConnectHint: byId('editor-connect-hint'),
    edgeListArea: byId('edge-list-area'),
    builderStatus: byId('builder-status'),
    zoomVal: byId('zoom-val'),
    zoomSlider: byId('zoom-slider'),
    reviewPanel: byId('block-review-panel'),
    reviewPanelTitle: byId('review-panel-title'),
    reviewRoomList: byId('review-room-list'),
    reviewRoomSource: byId('review-room-source'),
    reviewRoomTitle: byId('review-room-title'),
    reviewRoomLink: byId('review-room-link'),
    reviewRoomSummary: byId('review-room-summary'),
    reviewRoomContent: byId('review-room-content'),
    reviewPrev: byId('review-prev-room'), reviewNext: byId('review-next-room'),
    closeReview: byId('close-review-panel'),
    confirmModal: byId('confirm-modal'),
    confirmTitle: byId('confirm-title'), confirmBody: byId('confirm-body'),
    confirmCancel: byId('confirm-cancel'), confirmAccept: byId('confirm-accept'),
    modeButtons: queryAll('[data-mode-button]'),
    tabButtons: queryAll('.ed-tab'),
    selectionModeButtons: queryAll('[data-selection-mode]'),
    tabPanels: { overview: byId('tab-overview'), details: byId('tab-details'), rooms: byId('tab-rooms'), connect: byId('tab-connect') },
    penToolbar: byId('pen-toolbar'),
    penHint: document.querySelector('#pen-toolbar .pt-hint'),
    toggleLeftSidebar: byId('toggle-left-sidebar'),
    toggleRightSidebar: byId('toggle-right-sidebar'),
  };

  /* ── App state ──────────────────────────────────────────────────── */
  var state = {
    data: loadState(),
    selectedBlockId: null,
    selectedEdgeId: null,
    selectedImageId: null,
    pendingConnectFrom: null,
    mode: 'selection',
    selectionMode: 'all',
    search: '',
    activeTab: 'overview',
    drag: null,
    draw: null,
    review: { blockId: null, roomIndex: 0 },
    confirmFn: null,
    /* ── Pen state ── */
    penTool: 'pen',       // 'pen' | 'eraser'
    penColor: '#f5c245',  // active stroke color
    penWidth: 3,          // active stroke width
    ui: loadUiState(),
  };

  /* ── Sketch undo / redo stacks ──────────────────────────────────── */
  var sketchUndoStack = [];  // array of sketch-array snapshots
  var sketchRedoStack = [];

  function snapshotSketches() {
    return JSON.parse(JSON.stringify(getPalace().sketches));
  }

  function pushSketchUndo() {
    sketchUndoStack.push(snapshotSketches());
    if (sketchUndoStack.length > 80) sketchUndoStack.shift();
    sketchRedoStack = [];   // new action invalidates redo history
  }

  function undoSketch() {
    if (!sketchUndoStack.length) return;
    sketchRedoStack.push(snapshotSketches());
    getPalace().sketches = sketchUndoStack.pop();
    renderSketches();
    saveState(state.data);
    setStatus('Undo sketch.');
  }

  function redoSketch() {
    if (!sketchRedoStack.length) return;
    sketchUndoStack.push(snapshotSketches());
    getPalace().sketches = sketchRedoStack.pop();
    renderSketches();
    saveState(state.data);
    setStatus('Redo sketch.');
  }

  /* ── Accessors ──────────────────────────────────────────────────── */
  function getPalace() { return state.data.palaces.find(function (p) { return p.id === state.data.selectedPalaceId; }) || state.data.palaces[0]; }
  function findRoom(id) { return getPalace().importedRooms.find(function (r) { return r.id === id; }) || null; }
  function findBlock(id) { return getPalace().blocks.find(function (b) { return b.id === id; }) || null; }
  function findImage(id) { return getPalace().images.find(function (img) { return img.id === id; }) || null; }
  function selBlock() { return findBlock(state.selectedBlockId); }
  function selEdge() { return getPalace().edges.find(function (e) { return e.id === state.selectedEdgeId; }) || null; }
  function selImage() { return findImage(state.selectedImageId); }
  function getRooms(block) { return block ? block.sourceRoomIds.map(findRoom).filter(Boolean) : []; }
  function roomUsage(id) { return getPalace().blocks.reduce(function (n, b) { return n + (b.sourceRoomIds.indexOf(id) >= 0 ? 1 : 0); }, 0); }
  function setStatus(msg) { els.builderStatus.textContent = msg; }

  function getBlockW(b) { return Math.max(b.width || 270, 255); }
  function getBlockH(b) { return Math.max(b.height || BLOCK_BASE_HEIGHT, BLOCK_BASE_HEIGHT + Math.max(0, b.sourceRoomIds.length - 2) * BLOCK_ROOM_LINE_HEIGHT); }
  function blockCenter(b) { return { x: b.x + getBlockW(b) / 2, y: b.y + getBlockH(b) / 2 }; }

  function canvasPt(cx, cy) {
    var z = getPalace().viewport.zoom || 1;
    var r = els.canvasViewport.getBoundingClientRect();
    return { x: ((cx - r.left) + els.canvasViewport.scrollLeft) / z, y: ((cy - r.top) + els.canvasViewport.scrollTop) / z };
  }
  function dropPos(cx, cy) {
    var p = canvasPt(cx, cy);
    return { x: clamp(p.x - 135, 24, 2900), y: clamp(p.y - 90, 24, 1900) };
  }
  function viewportCenterPos() {
    var z = getPalace().viewport.zoom || 1;
    var x = (els.canvasViewport.scrollLeft + (els.canvasViewport.clientWidth / 2)) / z;
    var y = (els.canvasViewport.scrollTop + (els.canvasViewport.clientHeight / 2)) / z;
    return { x: clamp(x, 80, 3000), y: clamp(y, 80, 2100) };
  }
  function selectionAllows(kind) {
    return state.selectionMode === 'all' || state.selectionMode === kind;
  }

  function roomMatches(r) {
    if (!state.search) return true;
    return [r.title, r.summary, r.tags.join(' '), r.sourcePageTitle].join(' ').toLowerCase().indexOf(state.search.toLowerCase()) >= 0;
  }

  function cleanHtml(html) {
    if (!html) return '';
    return html
      .replace(/<button[\s\S]*?<\/button>/gi, '')
      .replace(/\s*class="[^"]*"/gi, '')
      .replace(/\s*style="[^"]*"/gi, '')
      .replace(/\s*id="[^"]*"/gi, '')
      .replace(/\s*data-[^=]+=(?:"[^"]*"|'[^']*')/gi, '')
      .trim();
  }

  function typesetMath(el) {
    if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
      window.MathJax.typesetPromise([el]).catch(function (e) { console.warn('MathJax:', e); });
    }
  }

  /* ── Smooth path from point array ──────────────────────────────── */
  function sketchPath(points) {
    if (!points || points.length < 2) return '';
    if (points.length === 2) {
      return 'M ' + points[0].x + ' ' + points[0].y + ' L ' + points[1].x + ' ' + points[1].y;
    }
    // Quadratic bezier through midpoints for smooth curves
    var d = 'M ' + points[0].x + ' ' + points[0].y;
    for (var i = 0; i < points.length - 1; i++) {
      var mx = (points[i].x + points[i + 1].x) / 2;
      var my = (points[i].y + points[i + 1].y) / 2;
      d += ' Q ' + points[i].x + ' ' + points[i].y + ' ' + mx + ' ' + my;
    }
    var last = points[points.length - 1];
    d += ' L ' + last.x + ' ' + last.y;
    return d;
  }

  /* ── Eraser: remove strokes that pass near this point ───────────── */
  function eraseAt(pt) {
    var threshold = (state.penWidth || 3) * 5 + 12;
    var p = getPalace();
    var before = p.sketches.length;
    p.sketches = p.sketches.filter(function (s) {
      return !s.points.some(function (sp) {
        var dx = sp.x - pt.x, dy = sp.y - pt.y;
        return Math.sqrt(dx * dx + dy * dy) < threshold;
      });
    });
    return p.sketches.length !== before;
  }

  function fileToImageData(file) {
    return new Promise(function (resolve, reject) {
      if (!file) { reject(new Error('No image file.')); return; }
      var reader = new FileReader();
      reader.onerror = function () { reject(reader.error || new Error('Failed to read image.')); };
      reader.onload = function () {
        var src = String(reader.result || '');
        var img = new Image();
        img.onload = function () {
          var maxSide = 1400;
          var scale = Math.min(1, maxSide / Math.max(img.naturalWidth || 1, img.naturalHeight || 1));
          var outW = Math.max(1, Math.round((img.naturalWidth || 1) * scale));
          var outH = Math.max(1, Math.round((img.naturalHeight || 1) * scale));
          var canvas = document.createElement('canvas');
          canvas.width = outW;
          canvas.height = outH;
          var ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, outW, outH);
          var optimizedSrc = canvas.toDataURL('image/webp', 0.9);
          resolve({
            src: optimizedSrc || src,
            width: outW,
            height: outH,
            name: file.name || 'Pasted image',
          });
        };
        img.onerror = function () { reject(new Error('Invalid image data.')); };
        img.src = src;
      };
      reader.readAsDataURL(file);
    });
  }

  function addCanvasImage(imageData) {
    var p = getPalace();
    var center = viewportCenterPos();
    var width = clamp(imageData.width || 320, 80, 1400);
    var height = clamp(imageData.height || 220, 80, 1400);
    var img = safeImage({
      id: makeId('img'),
      x: clamp(center.x - width / 2, 24, 3100 - width),
      y: clamp(center.y - height / 2, 24, 2100 - height),
      width: width,
      height: height,
      src: imageData.src,
      name: imageData.name || 'Pasted image',
    }, p.images.length);
    p.images.push(img);
    state.selectedBlockId = null;
    state.selectedEdgeId = null;
    state.selectedImageId = img.id;
    render(true);
    setStatus('Pasted image onto the canvas.');
  }

  function removeImage(imageId) {
    var p = getPalace();
    p.images = p.images.filter(function (img) { return img.id !== imageId; });
    if (state.selectedImageId === imageId) state.selectedImageId = null;
  }

  /* ── Mutations ──────────────────────────────────────────────────── */
  function removeRoomFromBlock(blockId, roomId) {
    var palace = getPalace();
    var block = findBlock(blockId);
    if (!block) return;
    var removed = findRoom(roomId);
    block.sourceRoomIds = block.sourceRoomIds.filter(function (id) { return id !== roomId; });
    if (!block.sourceRoomIds.length) {
      palace.blocks = palace.blocks.filter(function (b) { return b.id !== blockId; });
      palace.edges = palace.edges.filter(function (e) { return e.fromBlockId !== blockId && e.toBlockId !== blockId; });
      if (state.selectedBlockId === blockId) state.selectedBlockId = null;
      if (state.review.blockId === blockId) { state.review.blockId = null; state.review.roomIndex = 0; }
      return;
    }
    var fr = findRoom(block.sourceRoomIds[0]);
    if (fr && removed && block.title === removed.title) block.title = fr.title;
    if (state.review.blockId === blockId) state.review.roomIndex = clamp(state.review.roomIndex, 0, block.sourceRoomIds.length - 1);
  }

  function moveRoom(blockId, roomId, delta) {
    var block = findBlock(blockId);
    if (!block) return;
    var i = block.sourceRoomIds.indexOf(roomId);
    if (i < 0) return;
    var t = clamp(i + delta, 0, block.sourceRoomIds.length - 1);
    if (t === i) return;
    var ids = block.sourceRoomIds.slice();
    ids.splice(i, 1); ids.splice(t, 0, roomId);
    block.sourceRoomIds = ids;
  }

  function removeRoomEverywhere(roomId) {
    var palace = getPalace();
    palace.importedRooms = palace.importedRooms.filter(function (r) { return r.id !== roomId; });
    palace.blocks.slice().forEach(function (b) {
      if (b.sourceRoomIds.indexOf(roomId) >= 0) removeRoomFromBlock(b.id, roomId);
    });
    palace.importedPages = Array.from(new Set(palace.importedRooms.map(function (r) { return r.sourcePage; })));
    if (state.review.blockId && !findBlock(state.review.blockId)) { state.review.blockId = null; state.review.roomIndex = 0; }
  }

  function removePage(page) {
    var palace = getPalace();
    var used = palace.blocks.reduce(function (acc, b) { b.sourceRoomIds.forEach(function (id) { acc[id] = true; }); return acc; }, {});
    palace.importedRooms = palace.importedRooms.filter(function (r) { return r.sourcePage !== page || Boolean(used[r.id]); });
    palace.importedPages = palace.importedPages.filter(function (p) { return p !== page; });
  }

  function mergeRooms(block, ids) {
    block.sourceRoomIds = Array.from(new Set(block.sourceRoomIds.concat(ids)));
    if (!block.title || /^Memory Block/i.test(block.title)) {
      var r = findRoom(block.sourceRoomIds[0]);
      if (r) block.title = r.title;
    }
    if (!block.tags.length)
      block.tags = Array.from(new Set(block.sourceRoomIds.flatMap(function (id) { var r = findRoom(id); return r ? r.tags : []; }))).slice(0, 6);
    if (!block.memoryCues) { var r = findRoom(block.sourceRoomIds[0]); if (r) block.memoryCues = r.summary; }
  }

  function createBlock(roomIds, pos) {
    var r = findRoom(roomIds[0]);
    return {
      id: makeId('block'), x: pos.x, y: pos.y, width: 270, height: BLOCK_BASE_HEIGHT,
      title: r ? r.title : 'Memory Block',
      sourceRoomIds: roomIds.slice(),
      mnemonicPeg: '', memoryCues: r ? r.summary : '',
      relationType: 'sequence',
      tags: r ? r.tags.slice(0, 4) : [],
      icon: 'token', accentVariant: 'cyan', revisionNote: '',
      status: 'draft', sceneType: 'room', objectShape: 'cube',
      objectShapeCustom: '', emotionCue: '', motionCue: '', sequenceIndex: null,
    };
  }

  function resetPalace() {
    var p = getPalace();
    p.importedPages = []; p.importedRooms = [];
    p.blocks = []; p.edges = []; p.sketches = []; p.images = [];
    p.viewport.zoom = 1;
    state.selectedBlockId = null; state.selectedEdgeId = null; state.selectedImageId = null;
    state.pendingConnectFrom = null;
    state.review.blockId = null; state.review.roomIndex = 0;
    sketchUndoStack = []; sketchRedoStack = [];
  }

  function ensureValid() {
    var p = getPalace();
    if (state.selectedBlockId && !findBlock(state.selectedBlockId)) state.selectedBlockId = null;
    if (state.review.blockId) {
      var rb = findBlock(state.review.blockId);
      if (!rb || !getRooms(rb).length) { state.review.blockId = null; state.review.roomIndex = 0; }
      else state.review.roomIndex = clamp(state.review.roomIndex, 0, getRooms(rb).length - 1);
    }
    if (state.selectedImageId && !findImage(state.selectedImageId)) state.selectedImageId = null;
  }

  /* ── Modal ──────────────────────────────────────────────────────── */
  function showConfirm(title, body, fn) {
    state.confirmFn = fn;
    els.confirmTitle.textContent = title;
    els.confirmBody.textContent = body;
    els.confirmModal.classList.remove('hidden');
  }
  function closeConfirm() { state.confirmFn = null; els.confirmModal.classList.add('hidden'); }

  function syncSidebarChrome() {
    document.body.classList.toggle('left-sidebar-hidden', !state.ui.leftSidebarOpen);
    document.body.classList.toggle('right-sidebar-hidden', !state.ui.rightSidebarOpen);
    if (els.toggleLeftSidebar) {
      els.toggleLeftSidebar.classList.toggle('is-active', state.ui.leftSidebarOpen);
      els.toggleLeftSidebar.setAttribute('aria-pressed', state.ui.leftSidebarOpen ? 'true' : 'false');
      els.toggleLeftSidebar.title = state.ui.leftSidebarOpen ? 'Hide room library' : 'Show room library';
      els.toggleLeftSidebar.querySelector('.icon').textContent = state.ui.leftSidebarOpen ? 'left_panel_open' : 'left_panel_close';
    }
    if (els.toggleRightSidebar) {
      els.toggleRightSidebar.classList.toggle('is-active', state.ui.rightSidebarOpen);
      els.toggleRightSidebar.setAttribute('aria-pressed', state.ui.rightSidebarOpen ? 'true' : 'false');
      els.toggleRightSidebar.title = state.ui.rightSidebarOpen ? 'Hide editor' : 'Show editor';
      els.toggleRightSidebar.querySelector('.icon').textContent = state.ui.rightSidebarOpen ? 'right_panel_open' : 'right_panel_close';
    }
  }

  /* ── Tab system ─────────────────────────────────────────────────── */
  function setTab(tab) {
    state.activeTab = tab;
    els.tabButtons.forEach(function (btn) { btn.classList.toggle('active', btn.getAttribute('data-tab') === tab); });
    Object.keys(els.tabPanels).forEach(function (key) {
      els.tabPanels[key].classList.toggle('hidden', key !== tab);
    });
  }

  /* ── Pen toolbar UI sync ────────────────────────────────────────── */
  function syncPenToolbar() {
    // Tool buttons
    queryAll('.pt-tool', els.penToolbar).forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-tool') === state.penTool);
    });
    // Color swatches
    queryAll('.pt-color', els.penToolbar).forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-color') === state.penColor);
    });
    // Width buttons
    queryAll('.pt-width', els.penToolbar).forEach(function (btn) {
      btn.classList.toggle('active', parseFloat(btn.getAttribute('data-width')) === state.penWidth);
    });
    // Body cursor class
    document.body.classList.toggle('draw-active', state.mode === 'draw');
    document.body.classList.toggle('pen-active', state.mode === 'draw' && state.penTool === 'pen');
    document.body.classList.toggle('eraser-active', state.mode === 'draw' && state.penTool === 'eraser');
    if (els.penHint) {
      els.penHint.textContent = 'Ctrl+scroll zoom | Ctrl+V image | Ctrl+Z undo | X redo';
    }
  }

  /* ── Renderers ──────────────────────────────────────────────────── */
  function renderPalacePicker() {
    var p = getPalace();
    els.palaceSelect.innerHTML = state.data.palaces.map(function (pal) {
      return '<option value="' + escHtml(pal.id) + '"' + (pal.id === p.id ? ' selected' : '') + '>' + escHtml(pal.name) + '</option>';
    }).join('');
    els.palaceName.textContent = p.name;
  }

  function renderImportedPages() {
    var p = getPalace();
    els.importedPageCount.textContent = String(p.importedPages.length);
    if (!p.importedPages.length) {
      els.importedPages.innerHTML = '<span style="font-size:11px;color:var(--t4)">None imported.</span>';
      return;
    }
    els.importedPages.innerHTML = p.importedPages.map(function (page) {
      return '<span class="page-chip"><span>' + escHtml(page) + '</span>' +
        '<button type="button" data-rm-page="' + escHtml(page) + '"><span class="icon" style="font-size:13px;">close</span></button></span>';
    }).join('');
  }

  function renderRooms() {
    var p = getPalace();
    var rooms = p.importedRooms.filter(roomMatches);
    els.importedCount.textContent = String(p.importedRooms.length);
    if (!rooms.length) {
      els.roomScrollArea.innerHTML = '<div class="rooms-empty">' +
        (p.importedRooms.length ? 'No rooms match the search.' : 'Import a study page to see rooms here. Drag onto canvas to place.') +
        '</div>';
      return;
    }
    els.roomScrollArea.innerHTML = rooms.map(function (r) {
      var tags = r.tags.slice(0, 4).map(function (t) { return '<span class="rc-tag">' + escHtml(t) + '</span>'; }).join('');
      return [
        '<article class="room-card" draggable="true" data-room-card="' + escHtml(r.id) + '">',
        '<div class="rc-meta">',
        '<span class="rc-page">' + escHtml(r.sourcePage) + '</span>',
        '<button type="button" class="rc-del" data-rm-room="' + escHtml(r.id) + '" title="Remove">',
        '<span class="icon icon-sm">delete</span></button></div>',
        '<h4 class="rc-title">' + escHtml(r.title) + '</h4>',
        '<p class="rc-summary">' + escHtml(r.summary || r.sourcePageTitle) + '</p>',
        '<div class="rc-foot"><div class="rc-tags">' + tags + '</div>',
        '<a class="rc-src-link" href="' + escHtml(r.sourceUrl) + '">-></a>',
        '</div></article>',
      ].join('');
    }).join('');
  }

  function accentToTagClass(accent) {
    var map = { cyan: 'blue', gold: 'amber', violet: 'violet', ember: 'red' };
    return map[accent] || 'blue';
  }

  function renderBlocks() {
    var p = getPalace();
    els.blockLayer.innerHTML = p.blocks.map(function (b) {
      var sel = b.id === state.selectedBlockId;
      var rooms = b.sourceRoomIds.map(findRoom).filter(Boolean);
      var tagClass = accentToTagClass(b.accentVariant);
      var stripeClass = b.status === 'memorized' ? 's-memorized' : b.status === 'revised' ? 's-revised' : 's-draft';
      var pillClass = b.status === 'memorized' ? 'memorized' : b.status === 'revised' ? 'revised' : 'draft';
      var roomsHtml = rooms.slice(0, 4).map(function (r) {
        return '<li class="cb-room-item"><span class="cb-room-dot"></span>' + escHtml(r.title) + '</li>';
      }).join('');
      var extra = Math.max(0, rooms.length - 4);
      if (extra) roomsHtml += '<li class="cb-more">+' + extra + ' more rooms</li>';
      var tagsHtml = (b.tags || []).slice(0, 4).map(function (t) {
        return '<span class="cb-tag ' + tagClass + '">' + escHtml(t) + '</span>';
      }).join('');
      var seqHtml = b.sequenceIndex != null
        ? '<span class="cb-seq">#' + b.sequenceIndex + '</span>'
        : '';
      return [
        '<div class="canvas-block' + (sel ? ' is-selected' : '') + '"',
        ' data-block-id="' + escHtml(b.id) + '"',
        ' style="left:' + b.x + 'px;top:' + b.y + 'px;',
        'width:' + getBlockW(b) + 'px;min-height:' + getBlockH(b) + 'px;">',
        '<div class="cb-stripe ' + stripeClass + '"></div>',
        '<div class="cb-body">',
        '<div class="cb-head">',
        seqHtml || '<span></span>',
        '<span class="cb-status-pill ' + pillClass + '">' + escHtml(b.status || 'draft') + '</span>',
        '<div class="cb-btns">',
        '<button type="button" class="cb-btn" data-open-review="' + escHtml(b.id) + '" title="Open review"><span class="icon">menu_book</span></button>',
        '<button type="button" class="cb-btn" data-open-src="' + escHtml(b.id) + '" title="Source"><span class="icon">open_in_full</span></button>',
        '</div></div>',
        '<h3 class="cb-title">' + escHtml(b.title) + '</h3>',
        b.mnemonicPeg ? '<p class="cb-peg"><span class="cb-peg-icon">🏛</span>' + escHtml(b.mnemonicPeg) + '</p>' : '',
        b.memoryCues ? '<p class="cb-cues">' + escHtml(b.memoryCues.slice(0, 110)) + (b.memoryCues.length > 110 ? '…' : '') + '</p>' : '',
        rooms.length ? '<div class="cb-divider"></div><ul class="cb-rooms">' + roomsHtml + '</ul>' : '',
        '<div class="cb-foot">',
        '<span class="cb-count">' + b.sourceRoomIds.length + ' room' + (b.sourceRoomIds.length === 1 ? '' : 's') + '</span>',
        tagsHtml ? '<div class="cb-tags">' + tagsHtml + '</div>' : '',
        '</div></div></div>',
      ].join('');
    }).join('');
  }

  function renderImages() {
    var p = getPalace();
    els.imageLayer.innerHTML = p.images.map(function (img) {
      var sel = img.id === state.selectedImageId;
      return [
        '<div class="canvas-image' + (sel ? ' is-selected' : '') + '"',
        ' data-image-id="' + escHtml(img.id) + '"',
        ' style="left:' + img.x + 'px;top:' + img.y + 'px;width:' + img.width + 'px;height:' + img.height + 'px;">',
        '<img src="' + escHtml(img.src) + '" alt="' + escHtml(img.name || 'Pasted image') + '"/>',
        '<button type="button" class="ci-delete" data-delete-image="' + escHtml(img.id) + '" title="Delete image">',
        '<span class="icon icon-sm">close</span></button>',
        '<span class="ci-badge">' + escHtml(img.name || 'Image') + '</span>',
        '</div>',
      ].join('');
    }).join('');
  }

  function renderEdges() {
    var p = getPalace();
    var defs = '<defs>'
      + '<marker id="arr" markerWidth="8" markerHeight="8" markerUnits="strokeWidth" orient="auto" refX="7" refY="2.5"><path d="M0,0 L0,5 L7,2.5 z" fill="var(--blue)"/></marker>'
      + '<marker id="arr-sel" markerWidth="8" markerHeight="8" markerUnits="strokeWidth" orient="auto" refX="7" refY="2.5"><path d="M0,0 L0,5 L7,2.5 z" fill="var(--amber)"/></marker>'
      + '</defs>';
    els.edgeLayer.innerHTML = defs + p.edges.map(function (edge) {
      var fb = p.blocks.find(function (b) { return b.id === edge.fromBlockId; });
      var tb = p.blocks.find(function (b) { return b.id === edge.toBlockId; });
      if (!fb || !tb) return '';
      var f = blockCenter(fb), t = blockCenter(tb);
      var mx = (f.x + t.x) / 2, my = (f.y + t.y) / 2;
      var ctrl = Math.min(f.y, t.y) - 60;
      var path = 'M ' + f.x + ' ' + f.y + ' Q ' + mx + ' ' + ctrl + ' ' + t.x + ' ' + t.y;
      var sel = edge.id === state.selectedEdgeId;
      var color = sel ? 'var(--amber)' : 'var(--blue)';
      var glow = sel ? 'drop-shadow(0 0 5px rgba(245,194,69,.5))' : 'drop-shadow(0 0 4px rgba(91,156,246,.45))';
      var marker = sel ? 'url(#arr-sel)' : 'url(#arr)';
      return [
        '<g data-edge-id="' + escHtml(edge.id) + '" style="cursor:pointer;">',
        '<path d="' + path + '" fill="none" stroke="transparent" stroke-width="16"/>',
        '<path d="' + path + '" fill="none" stroke="' + color + '" stroke-width="' + (sel ? 2.5 : 1.8) + '"',
        ' marker-end="' + marker + '" style="filter:' + glow + ';"/>',
        '<text x="' + mx + '" y="' + (my - 14) + '" fill="' + (sel ? 'var(--amber)' : 'var(--t3)') + '"',
        ' font-size="9.5" font-family="var(--f-mono)" text-anchor="middle" pointer-events="none">' + escHtml(edge.label) + '</text>',
        '</g>',
      ].join('');
    }).join('');
  }

  function renderSketches() {
    var p = getPalace();
    els.sketchLayer.innerHTML = p.sketches.map(function (s) {
      var d = sketchPath(s.points);
      if (!d) return '';
      var color = s.color || '#f5c245';
      var width = s.width || 3;
      // Compute glow color from the stroke color
      var glowColor = color.replace(/^#/, '');
      var r = parseInt(glowColor.substring(0, 2), 16);
      var g = parseInt(glowColor.substring(2, 4), 16);
      var bv = parseInt(glowColor.substring(4, 6), 16);
      var glowRgba = 'rgba(' + r + ',' + g + ',' + bv + ',0.35)';
      return '<path class="canvas-sketch-path"'
        + ' d="' + escHtml(d) + '"'
        + ' stroke="' + escHtml(color) + '"'
        + ' stroke-width="' + width + '"'
        + ' style="filter:drop-shadow(0 0 ' + Math.round(width * 1.2) + 'px ' + glowRgba + ')"/>';
    }).join('');
  }

  function renderEditorOverview() {
    var b = selBlock();
    if (!b) return;
    els.editorTitle.value = b.title || '';
    els.editorPeg.value = b.mnemonicPeg || '';
    els.editorCues.value = b.memoryCues || '';
    els.editorStatus.value = b.status || 'draft';
    els.editorAccent.value = b.accentVariant || 'cyan';
  }

  function renderEditorDetails() {
    var b = selBlock();
    if (!b) return;
    els.editorSceneType.value = b.sceneType || 'room';
    els.editorObjectShape.value = b.objectShape || 'cube';
    els.editorObjectShapeCustom.value = b.objectShapeCustom || '';
    els.editorObjectShapeCustom.disabled = (b.objectShape || 'cube') !== 'custom';
    els.editorTags.value = (b.tags || []).join(', ');
    els.editorIcon.value = b.icon || '';
    els.editorSequenceIndex.value = b.sequenceIndex == null ? '' : String(b.sequenceIndex);
    els.editorEmotionCue.value = b.emotionCue || '';
    els.editorMotionCue.value = b.motionCue || '';
    els.editorRevisionNote.value = b.revisionNote || '';
  }

  function renderEditorRooms() {
    var b = selBlock();
    if (!b) return;
    els.editorSources.innerHTML = b.sourceRoomIds.map(findRoom).filter(Boolean).map(function (r, i) {
      return [
        '<div class="src-card">',
        '<div class="src-row"><div>',
        '<p class="src-page">' + escHtml(r.sourcePage) + '</p>',
        '<p class="src-title">' + escHtml(r.title) + '</p>',
        '</div><span class="src-idx">' + (i + 1) + '</span></div>',
        '<div class="src-btns">',
        '<a class="src-btn open" href="' + escHtml(r.sourceUrl) + '">Open -></a>',
        '<button type="button" class="src-btn" data-preview-room="' + escHtml(r.id) + '">Preview</button>',
        '<button type="button" class="src-btn" data-room-up="' + escHtml(r.id) + '"' + (i === 0 ? ' disabled' : '') + '>↑</button>',
        '<button type="button" class="src-btn" data-room-down="' + escHtml(r.id) + '"' + (i === b.sourceRoomIds.length - 1 ? ' disabled' : '') + '>↓</button>',
        '<button type="button" class="src-btn del" data-rm-room-from-block="' + escHtml(r.id) + '">Remove</button>',
        '</div></div>',
      ].join('');
    }).join('');
  }

  function renderEditorConnect() {
    var b = selBlock();
    if (!b) return;
    els.editorRelation.value = b.relationType || 'sequence';
    els.editorConnectHint.textContent = state.pendingConnectFrom === b.id
      ? 'Now click another block on the canvas to complete the connection.'
      : 'Set a relation label above, then click "Start Connection" below.';

    var p = getPalace();
    var edge = selEdge();
    var related = p.edges.filter(function (e) { return e.fromBlockId === b.id || e.toBlockId === b.id; });

    if (edge) {
      var fb = findBlock(edge.fromBlockId), tb = findBlock(edge.toBlockId);
      els.edgeListArea.innerHTML = [
        '<div class="edge-card">',
        '<span class="edge-dir">Selected connection</span>',
        '<span class="edge-lbl">' + escHtml(edge.label) + '</span>',
        '<div class="edge-detail">',
        '<span>' + escHtml(fb ? fb.title : '?') + ' → ' + escHtml(tb ? tb.title : '?') + '</span>',
        '<button type="button" class="edge-del" data-del-edge="' + escHtml(edge.id) + '">Delete ✕</button>',
        '</div></div>',
      ].join('');
    } else if (related.length) {
      els.edgeListArea.innerHTML = related.map(function (e) {
        var dir = e.fromBlockId === b.id ? 'Outgoing' : 'Incoming';
        var other = findBlock(e.fromBlockId === b.id ? e.toBlockId : e.fromBlockId);
        return [
          '<div class="edge-card" data-sel-edge="' + escHtml(e.id) + '">',
          '<span class="edge-dir">' + dir + '</span>',
          '<span class="edge-lbl">' + escHtml(e.label) + '</span>',
          '<div class="edge-detail">',
          '<span>' + escHtml(other ? other.title : 'Unknown') + '</span>',
          '<button type="button" class="edge-del" data-del-edge="' + escHtml(e.id) + '">Delete ✕</button>',
          '</div></div>',
        ].join('');
      }).join('');
    } else {
      els.edgeListArea.innerHTML = '<div class="no-edge">No connections on this block yet. Use "Start Connection" below.</div>';
    }
  }

  function renderEditor() {
    var b = selBlock();
    var hasBlock = Boolean(b);
    els.emptyEditor.hidden = hasBlock;
    els.blockEditor.hidden = !hasBlock;
    if (hasBlock) els.blockEditor.style.display = 'flex';
    if (!hasBlock) return;
    renderEditorOverview();
    renderEditorDetails();
    renderEditorRooms();
    renderEditorConnect();
  }

  function renderReview() {
    if (!state.review.blockId) { els.reviewPanel.classList.add('hidden'); return; }
    var b = findBlock(state.review.blockId);
    var rooms = getRooms(b);
    if (!b || !rooms.length) { els.reviewPanel.classList.add('hidden'); return; }
    var room = rooms[state.review.roomIndex] || rooms[0];
    els.reviewPanel.classList.remove('hidden');
    els.reviewPanelTitle.textContent = b.title || 'Block Review';

    els.reviewRoomList.innerHTML = rooms.map(function (r, i) {
      return [
        '<button type="button" class="rv-room-btn' + (i === state.review.roomIndex ? ' active' : '') + '"',
        ' data-rv-idx="' + i + '">',
        '<span class="rv-num">Room ' + (i + 1) + '</span>',
        '<span class="rv-rt">' + escHtml(r.title) + '</span>',
        '<span class="rv-rs">' + escHtml(r.summary || r.sourcePageTitle) + '</span>',
        '</button>',
      ].join('');
    }).join('');

    els.reviewRoomSource.textContent = room.sourcePageTitle || room.sourcePage;
    els.reviewRoomTitle.textContent = room.title;
    els.reviewRoomLink.href = room.sourceUrl || '#';
    els.reviewRoomSummary.textContent = room.summary || 'No summary available.';

    var clean = cleanHtml(room.contentHtml);
    els.reviewRoomContent.innerHTML = clean ||
      '<div style="padding:14px;background:var(--card);border-radius:var(--r-lg);color:var(--t3);font-size:13px;">' +
      'Full room content was not captured during import. Click "Open Source ->" to view it on the study page.</div>';
    typesetMath(els.reviewRoomContent);

    els.reviewPrev.disabled = state.review.roomIndex <= 0;
    els.reviewNext.disabled = state.review.roomIndex >= rooms.length - 1;
  }

  function renderViewport() {
    var z = getPalace().viewport.zoom || 1;
    els.zoomVal.textContent = Math.round(z * 100) + '%';
    if (els.zoomSlider) els.zoomSlider.value = String(Math.round(z * 100));
    els.canvasStage.style.transform = 'scale(' + z + ')';
  }

  function render(persist) {
    ensureValid();
    syncSidebarChrome();
    renderPalacePicker();
    renderImportedPages();
    renderRooms();
    renderImages();
    renderBlocks();
    renderEdges();
    renderSketches();
    renderEditor();
    renderReview();
    renderViewport();
    els.selectionModeButtons.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-selection-mode') === state.selectionMode);
    });
    syncPenToolbar();
    if (persist) saveState(state.data);
  }

  function updateBlock(fn, opts) {
    var b = selBlock();
    if (!b) return;
    fn(b);
    renderBlocks(); renderEdges();
    if (opts && opts.editor) renderEditor();
    if (opts && opts.review) renderReview();
    saveState(state.data);
  }

  /* ── Mode ───────────────────────────────────────────────────────── */
  function setMode(mode) {
    state.mode = mode;
    els.modeButtons.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-mode-button') === mode);
    });
    if (mode === 'draw') {
      setStatus('Draw mode - P pen | E erase | Ctrl+Z undo | X redo.');
    } else {
      setStatus('Selection mode active.');
      // Cancel any in-progress draw
      if (state.draw) {
        var p = getPalace();
        if (state.draw.points.length < 2) {
          p.sketches = p.sketches.filter(function (s) { return s !== state.draw; });
        }
        state.draw = null;
      }
    }
    syncPenToolbar();
  }

  function setSelectionMode(mode) {
    state.selectionMode = mode || 'all';
    els.selectionModeButtons.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-selection-mode') === state.selectionMode);
    });
    if (state.mode === 'selection') {
      setStatus('Selection filter: ' + state.selectionMode + '.');
    }
  }

  function setZoom(nextZoom, anchorClientX, anchorClientY) {
    var palace = getPalace();
    var currentZoom = palace.viewport.zoom || 1;
    var newZoom = clamp(nextZoom, 0.4, 2);
    if (Math.abs(newZoom - currentZoom) < 0.0001) return;

    var rect = els.canvasViewport.getBoundingClientRect();
    var anchorX = typeof anchorClientX === 'number' ? anchorClientX : rect.left + rect.width / 2;
    var anchorY = typeof anchorClientY === 'number' ? anchorClientY : rect.top + rect.height / 2;
    var stageX = ((anchorX - rect.left) + els.canvasViewport.scrollLeft) / currentZoom;
    var stageY = ((anchorY - rect.top) + els.canvasViewport.scrollTop) / currentZoom;

    palace.viewport.zoom = newZoom;
    render(true);

    els.canvasViewport.scrollLeft = stageX * newZoom - (anchorX - rect.left);
    els.canvasViewport.scrollTop = stageY * newZoom - (anchorY - rect.top);
  }

  /* ── Pen toolbar activation ─────────────────────────────────────── */
  function setPenTool(tool) {
    state.penTool = tool;
    // Clicking a pen tool also enters draw mode
    if (state.mode !== 'draw') setMode('draw');
    syncPenToolbar();
    setStatus(tool === 'eraser'
      ? 'Eraser active - drag over strokes to erase | Ctrl+Z undo | X redo.'
      : 'Pen active - draw on the canvas | Ctrl+Z undo | X redo.');
  }

  function setPenColor(color) {
    state.penColor = color;
    // Clicking color in eraser mode switches back to pen
    if (state.penTool === 'eraser') {
      state.penTool = 'pen';
    }
    if (state.mode !== 'draw') setMode('draw');
    syncPenToolbar();
  }

  function setPenWidth(width) {
    state.penWidth = width;
    syncPenToolbar();
  }

  /* ── Palace management ──────────────────────────────────────────── */
  function loadPreset() {
    if (!window.MemoryBuilderSeed || typeof window.MemoryBuilderSeed.buildDefaultState !== 'function') {
      setStatus('Preset data unavailable.'); return;
    }
    state.data = normalizeState(window.MemoryBuilderSeed.buildDefaultState());
    state.selectedBlockId = null; state.selectedEdgeId = null; state.selectedImageId = null;
    state.pendingConnectFrom = null;
    state.review.blockId = null; state.review.roomIndex = 0;
    sketchUndoStack = []; sketchRedoStack = [];
    render(true); setStatus('Loaded Chapter 22 starter palace.');
  }

  function newPalace() {
    var id = makeId('palace');
    state.data.palaces.unshift(safePalace({ id: id, name: 'New Palace' }, state.data.palaces.length));
    state.data.selectedPalaceId = id;
    state.selectedBlockId = null; state.selectedEdgeId = null; state.selectedImageId = null;
    state.pendingConnectFrom = null;
    state.review.blockId = null; state.review.roomIndex = 0;
    sketchUndoStack = []; sketchRedoStack = [];
    render(true); setStatus('Created a new palace.');
  }

  function renamePalace() {
    var p = getPalace();
    var n = window.prompt('Rename palace:', p.name);
    if (!n) return;
    p.name = n.trim() || p.name;
    render(true);
  }

  function exportPalace() {
    var p = getPalace();
    var blob = new Blob([JSON.stringify(p, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '.json';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  }

  async function readTextFile(file) {
    if (file && typeof file.text === 'function') return file.text();
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onload = function () { resolve(String(reader.result || '')); };
      reader.onerror = function () { reject(reader.error || new Error('Failed to read file.')); };
      reader.readAsText(file);
    });
  }

  function importPalacePayload(rawPayload, fallbackName) {
    var importedPalaces = [];
    var payloads = Array.isArray(rawPayload && rawPayload.palaces)
      ? rawPayload.palaces
      : (isFullPalacePayload(rawPayload) ? [rawPayload] : []);

    payloads.forEach(function (payload, index) {
      var palace = safePalace(payload, state.data.palaces.length + importedPalaces.length + index);
      palace.id = uniquifyPalaceId(palace.id);
      if (fallbackName && payloads.length === 1 && (!palace.name || /^memory palace \d+$/i.test(palace.name))) {
        palace.name = fallbackName;
      }
      importedPalaces.push(palace);
      state.data.palaces.unshift(palace);
    });

    if (!importedPalaces.length) {
      throw new Error('This JSON file is not a supported palace export.');
    }

    state.data.selectedPalaceId = importedPalaces[0].id;
    state.selectedBlockId = null; state.selectedEdgeId = null; state.selectedImageId = null;
    state.pendingConnectFrom = null;
    state.review.blockId = null; state.review.roomIndex = 0;
    sketchUndoStack = []; sketchRedoStack = [];
    render(true);
    setStatus('Imported ' + importedPalaces.length + ' palace' + (importedPalaces.length === 1 ? '' : 's') + ' from JSON.');
  }

  async function importPalaceFiles(fileList) {
    var files = Array.from(fileList || []);
    if (!files.length) {
      setStatus('Choose at least one exported JSON file.');
      return;
    }

    var imported = 0;
    var failed = [];

    for (var i = 0; i < files.length; i++) {
      try {
        var raw = JSON.parse(await readTextFile(files[i]));
        importPalacePayload(raw, files[i].name.replace(/\.json$/i, ''));
        imported++;
      } catch (error) {
        failed.push(files[i].name);
      }
    }

    if (failed.length && !imported) {
      setStatus('JSON import failed: ' + failed.join(', '));
      return;
    }
    if (failed.length) {
      setStatus('Imported ' + imported + ' JSON file(s). Failed: ' + failed.join(', '));
      return;
    }
    setStatus('Imported ' + imported + ' JSON file(s).');
  }

  /* ── Import ─────────────────────────────────────────────────────── */
  async function importPages(pageList) {
    var p = getPalace();
    var pages = Array.from(new Set(pageList.map(function (pg) { return pg.trim(); }).filter(Boolean)));
    if (!pages.length) { setStatus('Enter at least one study page filename.'); return; }
    if (!window.RoomExtractor || typeof window.RoomExtractor.fetchRoomsFromPage !== 'function') {
      setStatus('Room extractor not available.'); return;
    }
    var imported = 0, failed = [];
    setStatus('Importing from ' + pages.join(', ') + '…');
    for (var i = 0; i < pages.length; i++) {
      try {
        var payload = await window.RoomExtractor.fetchRoomsFromPage(pages[i]);
        payload.rooms.forEach(function (r) {
          if (!p.importedRooms.some(function (e) { return e.id === r.id; })) {
            p.importedRooms.push(safeRoom(r, p.importedRooms.length));
            imported++;
          }
        });
        if (!p.importedPages.includes(payload.sourcePage)) p.importedPages.push(payload.sourcePage);
      } catch (e) { failed.push(pages[i]); }
    }
    render(true);
    if (failed.length && !imported) { setStatus('Import failed: ' + failed.join(', ')); return; }
    if (failed.length) { setStatus('Imported ' + imported + ' room(s). Failed: ' + failed.join(', ')); return; }
    setStatus('Imported ' + imported + ' room(s) from ' + pages.join(', '));
  }

  /* ── Drag / pointer ─────────────────────────────────────────────── */
  function startBlockDrag(e, blockId) {
    if (state.mode !== 'selection' || !selectionAllows('blocks')) return;
    var b = findBlock(blockId);
    if (!b) return;
    var pt = canvasPt(e.clientX, e.clientY);
    state.drag = { type: 'block', blockId: blockId, ox: pt.x - b.x, oy: pt.y - b.y };
    state.selectedBlockId = blockId;
    state.selectedEdgeId = null;
    state.selectedImageId = null;
    render(false);
  }

  function startImageDrag(e, imageId) {
    if (state.mode !== 'selection' || !selectionAllows('images')) return;
    var img = findImage(imageId);
    if (!img) return;
    var pt = canvasPt(e.clientX, e.clientY);
    state.drag = { type: 'image', imageId: imageId, ox: pt.x - img.x, oy: pt.y - img.y };
    state.selectedImageId = imageId;
    state.selectedBlockId = null;
    state.selectedEdgeId = null;
    render(false);
  }

  function handleMove(e) {
    if (state.drag) {
      var pt = canvasPt(e.clientX, e.clientY);
      if (state.drag.type === 'image') {
        var img = findImage(state.drag.imageId);
        if (!img) return;
        img.x = clamp(pt.x - state.drag.ox, 24, 3100 - img.width);
        img.y = clamp(pt.y - state.drag.oy, 24, 2100 - img.height);
        renderImages();
      } else {
        var b = findBlock(state.drag.blockId);
        if (!b) return;
        b.x = clamp(pt.x - state.drag.ox, 24, 2900);
        b.y = clamp(pt.y - state.drag.oy, 24, 1900);
        renderBlocks(); renderEdges();
      }
    }
    if (state.draw) {
      var pt2 = canvasPt(e.clientX, e.clientY);
      if (state.penTool === 'eraser') {
        // Erase strokes near pointer (continuously)
        if (eraseAt(pt2)) {
          renderSketches();
        }
      } else {
        // Throttle points: only add if moved enough
        var pts = state.draw.points;
        if (pts.length > 0) {
          var last = pts[pts.length - 1];
          var dx = pt2.x - last.x, dy = pt2.y - last.y;
          if (Math.sqrt(dx * dx + dy * dy) < 2) return; // skip tiny jitter
        }
        pts.push(pt2);
        // Live-render the active stroke smoothly
        renderSketches();
      }
    }
  }

  function stopPointer() {
    if (state.drag) {
      state.drag = null;
      saveState(state.data);
    }
    if (state.draw) {
      if (state.penTool !== 'eraser') {
        if (state.draw.points.length < 2) {
          // Remove stub stroke
          var p = getPalace();
          p.sketches = p.sketches.filter(function (s) { return s !== state.draw; });
          sketchUndoStack.pop(); // revert the pre-push
        }
      }
      state.draw = null;
      saveState(state.data);
      renderSketches();
    }
  }

  function finishConnect(targetId) {
    if (!state.pendingConnectFrom || state.pendingConnectFrom === targetId) return false;
    var src = findBlock(state.pendingConnectFrom), tgt = findBlock(targetId);
    if (!src || !tgt) return false;
    getPalace().edges.push({ id: makeId('edge'), fromBlockId: src.id, toBlockId: tgt.id, label: src.relationType || 'sequence' });
    state.pendingConnectFrom = null;
    render(true);
    setStatus('Connected "' + src.title + '" → "' + tgt.title + '".');
    return true;
  }

  /* ── Events ─────────────────────────────────────────────────────── */
  els.roomSearch.addEventListener('input', function (e) { state.search = e.target.value || ''; renderRooms(); });

  function bindInput(el, fn) { if (el) el.addEventListener('input', fn); }
  function bindChange(el, fn) { if (el) el.addEventListener('change', fn); }

  byId('import-pages-button').addEventListener('click', function () { importPages((els.importInput.value || '').split(',')); });
  els.importInput.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); importPages((els.importInput.value || '').split(',')); } });
  byId('import-palace-file-button').addEventListener('click', function () {
    if (els.importPalaceFileInput) els.importPalaceFileInput.click();
  });
  if (els.importPalaceFileInput) {
    els.importPalaceFileInput.addEventListener('change', function (e) {
      importPalaceFiles(e.target.files);
      e.target.value = '';
    });
  }
  byId('import-current-page').addEventListener('click', function () {
    var f = (document.referrer || '').replace(/\\/g, '/').split('/').pop() || '';
    if (!f) { setStatus('Open this builder from a study page, or type a filename.'); return; }
    els.importInput.value = f; importPages([f]);
  });

  byId('new-palace-button').addEventListener('click', newPalace);
  byId('load-preset-button').addEventListener('click', loadPreset);
  byId('rename-palace-button').addEventListener('click', renamePalace);
  byId('export-palace-button').addEventListener('click', exportPalace);

  els.palaceSelect.addEventListener('change', function (e) {
    state.data.selectedPalaceId = e.target.value;
    state.selectedBlockId = null; state.selectedEdgeId = null; state.selectedImageId = null;
    state.pendingConnectFrom = null;
    state.review.blockId = null; state.review.roomIndex = 0;
    sketchUndoStack = []; sketchRedoStack = [];
    render(true);
  });

  els.modeButtons.forEach(function (btn) {
    btn.addEventListener('click', function () { setMode(btn.getAttribute('data-mode-button')); });
  });
  els.selectionModeButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (state.mode !== 'selection') setMode('selection');
      setSelectionMode(btn.getAttribute('data-selection-mode'));
      render(false);
    });
  });
  if (els.toggleLeftSidebar) {
    els.toggleLeftSidebar.addEventListener('click', function () {
      state.ui.leftSidebarOpen = !state.ui.leftSidebarOpen;
      saveUiState(state.ui);
      syncSidebarChrome();
    });
  }
  if (els.toggleRightSidebar) {
    els.toggleRightSidebar.addEventListener('click', function () {
      state.ui.rightSidebarOpen = !state.ui.rightSidebarOpen;
      saveUiState(state.ui);
      syncSidebarChrome();
    });
  }

  /* Tab switching */
  els.tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function () { setTab(btn.getAttribute('data-tab')); });
  });

  /* Zoom */
  byId('zoom-in').addEventListener('click', function () { setZoom((getPalace().viewport.zoom || 1) + 0.1); });
  byId('zoom-out').addEventListener('click', function () { setZoom((getPalace().viewport.zoom || 1) - 0.1); });
  byId('zoom-reset').addEventListener('click', function () { setZoom(1); });
  if (els.zoomSlider) {
    els.zoomSlider.addEventListener('input', function (e) {
      setZoom(Number(e.target.value || 100) / 100);
    });
  }
  els.canvasViewport.addEventListener('wheel', function (e) {
    if (!e.ctrlKey) return;
    e.preventDefault();
    var currentZoom = getPalace().viewport.zoom || 1;
    var delta = e.deltaY < 0 ? 0.1 : -0.1;
    setZoom(currentZoom + delta, e.clientX, e.clientY);
  }, { passive: false });

  /* ── Pen Toolbar events ─────────────────────────────────────────── */
  els.penToolbar.addEventListener('click', function (e) {
    // Tool button
    var toolBtn = e.target.closest('.pt-tool');
    if (toolBtn) {
      setPenTool(toolBtn.getAttribute('data-tool'));
      return;
    }
    // Color swatch
    var colorBtn = e.target.closest('.pt-color');
    if (colorBtn) {
      setPenColor(colorBtn.getAttribute('data-color'));
      return;
    }
    // Width button
    var widthBtn = e.target.closest('.pt-width');
    if (widthBtn) {
      setPenWidth(parseFloat(widthBtn.getAttribute('data-width')));
      return;
    }
  });

  /* ── Keyboard shortcuts ─────────────────────────────────────────── */
  document.addEventListener('keydown', function (e) {
    // Don't fire when typing in input/textarea/select
    var tag = (e.target && e.target.tagName || '').toLowerCase();
    var inInput = tag === 'input' || tag === 'textarea' || tag === 'select';

    // Ctrl+Z — undo sketch
    if (e.ctrlKey && !e.shiftKey && e.key === 'z') {
      e.preventDefault();
      undoSketch();
      return;
    }

    // Ctrl+Shift+Z or Ctrl+Y — redo sketch
    if ((e.ctrlKey && e.shiftKey && e.key === 'z') || (e.ctrlKey && e.key === 'y')) {
      e.preventDefault();
      redoSketch();
      return;
    }

    if (inInput) return;

    // X — redo sketch (standalone key when not in input)
    if (e.key === 'x' || e.key === 'X') {
      redoSketch();
      return;
    }

    // P — switch to pen
    if (e.key === 'p' || e.key === 'P') {
      setPenTool('pen');
      return;
    }

    // E — switch to eraser
    if (e.key === 'e' || e.key === 'E') {
      setPenTool('eraser');
      return;
    }

    // Escape — back to selection mode
    if (e.key === 'Escape') {
      if (state.mode === 'draw') setMode('selection');
      return;
    }
  });

  document.addEventListener('paste', function (e) {
    var items = Array.from((e.clipboardData && e.clipboardData.items) || []);
    var imageItem = items.find(function (item) {
      return item && item.kind === 'file' && /^image\//i.test(item.type || '');
    });
    if (!imageItem) return;
    e.preventDefault();
    var file = imageItem.getAsFile();
    fileToImageData(file).then(addCanvasImage).catch(function () {
      setStatus('Could not paste that image.');
    });
  });

  /* Left sidebar — remove page chips */
  els.importedPages.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-rm-page]');
    if (!btn) return;
    var page = btn.getAttribute('data-rm-page');
    showConfirm('Remove "' + page + '"?', 'Remove this page and its unused rooms from the library?', function () {
      removePage(page); render(true); setStatus('Removed ' + page + '.');
    });
  });

  /* Room card — remove */
  els.roomScrollArea.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-rm-room]');
    if (!btn) return;
    var id = btn.getAttribute('data-rm-room');
    var r = findRoom(id);
    if (!r) return;
    var u = roomUsage(id);
    showConfirm(
      'Remove "' + r.title + '"?',
      u ? 'This room is used in ' + u + ' block(s). It will be removed from those too.' : 'Remove from the room library?',
      function () { removeRoomEverywhere(id); render(true); setStatus('Removed "' + r.title + '".'); }
    );
  });

  /* Room card — drag start */
  els.roomScrollArea.addEventListener('dragstart', function (e) {
    var card = e.target.closest('[data-room-card]');
    if (!card || !e.dataTransfer) return;
    e.dataTransfer.setData('text/room-id', card.getAttribute('data-room-card'));
    e.dataTransfer.effectAllowed = 'copy';
  });

  /* Canvas — dragover */
  els.canvasViewport.addEventListener('dragover', function (e) {
    if (state.mode !== 'selection') return;
    e.preventDefault();
    if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
  });

  /* Canvas — drop */
  els.canvasViewport.addEventListener('drop', function (e) {
    e.preventDefault();
    var roomId = e.dataTransfer ? e.dataTransfer.getData('text/room-id') : '';
    if (!roomId) return;
    var p = getPalace();
    var blockEl = e.target.closest('[data-block-id]');
    if (blockEl) {
      var b = findBlock(blockEl.getAttribute('data-block-id'));
      if (b) { mergeRooms(b, [roomId]); state.selectedBlockId = b.id; render(true); setStatus('Added room to block.'); return; }
    }
    var block = createBlock([roomId], dropPos(e.clientX, e.clientY));
    p.blocks.push(block);
    state.selectedBlockId = block.id;
    state.selectedImageId = null;
    render(true); setStatus('Created block.');
  });

  /* Canvas stage — pointer events */
  els.canvasStage.addEventListener('pointerdown', function (e) {
    var delImageBtn = e.target.closest('[data-delete-image]');
    if (delImageBtn) {
      e.stopPropagation();
      var imageId = delImageBtn.getAttribute('data-delete-image');
      removeImage(imageId);
      render(true);
      setStatus('Deleted image.');
      return;
    }
    var reviewBtn = e.target.closest('[data-open-review]');
    if (reviewBtn) {
      e.stopPropagation();
      state.review.blockId = reviewBtn.getAttribute('data-open-review');
      state.review.roomIndex = 0;
      state.selectedBlockId = state.review.blockId;
      state.selectedImageId = null;
      render(false); return;
    }
    var srcBtn = e.target.closest('[data-open-src]');
    if (srcBtn) {
      e.stopPropagation();
      var b = findBlock(srcBtn.getAttribute('data-open-src'));
      if (b && b.sourceRoomIds.length) { var r = findRoom(b.sourceRoomIds[0]); if (r) window.location.href = r.sourceUrl; }
      return;
    }
    var imageEl = e.target.closest('[data-image-id]');
    if (imageEl && state.mode !== 'draw') {
      if (!selectionAllows('images')) return;
      startImageDrag(e, imageEl.getAttribute('data-image-id'));
      return;
    }
    var blockEl = e.target.closest('[data-block-id]');
    if (blockEl && state.mode !== 'draw') {
      if (!selectionAllows('blocks')) return;
      var bid = blockEl.getAttribute('data-block-id');
      if (finishConnect(bid)) return;
      startBlockDrag(e, bid);
      return;
    }
  });

  /* Canvas viewport — pointerdown on empty area */
  els.canvasViewport.addEventListener('pointerdown', function (e) {
    // Don't capture if clicking the pen toolbar
    if (e.target.closest('#pen-toolbar')) return;

    if (e.target.closest('[data-block-id]')) return;
    if (state.mode !== 'draw' && e.target.closest('[data-image-id]')) return;

    if (state.mode === 'draw') {
      e.preventDefault();
      var p = getPalace();
      var pt = canvasPt(e.clientX, e.clientY);

      if (state.penTool === 'eraser') {
        // Eraser: push undo snapshot before first erase of this stroke
        pushSketchUndo();
        // Erase immediately on click
        if (eraseAt(pt)) renderSketches();
        // state.draw used as flag to keep erasing on move
        state.draw = { points: [pt], isEraser: true };
      } else {
        // Pen: start a new stroke
        pushSketchUndo();
        var stroke = { points: [pt], color: state.penColor, width: state.penWidth };
        p.sketches.push(stroke);
        state.draw = stroke;
      }
      return;
    }

    // Selection mode: click empty area deselects
    state.selectedBlockId = null;
    state.selectedEdgeId = null;
    state.selectedImageId = null;
    render(false);
  });

  window.addEventListener('pointermove', handleMove);
  window.addEventListener('pointerup', stopPointer);

  /* Edge clicks */
  els.edgeLayer.addEventListener('click', function (e) {
    if (state.mode !== 'selection' || !selectionAllows('edges')) return;
    var g = e.target.closest('[data-edge-id]');
    if (!g) return;
    e.stopPropagation();
    state.selectedEdgeId = g.getAttribute('data-edge-id');
    state.selectedImageId = null;
    render(false);
  });

  /* Editor field bindings — Overview */
  bindInput(els.editorTitle, function () { updateBlock(function (b) { b.title = els.editorTitle.value; }); });
  bindInput(els.editorPeg, function () { updateBlock(function (b) { b.mnemonicPeg = els.editorPeg.value; }); });
  bindInput(els.editorCues, function () { updateBlock(function (b) { b.memoryCues = els.editorCues.value; }); });
  bindChange(els.editorStatus, function () { updateBlock(function (b) { b.status = els.editorStatus.value; }, { editor: true }); });
  bindChange(els.editorAccent, function () { updateBlock(function (b) { b.accentVariant = els.editorAccent.value; }); });

  /* Editor field bindings — Details */
  bindChange(els.editorSceneType, function () { updateBlock(function (b) { b.sceneType = els.editorSceneType.value; }); });
  bindChange(els.editorObjectShape, function () { updateBlock(function (b) { b.objectShape = els.editorObjectShape.value; }, { editor: true }); });
  bindInput(els.editorObjectShapeCustom, function () { updateBlock(function (b) { b.objectShapeCustom = els.editorObjectShapeCustom.value; }); });
  bindInput(els.editorTags, function () { updateBlock(function (b) { b.tags = parseTags(els.editorTags.value); }); });
  bindInput(els.editorIcon, function () { updateBlock(function (b) { b.icon = els.editorIcon.value || 'token'; }); });
  bindInput(els.editorSequenceIndex, function () { updateBlock(function (b) { b.sequenceIndex = els.editorSequenceIndex.value === '' ? null : Number(els.editorSequenceIndex.value); }); });
  bindInput(els.editorEmotionCue, function () { updateBlock(function (b) { b.emotionCue = els.editorEmotionCue.value; }); });
  bindInput(els.editorMotionCue, function () { updateBlock(function (b) { b.motionCue = els.editorMotionCue.value; }); });
  bindInput(els.editorRevisionNote, function () { updateBlock(function (b) { b.revisionNote = els.editorRevisionNote.value; }); });

  /* Editor field bindings — Connect */
  bindChange(els.editorRelation, function () { updateBlock(function (b) { b.relationType = els.editorRelation.value; }); });

  /* Source rooms panel */
  els.editorSources.addEventListener('click', function (e) {
    var preview = e.target.closest('[data-preview-room]');
    if (preview) {
      var b = selBlock();
      if (!b) return;
      var idx = b.sourceRoomIds.indexOf(preview.getAttribute('data-preview-room'));
      if (idx >= 0) { state.review.blockId = b.id; state.review.roomIndex = idx; render(false); }
      return;
    }
    var rm = e.target.closest('[data-rm-room-from-block]');
    if (rm) {
      var id = rm.getAttribute('data-rm-room-from-block');
      var r = findRoom(id), b = selBlock();
      if (!r || !b) return;
      showConfirm('Remove "' + r.title + '" from block?', 'Remove this room from "' + b.title + '"?', function () {
        removeRoomFromBlock(b.id, id); render(true); setStatus('Removed room from block.');
      }); return;
    }
    var up = e.target.closest('[data-room-up]');
    if (up) { moveRoom(state.selectedBlockId, up.getAttribute('data-room-up'), -1); render(true); return; }
    var dn = e.target.closest('[data-room-down]');
    if (dn) { moveRoom(state.selectedBlockId, dn.getAttribute('data-room-down'), 1); render(true); return; }
  });

  /* Edge list */
  els.edgeListArea.addEventListener('click', function (e) {
    var selBtn = e.target.closest('[data-sel-edge]');
    if (selBtn) { state.selectedEdgeId = selBtn.getAttribute('data-sel-edge'); render(false); return; }
    var card = e.target.closest('[data-sel-edge],.edge-card');
    if (card && card.dataset.selEdge) { state.selectedEdgeId = card.dataset.selEdge; render(false); return; }
    var delBtn = e.target.closest('[data-del-edge]');
    if (!delBtn) return;
    var eid = delBtn.getAttribute('data-del-edge');
    var edge = getPalace().edges.find(function (ed) { return ed.id === eid; });
    if (!edge) return;
    showConfirm('Delete connection?', 'Delete the "' + edge.label + '" connection?', function () {
      getPalace().edges = getPalace().edges.filter(function (ed) { return ed.id !== eid; });
      if (state.selectedEdgeId === eid) state.selectedEdgeId = null;
      render(true);
    });
  });

  els.edgeListArea.addEventListener('click', function (e) {
    var card = e.target.closest('.edge-card[data-sel-edge]');
    if (card) { state.selectedEdgeId = card.getAttribute('data-sel-edge'); render(false); }
  });

  /* Footer buttons */
  byId('open-full-review-button').addEventListener('click', function () {
    if (state.selectedBlockId) { state.review.blockId = state.selectedBlockId; state.review.roomIndex = 0; state.selectedImageId = null; render(false); }
  });
  byId('connect-block-button').addEventListener('click', function () {
    if (!state.selectedBlockId) { setStatus('Select a block first.'); return; }
    state.pendingConnectFrom = state.selectedBlockId;
    setStatus('Now click another block on the canvas to complete the connection.');
    renderEditor();
  });
  byId('mark-draft-button').addEventListener('click', function () { updateBlock(function (b) { b.status = 'draft'; }, { editor: true }); });
  byId('mark-revised-button').addEventListener('click', function () { updateBlock(function (b) { b.status = 'revised'; }, { editor: true }); });
  byId('mark-memorized-button').addEventListener('click', function () { updateBlock(function (b) { b.status = 'memorized'; }, { editor: true }); });

  byId('delete-block-button').addEventListener('click', function () {
    var b = selBlock();
    if (!b) return;
    showConfirm('Delete "' + b.title + '"?', 'This will also remove all connections to/from this block.', function () {
      var p = getPalace();
      p.blocks = p.blocks.filter(function (bl) { return bl.id !== b.id; });
      p.edges = p.edges.filter(function (e) { return e.fromBlockId !== b.id && e.toBlockId !== b.id; });
      if (state.pendingConnectFrom === b.id) state.pendingConnectFrom = null;
      if (state.review.blockId === b.id) { state.review.blockId = null; state.review.roomIndex = 0; }
      state.selectedBlockId = null;
      render(true); setStatus('Deleted block.');
    });
  });

  byId('reset-palace-button').addEventListener('click', function () {
    var p = getPalace();
    showConfirm('Reset "' + p.name + '"?', 'Clear all blocks, connections, rooms, and sketches from this palace?', function () {
      resetPalace(); render(true); setStatus('Reset the current palace.');
    });
  });

  byId('delete-selected-edge-button').addEventListener('click', function () {
    var e = selEdge();
    if (!e) { setStatus('Select a connection first.'); return; }
    showConfirm('Delete connection?', 'Delete the "' + e.label + '" connection?', function () {
      getPalace().edges = getPalace().edges.filter(function (ed) { return ed.id !== e.id; });
      state.selectedEdgeId = null; render(true); setStatus('Deleted connection.');
    });
  });

  byId('clear-edges-button').addEventListener('click', function () {
    var p = getPalace();
    if (!p.edges.length) return;
    showConfirm('Clear all connections?', 'Delete every connection in this palace?', function () {
      p.edges = []; state.selectedEdgeId = null; render(true); setStatus('Cleared all connections.');
    });
  });

  byId('clear-sketches-button').addEventListener('click', function () {
    var p = getPalace();
    if (!p.sketches.length) return;
    showConfirm('Clear sketches?', 'Delete all freehand sketches from the canvas?', function () {
      pushSketchUndo();
      p.sketches = []; render(true); setStatus('Cleared sketches.');
    });
  });

  byId('delete-last-sketch-button').addEventListener('click', function () {
    var p = getPalace();
    if (!p.sketches.length) return;
    showConfirm('Delete last sketch?', 'Remove the most recently drawn sketch?', function () {
      pushSketchUndo();
      p.sketches.pop(); render(true); setStatus('Deleted last sketch.');
    });
  });

  byId('clear-palace-blocks-button').addEventListener('click', function () {
    var p = getPalace();
    if (!p.blocks.length) return;
    showConfirm('Clear all blocks?', 'Delete all blocks and connections from this palace?', function () {
      p.blocks = []; p.edges = [];
      state.selectedBlockId = null; state.selectedEdgeId = null;
      state.review.blockId = null; state.review.roomIndex = 0;
      render(true); setStatus('Cleared all blocks.');
    });
  });

  byId('clear-palace-imports-button').addEventListener('click', function () {
    var p = getPalace();
    if (!p.importedRooms.length && !p.importedPages.length) return;
    showConfirm('Clear room library?', 'Remove all imported rooms and pages? Blocks that use them will also be cleared.', function () {
      p.importedPages = []; p.importedRooms = []; p.blocks = []; p.edges = [];
      state.selectedBlockId = null; state.selectedEdgeId = null;
      state.review.blockId = null; state.review.roomIndex = 0;
      render(true); setStatus('Cleared the room library.');
    });
  });

  byId('delete-palace-button').addEventListener('click', function () {
    if (state.data.palaces.length <= 1) { setStatus('Cannot delete the last palace. Reset it instead.'); return; }
    var p = getPalace();
    showConfirm('Delete "' + p.name + '"?', 'Delete this palace and all its content permanently?', function () {
      state.data.palaces = state.data.palaces.filter(function (pl) { return pl.id !== p.id; });
      state.data.selectedPalaceId = state.data.palaces[0].id;
      state.selectedBlockId = null; state.selectedEdgeId = null;
      state.pendingConnectFrom = null;
      state.review.blockId = null; state.review.roomIndex = 0;
      sketchUndoStack = []; sketchRedoStack = [];
      render(true); setStatus('Deleted "' + p.name + '".');
    });
  });

  byId('reset-all-data-button').addEventListener('click', function () {
    showConfirm('Reset all data?', 'Erase every palace from localStorage and reload the Chapter 22 starter palace?', function () {
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      state.data = normalizeState(null);
      state.selectedBlockId = null; state.selectedEdgeId = null;
      state.pendingConnectFrom = null;
      state.review.blockId = null; state.review.roomIndex = 0;
      sketchUndoStack = []; sketchRedoStack = [];
      render(true); setStatus('Reset all saved data.');
    });
  });

  /* Review panel */
  els.reviewRoomList.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-rv-idx]');
    if (!btn) return;
    state.review.roomIndex = Number(btn.getAttribute('data-rv-idx')) || 0;
    renderReview();
  });
  els.reviewPrev.addEventListener('click', function () { state.review.roomIndex = Math.max(0, state.review.roomIndex - 1); renderReview(); });
  els.reviewNext.addEventListener('click', function () {
    var b = findBlock(state.review.blockId);
    state.review.roomIndex = Math.min(getRooms(b).length - 1, state.review.roomIndex + 1);
    renderReview();
  });
  els.closeReview.addEventListener('click', function () { state.review.blockId = null; state.review.roomIndex = 0; renderReview(); });

  /* Confirm modal */
  els.confirmCancel.addEventListener('click', closeConfirm);
  els.confirmAccept.addEventListener('click', function () { var fn = state.confirmFn; closeConfirm(); if (typeof fn === 'function') fn(); });
  els.confirmModal.addEventListener('click', function (e) { if (e.target === els.confirmModal) closeConfirm(); });

  /* Query-string auto-import */
  var qp = new URLSearchParams(window.location.search);
  var qPages = (qp.get('pages') || '').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
  if (qPages.length) { els.importInput.value = qPages.join(','); importPages(qPages); }

  /* Edge card click — delegate */
  document.addEventListener('click', function (e) {
    var card = e.target.closest('.edge-card');
    if (!card || !card.getAttribute('data-sel-edge')) return;
    if (e.target.closest('[data-del-edge]')) return;
    state.selectedEdgeId = card.getAttribute('data-sel-edge');
    render(false);
  });

  /* Boot */
  setMode('selection');
  render(true);
})();
