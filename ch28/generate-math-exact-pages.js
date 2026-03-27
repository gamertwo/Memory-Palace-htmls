const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const mathsDir = path.join(rootDir, "Maths");
const ch28Dir = __dirname;

function write(fileName, content) {
  fs.writeFileSync(path.join(mathsDir, fileName), content, "utf8");
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function exerciseFile(qNum) {
  return `math-ex37-q${qNum}-exact.html`;
}

function exerciseLabel(qNum) {
  return `Ex 3.7 Q${qNum}`;
}

const questions = [
  {
    n: 1,
    equation: `$$(x+y-10)\\,dx+(x-y-2)\\,dy=0$$`,
    answer: `$$\\frac{x^2}{2}+xy-10x-\\frac{y^2}{2}-2y=C$$`,
    M: `x+y-10`,
    N: `x-y-2`,
    dMy: `1`,
    dNx: `1`,
    integral: `F(x,y)=\\int (x+y-10)\\,dx=\\frac{x^2}{2}+xy-10x+g(y)`,
    match: `F_y=x+g'(y)=x-y-2`,
    gPrime: `g'(y)=-y-2`,
    g: `g(y)=-\\frac{y^2}{2}-2y`,
    finalPotential: `F(x,y)=\\frac{x^2}{2}+xy-10x-\\frac{y^2}{2}-2y`,
    shortcut: `For simple polynomial exact equations, exactness check plus one integration is usually the entire job.`,
    why: `This is the cleanest possible exact-equation template: identify M and N, match mixed partials, integrate once, then repair the missing y-part.`,
  },
  {
    n: 2,
    equation: `$$(y^2-x^2)\\,dx+2xy\\,dy=0$$`,
    answer: `$$-\\frac{x^3}{3}+xy^2=C$$`,
    M: `y^2-x^2`,
    N: `2xy`,
    dMy: `2y`,
    dNx: `2y`,
    integral: `F(x,y)=\\int (y^2-x^2)\\,dx=xy^2-\\frac{x^3}{3}+g(y)`,
    match: `F_y=2xy+g'(y)=2xy`,
    gPrime: `g'(y)=0`,
    g: `g(y)=\\text{constant}`,
    finalPotential: `F(x,y)=xy^2-\\frac{x^3}{3}`,
    shortcut: `If the y-only correction disappears, stop immediately. Do not invent extra terms.`,
    why: `This question is a good reminder that the missing function can collapse to zero after the comparison step.`,
  },
  {
    n: 3,
    equation: `$$\\left(1+3e^{x/y}\\right)dx+3e^{x/y}\\left(1-\\frac{x}{y}\\right)dy=0$$`,
    answer: `$$x+3ye^{x/y}=C$$`,
    M: `1+3e^{x/y}`,
    N: `3e^{x/y}\\left(1-\\frac{x}{y}\\right)`,
    dMy: `-\\frac{3x}{y^2}e^{x/y}`,
    dNx: `-\\frac{3x}{y^2}e^{x/y}`,
    integral: `F(x,y)=\\int \\left(1+3e^{x/y}\\right)dx=x+3ye^{x/y}+g(y)`,
    match: `F_y=3e^{x/y}\\left(1-\\frac{x}{y}\\right)+g'(y)=N`,
    gPrime: `g'(y)=0`,
    g: `g(y)=\\text{constant}`,
    finalPotential: `F(x,y)=x+3ye^{x/y}`,
    shortcut: `If an antiderivative in x already recreates the textbook answer shape, try differentiating it before doing anything longer.`,
    why: `This one trains exact recognition around a non-polynomial term without changing the exact-equation method itself.`,
  },
  {
    n: 4,
    equation: `$$(2x-y)\\,dx=(x-y)\\,dy$$`,
    answer: `$$x^2-xy+\\frac{y^2}{2}=C$$`,
    M: `2x-y`,
    N: `y-x`,
    standardForm: `$$(2x-y)\\,dx+(y-x)\\,dy=0$$`,
    dMy: `-1`,
    dNx: `-1`,
    integral: `F(x,y)=\\int (2x-y)\\,dx=x^2-xy+g(y)`,
    match: `F_y=-x+g'(y)=y-x`,
    gPrime: `g'(y)=y`,
    g: `g(y)=\\frac{y^2}{2}`,
    finalPotential: `F(x,y)=x^2-xy+\\frac{y^2}{2}`,
    shortcut: `Standardize the equation into Mdx + Ndy = 0 first if the dx and dy pieces start on opposite sides.`,
    why: `This page reinforces the habit of rewriting the differential form before checking exactness.`,
  },
  {
    n: 5,
    equation: `$$(y\\sec^2 x+\\sec x\\tan x)\\,dx+(\\tan x+2y)\\,dy=0$$`,
    answer: `$$y\\tan x+\\sec x+y^2=C$$`,
    M: `y\\sec^2 x+\\sec x\\tan x`,
    N: `\\tan x+2y`,
    dMy: `\\sec^2 x`,
    dNx: `\\sec^2 x`,
    integral: `F(x,y)=\\int \\left(y\\sec^2 x+\\sec x\\tan x\\right)dx=y\\tan x+\\sec x+g(y)`,
    match: `F_y=\\tan x+g'(y)=\\tan x+2y`,
    gPrime: `g'(y)=2y`,
    g: `g(y)=y^2`,
    finalPotential: `F(x,y)=y\\tan x+\\sec x+y^2`,
    shortcut: `Separate the x-integration mentally: integrate the y-multiple first, then the pure trig term.`,
    why: `This question is useful because the exact method stays the same even when the x-integration is trigonometric.`,
  },
  {
    n: 6,
    equation: `$$(ax+hy+g)\\,dx+(hx+by+f)\\,dy=0$$`,
    answer: `$$\\frac{a x^2}{2}+hxy+\\frac{b y^2}{2}+gx+fy=C$$`,
    M: `ax+hy+g`,
    N: `hx+by+f`,
    dMy: `h`,
    dNx: `h`,
    integral: `F(x,y)=\\int (ax+hy+g)\\,dx=\\frac{ax^2}{2}+hxy+gx+g(y)`,
    match: `F_y=hx+g'(y)=hx+by+f`,
    gPrime: `g'(y)=by+f`,
    g: `g(y)=\\frac{by^2}{2}+fy`,
    finalPotential: `F(x,y)=\\frac{ax^2}{2}+hxy+\\frac{by^2}{2}+gx+fy`,
    shortcut: `For symmetric linear forms like this, exactness is usually built in. Go straight to the potential function.`,
    why: `This page packages the exact method in parameter form, which helps you see the structure behind many special cases.`,
  },
  {
    n: 7,
    equation: `$$(x^4-2xy^2+y^4)\\,dx-(2x^2y-4xy^3+\\sin y)\\,dy=0$$`,
    answer: `$$\\frac{x^5}{5}-x^2y^2+xy^4+\\cos y=C$$`,
    M: `x^4-2xy^2+y^4`,
    N: `-2x^2y+4xy^3-\\sin y`,
    dMy: `-4xy+4y^3`,
    dNx: `-4xy+4y^3`,
    integral: `F(x,y)=\\int (x^4-2xy^2+y^4)\\,dx=\\frac{x^5}{5}-x^2y^2+xy^4+g(y)`,
    match: `F_y=-2x^2y+4xy^3+g'(y)=N`,
    gPrime: `g'(y)=-\\sin y`,
    g: `g(y)=\\cos y`,
    finalPotential: `F(x,y)=\\frac{x^5}{5}-x^2y^2+xy^4+\\cos y`,
    shortcut: `Do not panic when one lone trig term appears. It usually becomes the missing y-only correction.`,
    why: `This page shows that exact equations can mix polynomial structure with one isolated special term and still stay routine.`,
  },
  {
    n: 8,
    equation: `$$(2xy+e^y)\\,dx+(x^2+xe^y)\\,dy=0$$`,
    answer: `$$x^2y+xe^y=C$$`,
    M: `2xy+e^y`,
    N: `x^2+xe^y`,
    dMy: `2x+e^y`,
    dNx: `2x+e^y`,
    integral: `F(x,y)=\\int (2xy+e^y)\\,dx=x^2y+xe^y+g(y)`,
    match: `F_y=x^2+xe^y+g'(y)=x^2+xe^y`,
    gPrime: `g'(y)=0`,
    g: `g(y)=\\text{constant}`,
    finalPotential: `F(x,y)=x^2y+xe^y`,
    shortcut: `When e^y behaves like a constant during x-integration, the exact method stays completely mechanical.`,
    why: `This one is a good practice page for remembering which symbols are treated as constants during the first integration.`,
  },
  {
    n: 9,
    equation: `$$(2xy+2y^2e^{2x})\\,dx+(x^2+2ye^{2x})\\,dy=0$$`,
    answer: `$$x^2y+y^2e^{2x}=C$$`,
    M: `2xy+2y^2e^{2x}`,
    N: `x^2+2ye^{2x}`,
    dMy: `2x+4ye^{2x}`,
    dNx: `2x+4ye^{2x}`,
    integral: `F(x,y)=\\int (2xy+2y^2e^{2x})\\,dx=x^2y+y^2e^{2x}+g(y)`,
    match: `F_y=x^2+2ye^{2x}+g'(y)=x^2+2ye^{2x}`,
    gPrime: `g'(y)=0`,
    g: `g(y)=\\text{constant}`,
    finalPotential: `F(x,y)=x^2y+y^2e^{2x}`,
    shortcut: `Watch for an exponential in x multiplying a pure y-factor. It often integrates cleanly with respect to x inside the potential function.`,
    why: `This page is a strong test of staying calm with mixed polynomial-exponential exact equations.`,
  },
  {
    n: 10,
    equation: `$$\\left[y\\left(1+\\frac{1}{x}\\right)+\\cos y\\right]dx+(x+\\log x-x\\sin y)\\,dy=0$$`,
    answer: `$$y(x+\\log x)+x\\cos y=C$$`,
    M: `y\\left(1+\\frac{1}{x}\\right)+\\cos y`,
    N: `x+\\log x-x\\sin y`,
    dMy: `1+\\frac{1}{x}-\\sin y`,
    dNx: `1+\\frac{1}{x}-\\sin y`,
    integral: `F(x,y)=\\int \\left[y\\left(1+\\frac{1}{x}\\right)+\\cos y\\right]dx=xy+y\\log x+x\\cos y+g(y)`,
    match: `F_y=x+\\log x-x\\sin y+g'(y)=x+\\log x-x\\sin y`,
    gPrime: `g'(y)=0`,
    g: `g(y)=\\text{constant}`,
    finalPotential: `F(x,y)=xy+y\\log x+x\\cos y`,
    shortcut: `If you see y multiplying both 1 and 1/x, integrate the x-pieces separately and keep the y outside until the end.`,
    why: `This final page is a good mixed-term exact equation with logarithmic and trigonometric pieces still handled by the same five-step method.`,
  },
];

function pageHtml(q, prevFile, prevLabel, nextFile, nextLabel) {
  const standardSection = q.standardForm
    ? `<div class="fact"><div class="k">Standard Form</div><div class="v">${q.standardForm}</div></div>`
    : "";
  const fileName = exerciseFile(q.n);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Exercise 3.7 Question ${q.n} | Exact Differential Equations</title>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;900&family=Cinzel:wght@700;900&display=swap" rel="stylesheet" />
<script>MathJax={tex:{inlineMath:[['$','$']],displayMath:[['$$','$$']]},svg:{fontCache:'global'}};</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" async></script>
<link rel="stylesheet" href="exact-study.css" />
<link rel="stylesheet" href="../linear-review.css" />
</head>
<body data-page-key="math_ex37_q${q.n}">
<main class="shell">
  <nav class="nav"><a href="math-exact-index.html">Ex 3.7 Index</a><a href="math-exact-guide.html">Guide</a><a href="${prevFile}">Prev: ${prevLabel}</a><a href="${nextFile}">Next: ${nextLabel}</a></nav>
  <section class="hero"><div class="tag">Exercise 3.7</div><h1>Exercise 3.7 Question ${q.n}</h1><p class="hero-sub">This page trains the exact-equation method in the same memory-builder format as the physics set. The key route never changes: identify $M$ and $N$, verify exactness, integrate $M$ with respect to $x$, recover the missing $g(y)$ term, and write the final potential function equal to a constant.</p><div class="formula-block">${q.equation}<br/><br/>${q.answer}</div><div class="tool-row"><a class="tool-btn" href="math-exact-guide.html">Exact Guide</a><button class="tool-btn" type="button" data-jump="movie-anchor">Solution Flow</button><button class="tool-btn" type="button" data-jump="request-anchor">Save Notes</button><a class="tool-btn" href="math-exact-memory-builder.html?pages=${fileName}">Open in Memory Builder</a></div></section>
  <div class="study-grid">
    <div class="main-stack">
      <section class="panel"><div class="section-title">Quick Data</div><div class="facts">
        <div class="fact"><div class="k">M(x,y)</div><div class="v">$$M=${q.M}$$</div></div>
        <div class="fact"><div class="k">N(x,y)</div><div class="v">$$N=${q.N}$$</div></div>
        <div class="fact"><div class="k">Exactness Check</div><div class="v">$$M_y=${q.dMy},\\qquad N_x=${q.dNx}$$</div></div>
        ${standardSection}
      </div></section>
      <section class="panel"><div class="section-title">Rooms: Full Solution</div><div class="rooms">
        <article class="room" id="room-math-ex37-q${q.n}-room-1" data-room-id="math-ex37-q${q.n}-room-1" data-room-title="Room 1: Identify M and N" data-source-page="${fileName}" data-tags="identify,m,n,exact">
          <h2>Room 1: Identify $M$ and $N$</h2>
          <ul>
            <li>Write the equation in the standard form $$M(x,y)\\,dx+N(x,y)\\,dy=0.$$</li>
            <li>Here $$M=${q.M}$$ and $$N=${q.N}.$$</li>
            <li>The exact-equation method starts only after that identification is clean.</li>
          </ul>
        </article>
        <article class="room" id="room-math-ex37-q${q.n}-room-2" data-room-id="math-ex37-q${q.n}-room-2" data-room-title="Room 2: Verify Exactness" data-source-page="${fileName}" data-tags="verify,exactness,partials,check">
          <h2>Room 2: Verify Exactness</h2>
          <ul>
            <li>Differentiate $$M$$ with respect to $$y$$ and $$N$$ with respect to $$x.$$</li>
            <li>We get $$M_y=${q.dMy}$$ and $$N_x=${q.dNx}.$$</li>
            <li>Since these match, the equation is exact.</li>
          </ul>
        </article>
        <article class="room" id="room-math-ex37-q${q.n}-room-3" data-room-id="math-ex37-q${q.n}-room-3" data-room-title="Room 3: Integrate M with Respect to x" data-source-page="${fileName}" data-tags="integrate,m,with,respect">
          <h2>Room 3: Integrate $M$ with Respect to $x$</h2>
          <ul>
            <li>Build the potential function by integrating $$M$$ with respect to $$x,$$ treating $$y$$ as a constant.</li>
            <li>That gives ${`$$${q.integral}$$`}.</li>
            <li>Why do we add $$g(y)$$? Because when we integrate with respect to $$x,$$ we only recover terms that actually change when x changes.</li>
            <li>Any part of the answer made only of $$y$$ behaves like a constant during x-integration, so ordinary integration in $$x$$ cannot detect it.</li>
            <li>That invisible leftover is written as $$g(y).$$ It stands for an unknown function of $$y$$ only that still has to be recovered later.</li>
          </ul>
        </article>
        <article class="room" id="room-math-ex37-q${q.n}-room-4" data-room-id="math-ex37-q${q.n}-room-4" data-room-title="Room 4: Recover the Missing g(y) Term" data-source-page="${fileName}" data-tags="recover,missing,gy,term">
          <h2>Room 4: Recover the Missing $g(y)$ Term</h2>
          <ul>
            <li>Now differentiate the candidate potential with respect to $$y.$$ This is the step that exposes the hidden $$g(y)$$ term.</li>
            <li>Since $$\\frac{d}{dy}[g(y)]=g'(y),$$ the unknown function reappears as a visible derivative when we compute $$F_y.$$</li>
            <li>Matching with $$N$$ gives ${`$$${q.match}$$`} and therefore ${`$$${q.gPrime}$$`}.</li>
            <li>Integrating that derivative with respect to $$y$$ gives the missing correction: ${`$$${q.g}$$`}.</li>
            <li>So Room 3 hides the y-only piece as $$g(y),$$ and Room 4 brings it back by differentiating with respect to $$y.$$</li>
          </ul>
        </article>
        <article class="room" id="room-math-ex37-q${q.n}-room-5" data-room-id="math-ex37-q${q.n}-room-5" data-room-title="Room 5: Write the Final Potential Function" data-source-page="${fileName}" data-tags="write,final,potential,function">
          <h2>Room 5: Write the Final Potential Function</h2>
          <ul>
            <li>Substitute the recovered correction back into the potential function.</li>
            <li>The final potential is ${`$$${q.finalPotential}$$`}.</li>
            <li>So the required answer is ${q.answer}.</li>
          </ul>
        </article>
      </div><div class="mini"><h3>Key Shortcut</h3><p>${q.shortcut}</p></div><div class="mini"><h3>Why This Flow Matters</h3><p>${q.why}</p></div></section>
      <section class="panel" id="movie-anchor"><div class="section-title">Solution Flow</div><p class="copy">Run the same five-stop exact-equation route every time: identify, verify, integrate, repair the missing function, then finish the potential.</p><div class="movie-flow">
        <div class="movie-step"><div class="movie-peg">21 Net</div><h3>Catch $M$ and $N$</h3><p>The net separates the equation into the $$dx$$ part and the $$dy$$ part.</p></div>
        <div class="movie-arrow">&rarr;</div>
        <div class="movie-step"><div class="movie-peg">67 Chalk</div><h3>Mark the Exactness Check</h3><p>Chalk writes $$M_y=N_x$$ so the method is allowed.</p></div>
        <div class="movie-arrow">&rarr;</div>
        <div class="movie-step"><div class="movie-peg">28 Knife</div><h3>Cut the x-Integration</h3><p>The knife integrates $$M$$ with respect to $$x$$ and leaves a loose $$g(y).$$</p></div>
        <div class="movie-arrow">&rarr;</div>
        <div class="movie-step"><div class="movie-peg">31 Mat</div><h3>Lay Down the y-Match</h3><p>The mat compares $$F_y$$ with $$N$$ and recovers $$g'(y).$$</p></div>
        <div class="movie-arrow">&rarr;</div>
        <div class="movie-step"><div class="movie-peg">71 Coat</div><h3>Wear the Final Potential</h3><p>The coat wraps the missing term back on and closes the answer.</p></div>
      </div><div class="flow-line"><span class="flow-pill">Identify</span><span class="flow-join">&rarr;</span><span class="flow-pill">Verify exactness</span><span class="flow-join">&rarr;</span><span class="flow-pill">Integrate $$M$$</span><span class="flow-join">&rarr;</span><span class="flow-pill">Recover $$g(y)$$</span><span class="flow-join">&rarr;</span><span class="flow-pill">Final answer</span></div></section>
      <section class="panel" id="request-anchor"><div class="section-title">Save Change Request</div><p class="copy">Type what you want changed on this page, press Enter, and save the note.</p><form class="request-form" data-txt-save><label class="field-stack"><span>File Name</span><input class="request-input" data-note-filename type="text" value="math-ex37-q${q.n}-request.txt" /></label><label class="field-stack"><span>Text</span><textarea class="request-textarea" data-note-body placeholder="Example: Add one more reminder about how the missing g(y) term is recovered in Exercise 3.7 Question ${q.n}."></textarea></label><div class="tool-row"><button class="tool-btn" type="submit">Save .txt</button></div><p class="request-note">Press Enter to save. Use Shift+Enter if you want a new line.</p><p class="memory-status" data-note-status>Nothing saved yet.</p></form></section>
    </div>
  </div>
</main>
<script src="exact-study.js"></script>
<script src="../linear-review.js" defer></script>
</body>
</html>`;
}

function buildIndex() {
  const cards = questions
    .map(
      (q) => `
        <a class="topic-card" href="${exerciseFile(q.n)}">
          <div class="topic-kicker">Ex 3.7 Q${q.n}</div>
          <h3>Exercise 3.7 Question ${q.n}</h3>
          <p>${q.equation.replace(/\$\$/g, "")}</p>
        </a>`
    )
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Exercise 3.7 Exact Differential Equations | Memory Set</title>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;900&family=Cinzel:wght@700;900&display=swap" rel="stylesheet" />
<script>MathJax={tex:{inlineMath:[['$','$']],displayMath:[['$$','$$']]},svg:{fontCache:'global'}};</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" async></script>
<link rel="stylesheet" href="exact-study.css" />
</head>
<body>
<main class="shell">
  <section class="hero">
    <div class="tag">Maths Folder</div>
    <h1>Exercise 3.7 Exact Differential Equations</h1>
    <p class="hero-sub">This mini-system lives separately inside the Maths folder. It has its own guide, its own memory builder, and one page for each of the 10 exact-equation questions from your screenshot, now labeled in Exercise 3.7 order.</p>
    <div class="tool-row">
      <a class="tool-btn" href="math-exact-guide.html">Exact Guide</a>
      <a class="tool-btn" href="math-exact-memory-builder.html">Exact Memory Builder</a>
      <a class="tool-btn" href="math-index.html">Back to Math Hub</a>
    </div>
  </section>
  <div class="study-grid">
    <section class="panel">
      <div class="section-title">Exercise 3.7 Question Map</div>
      <div class="topic-grid">
${cards}
      </div>
    </section>
    <section class="panel">
      <div class="section-title">Core Method Route</div>
      <div class="flow-line">
        <span class="flow-pill">Write $$Mdx+Ndy=0$$</span>
        <span class="flow-join">&rarr;</span>
        <span class="flow-pill">Check $$M_y=N_x$$</span>
        <span class="flow-join">&rarr;</span>
        <span class="flow-pill">Integrate $$M$$ in $$x$$</span>
        <span class="flow-join">&rarr;</span>
        <span class="flow-pill">Find $$g(y)$$</span>
        <span class="flow-join">&rarr;</span>
        <span class="flow-pill">Write $$F(x,y)=C$$</span>
      </div>
      <p class="copy" style="margin-top:.9rem">All 10 pages use this exact same memory path so the method stays stable while only the algebra changes.</p>
    </section>
  </div>
</main>
<script src="exact-study.js"></script>
</body>
</html>`;
}

function buildGuide() {
  const stations = questions
    .map(
      (q, index) => `
        <div class="station"><h3>Ex 3.7 Q${q.n}</h3><p><a href="${exerciseFile(q.n)}">Open Exercise 3.7 Question ${q.n}</a></p></div>${
          index < questions.length - 1
            ? `<div class="transition"><h3>Then</h3><p>Move to the next exact equation without changing the five-step method.</p></div>`
            : ""
        }`
    )
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Exercise 3.7 Exact Guide</title>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;900&family=Cinzel:wght@700;900&display=swap" rel="stylesheet" />
<script>MathJax={tex:{inlineMath:[['$','$']],displayMath:[['$$','$$']]},svg:{fontCache:'global'}};</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" async></script>
<link rel="stylesheet" href="exact-study.css" />
</head>
<body>
<main class="shell">
  <nav class="nav"><a href="math-exact-index.html">Ex 3.7 Index</a><a href="math-exact-memory-builder.html">Exact Memory Builder</a><a href="math-index.html">Math Hub</a></nav>
  <section class="hero">
    <div class="tag">Exercise 3.7 Guide</div>
    <h1>How To Study Exercise 3.7</h1>
    <p class="hero-sub">The win condition here is not memorizing 10 unrelated answers. It is forcing the exact-equation method to feel automatic. Every page repeats the same five-step structure so the method, not the individual algebra, becomes the thing you remember under pressure.</p>
    <div class="formula-block">$$M(x,y)\\,dx+N(x,y)\\,dy=0,\\qquad M_y=N_x,\\qquad F_x=M,\\qquad F_y=N$$</div>
  </section>
  <div class="study-grid two-col">
    <div class="main-stack">
      <section class="panel">
        <div class="section-title">Core Route</div>
        <div class="flow-grid">
          <div class="flow-step"><h3>1. Standardize</h3><p>Rewrite the equation into $$Mdx+Ndy=0$$ if the terms start on opposite sides.</p></div>
          <div class="flow-step"><h3>2. Test</h3><p>Check exactness with $$M_y$$ and $$N_x.$$ If they match, keep going.</p></div>
          <div class="flow-step"><h3>3. Integrate</h3><p>Integrate $$M$$ with respect to $$x$$ and add the missing $$g(y).$$</p></div>
          <div class="flow-step"><h3>4. Repair</h3><p>Differentiate your candidate with respect to $$y$$ and compare with $$N$$ to recover $$g'(y).$$</p></div>
          <div class="flow-step"><h3>5. Finish</h3><p>Substitute the missing correction back in and write the potential function equal to a constant.</p></div>
        </div>
      </section>
      <section class="panel">
        <div class="section-title">What To Memorize</div>
        <div class="facts">
          <div class="fact"><div class="k">Trigger</div><div class="v">If $$M_y=N_x,$$ think exact potential.</div></div>
          <div class="fact"><div class="k">Main Unknown</div><div class="v">The only missing piece after the x-integration is $$g(y).$$</div></div>
          <div class="fact"><div class="k">Finishing Rule</div><div class="v">Exact equations end as $$F(x,y)=C.$$</div></div>
        </div>
      </section>
    </div>
    <aside class="palace-sidebar">
      <div class="section-title">Question Order</div>
      <div class="path">
${stations}
      </div>
    </aside>
  </div>
</main>
<script src="exact-study.js"></script>
</body>
</html>`;
}

function buildBuilderSeed() {
  return `(function (global) {
  function buildDefaultState() {
    return {
      selectedPalaceId: 'palace-math-exact',
      palaces: [
        {
          id: 'palace-math-exact',
          name: 'Math Exact Equations Palace',
          importedPages: [],
          importedRooms: [],
          blocks: [],
          edges: [],
          sketches: [],
          viewport: { zoom: 1 }
        }
      ]
    };
  }

  global.MemoryBuilderSeed = {
    presetRooms: [],
    buildDefaultState: buildDefaultState
  };
})(window);
`;
}

function buildMathHubSidebarItems() {
  return questions
    .map((q, index) => {
      const colors = ["#00e5ff", "#ff5c7a", "#2bff7f", "#ffd166", "#b06aff", "#00d1ff", "#ff8c42"];
      return `        <a class="sb-item" href="${exerciseFile(q.n)}"><span><div class="dot" style="color:${colors[index % colors.length]}"></div></span> ${exerciseLabel(q.n)}</a>`;
    })
    .join("\n");
}

function buildMathHubCards() {
  return questions
    .map((q, index) => {
      const colors = ["#00e5ff", "#ff5c7a", "#2bff7f", "#ffd166", "#b06aff", "#00d1ff", "#ff8c42"];
      return `                <div class="problem-card" style="--pc:${colors[index % colors.length]}">
                    <div class="pc-stripe"></div>
                    <div class="pc-body">
                        <div class="pc-header"><div><div class="pc-label">${exerciseLabel(q.n)}</div><div class="pc-title">Exact Differential Equation ${q.n}</div></div><div class="pc-icon">${q.n}</div></div>
                        <div class="pc-eq">${q.equation}</div>
                        <div class="pc-facts">
                            <div class="pc-fact"><span>Method</span><b>Exact equation</b></div>
                            <div class="pc-fact"><span>Finish</span><b>Potential function</b></div>
                        </div>
                        <div class="pc-actions"><a class="btn-outline" href="${exerciseFile(q.n)}" style="--pc:${colors[index % colors.length]}">Open Page -></a></div>
                    </div>
                </div>`;
    })
    .join("\n\n");
}

function updateMathIndex() {
  const mathIndexPath = path.join(mathsDir, "math-index.html");
  let html = fs.readFileSync(mathIndexPath, "utf8");

  const sidebarStart = "        <a class=\"sb-item\" href=\"math-ex36-q10-bernoulli.html\"><span><div class=\"dot\" style=\"color:#ff8c42\"></div></span> Ex 3.6 Q10</a>";
  const sidebarBlock = `${sidebarStart}\n${buildMathHubSidebarItems()}`;
  html = html.replace(
    /        <a class="sb-item" href="math-ex36-q10-bernoulli\.html"><span><div class="dot" style="color:#ff8c42"><\/div><\/span> Ex 3\.6 Q10<\/a>(?:\r?\n        <a class="sb-item" href="math-ex37-q\d+-exact\.html"><span><div class="dot" style="color:[^"]+"><\/div><\/span> Ex 3\.7 Q\d+<\/a>)*/m,
    sidebarBlock
  );

  const sectionBlock = `
            <div class="section-head">Exercise 3.7 Exact Set</div>
            <div class="problems-grid">
${buildMathHubCards()}
            </div>
`;

  if (html.includes("            <div class=\"section-head\">Exercise 3.7 Exact Set</div>")) {
    html = html.replace(
      /            <div class="section-head">Exercise 3\.7 Exact Set<\/div>[\s\S]*?(?=\r?\n        <\/div>\r?\n    <\/main>)/m,
      sectionBlock.trimEnd()
    );
  } else {
    html = html.replace(/\r?\n        <\/div>\r?\n    <\/main>/m, `\n${sectionBlock}\n        </div>\n    </main>`);
  }

  fs.writeFileSync(mathIndexPath, html, "utf8");
}

function buildBuilderFiles() {
  const builderHtmlSrc = fs.readFileSync(path.join(ch28Dir, "memory-palace-builder.html"), "utf8");
  const builderJsSrc = fs.readFileSync(path.join(ch28Dir, "memory-builder.js"), "utf8");
  const roomExtractorSrc = fs.readFileSync(path.join(ch28Dir, "room-extractor.js"), "utf8");

  const builderHtml = builderHtmlSrc
    .replace(/Chapter 28 Memory Palace Builder/g, "Math Exact Equations Memory Palace Builder")
    .replace(/memory-builder-seed\.js/g, "math-exact-memory-builder-seed.js")
    .replace(/memory-builder\.js/g, "math-exact-memory-builder.js")
    .replace(/room-extractor\.js/g, "math-exact-room-extractor.js");

  const builderJs = builderJsSrc
    .replace(/memory-palace-builder-ch28-v1/g, "memory-palace-builder-math-exact-v1")
    .replace(/function resolveChapterPath\(ref\) \{[\s\S]*?\n  \}/, `function resolveChapterPath(ref) {
    if (!ref) return '#';
    var value = String(ref);
    if (/^(?:[a-z]+:)?\\/\\//i.test(value) || /^[a-z]+:/i.test(value) || value[0] === '#' || value[0] === '/') {
      return value;
    }
    if (value.indexOf('../') === 0 || value.indexOf('./') === 0) return value;
    return value.replace(/^\\/+/, '');
  }`);

  write("math-exact-memory-builder.html", builderHtml);
  write("math-exact-memory-builder.js", builderJs);
  write("math-exact-memory-builder-seed.js", buildBuilderSeed());
  write("math-exact-room-extractor.js", roomExtractorSrc);
}

function buildAssets() {
  fs.copyFileSync(path.join(ch28Dir, "study.css"), path.join(mathsDir, "exact-study.css"));
  const exactStudyJs = fs
    .readFileSync(path.join(ch28Dir, "study.js"), "utf8")
    .replace(/memory-palace-builder\.html/g, "math-exact-memory-builder.html");
  fs.writeFileSync(path.join(mathsDir, "exact-study.js"), exactStudyJs, "utf8");
}

function main() {
  buildAssets();
  buildBuilderFiles();
  write("math-exact-index.html", buildIndex());
  write("math-exact-guide.html", buildGuide());

  questions.forEach((q, index) => {
    const prevFile = index === 0 ? "math-exact-index.html" : exerciseFile(questions[index - 1].n);
    const prevLabel = index === 0 ? "Ex 3.7 Index" : exerciseLabel(questions[index - 1].n);
    const nextFile = index === questions.length - 1 ? "math-exact-index.html" : exerciseFile(questions[index + 1].n);
    const nextLabel = index === questions.length - 1 ? "Ex 3.7 Index" : exerciseLabel(questions[index + 1].n);
    write(exerciseFile(q.n), pageHtml(q, prevFile, prevLabel, nextFile, nextLabel));
  });

  updateMathIndex();
}

main();
