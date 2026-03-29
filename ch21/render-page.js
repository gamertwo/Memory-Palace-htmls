const fs = require('fs');
const path = require('path');

function slugify(value) {
  return String(value || 'room')
    .toLowerCase()
    .replace(/<[^>]*>/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'room';
}

function escapeAttribute(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function render(page) {
  const facts = page.facts
    .map(
      (f) =>
        `          <div class="fact"><div class="k">${f.k}</div><div class="v">${f.v}</div></div>`
    )
    .join('\n');

  const rooms = page.rooms
    .map(
      (r, index) => {
        const roomTitle = r.title.replace(/<[^>]*>/g, '');
        const normalizedTagSource = roomTitle.replace(/^Room\s+\d+\s*:\s*/i, '');
        const roomId = `${page.pageKey.replace(/_/g, '-')}-room-${index + 1}`;
        const anchorId = `room-${roomId}`;
        return `          <article class="room" id="${anchorId}" data-room-id="${roomId}" data-room-title="${escapeAttribute(
          roomTitle
        )}" data-source-page="${page.file}" data-tags="${escapeAttribute(
          slugify(normalizedTagSource).split('-').filter(Boolean).slice(0, 4).join(',')
        )}">
            <h2>${r.title}</h2>
            <ul>
${r.items.map((i) => `              <li>${i}</li>`).join('\n')}
            </ul>
          </article>`;
      }
    )
    .join('\n');

  const movie = page.movieSteps
    .map(
      (s, i) =>
        `${i ? '          <div class="movie-arrow">&rarr;</div>\n' : ''}          <div class="movie-step"><div class="movie-peg">${s.peg}</div><h3>${s.title}</h3><p>${s.desc}</p></div>`
    )
    .join('\n');

  const flow = page.flowPills
    .map((pill) => `<span class="flow-pill">${pill}</span>`)
    .join('<span class="flow-join">&rarr;</span>');

  const askSection = page.askSection
    ? `
      <section class="panel"><div class="section-title">What You Are Asked To Find</div><div class="facts">
${page.askSection
  .map(
    (f) =>
      `          <div class="fact"><div class="k">${f.k}</div><div class="v">${f.v}</div></div>`
  )
  .join('\n')}
      </div></section>`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>${page.title}</title>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;900&family=Cinzel:wght@700;900&display=swap" rel="stylesheet" />
<script>MathJax={tex:{inlineMath:[['$','$']],displayMath:[['$$','$$']]},svg:{fontCache:'global'}};</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" async></script>
<link rel="stylesheet" href="study.css" />
<link rel="stylesheet" href="../linear-review.css" />
</head>
<body data-page-key="${page.pageKey}">
<main class="shell">
  <nav class="nav"><a href="index.html">Ch8 Index</a><a href="guide.html">Guide</a><a href="${page.prev}">${page.prevLabel}</a><a href="${page.next}">${page.nextLabel}</a></nav>
  <section class="hero"><div class="tag">${page.tag}</div><h1>${page.h1}</h1><p class="hero-sub">${page.hero}</p><div class="formula-block">${page.formula}</div><div class="tool-row"><a class="tool-btn" href="guide.html">Major Guide</a><button class="tool-btn" type="button" data-jump="movie-anchor">Solution Flow</button><button class="tool-btn" type="button" data-jump="request-anchor">Save Notes</button><a class="tool-btn" href="memory-palace-builder.html?pages=${page.file}">Open in Memory Builder</a></div></section>
  <div class="study-grid">
    <div class="main-stack">
${askSection}
      <section class="panel"><div class="section-title">Quick Data</div><div class="facts">
${facts}
      </div></section>
      <section class="panel"><div class="section-title">Rooms: Full Solution</div><p class="copy">These room blocks are the source records used by the Memory Palace Builder. Each room keeps a stable page-level id so the builder can link back here without changing the study content.</p><div class="rooms">
${rooms}
        </div><div class="mini"><h3>Key Shortcut</h3><p>${page.shortcut}</p></div><div class="mini"><h3>Why This Flow Matters</h3><p>${page.why}</p></div></section>
      <section class="panel" id="movie-anchor"><div class="section-title">Solution Flow</div><p class="copy">${page.movieIntro}</p><div class="movie-flow">
${movie}
        </div><div class="flow-line">${flow}</div></section>
      <section class="panel" id="request-anchor"><div class="section-title">Save Change Request</div><p class="copy">Type what you want changed on this page, press Enter, and save the note so you can mention the filename later.</p><form class="request-form" data-txt-save><label class="field-stack"><span>File Name</span><input class="request-input" data-note-filename type="text" value="${page.requestFile}" /></label><label class="field-stack"><span>Text</span><textarea class="request-textarea" data-note-body placeholder="${page.requestPlaceholder}"></textarea></label><div class="tool-row"><button class="tool-btn" type="submit">Save .txt</button></div><p class="request-note">Press Enter to save. Use Shift+Enter if you want a new line.</p><p class="memory-status" data-note-status>Nothing saved yet.</p></form></section>
    </div>
  </div>
</main>
<script src="study.js"></script>
<script src="../linear-review.js" defer></script>
</body>
</html>`;
}

function writePage(baseDir, page) {
  fs.writeFileSync(path.join(baseDir, page.file), render(page));
}

module.exports = { render, writePage };
