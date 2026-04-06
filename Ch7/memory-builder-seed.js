(function (global) {
  var DEFAULT_STATE = {
  "selectedPalaceId": "palace-ch7-master-corridor",
  "palaces": [
    {
      "id": "palace-ch7-master-corridor",
      "name": "Chapter 7 Master Circuit Corridor",
      "importedPages": [
        "rlc-ex722-example.html",
        "rlc-design723.html",
        "rlc-ex724-example.html",
        "rlc-design725-example.html",
        "rlc-ex725.html",
        "rlc-ex726-example.html",
        "rlc-ex726.html",
        "rlc-design727-example.html",
        "rlc-ex727.html",
        "rlc-ex728.html",
        "rlc-ex729.html",
        "rlc-ex730.html",
        "rlc-ex731.html",
        "rlc-design732.html",
        "rlc-ex733.html",
        "rlc-eval734.html",
        "rlc-design735.html"
      ],
      "importedRooms": [
        {
          "id": "ch7-room-722-a",
          "anchorId": "room-ch7-722-a",
          "title": "Subroom 7-22.1: Setup Lens | Write the Differential Equation to Read the Forced Response",
          "summary": "For the capacitor voltage, the step-driven equation is Then The input is a constant step of 10 V, so the steady forced response is simply",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> A series RLC circuit in zero state is driven by a step input. Find the capacitor voltage for $$t\\ge 0.$$ The fastest route is to separate the forced response from the underdamped natural response, then use the zero-state initial conditions to solve the constants.</p><p><strong>Scene extension:</strong> Gold crown on a balcony, then two colored ribbons under one fading roof. This chamber covers Write the Differential Equation to Read the Forced Response.</p><h4>Worked Detail 1: Room 1: Write the Differential Equation</h4><ul><li>For the capacitor voltage, the step-driven equation is</li><li>$$10^{-6}\\frac{d^2v_C}{dt^2}+0.5\\times 10^{-3}\\frac{dv_C}{dt}+v_C(t)=10,\\qquad t\\ge 0.$$</li></ul><h4>Worked Detail 2: Room 2: Read the Forced Response</h4><ul><li>The input is a constant step of 10 V, so the steady forced response is simply</li><li>$$v_{CF}(t)=10.$$</li></ul><p><strong>Carry rule:</strong> For this step response, the entire chain is: constant input gives the forced 10 V, the normalized homogeneous equation gives the underdamped natural part, and the zero-state conditions lock the two constants.</p>",
          "sourcePage": "rlc-ex722-example.html",
          "sourcePageTitle": "Example 7-22 | Series Step Response of Capacitor Voltage",
          "sourceUrl": "rlc-ex722-example.html",
          "tags": [
            "series",
            "step",
            "forced",
            "underdamped"
          ],
          "order": 0
        },
        {
          "id": "ch7-room-722-b",
          "anchorId": "room-ch7-722-b",
          "title": "Subroom 7-22.2: Response Frame | Normalize the Homogeneous Equation to Identify the Damping Case",
          "summary": "The homogeneous part is Then From $$2\\zeta\\omega_0=500,$$ we get $$\\zeta=0.25.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> A series RLC circuit in zero state is driven by a step input. Find the capacitor voltage for $$t\\ge 0.$$ The fastest route is to separate the forced response from the underdamped natural response, then use the zero-state initial conditions to solve the constants.</p><p><strong>Scene extension:</strong> Gold crown on a balcony, then two colored ribbons under one fading roof. This chamber covers Normalize the Homogeneous Equation to Identify the Damping Case.</p><h4>Worked Detail 1: Room 3: Normalize the Homogeneous Equation</h4><ul><li>The homogeneous part is</li><li>$$\\frac{d^2v_{CN}}{dt^2}+500\\frac{dv_{CN}}{dt}+10^6v_{CN}(t)=0.$$</li><li>Comparing with the standard second-order form gives</li><li>$$\\omega_0=1000,\\qquad 2\\zeta\\omega_0=500.$$</li></ul><h4>Worked Detail 2: Room 4: Identify the Damping Case</h4><ul><li>From $$2\\zeta\\omega_0=500,$$ we get $$\\zeta=0.25.$$</li><li>Since $$\\zeta&lt;1,$$ the response is underdamped.</li><li>So</li><li>$$\\alpha=\\zeta\\omega_0=250,\\qquad \\omega_d=\\omega_0\\sqrt{1-\\zeta^2}=968.$$</li></ul><p><strong>Carry rule:</strong> For this step response, the entire chain is: constant input gives the forced 10 V, the normalized homogeneous equation gives the underdamped natural part, and the zero-state conditions lock the two constants.</p>",
          "sourcePage": "rlc-ex722-example.html",
          "sourcePageTitle": "Example 7-22 | Series Step Response of Capacitor Voltage",
          "sourceUrl": "rlc-ex722-example.html",
          "tags": [
            "series",
            "step",
            "forced",
            "underdamped"
          ],
          "order": 1
        },
        {
          "id": "ch7-room-722-c",
          "anchorId": "room-ch7-722-c",
          "title": "Subroom 7-22.3: Constraint Forge | Write the Natural Response to Apply the Zero-State Initial Conditions",
          "summary": "The underdamped natural response is Then Because the circuit starts in zero state,",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> A series RLC circuit in zero state is driven by a step input. Find the capacitor voltage for $$t\\ge 0.$$ The fastest route is to separate the forced response from the underdamped natural response, then use the zero-state initial conditions to solve the constants.</p><p><strong>Scene extension:</strong> Gold crown on a balcony, then two colored ribbons under one fading roof. This chamber covers Write the Natural Response to Apply the Zero-State Initial Conditions.</p><h4>Worked Detail 1: Room 5: Write the Natural Response</h4><ul><li>The underdamped natural response is</li><li>$$v_{CN}(t)=K_1e^{-250t}\\cos 968t+K_2e^{-250t}\\sin 968t.$$</li><li>The full solution is</li><li>$$v_C(t)=10+K_1e^{-250t}\\cos 968t+K_2e^{-250t}\\sin 968t.$$</li></ul><h4>Worked Detail 2: Room 6: Apply the Zero-State Initial Conditions</h4><ul><li>Because the circuit starts in zero state,</li><li>$$v_C(0)=0,\\qquad \\left.\\frac{dv_C}{dt}\\right|_0=0.$$</li><li>From $$v_C(0)=0,$$</li><li>$$0=10+K_1,\\qquad K_1=-10.$$</li></ul><p><strong>Carry rule:</strong> For this step response, the entire chain is: constant input gives the forced 10 V, the normalized homogeneous equation gives the underdamped natural part, and the zero-state conditions lock the two constants.</p>",
          "sourcePage": "rlc-ex722-example.html",
          "sourcePageTitle": "Example 7-22 | Series Step Response of Capacitor Voltage",
          "sourceUrl": "rlc-ex722-example.html",
          "tags": [
            "series",
            "step",
            "forced",
            "underdamped"
          ],
          "order": 2
        },
        {
          "id": "ch7-room-722-d",
          "anchorId": "room-ch7-722-d",
          "title": "Subroom 7-22.4: Final Seal | Solve for $$K_2$$ to Final Capacitor Voltage",
          "summary": "Differentiate the full response and evaluate at $$t=0.$$ Then Substitute the constants:",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> A series RLC circuit in zero state is driven by a step input. Find the capacitor voltage for $$t\\ge 0.$$ The fastest route is to separate the forced response from the underdamped natural response, then use the zero-state initial conditions to solve the constants.</p><p><strong>Scene extension:</strong> Gold crown on a balcony, then two colored ribbons under one fading roof. This chamber covers Solve for $$K_2$$ to Final Capacitor Voltage.</p><h4>Worked Detail 1: Room 7: Solve for $$K_2$$</h4><ul><li>Differentiate the full response and evaluate at $$t=0.$$</li><li>This gives</li><li>$$0=-250K_1+968K_2.$$</li><li>With $$K_1=-10,$$</li><li>$$K_2=-2.58.$$</li></ul><h4>Worked Detail 2: Room 8: Final Capacitor Voltage</h4><ul><li>Substitute the constants:</li><li>$$\\boxed{v_C(t)=10-10e^{-250t}\\cos 968t-2.58e^{-250t}\\sin 968t\\ \\text{V}}.$$</li><li>This is the textbook step response with overshoot and ringing before settling to 10 V.</li></ul><p><strong>Carry rule:</strong> For this step response, the entire chain is: constant input gives the forced 10 V, the normalized homogeneous equation gives the underdamped natural part, and the zero-state conditions lock the two constants.</p>",
          "sourcePage": "rlc-ex722-example.html",
          "sourcePageTitle": "Example 7-22 | Series Step Response of Capacitor Voltage",
          "sourceUrl": "rlc-ex722-example.html",
          "tags": [
            "series",
            "step",
            "forced",
            "underdamped"
          ],
          "order": 3
        },
        {
          "id": "ch7-room-723-a",
          "anchorId": "room-ch7-723-a",
          "title": "Subroom 7-23.1: Setup Lens | Keep the Characteristic Skeleton Ready to Build the Part (a) Equation",
          "summary": "A series RLC circuit always uses $$LCs^2+R_TC s+1=0$$ or, after normalization, $$s^2+\\dfrac{R_T}{L}s+\\dfrac{1}{LC}=0.$$ Then Use $$R_T=2000\\ \\Omega,$$ $$L=0.1\\ \\text{H},$$ and $$C=0.4\\times?",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> For a series RLC circuit, work in both directions: in part (a) compute the roots from given $$R_T,$$ $$L,$$ and $$C;$$ in part (b) choose $$R_T$$ and $$C$$ from a target complex root pair; in part (c) design for a repeated root at $$-10^4$$ and explain why that condition does not produce a unique circuit.</p><p><strong>Scene extension:</strong> One steel skeleton with three doors: forward, reverse, and non-unique. This chamber covers Keep the Characteristic Skeleton Ready to Build the Part (a) Equation.</p><h4>Worked Detail 1: Room 1: Keep the Characteristic Skeleton Ready</h4><ul>\n              <li>A series RLC circuit always uses $$LCs^2+R_TC s+1=0$$ or, after normalization, $$s^2+\\dfrac{R_T}{L}s+\\dfrac{1}{LC}=0.$$</li>\n              <li>Part (a) goes from components to roots.</li>\n              <li>Parts (b) and (c) go from roots back to components.</li>\n            </ul><h4>Worked Detail 2: Room 2: Build the Part (a) Equation</h4><ul>\n              <li>Use $$R_T=2000\\ \\Omega,$$ $$L=0.1\\ \\text{H},$$ and $$C=0.4\\times 10^{-6}\\ \\text{F}. $$</li>\n              <li>Then $$LC=4\\times 10^{-8}$$ and $$R_TC=8\\times 10^{-4}. $$</li>\n              <li>So the characteristic equation is $$4\\times 10^{-8}s^2+8\\times 10^{-4}s+1=0,$$ or normalized as $$s^2+20{,}000s+25\\times 10^6=0.$$</li>\n            </ul><p><strong>Carry rule:</strong> Part (a) moves from elements to roots. Parts (b) and (c) move from roots to element constraints. The algebra is the same in both directions because the characteristic equation is the shared bridge.</p>",
          "sourcePage": "rlc-design723.html",
          "sourcePageTitle": "Design Exercise 7-23 | Design from Target Roots",
          "sourceUrl": "rlc-design723.html",
          "tags": [
            "series",
            "roots",
            "design",
            "uniqueness"
          ],
          "order": 4
        },
        {
          "id": "ch7-room-723-b",
          "anchorId": "room-ch7-723-b",
          "title": "Subroom 7-23.2: Response Frame | Solve Part (a) to Turn the Part (b) Target Roots into a Polynomial",
          "summary": "Apply the quadratic formula to $$s^2+20{,}000s+25\\times 10^6=0.$$ Then The target roots are $$-1000\\pm j2000.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> For a series RLC circuit, work in both directions: in part (a) compute the roots from given $$R_T,$$ $$L,$$ and $$C;$$ in part (b) choose $$R_T$$ and $$C$$ from a target complex root pair; in part (c) design for a repeated root at $$-10^4$$ and explain why that condition does not produce a unique circuit.</p><p><strong>Scene extension:</strong> One steel skeleton with three doors: forward, reverse, and non-unique. This chamber covers Solve Part (a) to Turn the Part (b) Target Roots into a Polynomial.</p><h4>Worked Detail 1: Room 3: Solve Part (a)</h4><ul>\n              <li>Apply the quadratic formula to $$s^2+20{,}000s+25\\times 10^6=0.$$</li>\n              <li>The roots are $$s=\\dfrac{-20{,}000\\pm\\sqrt{20{,}000^2-4(25\\times 10^6)}}{2}. $$</li>\n              <li>That gives $$s_1\\approx -1340$$ and $$s_2\\approx -18{,}660.$$</li>\n            </ul><h4>Worked Detail 2: Room 4: Turn the Part (b) Target Roots into a Polynomial</h4><ul>\n              <li>The target roots are $$-1000\\pm j2000.$$</li>\n              <li>Their characteristic equation is $$\\left(s+1000-j2000\\right)\\left(s+1000+j2000\\right)=0.$$</li>\n              <li>Expanding gives $$s^2+2000s+5\\times 10^6=0.$$</li>\n            </ul><p><strong>Carry rule:</strong> Part (a) moves from elements to roots. Parts (b) and (c) move from roots to element constraints. The algebra is the same in both directions because the characteristic equation is the shared bridge.</p>",
          "sourcePage": "rlc-design723.html",
          "sourcePageTitle": "Design Exercise 7-23 | Design from Target Roots",
          "sourceUrl": "rlc-design723.html",
          "tags": [
            "series",
            "roots",
            "design",
            "uniqueness"
          ],
          "order": 5
        },
        {
          "id": "ch7-room-723-c",
          "anchorId": "room-ch7-723-c",
          "title": "Subroom 7-23.3: Constraint Forge | Solve Part (b) by Coefficient Matching to Translate the Part (c) Double Root",
          "summary": "Match $$s^2+2000s+5\\times 10^6$$ with $$s^2+\\dfrac{R_T}{L}s+\\dfrac{1}{LC}. $$ Then The requirement $$s_1=s_2=-10^4$$ means the normalized quadratic is $$\\left(s+10^4\\right)^2=s^2+2\\times 10?",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> For a series RLC circuit, work in both directions: in part (a) compute the roots from given $$R_T,$$ $$L,$$ and $$C;$$ in part (b) choose $$R_T$$ and $$C$$ from a target complex root pair; in part (c) design for a repeated root at $$-10^4$$ and explain why that condition does not produce a unique circuit.</p><p><strong>Scene extension:</strong> One steel skeleton with three doors: forward, reverse, and non-unique. This chamber covers Solve Part (b) by Coefficient Matching to Translate the Part (c) Double Root.</p><h4>Worked Detail 1: Room 5: Solve Part (b) by Coefficient Matching</h4><ul>\n              <li>Match $$s^2+2000s+5\\times 10^6$$ with $$s^2+\\dfrac{R_T}{L}s+\\dfrac{1}{LC}. $$</li>\n              <li>From the linear term, $$\\dfrac{R_T}{L}=2000,$$ so $$R_T=2000(0.1)=200\\ \\Omega.$$</li>\n              <li>From the constant term, $$\\dfrac{1}{LC}=5\\times 10^6,$$ so $$C=\\dfrac{1}{5\\times 10^6(0.1)}=2\\times 10^{-6}\\ \\text{F}. $$</li>\n            </ul><h4>Worked Detail 2: Room 6: Translate the Part (c) Double Root</h4><ul>\n              <li>The requirement $$s_1=s_2=-10^4$$ means the normalized quadratic is $$\\left(s+10^4\\right)^2=s^2+2\\times 10^4 s+10^8. $$</li>\n              <li>Matching with $$s^2+\\dfrac{R_T}{L}s+\\dfrac{1}{LC}$$ gives $$\\dfrac{R_T}{L}=2\\times 10^4$$ and $$LC=10^{-8}. $$</li>\n              <li>In unnormalized form the same conditions are $$R_TC=2\\times 10^{-4}$$ and $$LC=10^{-8}. $$</li>\n            </ul><p><strong>Carry rule:</strong> Part (a) moves from elements to roots. Parts (b) and (c) move from roots to element constraints. The algebra is the same in both directions because the characteristic equation is the shared bridge.</p>",
          "sourcePage": "rlc-design723.html",
          "sourcePageTitle": "Design Exercise 7-23 | Design from Target Roots",
          "sourceUrl": "rlc-design723.html",
          "tags": [
            "series",
            "roots",
            "design",
            "uniqueness"
          ],
          "order": 6
        },
        {
          "id": "ch7-room-723-d",
          "anchorId": "room-ch7-723-d",
          "title": "Subroom 7-23.4: Final Seal | Explain Why Part (c) Has No Unique Answer to Design Takeaway",
          "summary": "Part (c) asks for $$R_T,$$ $$L,$$ and $$C,$$ but the repeated-root condition supplies only two independent equations. Then When roots are given, they determine the characteristic coefficien?",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> For a series RLC circuit, work in both directions: in part (a) compute the roots from given $$R_T,$$ $$L,$$ and $$C;$$ in part (b) choose $$R_T$$ and $$C$$ from a target complex root pair; in part (c) design for a repeated root at $$-10^4$$ and explain why that condition does not produce a unique circuit.</p><p><strong>Scene extension:</strong> One steel skeleton with three doors: forward, reverse, and non-unique. This chamber covers Explain Why Part (c) Has No Unique Answer to Design Takeaway.</p><h4>Worked Detail 1: Room 7: Explain Why Part (c) Has No Unique Answer</h4><ul>\n              <li>Part (c) asks for $$R_T,$$ $$L,$$ and $$C,$$ but the repeated-root condition supplies only two independent equations.</li>\n              <li>That means infinitely many series RLC circuits satisfy the same root requirement.</li>\n              <li>One valid choice is $$C=1\\times 10^{-6}\\ \\text{F},$$ which forces $$L=10\\ \\text{mH}$$ from $$LC=10^{-8},$$ and then $$R_T=200\\ \\Omega$$ from $$R_TC=2\\times 10^{-4}. $$</li>\n            </ul><h4>Worked Detail 2: Room 8: Design Takeaway</h4><ul>\n              <li>When roots are given, they determine the characteristic coefficients.</li>\n              <li>Those coefficients determine algebraic relationships among $$R_T,$$ $$L,$$ and $$C.$$</li>\n              <li>If the number of independent relationships is smaller than the number of unknowns, the design is not unique.</li>\n            </ul><p><strong>Carry rule:</strong> Part (a) moves from elements to roots. Parts (b) and (c) move from roots to element constraints. The algebra is the same in both directions because the characteristic equation is the shared bridge.</p>",
          "sourcePage": "rlc-design723.html",
          "sourcePageTitle": "Design Exercise 7-23 | Design from Target Roots",
          "sourceUrl": "rlc-design723.html",
          "tags": [
            "series",
            "roots",
            "design",
            "uniqueness"
          ],
          "order": 7
        },
        {
          "id": "ch7-room-724-a",
          "anchorId": "room-ch7-724-a",
          "title": "Subroom 7-24.1: Setup Lens | Write the Parallel Characteristic Equation to Find the Two Real Roots",
          "summary": "For a parallel RLC circuit, use Then The roots are",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> The circuit in Figure 7-45 is in the zero state. Find the current through the resistor for $$t\\ge 0.$$ The clean route is to solve the inductor current first, then derive the voltage and the capacitor current before applying KCL for the resistor branch.</p><p><strong>Scene extension:</strong> Three color-coded pipes meet under one bright source funnel. This chamber covers Write the Parallel Characteristic Equation to Find the Two Real Roots.</p><h4>Worked Detail 1: Room 1: Write the Parallel Characteristic Equation</h4><ul><li>For a parallel RLC circuit, use</li><li>$$s^2+\\frac{1}{RC}s+\\frac{1}{LC}=0.$$</li><li>With $$R=470,\\ L=0.1,\\ C=10^{-7},$$</li><li>$$s^2+21276.6s+10^8=0.$$</li></ul><h4>Worked Detail 2: Room 2: Find the Two Real Roots</h4><ul><li>The roots are</li><li>$$s_1=-14300,\\qquad s_2=-7000.$$</li><li>So the inductor-current response is overdamped.</li></ul><p><strong>Carry rule:</strong> This page is a KCL chain: solve $$i_L$$ first, derive the common voltage, convert it into $$i_C,$$ and use the source-current split to recover $$i_R.$$</p>",
          "sourcePage": "rlc-ex724-example.html",
          "sourcePageTitle": "Example 7-24 | Parallel Zero-State Current Through the Resistor",
          "sourceUrl": "rlc-ex724-example.html",
          "tags": [
            "parallel",
            "KCL",
            "branches",
            "overdamped"
          ],
          "order": 8
        },
        {
          "id": "ch7-room-724-b",
          "anchorId": "room-ch7-724-b",
          "title": "Subroom 7-24.2: Response Frame | Write the Inductor-Current Form to Apply the Zero-State Current Condition",
          "summary": "Because the source is a 25 mA step current, the inductor current has a forced constant term. Then At $$t=0,$$ the inductor current cannot jump from zero.",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> The circuit in Figure 7-45 is in the zero state. Find the current through the resistor for $$t\\ge 0.$$ The clean route is to solve the inductor current first, then derive the voltage and the capacitor current before applying KCL for the resistor branch.</p><p><strong>Scene extension:</strong> Three color-coded pipes meet under one bright source funnel. This chamber covers Write the Inductor-Current Form to Apply the Zero-State Current Condition.</p><h4>Worked Detail 1: Room 3: Write the Inductor-Current Form</h4><ul><li>Because the source is a 25 mA step current, the inductor current has a forced constant term.</li><li>Use</li><li>$$i_L(t)=K_1e^{-14300t}+K_2e^{-7000t}+25.$$</li></ul><h4>Worked Detail 2: Room 4: Apply the Zero-State Current Condition</h4><ul><li>At $$t=0,$$ the inductor current cannot jump from zero.</li><li>So</li><li>$$0=K_1+K_2+25.$$</li></ul><p><strong>Carry rule:</strong> This page is a KCL chain: solve $$i_L$$ first, derive the common voltage, convert it into $$i_C,$$ and use the source-current split to recover $$i_R.$$</p>",
          "sourcePage": "rlc-ex724-example.html",
          "sourcePageTitle": "Example 7-24 | Parallel Zero-State Current Through the Resistor",
          "sourceUrl": "rlc-ex724-example.html",
          "tags": [
            "parallel",
            "KCL",
            "branches",
            "overdamped"
          ],
          "order": 9
        },
        {
          "id": "ch7-room-724-c",
          "anchorId": "room-ch7-724-c",
          "title": "Subroom 7-24.3: Constraint Forge | Use the Zero Initial Voltage to Solve for $$K_1$$ and $$K_2$$",
          "summary": "The capacitor voltage starts at zero, and the parallel branch voltage equals the inductor voltage. Then Solving the two equations gives",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> The circuit in Figure 7-45 is in the zero state. Find the current through the resistor for $$t\\ge 0.$$ The clean route is to solve the inductor current first, then derive the voltage and the capacitor current before applying KCL for the resistor branch.</p><p><strong>Scene extension:</strong> Three color-coded pipes meet under one bright source funnel. This chamber covers Use the Zero Initial Voltage to Solve for $$K_1$$ and $$K_2$$.</p><h4>Worked Detail 1: Room 5: Use the Zero Initial Voltage</h4><ul><li>The capacitor voltage starts at zero, and the parallel branch voltage equals the inductor voltage.</li><li>So</li><li>$$v(0)=L\\left.\\frac{di_L}{dt}\\right|_0=0.$$</li><li>That gives</li><li>$$-14300K_1-7000K_2=0.$$</li></ul><h4>Worked Detail 2: Room 6: Solve for $$K_1$$ and $$K_2$$</h4><ul><li>Solving the two equations gives</li><li>$$K_1=24,\\qquad K_2=-49.$$</li><li>Therefore</li><li>$$i_L(t)=24e^{-14300t}-49e^{-7000t}+25\\ \\text{mA}. $$</li></ul><p><strong>Carry rule:</strong> This page is a KCL chain: solve $$i_L$$ first, derive the common voltage, convert it into $$i_C,$$ and use the source-current split to recover $$i_R.$$</p>",
          "sourcePage": "rlc-ex724-example.html",
          "sourcePageTitle": "Example 7-24 | Parallel Zero-State Current Through the Resistor",
          "sourceUrl": "rlc-ex724-example.html",
          "tags": [
            "parallel",
            "KCL",
            "branches",
            "overdamped"
          ],
          "order": 10
        },
        {
          "id": "ch7-room-724-d",
          "anchorId": "room-ch7-724-d",
          "title": "Subroom 7-24.4: Final Seal | Differentiate to Get the Voltage and Capacitor Current to Apply KCL for the Resistor Current",
          "summary": "Use $$v=L\\,di_L/dt$$ to get Then At the top node,",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> The circuit in Figure 7-45 is in the zero state. Find the current through the resistor for $$t\\ge 0.$$ The clean route is to solve the inductor current first, then derive the voltage and the capacitor current before applying KCL for the resistor branch.</p><p><strong>Scene extension:</strong> Three color-coded pipes meet under one bright source funnel. This chamber covers Differentiate to Get the Voltage and Capacitor Current to Apply KCL for the Resistor Current.</p><h4>Worked Detail 1: Room 7: Differentiate to Get the Voltage and Capacitor Current</h4><ul><li>Use $$v=L\\,di_L/dt$$ to get</li><li>$$v(t)=-34.3e^{-14300t}+34.3e^{-7000t}\\ \\text{V}. $$</li><li>Then use $$i_C=C\\,dv/dt$$ to get</li><li>$$i_C(t)=49e^{-14300t}-24e^{-7000t}\\ \\text{mA}. $$</li></ul><h4>Worked Detail 2: Room 8: Apply KCL for the Resistor Current</h4><ul><li>At the top node,</li><li>$$i_R(t)=i_s(t)-i_L(t)-i_C(t).$$</li><li>Substitute the known expressions and simplify:</li><li>$$\\boxed{i_R(t)=-73e^{-14300t}+73e^{-7000t}\\ \\text{mA}}.$$</li></ul><p><strong>Carry rule:</strong> This page is a KCL chain: solve $$i_L$$ first, derive the common voltage, convert it into $$i_C,$$ and use the source-current split to recover $$i_R.$$</p>",
          "sourcePage": "rlc-ex724-example.html",
          "sourcePageTitle": "Example 7-24 | Parallel Zero-State Current Through the Resistor",
          "sourceUrl": "rlc-ex724-example.html",
          "tags": [
            "parallel",
            "KCL",
            "branches",
            "overdamped"
          ],
          "order": 11
        },
        {
          "id": "ch7-room-7251-a",
          "anchorId": "room-ch7-7251-a",
          "title": "Subroom 7-25A.1: Setup Lens | Read the Target Poles to Build the Numerical Polynomial",
          "summary": "The response contains two distinct exponentials. Then Multiply the factors from the roots:",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> Design a series RLC circuit whose zero-state capacitor-voltage step response is $$v_C(t)=V_A-\\frac{5}{4}V_Ae^{-400t}+\\frac{1}{4}V_Ae^{-2000t},\\ t\\ge0.$$ Read the poles from the waveform, build the required characteristic equation, and choose one valid component set.</p><p><strong>Scene extension:</strong> A metal waveform slab feeds a furnace that stamps out its two poles. This chamber covers Read the Target Poles to Build the Numerical Polynomial.</p><h4>Worked Detail 1: Room 1: Read the Target Poles</h4><ul><li>The response contains two distinct exponentials.</li><li>Those exponentials reveal the roots directly: $$-400$$ and $$-2000.$$</li></ul><h4>Worked Detail 2: Room 2: Build the Numerical Polynomial</h4><ul><li>Multiply the factors from the roots:</li><li>$$(s+400)(s+2000)=s^2+2400s+8\\times10^5.$$</li></ul><p><strong>Carry rule:</strong> For design-from-waveform problems, read the poles first. The target response fixes the polynomial before the components are chosen.</p>",
          "sourcePage": "rlc-design725-example.html",
          "sourcePageTitle": "Design Example 7-25 | Design a Series RLC Circuit from a Target Step Response",
          "sourceUrl": "rlc-design725-example.html",
          "tags": [
            "series",
            "design",
            "poles",
            "waveform"
          ],
          "order": 12
        },
        {
          "id": "ch7-room-7251-b",
          "anchorId": "room-ch7-7251-b",
          "title": "Subroom 7-25A.2: Response Frame | Match the Series RLC Form to Choose a Convenient Component",
          "summary": "For a series RLC circuit, the characteristic equation is $$s^2+\\frac{R}{L}s+\\frac{1}{LC}=0.$$ Then There are three circuit parameters and only two constraints.",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> Design a series RLC circuit whose zero-state capacitor-voltage step response is $$v_C(t)=V_A-\\frac{5}{4}V_Ae^{-400t}+\\frac{1}{4}V_Ae^{-2000t},\\ t\\ge0.$$ Read the poles from the waveform, build the required characteristic equation, and choose one valid component set.</p><p><strong>Scene extension:</strong> A metal waveform slab feeds a furnace that stamps out its two poles. This chamber covers Match the Series RLC Form to Choose a Convenient Component.</p><h4>Worked Detail 1: Room 3: Match the Series RLC Form</h4><ul><li>For a series RLC circuit, the characteristic equation is $$s^2+\\frac{R}{L}s+\\frac{1}{LC}=0.$$</li><li>Matching coefficients gives $$R/L=2400$$ and $$1/(LC)=8\\times10^5.$$</li></ul><h4>Worked Detail 2: Room 4: Choose a Convenient Component</h4><ul><li>There are three circuit parameters and only two constraints.</li><li>Choose $$R=3\\ \\text{k}\\Omega$$ to make the arithmetic clean.</li></ul><p><strong>Carry rule:</strong> For design-from-waveform problems, read the poles first. The target response fixes the polynomial before the components are chosen.</p>",
          "sourcePage": "rlc-design725-example.html",
          "sourcePageTitle": "Design Example 7-25 | Design a Series RLC Circuit from a Target Step Response",
          "sourceUrl": "rlc-design725-example.html",
          "tags": [
            "series",
            "design",
            "poles",
            "waveform"
          ],
          "order": 13
        },
        {
          "id": "ch7-room-7251-c",
          "anchorId": "room-ch7-7251-c",
          "title": "Subroom 7-25A.3: Constraint Forge | Solve for L and C",
          "summary": "From $$R/L=2400,$$ $$L=3000/2400=1.25\\ \\text{H}.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> Design a series RLC circuit whose zero-state capacitor-voltage step response is $$v_C(t)=V_A-\\frac{5}{4}V_Ae^{-400t}+\\frac{1}{4}V_Ae^{-2000t},\\ t\\ge0.$$ Read the poles from the waveform, build the required characteristic equation, and choose one valid component set.</p><p><strong>Scene extension:</strong> A metal waveform slab feeds a furnace that stamps out its two poles. This chamber covers Solve for L and C.</p><h4>Worked Detail 1: Room 5: Solve for L and C</h4><ul><li>From $$R/L=2400,$$ $$L=3000/2400=1.25\\ \\text{H}.$$</li><li>From $$1/(LC)=8\\times10^5,$$ $$C=1/((1.25)(8\\times10^5))=1\\ \\mu\\text{F}.$$</li></ul><p><strong>Carry rule:</strong> For design-from-waveform problems, read the poles first. The target response fixes the polynomial before the components are chosen.</p>",
          "sourcePage": "rlc-design725-example.html",
          "sourcePageTitle": "Design Example 7-25 | Design a Series RLC Circuit from a Target Step Response",
          "sourceUrl": "rlc-design725-example.html",
          "tags": [
            "series",
            "design",
            "poles",
            "waveform"
          ],
          "order": 14
        },
        {
          "id": "ch7-room-7251-d",
          "anchorId": "room-ch7-7251-d",
          "title": "Subroom 7-25A.4: Final Seal | Final Design Logic",
          "summary": "The chosen set satisfies both coefficient conditions.",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> Design a series RLC circuit whose zero-state capacitor-voltage step response is $$v_C(t)=V_A-\\frac{5}{4}V_Ae^{-400t}+\\frac{1}{4}V_Ae^{-2000t},\\ t\\ge0.$$ Read the poles from the waveform, build the required characteristic equation, and choose one valid component set.</p><p><strong>Scene extension:</strong> A metal waveform slab feeds a furnace that stamps out its two poles. This chamber covers Final Design Logic.</p><h4>Worked Detail 1: Room 6: Final Design Logic</h4><ul><li>The chosen set satisfies both coefficient conditions.</li><li>Many other designs are possible because one component can be selected freely.</li></ul><p><strong>Carry rule:</strong> For design-from-waveform problems, read the poles first. The target response fixes the polynomial before the components are chosen.</p>",
          "sourcePage": "rlc-design725-example.html",
          "sourcePageTitle": "Design Example 7-25 | Design a Series RLC Circuit from a Target Step Response",
          "sourceUrl": "rlc-design725-example.html",
          "tags": [
            "series",
            "design",
            "poles",
            "waveform"
          ],
          "order": 15
        },
        {
          "id": "ch7-room-7252-a",
          "anchorId": "room-ch7-7252-a",
          "title": "Subroom 7-25B.1: Setup Lens | Write the Series Characteristic Equation to Find the Two Real Roots",
          "summary": "For a zero-input series RLC circuit, use Then Factoring or solving gives",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> For a series RLC circuit with $$R=250\\ \\Omega,$$ $$L=10\\ \\text{mH},$$ $$C=1\\ \\mu\\text{F},$$ $$V_0=0,$$ and $$I_0=30\\ \\text{mA},$$ find the capacitor voltage and inductor current for $$t\\ge 0.$$</p><p><strong>Scene extension:</strong> Two ghosts in one coffin, with the current meter deciding which name belongs to which ghost. This chamber covers Write the Series Characteristic Equation to Find the Two Real Roots.</p><h4>Worked Detail 1: Room 1: Write the Series Characteristic Equation</h4><ul>\n              <li>For a zero-input series RLC circuit, use</li>\n              <li>$$s^2+\\frac{R}{L}s+\\frac{1}{LC}=0.$$</li>\n              <li>Substitute the values:</li>\n              <li>$$s^2+\\frac{250}{0.01}s+\\frac{1}{0.01\\times 10^{-6}}=0.$$</li>\n              <li>So</li>\n              <li>$$s^2+25000s+10^8=0.$$</li>\n            </ul><h4>Worked Detail 2: Room 2: Find the Two Real Roots</h4><ul>\n              <li>Factoring or solving gives</li>\n              <li>$$s_1=-5000,\\qquad s_2=-20000.$$</li>\n              <li>So the capacitor-voltage template is</li>\n              <li>$$v_C(t)=K_1e^{-5000t}+K_2e^{-20000t}.$$</li>\n            </ul><p><strong>Carry rule:</strong> For a series zero-input problem with voltage as the state variable, write the two-root voltage form, use $$v_C(0)$$ to connect the constants, use $$i=C\\,dv/dt$$ for the slope condition, then differentiate once more to recover the current.</p>",
          "sourcePage": "rlc-ex725.html",
          "sourcePageTitle": "Exercise 7-25 | Series Zero-Input Voltage and Current",
          "sourceUrl": "rlc-ex725.html",
          "tags": [
            "series",
            "zero-input",
            "two-decay",
            "current"
          ],
          "order": 16
        },
        {
          "id": "ch7-room-7252-b",
          "anchorId": "room-ch7-7252-b",
          "title": "Subroom 7-25B.2: Response Frame | Apply the Initial Voltage to Convert the Initial Current into a Slope",
          "summary": "At $$t=0,$$ Then Because the current is the same through every series element,",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> For a series RLC circuit with $$R=250\\ \\Omega,$$ $$L=10\\ \\text{mH},$$ $$C=1\\ \\mu\\text{F},$$ $$V_0=0,$$ and $$I_0=30\\ \\text{mA},$$ find the capacitor voltage and inductor current for $$t\\ge 0.$$</p><p><strong>Scene extension:</strong> Two ghosts in one coffin, with the current meter deciding which name belongs to which ghost. This chamber covers Apply the Initial Voltage to Convert the Initial Current into a Slope.</p><h4>Worked Detail 1: Room 3: Apply the Initial Voltage</h4><ul>\n              <li>At $$t=0,$$</li>\n              <li>$$v_C(0)=K_1+K_2=0.$$</li>\n              <li>Therefore</li>\n              <li>$$K_2=-K_1.$$</li>\n            </ul><h4>Worked Detail 2: Room 4: Convert the Initial Current into a Slope</h4><ul>\n              <li>Because the current is the same through every series element,</li>\n              <li>$$i_L(t)=i_C(t)=C\\frac{dv_C}{dt}.$$</li>\n              <li>Differentiate the voltage template:</li>\n              <li>$$\\frac{dv_C}{dt}=-5000K_1e^{-5000t}-20000K_2e^{-20000t}.$$</li>\n              <li>At $$t=0,$$</li>\n              <li>$$I_0=C(-5000K_1-20000K_2).$$</li>\n            </ul><p><strong>Carry rule:</strong> For a series zero-input problem with voltage as the state variable, write the two-root voltage form, use $$v_C(0)$$ to connect the constants, use $$i=C\\,dv/dt$$ for the slope condition, then differentiate once more to recover the current.</p>",
          "sourcePage": "rlc-ex725.html",
          "sourcePageTitle": "Exercise 7-25 | Series Zero-Input Voltage and Current",
          "sourceUrl": "rlc-ex725.html",
          "tags": [
            "series",
            "zero-input",
            "two-decay",
            "current"
          ],
          "order": 17
        },
        {
          "id": "ch7-room-7252-c",
          "anchorId": "room-ch7-7252-c",
          "title": "Subroom 7-25B.3: Constraint Forge | Solve for $$K_1$$ and $$K_2$$ to Final Capacitor Voltage",
          "summary": "Use $$C=10^{-6}\\ \\text{F}$$ and $$I_0=30\\ \\text{mA}=0.03\\ \\text{A}.$$ Then Substitute the constants into the voltage template:",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> For a series RLC circuit with $$R=250\\ \\Omega,$$ $$L=10\\ \\text{mH},$$ $$C=1\\ \\mu\\text{F},$$ $$V_0=0,$$ and $$I_0=30\\ \\text{mA},$$ find the capacitor voltage and inductor current for $$t\\ge 0.$$</p><p><strong>Scene extension:</strong> Two ghosts in one coffin, with the current meter deciding which name belongs to which ghost. This chamber covers Solve for $$K_1$$ and $$K_2$$ to Final Capacitor Voltage.</p><h4>Worked Detail 1: Room 5: Solve for $$K_1$$ and $$K_2$$</h4><ul>\n              <li>Use $$C=10^{-6}\\ \\text{F}$$ and $$I_0=30\\ \\text{mA}=0.03\\ \\text{A}.$$</li>\n              <li>Then</li>\n              <li>$$0.03=10^{-6}(-5000K_1-20000K_2).$$</li>\n              <li>With $$K_2=-K_1,$$ this becomes</li>\n              <li>$$0.03=10^{-6}(15000K_1),$$ so $$K_1=2$$ and $$K_2=-2.$$</li>\n            </ul><h4>Worked Detail 2: Room 6: Final Capacitor Voltage</h4><ul>\n              <li>Substitute the constants into the voltage template:</li>\n              <li>$$\\boxed{v_C(t)=2e^{-5000t}-2e^{-20000t}\\ \\text{V}}.$$</li>\n            </ul><p><strong>Carry rule:</strong> For a series zero-input problem with voltage as the state variable, write the two-root voltage form, use $$v_C(0)$$ to connect the constants, use $$i=C\\,dv/dt$$ for the slope condition, then differentiate once more to recover the current.</p>",
          "sourcePage": "rlc-ex725.html",
          "sourcePageTitle": "Exercise 7-25 | Series Zero-Input Voltage and Current",
          "sourceUrl": "rlc-ex725.html",
          "tags": [
            "series",
            "zero-input",
            "two-decay",
            "current"
          ],
          "order": 18
        },
        {
          "id": "ch7-room-7252-d",
          "anchorId": "room-ch7-7252-d",
          "title": "Subroom 7-25B.4: Final Seal | Differentiate to Get the Inductor Current to Read the Shape",
          "summary": "Differentiate the final voltage: Then The circuit is overdamped because the roots are two different real negatives.",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> For a series RLC circuit with $$R=250\\ \\Omega,$$ $$L=10\\ \\text{mH},$$ $$C=1\\ \\mu\\text{F},$$ $$V_0=0,$$ and $$I_0=30\\ \\text{mA},$$ find the capacitor voltage and inductor current for $$t\\ge 0.$$</p><p><strong>Scene extension:</strong> Two ghosts in one coffin, with the current meter deciding which name belongs to which ghost. This chamber covers Differentiate to Get the Inductor Current to Read the Shape.</p><h4>Worked Detail 1: Room 7: Differentiate to Get the Inductor Current</h4><ul>\n              <li>Differentiate the final voltage:</li>\n              <li>$$\\frac{dv_C}{dt}=-10000e^{-5000t}+40000e^{-20000t}.$$</li>\n              <li>Multiply by $$C=10^{-6}\\ \\text{F}:$$</li>\n              <li>$$i_L(t)=10^{-6}\\left(-10000e^{-5000t}+40000e^{-20000t}\\right).$$</li>\n              <li>So</li>\n              <li>$$\\boxed{i_L(t)=-10e^{-5000t}+40e^{-20000t}\\ \\text{mA}}.$$</li>\n            </ul><h4>Worked Detail 2: Room 8: Read the Shape</h4><ul>\n              <li>The circuit is overdamped because the roots are two different real negatives.</li>\n              <li>The faster $$e^{-20000t}$$ term dies first, so the slower $$e^{-5000t}$$ term dominates later time.</li>\n            </ul><p><strong>Carry rule:</strong> For a series zero-input problem with voltage as the state variable, write the two-root voltage form, use $$v_C(0)$$ to connect the constants, use $$i=C\\,dv/dt$$ for the slope condition, then differentiate once more to recover the current.</p>",
          "sourcePage": "rlc-ex725.html",
          "sourcePageTitle": "Exercise 7-25 | Series Zero-Input Voltage and Current",
          "sourceUrl": "rlc-ex725.html",
          "tags": [
            "series",
            "zero-input",
            "two-decay",
            "current"
          ],
          "order": 19
        },
        {
          "id": "ch7-room-7261-a",
          "anchorId": "room-ch7-7261-a",
          "title": "Subroom 7-26A.1: Setup Lens | Write the Parallel Equation to Match the Standard Form",
          "summary": "Use the natural-response form $$LCs^2+\\frac{L}{R_N}s+1=0.$$ Then Compare with $$s^2+2\\zeta\\omega_0s+\\omega_0^2=0.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> What range of source resistance produces an underdamped natural response in a parallel RLC circuit with $$L=200\\ \\text{mH}$$ and $$C=0.032\\ \\mu\\text{F}?$$ Normalize the parallel characteristic equation, match it to the standard second-order form, and impose $$\\zeta&lt;1.$$</p><p><strong>Scene extension:</strong> A glass tower with a needle that only counts if it rises above the line. This chamber covers Write the Parallel Equation to Match the Standard Form.</p><h4>Worked Detail 1: Room 1: Write the Parallel Equation</h4><ul><li>Use the natural-response form $$LCs^2+\\frac{L}{R_N}s+1=0.$$</li><li>Divide by $$LC$$ to get $$s^2+\\frac{1}{R_NC}s+\\frac{1}{LC}=0.$$</li></ul><h4>Worked Detail 2: Room 2: Match the Standard Form</h4><ul><li>Compare with $$s^2+2\\zeta\\omega_0s+\\omega_0^2=0.$$</li><li>So $$2\\zeta\\omega_0=1/(R_NC)$$ and $$\\omega_0^2=1/(LC).$$</li></ul><p><strong>Carry rule:</strong> In a parallel RLC circuit, more resistance means less damping. Normalize first, find the critical threshold, then move upward in resistance for underdamping.</p>",
          "sourcePage": "rlc-ex726-example.html",
          "sourcePageTitle": "Example 7-26 | Source-Resistance Range for an Underdamped Parallel RLC Response",
          "sourceUrl": "rlc-ex726-example.html",
          "tags": [
            "parallel",
            "threshold",
            "underdamped",
            "inequality"
          ],
          "order": 20
        },
        {
          "id": "ch7-room-7261-b",
          "anchorId": "room-ch7-7261-b",
          "title": "Subroom 7-26A.2: Response Frame | Compute the Natural Frequency",
          "summary": "$$\\omega_0=1/\\sqrt{LC}=1/\\sqrt{(0.2)(32\\times10^{-9})}=12.5\\times10^3\\ \\text{rad/s}.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> What range of source resistance produces an underdamped natural response in a parallel RLC circuit with $$L=200\\ \\text{mH}$$ and $$C=0.032\\ \\mu\\text{F}?$$ Normalize the parallel characteristic equation, match it to the standard second-order form, and impose $$\\zeta&lt;1.$$</p><p><strong>Scene extension:</strong> A glass tower with a needle that only counts if it rises above the line. This chamber covers Compute the Natural Frequency.</p><h4>Worked Detail 1: Room 3: Compute the Natural Frequency</h4><ul><li>$$\\omega_0=1/\\sqrt{LC}=1/\\sqrt{(0.2)(32\\times10^{-9})}=12.5\\times10^3\\ \\text{rad/s}.$$</li></ul><p><strong>Carry rule:</strong> In a parallel RLC circuit, more resistance means less damping. Normalize first, find the critical threshold, then move upward in resistance for underdamping.</p>",
          "sourcePage": "rlc-ex726-example.html",
          "sourcePageTitle": "Example 7-26 | Source-Resistance Range for an Underdamped Parallel RLC Response",
          "sourceUrl": "rlc-ex726-example.html",
          "tags": [
            "parallel",
            "threshold",
            "underdamped",
            "inequality"
          ],
          "order": 21
        },
        {
          "id": "ch7-room-7261-c",
          "anchorId": "room-ch7-7261-c",
          "title": "Subroom 7-26A.3: Constraint Forge | Use the Critical Boundary",
          "summary": "Underdamped means $$\\zeta<1.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> What range of source resistance produces an underdamped natural response in a parallel RLC circuit with $$L=200\\ \\text{mH}$$ and $$C=0.032\\ \\mu\\text{F}?$$ Normalize the parallel characteristic equation, match it to the standard second-order form, and impose $$\\zeta&lt;1.$$</p><p><strong>Scene extension:</strong> A glass tower with a needle that only counts if it rises above the line. This chamber covers Use the Critical Boundary.</p><h4>Worked Detail 1: Room 4: Use the Critical Boundary</h4><ul><li>Underdamped means $$\\zeta&lt;1.$$</li><li>The boundary occurs at $$\\zeta=1,$$ so $$R_N=1/(2\\omega_0C).$$</li></ul><p><strong>Carry rule:</strong> In a parallel RLC circuit, more resistance means less damping. Normalize first, find the critical threshold, then move upward in resistance for underdamping.</p>",
          "sourcePage": "rlc-ex726-example.html",
          "sourcePageTitle": "Example 7-26 | Source-Resistance Range for an Underdamped Parallel RLC Response",
          "sourceUrl": "rlc-ex726-example.html",
          "tags": [
            "parallel",
            "threshold",
            "underdamped",
            "inequality"
          ],
          "order": 22
        },
        {
          "id": "ch7-room-7261-d",
          "anchorId": "room-ch7-7261-d",
          "title": "Subroom 7-26A.4: Final Seal | Solve the Resistance Range",
          "summary": "$$R_N=1/(2(12.5\\times10^3)(32\\times10^{-9}))=1250\\ \\Omega.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> What range of source resistance produces an underdamped natural response in a parallel RLC circuit with $$L=200\\ \\text{mH}$$ and $$C=0.032\\ \\mu\\text{F}?$$ Normalize the parallel characteristic equation, match it to the standard second-order form, and impose $$\\zeta&lt;1.$$</p><p><strong>Scene extension:</strong> A glass tower with a needle that only counts if it rises above the line. This chamber covers Solve the Resistance Range.</p><h4>Worked Detail 1: Room 5: Solve the Resistance Range</h4><ul><li>$$R_N=1/(2(12.5\\times10^3)(32\\times10^{-9}))=1250\\ \\Omega.$$</li><li>For a parallel RLC circuit, underdamping lies on the larger-resistance side, so $$\\boxed{R_N&gt;1250\\ \\Omega}.$$</li></ul><p><strong>Carry rule:</strong> In a parallel RLC circuit, more resistance means less damping. Normalize first, find the critical threshold, then move upward in resistance for underdamping.</p>",
          "sourcePage": "rlc-ex726-example.html",
          "sourcePageTitle": "Example 7-26 | Source-Resistance Range for an Underdamped Parallel RLC Response",
          "sourceUrl": "rlc-ex726-example.html",
          "tags": [
            "parallel",
            "threshold",
            "underdamped",
            "inequality"
          ],
          "order": 23
        },
        {
          "id": "ch7-room-7262-a",
          "anchorId": "room-ch7-7262-a",
          "title": "Subroom 7-26B.1: Setup Lens | Recognize the Repeated Root to Build the Characteristic Equation",
          "summary": "The voltage contains the factor $$te^{-500t}.$$ Then A repeated root at $$-500$$ means",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> A series RLC circuit has the zero-input responses $$v_C(t)=2000te^{-500t}\\ \\text{V}$$ and $$i_L(t)=3.2e^{-500t}-1600te^{-500t}\\ \\text{mA}.$$ Find the characteristic equation, the initial state values, and the element values $$R,$$ $$L,$$ and $$C.$$</p><p><strong>Scene extension:</strong> One bubble rises, collapses, and repeats in the same lane. This chamber covers Recognize the Repeated Root to Build the Characteristic Equation.</p><h4>Worked Detail 1: Room 1: Recognize the Repeated Root</h4><ul>\n              <li>The voltage contains the factor $$te^{-500t}.$$</li>\n              <li>That is the standard critical-damping signature for a repeated root.</li>\n              <li>So the characteristic equation must have</li>\n              <li>$$s_1=s_2=-500.$$</li>\n            </ul><h4>Worked Detail 2: Room 2: Build the Characteristic Equation</h4><ul>\n              <li>A repeated root at $$-500$$ means</li>\n              <li>$$\\left(s+500\\right)^2=0.$$</li>\n              <li>Expand it:</li>\n              <li>$$s^2+1000s+250000=0.$$</li>\n              <li>So</li>\n              <li>$$\\boxed{s^2+1000s+25\\times 10^4=0}.$$</li>\n            </ul><p><strong>Carry rule:</strong> When a zero-input response includes $$te^{-\\alpha t},$$ think repeated root first, then read initial values directly, use $$i=C\\,dv/dt$$ to recover $$C,$$ and finish by matching the characteristic-equation coefficients for $$L$$ and $$R.$$</p>",
          "sourcePage": "rlc-ex726.html",
          "sourcePageTitle": "Exercise 7-26 | Recover the Circuit from Zero-Input Responses",
          "sourceUrl": "rlc-ex726.html",
          "tags": [
            "parallel",
            "repeated-root",
            "recovery",
            "critical"
          ],
          "order": 24
        },
        {
          "id": "ch7-room-7262-b",
          "anchorId": "room-ch7-7262-b",
          "title": "Subroom 7-26B.2: Response Frame | Read the Initial Voltage to Read the Initial Current",
          "summary": "Evaluate the given voltage at $$t=0.$$ Then Evaluate the given current at $$t=0.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> A series RLC circuit has the zero-input responses $$v_C(t)=2000te^{-500t}\\ \\text{V}$$ and $$i_L(t)=3.2e^{-500t}-1600te^{-500t}\\ \\text{mA}.$$ Find the characteristic equation, the initial state values, and the element values $$R,$$ $$L,$$ and $$C.$$</p><p><strong>Scene extension:</strong> One bubble rises, collapses, and repeats in the same lane. This chamber covers Read the Initial Voltage to Read the Initial Current.</p><h4>Worked Detail 1: Room 3: Read the Initial Voltage</h4><ul>\n              <li>Evaluate the given voltage at $$t=0.$$</li>\n              <li>Because of the factor $$t,$$</li>\n              <li>$$v_C(0)=2000(0)e^0=0.$$</li>\n              <li>Therefore</li>\n              <li>$$\\boxed{V_0=0}. $$</li>\n            </ul><h4>Worked Detail 2: Room 4: Read the Initial Current</h4><ul>\n              <li>Evaluate the given current at $$t=0.$$</li>\n              <li>The exponential becomes 1 and the term with $$t$$ disappears.</li>\n              <li>So</li>\n              <li>$$i_L(0)=3.2\\ \\text{mA}.$$</li>\n              <li>Therefore</li>\n              <li>$$\\boxed{I_0=3.2\\ \\text{mA}}.$$</li>\n            </ul><p><strong>Carry rule:</strong> When a zero-input response includes $$te^{-\\alpha t},$$ think repeated root first, then read initial values directly, use $$i=C\\,dv/dt$$ to recover $$C,$$ and finish by matching the characteristic-equation coefficients for $$L$$ and $$R.$$</p>",
          "sourcePage": "rlc-ex726.html",
          "sourcePageTitle": "Exercise 7-26 | Recover the Circuit from Zero-Input Responses",
          "sourceUrl": "rlc-ex726.html",
          "tags": [
            "parallel",
            "repeated-root",
            "recovery",
            "critical"
          ],
          "order": 25
        },
        {
          "id": "ch7-room-7262-c",
          "anchorId": "room-ch7-7262-c",
          "title": "Subroom 7-26B.3: Constraint Forge | Differentiate the Voltage to Recover $$C$$ to Match the Constant Term to Find $$L$$",
          "summary": "For a series circuit, Then For a series RLC circuit, the normalized equation is",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> A series RLC circuit has the zero-input responses $$v_C(t)=2000te^{-500t}\\ \\text{V}$$ and $$i_L(t)=3.2e^{-500t}-1600te^{-500t}\\ \\text{mA}.$$ Find the characteristic equation, the initial state values, and the element values $$R,$$ $$L,$$ and $$C.$$</p><p><strong>Scene extension:</strong> One bubble rises, collapses, and repeats in the same lane. This chamber covers Differentiate the Voltage to Recover $$C$$ to Match the Constant Term to Find $$L$$.</p><h4>Worked Detail 1: Room 5: Differentiate the Voltage to Recover $$C$$</h4><ul>\n              <li>For a series circuit,</li>\n              <li>$$i_L(t)=i_C(t)=C\\frac{dv_C}{dt}.$$</li>\n              <li>Differentiate the voltage:</li>\n              <li>$$\\frac{dv_C}{dt}=2000e^{-500t}-10^6te^{-500t}.$$</li>\n              <li>At $$t=0,$$</li>\n              <li>$$\\left.\\frac{dv_C}{dt}\\right|_0=2000.$$</li>\n              <li>So</li>\n              <li>$$0.0032=C(2000),\\qquad C=1.6\\times 10^{-6}\\ \\text{F}. $$</li>\n            </ul><h4>Worked Detail 2: Room 6: Match the Constant Term to Find $$L$$</h4><ul>\n              <li>For a series RLC circuit, the normalized equation is</li>\n              <li>$$s^2+\\frac{R}{L}s+\\frac{1}{LC}=0.$$</li>\n              <li>Match the constant term:</li>\n              <li>$$\\frac{1}{LC}=250000.$$</li>\n              <li>With $$C=1.6\\times 10^{-6},$$</li>\n              <li>$$L=\\frac{1}{250000(1.6\\times 10^{-6})}=2.5\\ \\text{H}. $$</li>\n            </ul><p><strong>Carry rule:</strong> When a zero-input response includes $$te^{-\\alpha t},$$ think repeated root first, then read initial values directly, use $$i=C\\,dv/dt$$ to recover $$C,$$ and finish by matching the characteristic-equation coefficients for $$L$$ and $$R.$$</p>",
          "sourcePage": "rlc-ex726.html",
          "sourcePageTitle": "Exercise 7-26 | Recover the Circuit from Zero-Input Responses",
          "sourceUrl": "rlc-ex726.html",
          "tags": [
            "parallel",
            "repeated-root",
            "recovery",
            "critical"
          ],
          "order": 26
        },
        {
          "id": "ch7-room-7262-d",
          "anchorId": "room-ch7-7262-d",
          "title": "Subroom 7-26B.4: Final Seal | Match the Linear Term to Find $$R$$ to Final Check",
          "summary": "Match the coefficient of $$s$$: Then The given responses are now fully consistent with the recovered circuit:",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> A series RLC circuit has the zero-input responses $$v_C(t)=2000te^{-500t}\\ \\text{V}$$ and $$i_L(t)=3.2e^{-500t}-1600te^{-500t}\\ \\text{mA}.$$ Find the characteristic equation, the initial state values, and the element values $$R,$$ $$L,$$ and $$C.$$</p><p><strong>Scene extension:</strong> One bubble rises, collapses, and repeats in the same lane. This chamber covers Match the Linear Term to Find $$R$$ to Final Check.</p><h4>Worked Detail 1: Room 7: Match the Linear Term to Find $$R$$</h4><ul>\n              <li>Match the coefficient of $$s$$:</li>\n              <li>$$\\frac{R}{L}=1000.$$</li>\n              <li>With $$L=2.5\\ \\text{H},$$</li>\n              <li>$$R=1000(2.5)=2500\\ \\Omega=2.5\\ \\text{k}\\Omega.$$</li>\n            </ul><h4>Worked Detail 2: Room 8: Final Check</h4><ul>\n              <li>The given responses are now fully consistent with the recovered circuit:</li>\n              <li>$$\\boxed{R=2.5\\ \\text{k}\\Omega,\\ L=2.5\\ \\text{H},\\ C=1.6\\ \\mu\\text{F}}.$$</li>\n              <li>The repeated root explains the critical-damping form with the factor $$te^{-500t}.$$</li>\n            </ul><p><strong>Carry rule:</strong> When a zero-input response includes $$te^{-\\alpha t},$$ think repeated root first, then read initial values directly, use $$i=C\\,dv/dt$$ to recover $$C,$$ and finish by matching the characteristic-equation coefficients for $$L$$ and $$R.$$</p>",
          "sourcePage": "rlc-ex726.html",
          "sourcePageTitle": "Exercise 7-26 | Recover the Circuit from Zero-Input Responses",
          "sourceUrl": "rlc-ex726.html",
          "tags": [
            "parallel",
            "repeated-root",
            "recovery",
            "critical"
          ],
          "order": 27
        },
        {
          "id": "ch7-room-7271-a",
          "anchorId": "room-ch7-7271-a",
          "title": "Subroom 7-27A.1: Setup Lens | Start from the Parallel Form to Convert the Design Targets",
          "summary": "Use $$s^2+\\frac{1}{RC}s+\\frac{1}{LC}=0.$$ Then From $$\\zeta=0.5$$ and $$\\omega_0=25\\times10^3,$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> Design a parallel RLC circuit with $$\\zeta=0.5$$ and $$\\omega_0=25\\ \\text{krad/s}.$$ Turn those targets into coefficient constraints, choose one convenient component, and solve for the other two.</p><p><strong>Scene extension:</strong> Two stamps and one unlocked drawer. This chamber covers Start from the Parallel Form to Convert the Design Targets.</p><h4>Worked Detail 1: Room 1: Start from the Parallel Form</h4><ul><li>Use $$s^2+\\frac{1}{RC}s+\\frac{1}{LC}=0.$$</li><li>Compare with $$s^2+2\\zeta\\omega_0s+\\omega_0^2=0.$$</li></ul><h4>Worked Detail 2: Room 2: Convert the Design Targets</h4><ul><li>From $$\\zeta=0.5$$ and $$\\omega_0=25\\times10^3,$$</li><li>$$\\frac{1}{RC}=2\\zeta\\omega_0=25\\times10^3.$$</li><li>Also $$\\frac{1}{LC}=\\omega_0^2=(25\\times10^3)^2=6.25\\times10^8.$$</li></ul><p><strong>Carry rule:</strong> Convert $$\\zeta$$ and $$\\omega_0$$ into the coefficient of $$s$$ and the constant term, then pick one component and let the equations solve the rest.</p>",
          "sourcePage": "rlc-design727-example.html",
          "sourcePageTitle": "Design Example 7-27 | Design a Parallel RLC Circuit for a Target Damping Ratio and Natural Frequency",
          "sourceUrl": "rlc-design727-example.html",
          "tags": [
            "parallel",
            "design",
            "zeta",
            "omega0"
          ],
          "order": 28
        },
        {
          "id": "ch7-room-7271-b",
          "anchorId": "room-ch7-7271-b",
          "title": "Subroom 7-27A.2: Response Frame | Choose One Component to Solve for C",
          "summary": "There are three parameters and two equations. Then $$C=1/((10\\times10^3)(25\\times10^3))=4\\times10^{-9}\\ \\text{F}=4000\\ \\text{pF}.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> Design a parallel RLC circuit with $$\\zeta=0.5$$ and $$\\omega_0=25\\ \\text{krad/s}.$$ Turn those targets into coefficient constraints, choose one convenient component, and solve for the other two.</p><p><strong>Scene extension:</strong> Two stamps and one unlocked drawer. This chamber covers Choose One Component to Solve for C.</p><h4>Worked Detail 1: Room 3: Choose One Component</h4><ul><li>There are three parameters and two equations.</li><li>Choose $$R=10\\ \\text{k}\\Omega.$$</li></ul><h4>Worked Detail 2: Room 4: Solve for C</h4><ul><li>$$C=1/((10\\times10^3)(25\\times10^3))=4\\times10^{-9}\\ \\text{F}=4000\\ \\text{pF}.$$</li></ul><p><strong>Carry rule:</strong> Convert $$\\zeta$$ and $$\\omega_0$$ into the coefficient of $$s$$ and the constant term, then pick one component and let the equations solve the rest.</p>",
          "sourcePage": "rlc-design727-example.html",
          "sourcePageTitle": "Design Example 7-27 | Design a Parallel RLC Circuit for a Target Damping Ratio and Natural Frequency",
          "sourceUrl": "rlc-design727-example.html",
          "tags": [
            "parallel",
            "design",
            "zeta",
            "omega0"
          ],
          "order": 29
        },
        {
          "id": "ch7-room-7271-c",
          "anchorId": "room-ch7-7271-c",
          "title": "Subroom 7-27A.3: Constraint Forge | Solve for L",
          "summary": "$$L=1/(C\\omega_0^2)=1/((4\\times10^{-9})(6.25\\times10^8))=0.4\\ \\text{H}.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> Design a parallel RLC circuit with $$\\zeta=0.5$$ and $$\\omega_0=25\\ \\text{krad/s}.$$ Turn those targets into coefficient constraints, choose one convenient component, and solve for the other two.</p><p><strong>Scene extension:</strong> Two stamps and one unlocked drawer. This chamber covers Solve for L.</p><h4>Worked Detail 1: Room 5: Solve for L</h4><ul><li>$$L=1/(C\\omega_0^2)=1/((4\\times10^{-9})(6.25\\times10^8))=0.4\\ \\text{H}.$$</li></ul><p><strong>Carry rule:</strong> Convert $$\\zeta$$ and $$\\omega_0$$ into the coefficient of $$s$$ and the constant term, then pick one component and let the equations solve the rest.</p>",
          "sourcePage": "rlc-design727-example.html",
          "sourcePageTitle": "Design Example 7-27 | Design a Parallel RLC Circuit for a Target Damping Ratio and Natural Frequency",
          "sourceUrl": "rlc-design727-example.html",
          "tags": [
            "parallel",
            "design",
            "zeta",
            "omega0"
          ],
          "order": 30
        },
        {
          "id": "ch7-room-7271-d",
          "anchorId": "room-ch7-7271-d",
          "title": "Subroom 7-27A.4: Final Seal | Final Design Logic",
          "summary": "The chosen set meets both the damping-ratio and natural-frequency targets.",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> Design a parallel RLC circuit with $$\\zeta=0.5$$ and $$\\omega_0=25\\ \\text{krad/s}.$$ Turn those targets into coefficient constraints, choose one convenient component, and solve for the other two.</p><p><strong>Scene extension:</strong> Two stamps and one unlocked drawer. This chamber covers Final Design Logic.</p><h4>Worked Detail 1: Room 6: Final Design Logic</h4><ul><li>The chosen set meets both the damping-ratio and natural-frequency targets.</li><li>Many other designs are possible because one component remains free.</li></ul><p><strong>Carry rule:</strong> Convert $$\\zeta$$ and $$\\omega_0$$ into the coefficient of $$s$$ and the constant term, then pick one component and let the equations solve the rest.</p>",
          "sourcePage": "rlc-design727-example.html",
          "sourcePageTitle": "Design Example 7-27 | Design a Parallel RLC Circuit for a Target Damping Ratio and Natural Frequency",
          "sourceUrl": "rlc-design727-example.html",
          "tags": [
            "parallel",
            "design",
            "zeta",
            "omega0"
          ],
          "order": 31
        },
        {
          "id": "ch7-room-7272-a",
          "anchorId": "room-ch7-7272-a",
          "title": "Subroom 7-27B.1: Setup Lens | Write the Parallel Characteristic Equation to Use the Initial Current",
          "summary": "For a zero-input parallel RLC circuit, use Then At $$t=0,$$ the cosine term is 1 and the sine term is 0.",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> A parallel RLC circuit has $$R=1\\ \\text{k}\\Omega,$$ $$C=1\\ \\mu\\text{F},$$ $$L=100\\ \\text{mH},$$ $$I_0=100\\ \\text{mA},$$ and $$V_0=0.$$ Plot the zero-input responses of the inductor, resistor, and capacitor currents on one axis, then show that Kirchhoff's current law holds at every instant.</p><p><strong>Scene extension:</strong> Three stages and one green chorus line. This chamber covers Write the Parallel Characteristic Equation to Use the Initial Current.</p><h4>Worked Detail 1: Room 1: Write the Parallel Characteristic Equation</h4><ul>\n              <li>For a zero-input parallel RLC circuit, use</li>\n              <li>$$LCs^2+\\frac{L}{R}s+1=0.$$</li>\n              <li>Substitute the values:</li>\n              <li>$$10^{-7}s^2+10^{-4}s+1=0.$$</li>\n              <li>Normalized form:</li>\n              <li>$$s^2+1000s+10^7=0.$$</li>\n            </ul><h4>Worked Detail 2: Room 2: Find the Roots and Pick the Current Template</h4><ul>\n              <li>The roots are</li>\n              <li>$$s_{1,2}=-500\\pm j3122.5.$$</li>\n              <li>So the zero-input inductor current is underdamped:</li>\n              <li>$$i_L(t)=e^{-500t}\\left(K_1\\cos 3122.5t+K_2\\sin 3122.5t\\right).$$</li>\n            </ul><h4>Worked Detail 3: Room 3: Use the Initial Current</h4><ul>\n              <li>At $$t=0,$$ the cosine term is 1 and the sine term is 0.</li>\n              <li>So</li>\n              <li>$$i_L(0)=K_1=100\\ \\text{mA}.$$</li>\n            </ul><p><strong>Carry rule:</strong> For a parallel zero-input problem, solve the current first, use the shared parallel voltage to get $$v(t),$$ then derive $$i_R$$ and $$i_C$$ from that same voltage. KCL becomes the final consistency check.</p>",
          "sourcePage": "rlc-ex727.html",
          "sourcePageTitle": "Exercise 7-27 | Parallel Zero-Input Currents and KCL",
          "sourceUrl": "rlc-ex727.html",
          "tags": [
            "parallel",
            "currents",
            "KCL",
            "underdamped"
          ],
          "order": 32
        },
        {
          "id": "ch7-room-7272-b",
          "anchorId": "room-ch7-7272-b",
          "title": "Subroom 7-27B.2: Response Frame | Convert the Initial Voltage into a Derivative Condition to Solve for $$K_2$$ and Finish $$i_L(t)$$",
          "summary": "In the parallel circuit, Then With $$K_1=100,$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> A parallel RLC circuit has $$R=1\\ \\text{k}\\Omega,$$ $$C=1\\ \\mu\\text{F},$$ $$L=100\\ \\text{mH},$$ $$I_0=100\\ \\text{mA},$$ and $$V_0=0.$$ Plot the zero-input responses of the inductor, resistor, and capacitor currents on one axis, then show that Kirchhoff's current law holds at every instant.</p><p><strong>Scene extension:</strong> Three stages and one green chorus line. This chamber covers Convert the Initial Voltage into a Derivative Condition to Solve for $$K_2$$ and Finish $$i_L(t)$$.</p><h4>Worked Detail 1: Room 4: Convert the Initial Voltage into a Derivative Condition</h4><ul>\n              <li>In the parallel circuit,</li>\n              <li>$$v_C(0)=v_L(0)=L\\left.\\frac{di_L}{dt}\\right|_0.$$</li>\n              <li>Since $$v_C(0)=0,$$ we require</li>\n              <li>$$\\left.\\frac{di_L}{dt}\\right|_0=0.$$</li>\n              <li>This gives</li>\n              <li>$$-500K_1+3122.5K_2=0.$$</li>\n            </ul><h4>Worked Detail 2: Room 5: Solve for $$K_2$$ and Finish $$i_L(t)$$</h4><ul>\n              <li>With $$K_1=100,$$</li>\n              <li>$$K_2=\\frac{500(100)}{3122.5}\\approx 16.0.$$</li>\n              <li>Therefore</li>\n              <li>$$\\boxed{i_L(t)=e^{-500t}\\left(100\\cos 3122.5t+16.0\\sin 3122.5t\\right)\\ \\text{mA}}.$$</li>\n            </ul><p><strong>Carry rule:</strong> For a parallel zero-input problem, solve the current first, use the shared parallel voltage to get $$v(t),$$ then derive $$i_R$$ and $$i_C$$ from that same voltage. KCL becomes the final consistency check.</p>",
          "sourcePage": "rlc-ex727.html",
          "sourcePageTitle": "Exercise 7-27 | Parallel Zero-Input Currents and KCL",
          "sourceUrl": "rlc-ex727.html",
          "tags": [
            "parallel",
            "currents",
            "KCL",
            "underdamped"
          ],
          "order": 33
        },
        {
          "id": "ch7-room-7272-c",
          "anchorId": "room-ch7-7272-c",
          "title": "Subroom 7-27B.3: Constraint Forge | Differentiate to Get the Branch Voltage to Use the Voltage to Get $$i_R(t)$$",
          "summary": "Use $$v=L\\,di_L/dt.$$ Then Apply Ohm's law on the resistor branch:",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> A parallel RLC circuit has $$R=1\\ \\text{k}\\Omega,$$ $$C=1\\ \\mu\\text{F},$$ $$L=100\\ \\text{mH},$$ $$I_0=100\\ \\text{mA},$$ and $$V_0=0.$$ Plot the zero-input responses of the inductor, resistor, and capacitor currents on one axis, then show that Kirchhoff's current law holds at every instant.</p><p><strong>Scene extension:</strong> Three stages and one green chorus line. This chamber covers Differentiate to Get the Branch Voltage to Use the Voltage to Get $$i_R(t)$$.</p><h4>Worked Detail 1: Room 6: Differentiate to Get the Branch Voltage</h4><ul>\n              <li>Use $$v=L\\,di_L/dt.$$</li>\n              <li>The derivative condition cancels the cosine term at the start, leaving</li>\n              <li>$$v_C(t)=v_L(t)=-32.0e^{-500t}\\sin 3122.5t\\ \\text{V}. $$</li>\n            </ul><h4>Worked Detail 2: Room 7: Use the Voltage to Get $$i_R(t)$$</h4><ul>\n              <li>Apply Ohm's law on the resistor branch:</li>\n              <li>$$i_R(t)=\\frac{v_C(t)}{R}=\\frac{-32.0e^{-500t}\\sin 3122.5t}{1000}. $$</li>\n              <li>So</li>\n              <li>$$\\boxed{i_R(t)=-32.0e^{-500t}\\sin 3122.5t\\ \\text{mA}}.$$</li>\n            </ul><p><strong>Carry rule:</strong> For a parallel zero-input problem, solve the current first, use the shared parallel voltage to get $$v(t),$$ then derive $$i_R$$ and $$i_C$$ from that same voltage. KCL becomes the final consistency check.</p>",
          "sourcePage": "rlc-ex727.html",
          "sourcePageTitle": "Exercise 7-27 | Parallel Zero-Input Currents and KCL",
          "sourceUrl": "rlc-ex727.html",
          "tags": [
            "parallel",
            "currents",
            "KCL",
            "underdamped"
          ],
          "order": 34
        },
        {
          "id": "ch7-room-7272-d",
          "anchorId": "room-ch7-7272-d",
          "title": "Subroom 7-27B.4: Final Seal | Differentiate the Voltage to Get $$i_C(t)$$ to Validate KCL from the Three Currents",
          "summary": "Use $$i_C=C\\,dv_C/dt.$$ Then Add the three branch currents:",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> A parallel RLC circuit has $$R=1\\ \\text{k}\\Omega,$$ $$C=1\\ \\mu\\text{F},$$ $$L=100\\ \\text{mH},$$ $$I_0=100\\ \\text{mA},$$ and $$V_0=0.$$ Plot the zero-input responses of the inductor, resistor, and capacitor currents on one axis, then show that Kirchhoff's current law holds at every instant.</p><p><strong>Scene extension:</strong> Three stages and one green chorus line. This chamber covers Differentiate the Voltage to Get $$i_C(t)$$ to Validate KCL from the Three Currents.</p><h4>Worked Detail 1: Room 8: Differentiate the Voltage to Get $$i_C(t)$$</h4><ul>\n              <li>Use $$i_C=C\\,dv_C/dt.$$</li>\n              <li>After differentiation and simplification,</li>\n              <li>$$\\boxed{i_C(t)=e^{-500t}\\left(-100\\cos 3122.5t+16.0\\sin 3122.5t\\right)\\ \\text{mA}}.$$</li>\n            </ul><h4>Worked Detail 2: Room 9: Validate KCL from the Three Currents</h4><ul>\n              <li>Add the three branch currents:</li>\n              <li>$$i_L+i_R+i_C=e^{-500t}\\left(100\\cos+16\\sin-32\\sin-100\\cos+16\\sin\\right).$$</li>\n              <li>The cosine terms cancel and the sine terms also cancel, so</li>\n              <li>$$\\boxed{i_L(t)+i_R(t)+i_C(t)=0}$$ for every $$t.$$</li>\n            </ul><p><strong>Carry rule:</strong> For a parallel zero-input problem, solve the current first, use the shared parallel voltage to get $$v(t),$$ then derive $$i_R$$ and $$i_C$$ from that same voltage. KCL becomes the final consistency check.</p>",
          "sourcePage": "rlc-ex727.html",
          "sourcePageTitle": "Exercise 7-27 | Parallel Zero-Input Currents and KCL",
          "sourceUrl": "rlc-ex727.html",
          "tags": [
            "parallel",
            "currents",
            "KCL",
            "underdamped"
          ],
          "order": 35
        },
        {
          "id": "ch7-room-728-a",
          "anchorId": "room-ch7-728-a",
          "title": "Subroom 7-28.1: Setup Lens | Recognize the Repeated Root to Build the Characteristic Equation",
          "summary": "The current response contains $$te^{-2000t}.$$ Then The repeated root gives",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> The zero-input responses of a parallel RLC circuit are observed as $$i_L(t)=10te^{-2000t}\\ \\text{A}$$ and $$v_C(t)=10e^{-2000t}-20000te^{-2000t}\\ \\text{V}.$$ Recover the characteristic equation, the initial state values, the element values, and the resistor current.</p><p><strong>Scene extension:</strong> Two mirrors showing the same pulse from two different angles. This chamber covers Recognize the Repeated Root to Build the Characteristic Equation.</p><h4>Worked Detail 1: Room 1: Recognize the Repeated Root</h4><ul><li>The current response contains $$te^{-2000t}.$$</li><li>That is the signature of a critically damped response with repeated root</li><li>$$s_1=s_2=-2000.$$</li></ul><h4>Worked Detail 2: Room 2: Build the Characteristic Equation</h4><ul><li>The repeated root gives</li><li>$$\\left(s+2000\\right)^2=0.$$</li><li>Expanding yields</li><li>$$\\boxed{s^2+4000s+4\\times 10^6=0}.$$</li></ul><p><strong>Carry rule:</strong> When you see $$te^{-\\alpha t}$$ in a zero-input response, think repeated root first. Then use the waveform itself to read the state variables and recover the element values by coefficient matching.</p>",
          "sourcePage": "rlc-ex728.html",
          "sourcePageTitle": "Exercise 7-28 | Recover a Parallel RLC Circuit from Its Responses",
          "sourceUrl": "rlc-ex728.html",
          "tags": [
            "parallel",
            "recovery",
            "critical",
            "waveform"
          ],
          "order": 36
        },
        {
          "id": "ch7-room-728-b",
          "anchorId": "room-ch7-728-b",
          "title": "Subroom 7-28.2: Response Frame | Read the Initial State Values to Recover the Inductance",
          "summary": "At $$t=0,$$ the inductor current is Then Use the parallel inductor relation",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> The zero-input responses of a parallel RLC circuit are observed as $$i_L(t)=10te^{-2000t}\\ \\text{A}$$ and $$v_C(t)=10e^{-2000t}-20000te^{-2000t}\\ \\text{V}.$$ Recover the characteristic equation, the initial state values, the element values, and the resistor current.</p><p><strong>Scene extension:</strong> Two mirrors showing the same pulse from two different angles. This chamber covers Read the Initial State Values to Recover the Inductance.</p><h4>Worked Detail 1: Room 3: Read the Initial State Values</h4><ul><li>At $$t=0,$$ the inductor current is</li><li>$$i_L(0)=10(0)e^0=0.$$</li><li>The capacitor voltage is</li><li>$$v_C(0)=10e^0-20000(0)e^0=10\\ \\text{V}. $$</li></ul><h4>Worked Detail 2: Room 4: Recover the Inductance</h4><ul><li>Use the parallel inductor relation</li><li>$$v_C(0)=L\\left.\\frac{di_L}{dt}\\right|_0.$$</li><li>Differentiate $$i_L(t)=10te^{-2000t}:$$</li><li>$$\\frac{di_L}{dt}=10e^{-2000t}-20000te^{-2000t}.$$</li><li>At $$t=0,$$</li><li>$$\\left.\\frac{di_L}{dt}\\right|_0=10.$$</li><li>So $$10=L(10),$$ which gives $$L=1\\ \\text{H}. $$</li></ul><p><strong>Carry rule:</strong> When you see $$te^{-\\alpha t}$$ in a zero-input response, think repeated root first. Then use the waveform itself to read the state variables and recover the element values by coefficient matching.</p>",
          "sourcePage": "rlc-ex728.html",
          "sourcePageTitle": "Exercise 7-28 | Recover a Parallel RLC Circuit from Its Responses",
          "sourceUrl": "rlc-ex728.html",
          "tags": [
            "parallel",
            "recovery",
            "critical",
            "waveform"
          ],
          "order": 37
        },
        {
          "id": "ch7-room-728-c",
          "anchorId": "room-ch7-728-c",
          "title": "Subroom 7-28.3: Constraint Forge | Recover the Capacitance to Recover the Resistance",
          "summary": "For a parallel RLC circuit, the constant term of the normalized equation is Then The coefficient of $$s$$ in the normalized parallel equation is",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> The zero-input responses of a parallel RLC circuit are observed as $$i_L(t)=10te^{-2000t}\\ \\text{A}$$ and $$v_C(t)=10e^{-2000t}-20000te^{-2000t}\\ \\text{V}.$$ Recover the characteristic equation, the initial state values, the element values, and the resistor current.</p><p><strong>Scene extension:</strong> Two mirrors showing the same pulse from two different angles. This chamber covers Recover the Capacitance to Recover the Resistance.</p><h4>Worked Detail 1: Room 5: Recover the Capacitance</h4><ul><li>For a parallel RLC circuit, the constant term of the normalized equation is</li><li>$$\\frac{1}{LC}=4\\times 10^6.$$</li><li>With $$L=1,$$</li><li>$$C=\\frac{1}{4\\times 10^6}=0.25\\times 10^{-6}\\ \\text{F}=0.25\\ \\mu\\text{F}. $$</li></ul><h4>Worked Detail 2: Room 6: Recover the Resistance</h4><ul><li>The coefficient of $$s$$ in the normalized parallel equation is</li><li>$$\\frac{1}{RC}=4000.$$</li><li>With $$C=0.25\\times 10^{-6},$$</li><li>$$R=\\frac{1}{4000(0.25\\times 10^{-6})}=1000\\ \\Omega. $$</li></ul><p><strong>Carry rule:</strong> When you see $$te^{-\\alpha t}$$ in a zero-input response, think repeated root first. Then use the waveform itself to read the state variables and recover the element values by coefficient matching.</p>",
          "sourcePage": "rlc-ex728.html",
          "sourcePageTitle": "Exercise 7-28 | Recover a Parallel RLC Circuit from Its Responses",
          "sourceUrl": "rlc-ex728.html",
          "tags": [
            "parallel",
            "recovery",
            "critical",
            "waveform"
          ],
          "order": 38
        },
        {
          "id": "ch7-room-728-d",
          "anchorId": "room-ch7-728-d",
          "title": "Subroom 7-28.4: Final Seal | Write the Resistor Current to Final Memory Pattern",
          "summary": "Use Ohm's law on the resistor branch: Then Critical damping is the key clue here.",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> The zero-input responses of a parallel RLC circuit are observed as $$i_L(t)=10te^{-2000t}\\ \\text{A}$$ and $$v_C(t)=10e^{-2000t}-20000te^{-2000t}\\ \\text{V}.$$ Recover the characteristic equation, the initial state values, the element values, and the resistor current.</p><p><strong>Scene extension:</strong> Two mirrors showing the same pulse from two different angles. This chamber covers Write the Resistor Current to Final Memory Pattern.</p><h4>Worked Detail 1: Room 7: Write the Resistor Current</h4><ul><li>Use Ohm's law on the resistor branch:</li><li>$$i_R(t)=\\frac{v_C(t)}{R}. $$</li><li>With $$R=1\\ \\text{k}\\Omega,$$</li><li>$$\\boxed{i_R(t)=10e^{-2000t}-20000te^{-2000t}\\ \\text{mA}}.$$</li></ul><h4>Worked Detail 2: Room 8: Final Memory Pattern</h4><ul><li>Critical damping is the key clue here.</li><li>Once the repeated root is seen, the rest is a straight recovery chain: characteristic equation, initial values, element values, then resistor current.</li></ul><p><strong>Carry rule:</strong> When you see $$te^{-\\alpha t}$$ in a zero-input response, think repeated root first. Then use the waveform itself to read the state variables and recover the element values by coefficient matching.</p>",
          "sourcePage": "rlc-ex728.html",
          "sourcePageTitle": "Exercise 7-28 | Recover a Parallel RLC Circuit from Its Responses",
          "sourceUrl": "rlc-ex728.html",
          "tags": [
            "parallel",
            "recovery",
            "critical",
            "waveform"
          ],
          "order": 39
        },
        {
          "id": "ch7-room-729-a",
          "anchorId": "room-ch7-729-a",
          "title": "Subroom 7-29.1: Setup Lens | Start from the Same Series RLC Model to Separate What Stays Fixed",
          "summary": "The capacitor voltage satisfies Then With $$R=1\\ \\text{k}\\Omega$$ and $$L=2\\ \\text{H},$$ the damping coefficient is fixed at",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> Keep the series RLC step-response setup from Example 7-22, but vary the capacitor instead of the resistor. The goal is to track how the capacitor sweep changes the capacitor voltage waveform, the damping ratio, and the natural frequency.</p><p><strong>Scene extension:</strong> Three glass cases with wider spacing and quieter ringing from left to right. This chamber covers Start from the Same Series RLC Model to Separate What Stays Fixed.</p><h4>Worked Detail 1: Room 1: Start from the Same Series RLC Model</h4><ul><li>The capacitor voltage satisfies</li><li>$$\\frac{d^2v_C}{dt^2}+\\frac{R}{L}\\frac{dv_C}{dt}+\\frac{1}{LC}v_C=\\frac{V_A}{LC}.$$</li><li>Only $$C$$ is changing in this exercise.</li></ul><h4>Worked Detail 2: Room 2: Separate What Stays Fixed</h4><ul><li>With $$R=1\\ \\text{k}\\Omega$$ and $$L=2\\ \\text{H},$$ the damping coefficient is fixed at</li><li>$$\\alpha=\\frac{R}{2L}=250\\ \\text{rad/s}. $$</li><li>That means the resistor is no longer the sweep knob.</li></ul><p><strong>Carry rule:</strong> For this series RLC family, increasing $$C$$ pulls the natural frequency down and pushes the damping ratio up. That is why the waveform both slows down and loses its oscillation as the capacitor grows.</p>",
          "sourcePage": "rlc-ex729.html",
          "sourcePageTitle": "Exercise 7-29 | Capacitor Sweep in a Series RLC Step Response",
          "sourceUrl": "rlc-ex729.html",
          "tags": [
            "series",
            "sweep",
            "damping",
            "capacitor"
          ],
          "order": 40
        },
        {
          "id": "ch7-room-729-b",
          "anchorId": "room-ch7-729-b",
          "title": "Subroom 7-29.2: Response Frame | Track the Natural Frequency to Track the Damping Ratio",
          "summary": "The natural frequency is Then The damping ratio is",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> Keep the series RLC step-response setup from Example 7-22, but vary the capacitor instead of the resistor. The goal is to track how the capacitor sweep changes the capacitor voltage waveform, the damping ratio, and the natural frequency.</p><p><strong>Scene extension:</strong> Three glass cases with wider spacing and quieter ringing from left to right. This chamber covers Track the Natural Frequency to Track the Damping Ratio.</p><h4>Worked Detail 1: Room 3: Track the Natural Frequency</h4><ul><li>The natural frequency is</li><li>$$\\omega_n=\\frac{1}{\\sqrt{LC}}.$$</li><li>So increasing $$C$$ makes $$\\omega_n$$ smaller.</li><li>The oscillation spacing grows wider as the capacitor gets larger.</li></ul><h4>Worked Detail 2: Room 4: Track the Damping Ratio</h4><ul><li>The damping ratio is</li><li>$$\\zeta=\\frac{\\alpha}{\\omega_n}=\\frac{R}{2}\\sqrt{\\frac{C}{L}}.$$</li><li>So increasing $$C$$ makes $$\\zeta$$ larger.</li><li>This is why the response becomes less oscillatory as $$C$$ increases.</li></ul><p><strong>Carry rule:</strong> For this series RLC family, increasing $$C$$ pulls the natural frequency down and pushes the damping ratio up. That is why the waveform both slows down and loses its oscillation as the capacitor grows.</p>",
          "sourcePage": "rlc-ex729.html",
          "sourcePageTitle": "Exercise 7-29 | Capacitor Sweep in a Series RLC Step Response",
          "sourceUrl": "rlc-ex729.html",
          "tags": [
            "series",
            "sweep",
            "damping",
            "capacitor"
          ],
          "order": 41
        },
        {
          "id": "ch7-room-729-c",
          "anchorId": "room-ch7-729-c",
          "title": "Subroom 7-29.3: Constraint Forge | Find the Critical Boundary to Classify the Three Representative Curves",
          "summary": "Critical damping occurs at $$\\zeta=1.$$ Then $$C=0.5\\ \\mu\\text{F} < 8\\ \\mu\\text{F}$$ gives Case C, underdamped.",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> Keep the series RLC step-response setup from Example 7-22, but vary the capacitor instead of the resistor. The goal is to track how the capacitor sweep changes the capacitor voltage waveform, the damping ratio, and the natural frequency.</p><p><strong>Scene extension:</strong> Three glass cases with wider spacing and quieter ringing from left to right. This chamber covers Find the Critical Boundary to Classify the Three Representative Curves.</p><h4>Worked Detail 1: Room 5: Find the Critical Boundary</h4><ul><li>Critical damping occurs at $$\\zeta=1.$$</li><li>Solving gives</li><li>$$C_{\\text{crit}}=\\frac{4L}{R^2}=8\\ \\mu\\text{F}. $$</li><li>That divides the sweep into Cases C, B, and A.</li></ul><h4>Worked Detail 2: Room 6: Classify the Three Representative Curves</h4><ul><li>$$C=0.5\\ \\mu\\text{F} &lt; 8\\ \\mu\\text{F}$$ gives Case C, underdamped.</li><li>$$C=8\\ \\mu\\text{F}$$ gives Case B, critically damped.</li><li>$$C=20\\ \\mu\\text{F} &gt; 8\\ \\mu\\text{F}$$ gives Case A, overdamped.</li></ul><p><strong>Carry rule:</strong> For this series RLC family, increasing $$C$$ pulls the natural frequency down and pushes the damping ratio up. That is why the waveform both slows down and loses its oscillation as the capacitor grows.</p>",
          "sourcePage": "rlc-ex729.html",
          "sourcePageTitle": "Exercise 7-29 | Capacitor Sweep in a Series RLC Step Response",
          "sourceUrl": "rlc-ex729.html",
          "tags": [
            "series",
            "sweep",
            "damping",
            "capacitor"
          ],
          "order": 42
        },
        {
          "id": "ch7-room-729-d",
          "anchorId": "room-ch7-729-d",
          "title": "Subroom 7-29.4: Final Seal | Compare This Sweep with the Resistor Sweep to Final Memory Pattern",
          "summary": "Changing $$R$$ mainly changes damping because $$\\omega_n=1/\\sqrt{LC}$$ stays fixed. Then Bigger capacitor means slower natural rhythm and heavier damping.",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> Keep the series RLC step-response setup from Example 7-22, but vary the capacitor instead of the resistor. The goal is to track how the capacitor sweep changes the capacitor voltage waveform, the damping ratio, and the natural frequency.</p><p><strong>Scene extension:</strong> Three glass cases with wider spacing and quieter ringing from left to right. This chamber covers Compare This Sweep with the Resistor Sweep to Final Memory Pattern.</p><h4>Worked Detail 1: Room 7: Compare This Sweep with the Resistor Sweep</h4><ul><li>Changing $$R$$ mainly changes damping because $$\\omega_n=1/\\sqrt{LC}$$ stays fixed.</li><li>Changing $$C$$ changes both $$\\zeta$$ and $$\\omega_n.$$</li><li>So the envelope and the oscillation spacing both move.</li></ul><h4>Worked Detail 2: Room 8: Final Memory Pattern</h4><ul><li>Bigger capacitor means slower natural rhythm and heavier damping.</li><li>The sweep direction is</li><li>$$\\text{Case C} \\rightarrow \\text{Case B} \\rightarrow \\text{Case A}$$</li><li>as $$C$$ increases through the critical value.</li></ul><p><strong>Carry rule:</strong> For this series RLC family, increasing $$C$$ pulls the natural frequency down and pushes the damping ratio up. That is why the waveform both slows down and loses its oscillation as the capacitor grows.</p>",
          "sourcePage": "rlc-ex729.html",
          "sourcePageTitle": "Exercise 7-29 | Capacitor Sweep in a Series RLC Step Response",
          "sourceUrl": "rlc-ex729.html",
          "tags": [
            "series",
            "sweep",
            "damping",
            "capacitor"
          ],
          "order": 43
        },
        {
          "id": "ch7-room-730-a",
          "anchorId": "room-ch7-730-a",
          "title": "Subroom 7-30.1: Setup Lens | Start from the Solved Branch Currents to Recall the Inductor Current",
          "summary": "Example 7-24 already gives the three branch currents. Then The inductor current is",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> Use the parallel RLC of Figure 7-45 and plot the currents through the resistor, inductor, and capacitor. The textbook point is not just the shapes of the three curves, but the fact that their sum stays equal to the 25 mA source current for all time.</p><p><strong>Scene extension:</strong> A gold horizon line refusing to move while the other traces swing underneath. This chamber covers Start from the Solved Branch Currents to Recall the Inductor Current.</p><h4>Worked Detail 1: Room 1: Start from the Solved Branch Currents</h4><ul><li>Example 7-24 already gives the three branch currents.</li><li>This exercise is about plotting them together and reading the node law directly from the graph.</li></ul><h4>Worked Detail 2: Room 2: Recall the Inductor Current</h4><ul><li>The inductor current is</li><li>$$i_L(t)=24e^{-14300t}-49e^{-7000t}+25\\ \\text{mA}. $$</li><li>It starts at zero and settles to 25 mA.</li></ul><p><strong>Carry rule:</strong> Whenever the branch currents all come from one KCL derivation, the plot should show a stable total. Here the algebra predicts it and the graph confirms it: the three branches always sum to the source current.</p>",
          "sourcePage": "rlc-ex730.html",
          "sourcePageTitle": "Exercise 7-30 | Plot the Parallel RLC Branch Currents",
          "sourceUrl": "rlc-ex730.html",
          "tags": [
            "parallel",
            "plot",
            "KCL",
            "verification"
          ],
          "order": 44
        },
        {
          "id": "ch7-room-730-b",
          "anchorId": "room-ch7-730-b",
          "title": "Subroom 7-30.2: Response Frame | Recall the Capacitor Current to Recall the Resistor Current",
          "summary": "The capacitor current is Then The resistor current is",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> Use the parallel RLC of Figure 7-45 and plot the currents through the resistor, inductor, and capacitor. The textbook point is not just the shapes of the three curves, but the fact that their sum stays equal to the 25 mA source current for all time.</p><p><strong>Scene extension:</strong> A gold horizon line refusing to move while the other traces swing underneath. This chamber covers Recall the Capacitor Current to Recall the Resistor Current.</p><h4>Worked Detail 1: Room 3: Recall the Capacitor Current</h4><ul><li>The capacitor current is</li><li>$$i_C(t)=49e^{-14300t}-24e^{-7000t}\\ \\text{mA}. $$</li><li>It is purely transient and decays to zero.</li></ul><h4>Worked Detail 2: Room 4: Recall the Resistor Current</h4><ul><li>The resistor current is</li><li>$$i_R(t)=-73e^{-14300t}+73e^{-7000t}\\ \\text{mA}. $$</li><li>It also decays to zero because the final branch voltage goes to zero.</li></ul><p><strong>Carry rule:</strong> Whenever the branch currents all come from one KCL derivation, the plot should show a stable total. Here the algebra predicts it and the graph confirms it: the three branches always sum to the source current.</p>",
          "sourcePage": "rlc-ex730.html",
          "sourcePageTitle": "Exercise 7-30 | Plot the Parallel RLC Branch Currents",
          "sourceUrl": "rlc-ex730.html",
          "tags": [
            "parallel",
            "plot",
            "KCL",
            "verification"
          ],
          "order": 45
        },
        {
          "id": "ch7-room-730-c",
          "anchorId": "room-ch7-730-c",
          "title": "Subroom 7-30.3: Constraint Forge | Add the Three Expressions to Interpret the Plot",
          "summary": "Sum the currents term by term: Then The inductor branch rises toward the source current.",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> Use the parallel RLC of Figure 7-45 and plot the currents through the resistor, inductor, and capacitor. The textbook point is not just the shapes of the three curves, but the fact that their sum stays equal to the 25 mA source current for all time.</p><p><strong>Scene extension:</strong> A gold horizon line refusing to move while the other traces swing underneath. This chamber covers Add the Three Expressions to Interpret the Plot.</p><h4>Worked Detail 1: Room 5: Add the Three Expressions</h4><ul><li>Sum the currents term by term:</li><li>$$i_L+i_C+i_R$$</li><li>$$=(24+49-73)e^{-14300t}+(-49-24+73)e^{-7000t}+25.$$</li><li>All transient terms cancel, leaving only 25 mA.</li></ul><h4>Worked Detail 2: Room 6: Interpret the Plot</h4><ul><li>The inductor branch rises toward the source current.</li><li>The resistor and capacitor currents are transient redistribution currents.</li><li>Their combined effect never violates KCL.</li></ul><p><strong>Carry rule:</strong> Whenever the branch currents all come from one KCL derivation, the plot should show a stable total. Here the algebra predicts it and the graph confirms it: the three branches always sum to the source current.</p>",
          "sourcePage": "rlc-ex730.html",
          "sourcePageTitle": "Exercise 7-30 | Plot the Parallel RLC Branch Currents",
          "sourceUrl": "rlc-ex730.html",
          "tags": [
            "parallel",
            "plot",
            "KCL",
            "verification"
          ],
          "order": 46
        },
        {
          "id": "ch7-room-730-d",
          "anchorId": "room-ch7-730-d",
          "title": "Subroom 7-30.4: Final Seal | Final Memory Pattern",
          "summary": "This graph is a conservation picture.",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> Use the parallel RLC of Figure 7-45 and plot the currents through the resistor, inductor, and capacitor. The textbook point is not just the shapes of the three curves, but the fact that their sum stays equal to the 25 mA source current for all time.</p><p><strong>Scene extension:</strong> A gold horizon line refusing to move while the other traces swing underneath. This chamber covers Final Memory Pattern.</p><h4>Worked Detail 1: Room 7: Final Memory Pattern</h4><ul><li>This graph is a conservation picture.</li><li>The source current is constant, and the branch currents reshuffle that fixed 25 mA until the transients die out.</li></ul><p><strong>Carry rule:</strong> Whenever the branch currents all come from one KCL derivation, the plot should show a stable total. Here the algebra predicts it and the graph confirms it: the three branches always sum to the source current.</p>",
          "sourcePage": "rlc-ex730.html",
          "sourcePageTitle": "Exercise 7-30 | Plot the Parallel RLC Branch Currents",
          "sourceUrl": "rlc-ex730.html",
          "tags": [
            "parallel",
            "plot",
            "KCL",
            "verification"
          ],
          "order": 47
        },
        {
          "id": "ch7-room-731-a",
          "anchorId": "room-ch7-731-a",
          "title": "Subroom 7-31.1: Setup Lens | Collapse the Parallel LC Branch to Compute the Parallel Impedance",
          "summary": "The inductor and capacitor are in parallel, so first replace them with an equivalent impedance. Then The parallel branch is",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> Find the zero-state response of $$v_o(t)$$ for Figure 7-47 when the source is $$v_s(t)=60u(t)\\ \\text{V}.$$ The circuit is a 200 ohm series resistor feeding a parallel combination of a 125 mH inductor and a 0.5 microfarad capacitor, with the output taken across the parallel branch.</p><p><strong>Scene extension:</strong> One merged branch key, one divider lock, two exit keys. This chamber covers Collapse the Parallel LC Branch to Compute the Parallel Impedance.</p><h4>Worked Detail 1: Room 1: Collapse the Parallel LC Branch</h4><ul><li>The inductor and capacitor are in parallel, so first replace them with an equivalent impedance.</li><li>Use</li><li>$$Z_L=sL,\\qquad Z_C=\\frac{1}{sC}.$$</li></ul><h4>Worked Detail 2: Room 2: Compute the Parallel Impedance</h4><ul><li>The parallel branch is</li><li>$$Z_p=\\frac{Z_LZ_C}{Z_L+Z_C}=\\frac{sL}{1+s^2LC}. $$</li><li>This is the impedance that sits after the 200 ohm resistor.</li></ul><p><strong>Carry rule:</strong> This problem is a divider problem in disguise. Replace the parallel LC with one impedance, form the transfer function, multiply by the step input, factor the quadratic, and invert the two simple exponentials.</p>",
          "sourcePage": "rlc-ex731.html",
          "sourcePageTitle": "Exercise 7-31 | Zero-State Output Response of Figure 7-47",
          "sourceUrl": "rlc-ex731.html",
          "tags": [
            "parallel",
            "transfer",
            "divider",
            "pulse"
          ],
          "order": 48
        },
        {
          "id": "ch7-room-731-b",
          "anchorId": "room-ch7-731-b",
          "title": "Subroom 7-31.2: Response Frame | Form the Transfer Function to Apply the 60 V Step Input",
          "summary": "Use the voltage divider: Then Because $$V_s(s)=60/s,$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> Find the zero-state response of $$v_o(t)$$ for Figure 7-47 when the source is $$v_s(t)=60u(t)\\ \\text{V}.$$ The circuit is a 200 ohm series resistor feeding a parallel combination of a 125 mH inductor and a 0.5 microfarad capacitor, with the output taken across the parallel branch.</p><p><strong>Scene extension:</strong> One merged branch key, one divider lock, two exit keys. This chamber covers Form the Transfer Function to Apply the 60 V Step Input.</p><h4>Worked Detail 1: Room 3: Form the Transfer Function</h4><ul><li>Use the voltage divider:</li><li>$$\\frac{V_o}{V_s}=\\frac{Z_p}{R+Z_p}. $$</li><li>Substitute $$Z_p$$ and simplify:</li><li>$$\\frac{V_o}{V_s}=\\frac{sL}{RLCs^2+Ls+R}. $$</li></ul><h4>Worked Detail 2: Room 4: Apply the 60 V Step Input</h4><ul><li>Because $$V_s(s)=60/s,$$</li><li>$$V_o(s)=\\frac{60}{s}\\cdot \\frac{sL}{RLCs^2+Ls+R}=\\frac{60L}{RLCs^2+Ls+R}. $$</li></ul><p><strong>Carry rule:</strong> This problem is a divider problem in disguise. Replace the parallel LC with one impedance, form the transfer function, multiply by the step input, factor the quadratic, and invert the two simple exponentials.</p>",
          "sourcePage": "rlc-ex731.html",
          "sourcePageTitle": "Exercise 7-31 | Zero-State Output Response of Figure 7-47",
          "sourceUrl": "rlc-ex731.html",
          "tags": [
            "parallel",
            "transfer",
            "divider",
            "pulse"
          ],
          "order": 49
        },
        {
          "id": "ch7-room-731-c",
          "anchorId": "room-ch7-731-c",
          "title": "Subroom 7-31.3: Constraint Forge | Substitute the Element Values to Factor the Denominator",
          "summary": "With $$R=200,$$ $$L=0.125,$$ and $$C=0.5\\times10^{-6},$$ Then The quadratic factors as",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> Find the zero-state response of $$v_o(t)$$ for Figure 7-47 when the source is $$v_s(t)=60u(t)\\ \\text{V}.$$ The circuit is a 200 ohm series resistor feeding a parallel combination of a 125 mH inductor and a 0.5 microfarad capacitor, with the output taken across the parallel branch.</p><p><strong>Scene extension:</strong> One merged branch key, one divider lock, two exit keys. This chamber covers Substitute the Element Values to Factor the Denominator.</p><h4>Worked Detail 1: Room 5: Substitute the Element Values</h4><ul><li>With $$R=200,$$ $$L=0.125,$$ and $$C=0.5\\times10^{-6},$$</li><li>$$V_o(s)=\\frac{7.5}{1.25\\times10^{-5}s^2+0.125s+200}. $$</li><li>Dividing through by $$1.25\\times10^{-5}$$ gives</li><li>$$V_o(s)=\\frac{600000}{s^2+10000s+1.6\\times10^7}. $$</li></ul><h4>Worked Detail 2: Room 6: Factor the Denominator</h4><ul><li>The quadratic factors as</li><li>$$s^2+10000s+1.6\\times10^7=(s+2000)(s+8000). $$</li><li>So</li><li>$$V_o(s)=\\frac{600000}{(s+2000)(s+8000)}. $$</li></ul><p><strong>Carry rule:</strong> This problem is a divider problem in disguise. Replace the parallel LC with one impedance, form the transfer function, multiply by the step input, factor the quadratic, and invert the two simple exponentials.</p>",
          "sourcePage": "rlc-ex731.html",
          "sourcePageTitle": "Exercise 7-31 | Zero-State Output Response of Figure 7-47",
          "sourceUrl": "rlc-ex731.html",
          "tags": [
            "parallel",
            "transfer",
            "divider",
            "pulse"
          ],
          "order": 50
        },
        {
          "id": "ch7-room-731-d",
          "anchorId": "room-ch7-731-d",
          "title": "Subroom 7-31.4: Final Seal | Use Partial Fractions to Final Time-Domain Response",
          "summary": "Write Then The inverse Laplace transform gives",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> Find the zero-state response of $$v_o(t)$$ for Figure 7-47 when the source is $$v_s(t)=60u(t)\\ \\text{V}.$$ The circuit is a 200 ohm series resistor feeding a parallel combination of a 125 mH inductor and a 0.5 microfarad capacitor, with the output taken across the parallel branch.</p><p><strong>Scene extension:</strong> One merged branch key, one divider lock, two exit keys. This chamber covers Use Partial Fractions to Final Time-Domain Response.</p><h4>Worked Detail 1: Room 7: Use Partial Fractions</h4><ul><li>Write</li><li>$$\\frac{600000}{(s+2000)(s+8000)}=\\frac{100}{s+2000}-\\frac{100}{s+8000}. $$</li><li>Now invert term by term.</li></ul><h4>Worked Detail 2: Room 8: Final Time-Domain Response</h4><ul><li>The inverse Laplace transform gives</li><li>$$\\boxed{v_o(t)=100\\left(e^{-2000t}-e^{-8000t}\\right)\\ \\text{V}}.$$</li><li>This is a zero-state pulse response that rises from zero and decays back to zero because the inductor is a short circuit at DC.</li></ul><p><strong>Carry rule:</strong> This problem is a divider problem in disguise. Replace the parallel LC with one impedance, form the transfer function, multiply by the step input, factor the quadratic, and invert the two simple exponentials.</p>",
          "sourcePage": "rlc-ex731.html",
          "sourcePageTitle": "Exercise 7-31 | Zero-State Output Response of Figure 7-47",
          "sourceUrl": "rlc-ex731.html",
          "tags": [
            "parallel",
            "transfer",
            "divider",
            "pulse"
          ],
          "order": 51
        },
        {
          "id": "ch7-room-732-a",
          "anchorId": "room-ch7-732-a",
          "title": "Subroom 7-32.1: Setup Lens | Start from the Figure 7-47 Denominator to Match the Standard Second-Order Pattern",
          "summary": "From Exercise 7-31, the output denominator for this network is Then Compare with",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> Select the resistor value in Figure 7-47 that makes the response critically damped, then find the maximum value of $$v_o(t)$$ and the time when it occurs. Finally determine the maximum power delivered by the 60 V source.</p><p><strong>Scene extension:</strong> A crown, a frozen clock, and a glowing power meter in one room. This chamber covers Start from the Figure 7-47 Denominator to Match the Standard Second-Order Pattern.</p><h4>Worked Detail 1: Room 1: Start from the Figure 7-47 Denominator</h4><ul><li>From Exercise 7-31, the output denominator for this network is</li><li>$$RLCs^2+Ls+R.$$</li><li>Divide by $$RLC$$ to get the standard form</li><li>$$s^2+\\frac{1}{RC}s+\\frac{1}{LC}. $$</li></ul><h4>Worked Detail 2: Room 2: Match the Standard Second-Order Pattern</h4><ul><li>Compare with</li><li>$$s^2+2\\alpha s+\\omega_0^2.$$</li><li>So</li><li>$$2\\alpha=\\frac{1}{RC},\\qquad \\omega_0=\\frac{1}{\\sqrt{LC}}.$$</li></ul><p><strong>Carry rule:</strong> This design problem is a three-step chain: force the repeated root to get $$R,$$ use the critical-response form to get the peak output time and value, then combine the source voltage with the peak source current to get the maximum power.</p>",
          "sourcePage": "rlc-design732.html",
          "sourcePageTitle": "Design Exercise 7-32 | Choose R for Critical Damping in Figure 7-47",
          "sourceUrl": "rlc-design732.html",
          "tags": [
            "critical",
            "design",
            "peak",
            "power"
          ],
          "order": 52
        },
        {
          "id": "ch7-room-732-b",
          "anchorId": "room-ch7-732-b",
          "title": "Subroom 7-32.2: Response Frame | Impose Critical Damping to Evaluate the Resistor Value",
          "summary": "Critical damping means $$\\alpha=\\omega_0.$$ Then With $$L=0.125\\ \\text{H}$$ and $$C=0.5\\times10^{-6}\\ \\text{F},$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> Select the resistor value in Figure 7-47 that makes the response critically damped, then find the maximum value of $$v_o(t)$$ and the time when it occurs. Finally determine the maximum power delivered by the 60 V source.</p><p><strong>Scene extension:</strong> A crown, a frozen clock, and a glowing power meter in one room. This chamber covers Impose Critical Damping to Evaluate the Resistor Value.</p><h4>Worked Detail 1: Room 3: Impose Critical Damping</h4><ul><li>Critical damping means $$\\alpha=\\omega_0.$$</li><li>Therefore</li><li>$$\\frac{1}{2RC}=\\frac{1}{\\sqrt{LC}}.$$</li><li>Solve for the design resistor:</li><li>$$R_{\\text{crit}}=\\frac{1}{2}\\sqrt{\\frac{L}{C}}. $$</li></ul><h4>Worked Detail 2: Room 4: Evaluate the Resistor Value</h4><ul><li>With $$L=0.125\\ \\text{H}$$ and $$C=0.5\\times10^{-6}\\ \\text{F},$$</li><li>$$R_{\\text{crit}}=\\frac{1}{2}\\sqrt{\\frac{0.125}{0.5\\times10^{-6}}}=250\\ \\Omega. $$</li></ul><p><strong>Carry rule:</strong> This design problem is a three-step chain: force the repeated root to get $$R,$$ use the critical-response form to get the peak output time and value, then combine the source voltage with the peak source current to get the maximum power.</p>",
          "sourcePage": "rlc-design732.html",
          "sourcePageTitle": "Design Exercise 7-32 | Choose R for Critical Damping in Figure 7-47",
          "sourceUrl": "rlc-design732.html",
          "tags": [
            "critical",
            "design",
            "peak",
            "power"
          ],
          "order": 53
        },
        {
          "id": "ch7-room-732-c",
          "anchorId": "room-ch7-732-c",
          "title": "Subroom 7-32.3: Constraint Forge | Write the Critical Output Response to Find the Peak Voltage",
          "summary": "At $$R=250\\ \\Omega,$$ the denominator becomes Then Differentiate:",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> Select the resistor value in Figure 7-47 that makes the response critically damped, then find the maximum value of $$v_o(t)$$ and the time when it occurs. Finally determine the maximum power delivered by the 60 V source.</p><p><strong>Scene extension:</strong> A crown, a frozen clock, and a glowing power meter in one room. This chamber covers Write the Critical Output Response to Find the Peak Voltage.</p><h4>Worked Detail 1: Room 5: Write the Critical Output Response</h4><ul><li>At $$R=250\\ \\Omega,$$ the denominator becomes</li><li>$$s^2+8000s+1.6\\times10^7=(s+4000)^2. $$</li><li>The step output is</li><li>$$V_o(s)=\\frac{480000}{(s+4000)^2}.$$</li><li>So</li><li>$$v_o(t)=480000te^{-4000t}\\ \\text{V}. $$</li></ul><h4>Worked Detail 2: Room 6: Find the Peak Voltage</h4><ul><li>Differentiate:</li><li>$$\\frac{dv_o}{dt}=480000e^{-4000t}(1-4000t). $$</li><li>Set the derivative to zero:</li><li>$$1-4000t=0\\Rightarrow t=\\frac{1}{4000}=250\\ \\mu s. $$</li><li>Then</li><li>$$v_{o,\\max}=480000\\left(\\frac{1}{4000}\\right)e^{-1}=\\frac{120}{e}=44.15\\ \\text{V}. $$</li></ul><p><strong>Carry rule:</strong> This design problem is a three-step chain: force the repeated root to get $$R,$$ use the critical-response form to get the peak output time and value, then combine the source voltage with the peak source current to get the maximum power.</p>",
          "sourcePage": "rlc-design732.html",
          "sourcePageTitle": "Design Exercise 7-32 | Choose R for Critical Damping in Figure 7-47",
          "sourceUrl": "rlc-design732.html",
          "tags": [
            "critical",
            "design",
            "peak",
            "power"
          ],
          "order": 54
        },
        {
          "id": "ch7-room-732-d",
          "anchorId": "room-ch7-732-d",
          "title": "Subroom 7-32.4: Final Seal | Find the Source Current to Compute the Maximum Source Power",
          "summary": "Use Ohm's law on the series resistor: Then The source voltage is a constant 60 V step.",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> Select the resistor value in Figure 7-47 that makes the response critically damped, then find the maximum value of $$v_o(t)$$ and the time when it occurs. Finally determine the maximum power delivered by the 60 V source.</p><p><strong>Scene extension:</strong> A crown, a frozen clock, and a glowing power meter in one room. This chamber covers Find the Source Current to Compute the Maximum Source Power.</p><h4>Worked Detail 1: Room 7: Find the Source Current</h4><ul><li>Use Ohm's law on the series resistor:</li><li>$$i_s(t)=\\frac{v_s-v_o}{R}. $$</li><li>With $$v_s=60$$ and $$R=250,$$</li><li>$$i_s(t)=0.24-1920te^{-4000t}\\ \\text{A}. $$</li><li>This is largest at $$t=0$$ and again as $$t\\to\\infty,$$ where it equals 0.24 A.</li></ul><h4>Worked Detail 2: Room 8: Compute the Maximum Source Power</h4><ul><li>The source voltage is a constant 60 V step.</li><li>So the maximum delivered power is</li><li>$$P_{s,\\max}=v_s i_{s,\\max}=60(0.24)=14.4\\ \\text{W}. $$</li></ul><p><strong>Carry rule:</strong> This design problem is a three-step chain: force the repeated root to get $$R,$$ use the critical-response form to get the peak output time and value, then combine the source voltage with the peak source current to get the maximum power.</p>",
          "sourcePage": "rlc-design732.html",
          "sourcePageTitle": "Design Exercise 7-32 | Choose R for Critical Damping in Figure 7-47",
          "sourceUrl": "rlc-design732.html",
          "tags": [
            "critical",
            "design",
            "peak",
            "power"
          ],
          "order": 55
        },
        {
          "id": "ch7-room-733-a",
          "anchorId": "room-ch7-733-a",
          "title": "Subroom 7-33.1: Setup Lens | Read the Root Pair to Build the Characteristic Equation",
          "summary": "The damped cosine pattern shows an underdamped response. Then Use $$s^2+2\\alpha s+(\\alpha^2+\\beta^2)=0.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> The step response of a series RLC circuit is observed to be $$v_C(t)=15-15e^{-1000t}\\cos 1000t\\ \\text{V}$$ and $$i_L(t)=45e^{-1000t}\\cos 1000t+45e^{-1000t}\\sin 1000t\\ \\text{mA}.$$ Recover the characteristic equation, the initial state values, the source amplitude, the element values, and the resistor voltage.</p><p><strong>Scene extension:</strong> One vault, two displays, three recovered component values. This chamber covers Read the Root Pair to Build the Characteristic Equation.</p><h4>Worked Detail 1: Room 1: Read the Root Pair</h4><ul><li>The damped cosine pattern shows an underdamped response.</li><li>From the waveform, $$\\alpha=1000$$ and $$\\beta=1000,$$ so the roots are $$-1000\\pm j1000.$$</li></ul><h4>Worked Detail 2: Room 2: Build the Characteristic Equation</h4><ul><li>Use $$s^2+2\\alpha s+(\\alpha^2+\\beta^2)=0.$$</li><li>This gives $$\\boxed{s^2+2000s+2\\times10^6=0}.$$</li></ul><p><strong>Carry rule:</strong> Waveform first, coefficients second, component values third. Once the root pair and the final value are known, the rest of the circuit can be rebuilt directly.</p>",
          "sourcePage": "rlc-ex733.html",
          "sourcePageTitle": "Exercise 7-33 | Recover a Series RLC Circuit from Its Step Response",
          "sourceUrl": "rlc-ex733.html",
          "tags": [
            "series",
            "recovery",
            "waveform",
            "underdamped"
          ],
          "order": 56
        },
        {
          "id": "ch7-room-733-b",
          "anchorId": "room-ch7-733-b",
          "title": "Subroom 7-33.2: Response Frame | Read the State Values and the Input to Recover the Capacitance",
          "summary": "At $$t=0,$$ $$v_C(0)=15-15=0.$$ Then Differentiate the voltage:",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> The step response of a series RLC circuit is observed to be $$v_C(t)=15-15e^{-1000t}\\cos 1000t\\ \\text{V}$$ and $$i_L(t)=45e^{-1000t}\\cos 1000t+45e^{-1000t}\\sin 1000t\\ \\text{mA}.$$ Recover the characteristic equation, the initial state values, the source amplitude, the element values, and the resistor voltage.</p><p><strong>Scene extension:</strong> One vault, two displays, three recovered component values. This chamber covers Read the State Values and the Input to Recover the Capacitance.</p><h4>Worked Detail 1: Room 3: Read the State Values and the Input</h4><ul><li>At $$t=0,$$ $$v_C(0)=15-15=0.$$</li><li>Also $$i_L(0)=45\\ \\text{mA}.$$</li><li>As $$t\\to\\infty,$$ $$v_C(\\infty)=15\\ \\text{V},$$ so $$V_A=15\\ \\text{V}.$$</li></ul><h4>Worked Detail 2: Room 4: Recover the Capacitance</h4><ul><li>Differentiate the voltage:</li><li>$$\\frac{dv_C}{dt}=15000e^{-1000t}\\cos1000t+15000e^{-1000t}\\sin1000t.$$</li><li>Since $$i=C\\,dv_C/dt,$$ matching the current waveform gives $$C=45\\times10^{-3}/15000=3\\ \\mu\\text{F}.$$</li></ul><p><strong>Carry rule:</strong> Waveform first, coefficients second, component values third. Once the root pair and the final value are known, the rest of the circuit can be rebuilt directly.</p>",
          "sourcePage": "rlc-ex733.html",
          "sourcePageTitle": "Exercise 7-33 | Recover a Series RLC Circuit from Its Step Response",
          "sourceUrl": "rlc-ex733.html",
          "tags": [
            "series",
            "recovery",
            "waveform",
            "underdamped"
          ],
          "order": 57
        },
        {
          "id": "ch7-room-733-c",
          "anchorId": "room-ch7-733-c",
          "title": "Subroom 7-33.3: Constraint Forge | Recover L and R",
          "summary": "For series RLC, $$s^2+\\frac{R}{L}s+\\frac{1}{LC}=0.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> The step response of a series RLC circuit is observed to be $$v_C(t)=15-15e^{-1000t}\\cos 1000t\\ \\text{V}$$ and $$i_L(t)=45e^{-1000t}\\cos 1000t+45e^{-1000t}\\sin 1000t\\ \\text{mA}.$$ Recover the characteristic equation, the initial state values, the source amplitude, the element values, and the resistor voltage.</p><p><strong>Scene extension:</strong> One vault, two displays, three recovered component values. This chamber covers Recover L and R.</p><h4>Worked Detail 1: Room 5: Recover L and R</h4><ul><li>For series RLC, $$s^2+\\frac{R}{L}s+\\frac{1}{LC}=0.$$</li><li>So $$R/L=2000$$ and $$1/(LC)=2\\times10^6.$$</li><li>With $$C=3\\ \\mu\\text{F},$$ $$L=1/((3\\times10^{-6})(2\\times10^6))=167\\ \\text{mH}.$$</li><li>Then $$R=2000L=333\\ \\Omega.$$</li></ul><p><strong>Carry rule:</strong> Waveform first, coefficients second, component values third. Once the root pair and the final value are known, the rest of the circuit can be rebuilt directly.</p>",
          "sourcePage": "rlc-ex733.html",
          "sourcePageTitle": "Exercise 7-33 | Recover a Series RLC Circuit from Its Step Response",
          "sourceUrl": "rlc-ex733.html",
          "tags": [
            "series",
            "recovery",
            "waveform",
            "underdamped"
          ],
          "order": 58
        },
        {
          "id": "ch7-room-733-d",
          "anchorId": "room-ch7-733-d",
          "title": "Subroom 7-33.4: Final Seal | Find the Resistor Voltage",
          "summary": "In a series circuit, $$v_R=Ri.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> The step response of a series RLC circuit is observed to be $$v_C(t)=15-15e^{-1000t}\\cos 1000t\\ \\text{V}$$ and $$i_L(t)=45e^{-1000t}\\cos 1000t+45e^{-1000t}\\sin 1000t\\ \\text{mA}.$$ Recover the characteristic equation, the initial state values, the source amplitude, the element values, and the resistor voltage.</p><p><strong>Scene extension:</strong> One vault, two displays, three recovered component values. This chamber covers Find the Resistor Voltage.</p><h4>Worked Detail 1: Room 6: Find the Resistor Voltage</h4><ul><li>In a series circuit, $$v_R=Ri.$$</li><li>Multiply $$333\\ \\Omega$$ by the current waveform to get</li><li>$$\\boxed{v_R(t)=15e^{-1000t}\\cos1000t+15e^{-1000t}\\sin1000t\\ \\text{V}}.$$</li></ul><p><strong>Carry rule:</strong> Waveform first, coefficients second, component values third. Once the root pair and the final value are known, the rest of the circuit can be rebuilt directly.</p>",
          "sourcePage": "rlc-ex733.html",
          "sourcePageTitle": "Exercise 7-33 | Recover a Series RLC Circuit from Its Step Response",
          "sourceUrl": "rlc-ex733.html",
          "tags": [
            "series",
            "recovery",
            "waveform",
            "underdamped"
          ],
          "order": 59
        },
        {
          "id": "ch7-room-734-a",
          "anchorId": "room-ch7-734-a",
          "title": "Subroom 7-34.1: Setup Lens | Write the Series Equation to Match the Standard Form",
          "summary": "For a series RLC circuit, use $$s^2+\\frac{R}{L}s+\\frac{1}{LC}=0.$$ Then Compare with $$s^2+2\\zeta\\omega_0s+\\omega_0^2=0.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> Part (a) asks for the source-resistance range that produces an underdamped natural response in a series RLC circuit with $$L=200\\ \\text{mH}$$ and $$C=0.032\\ \\mu\\text{F}.$$ Part (b) compares that result with the parallel-circuit answer from Example 7-26.</p><p><strong>Scene extension:</strong> Two opposite doors facing each other across one mirror line. This chamber covers Write the Series Equation to Match the Standard Form.</p><h4>Worked Detail 1: Room 1: Write the Series Equation</h4><ul><li>For a series RLC circuit, use $$s^2+\\frac{R}{L}s+\\frac{1}{LC}=0.$$</li></ul><h4>Worked Detail 2: Room 2: Match the Standard Form</h4><ul><li>Compare with $$s^2+2\\zeta\\omega_0s+\\omega_0^2=0.$$</li><li>That gives $$2\\zeta\\omega_0=R/L.$$</li></ul><p><strong>Carry rule:</strong> Series likes small resistance for underdamping. Parallel likes large resistance for underdamping.</p>",
          "sourcePage": "rlc-eval734.html",
          "sourcePageTitle": "Evaluation Exercise 7-34 | Compare Underdamped Resistance Ranges in Series and Parallel RLC Circuits",
          "sourceUrl": "rlc-eval734.html",
          "tags": [
            "comparison",
            "duality",
            "series",
            "parallel"
          ],
          "order": 60
        },
        {
          "id": "ch7-room-734-b",
          "anchorId": "room-ch7-734-b",
          "title": "Subroom 7-34.2: Response Frame | Use the Critical Boundary",
          "summary": "Underdamped means $$\\zeta<1.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> Part (a) asks for the source-resistance range that produces an underdamped natural response in a series RLC circuit with $$L=200\\ \\text{mH}$$ and $$C=0.032\\ \\mu\\text{F}.$$ Part (b) compares that result with the parallel-circuit answer from Example 7-26.</p><p><strong>Scene extension:</strong> Two opposite doors facing each other across one mirror line. This chamber covers Use the Critical Boundary.</p><h4>Worked Detail 1: Room 3: Use the Critical Boundary</h4><ul><li>Underdamped means $$\\zeta&lt;1.$$</li><li>At the boundary, $$R/L=2\\omega_0.$$</li><li>Since $$\\omega_0=1/\\sqrt{LC},$$ the critical resistance is $$R_c=2\\sqrt{L/C}.$$</li></ul><p><strong>Carry rule:</strong> Series likes small resistance for underdamping. Parallel likes large resistance for underdamping.</p>",
          "sourcePage": "rlc-eval734.html",
          "sourcePageTitle": "Evaluation Exercise 7-34 | Compare Underdamped Resistance Ranges in Series and Parallel RLC Circuits",
          "sourceUrl": "rlc-eval734.html",
          "tags": [
            "comparison",
            "duality",
            "series",
            "parallel"
          ],
          "order": 61
        },
        {
          "id": "ch7-room-734-c",
          "anchorId": "room-ch7-734-c",
          "title": "Subroom 7-34.3: Constraint Forge | Evaluate the Threshold",
          "summary": "With $$L=0.2\\ \\text{H}$$ and $$C=32\\times10^{-9}\\ \\text{F},$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> Part (a) asks for the source-resistance range that produces an underdamped natural response in a series RLC circuit with $$L=200\\ \\text{mH}$$ and $$C=0.032\\ \\mu\\text{F}.$$ Part (b) compares that result with the parallel-circuit answer from Example 7-26.</p><p><strong>Scene extension:</strong> Two opposite doors facing each other across one mirror line. This chamber covers Evaluate the Threshold.</p><h4>Worked Detail 1: Room 4: Evaluate the Threshold</h4><ul><li>With $$L=0.2\\ \\text{H}$$ and $$C=32\\times10^{-9}\\ \\text{F},$$</li><li>$$R_c=2\\sqrt{0.2/(32\\times10^{-9})}=5000\\ \\Omega.$$</li><li>So the underdamped range is $$\\boxed{R&lt;5\\ \\text{k}\\Omega}.$$</li></ul><p><strong>Carry rule:</strong> Series likes small resistance for underdamping. Parallel likes large resistance for underdamping.</p>",
          "sourcePage": "rlc-eval734.html",
          "sourcePageTitle": "Evaluation Exercise 7-34 | Compare Underdamped Resistance Ranges in Series and Parallel RLC Circuits",
          "sourceUrl": "rlc-eval734.html",
          "tags": [
            "comparison",
            "duality",
            "series",
            "parallel"
          ],
          "order": 62
        },
        {
          "id": "ch7-room-734-d",
          "anchorId": "room-ch7-734-d",
          "title": "Subroom 7-34.4: Final Seal | Compare with the Parallel Case",
          "summary": "In a series circuit, smaller resistance means less damping.",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> Part (a) asks for the source-resistance range that produces an underdamped natural response in a series RLC circuit with $$L=200\\ \\text{mH}$$ and $$C=0.032\\ \\mu\\text{F}.$$ Part (b) compares that result with the parallel-circuit answer from Example 7-26.</p><p><strong>Scene extension:</strong> Two opposite doors facing each other across one mirror line. This chamber covers Compare with the Parallel Case.</p><h4>Worked Detail 1: Room 5: Compare with the Parallel Case</h4><ul><li>In a series circuit, smaller resistance means less damping.</li><li>In a parallel circuit, larger resistance means less damping.</li><li>The two results point in opposite directions because series and parallel RLC circuits are dual.</li></ul><p><strong>Carry rule:</strong> Series likes small resistance for underdamping. Parallel likes large resistance for underdamping.</p>",
          "sourcePage": "rlc-eval734.html",
          "sourcePageTitle": "Evaluation Exercise 7-34 | Compare Underdamped Resistance Ranges in Series and Parallel RLC Circuits",
          "sourceUrl": "rlc-eval734.html",
          "tags": [
            "comparison",
            "duality",
            "series",
            "parallel"
          ],
          "order": 63
        },
        {
          "id": "ch7-room-735-a",
          "anchorId": "room-ch7-735-a",
          "title": "Subroom 7-35.1: Setup Lens | Match the Series Standard Form to Convert the Design Targets",
          "summary": "Use $$s^2+\\frac{R}{L}s+\\frac{1}{LC}=0.$$ Then $$R/L=2\\zeta\\omega_0=2(1.5)(50\\times10^3)=150\\times10^3.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> Design a series RLC circuit with $$\\zeta=1.5$$ and $$\\omega_0=50\\ \\text{krad/s}.$$ The capacitor is fixed at $$0.1\\ \\mu\\text{F},$$ so there is only one valid solution.</p><p><strong>Scene extension:</strong> A glass case over C, with two exposed dials for L and R. This chamber covers Match the Series Standard Form to Convert the Design Targets.</p><h4>Worked Detail 1: Room 1: Match the Series Standard Form</h4><ul><li>Use $$s^2+\\frac{R}{L}s+\\frac{1}{LC}=0.$$</li><li>Compare with $$s^2+2\\zeta\\omega_0s+\\omega_0^2=0.$$</li></ul><h4>Worked Detail 2: Room 2: Convert the Design Targets</h4><ul><li>$$R/L=2\\zeta\\omega_0=2(1.5)(50\\times10^3)=150\\times10^3.$$</li><li>$$1/(LC)=\\omega_0^2=(50\\times10^3)^2=2.5\\times10^9.$$</li></ul><p><strong>Carry rule:</strong> When one energy-storage component is fixed, design freedom disappears. Use $$\\omega_0$$ to solve the other storage element and $$\\zeta$$ to solve the resistor.</p>",
          "sourcePage": "rlc-design735.html",
          "sourcePageTitle": "Design Exercise 7-35 | Design a Series RLC Circuit with Fixed Capacitance",
          "sourceUrl": "rlc-design735.html",
          "tags": [
            "series",
            "design",
            "fixed-capacitor",
            "unique"
          ],
          "order": 64
        },
        {
          "id": "ch7-room-735-b",
          "anchorId": "room-ch7-735-b",
          "title": "Subroom 7-35.2: Response Frame | Use the Fixed Capacitor to Solve for the Inductor",
          "summary": "The capacitor is given: $$C=0.1\\ \\mu\\text{F}=10^{-7}\\ \\text{F}.$$ Then $$L=1/(C\\omega_0^2)=1/((10^{-7})(2.5\\times10^9))=4\\times10^{-3}\\ \\text{H}=4\\ \\text{mH}.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> Design a series RLC circuit with $$\\zeta=1.5$$ and $$\\omega_0=50\\ \\text{krad/s}.$$ The capacitor is fixed at $$0.1\\ \\mu\\text{F},$$ so there is only one valid solution.</p><p><strong>Scene extension:</strong> A glass case over C, with two exposed dials for L and R. This chamber covers Use the Fixed Capacitor to Solve for the Inductor.</p><h4>Worked Detail 1: Room 3: Use the Fixed Capacitor</h4><ul><li>The capacitor is given: $$C=0.1\\ \\mu\\text{F}=10^{-7}\\ \\text{F}.$$</li><li>This removes the free-choice step that appears in the open design examples.</li></ul><h4>Worked Detail 2: Room 4: Solve for the Inductor</h4><ul><li>$$L=1/(C\\omega_0^2)=1/((10^{-7})(2.5\\times10^9))=4\\times10^{-3}\\ \\text{H}=4\\ \\text{mH}.$$</li></ul><p><strong>Carry rule:</strong> When one energy-storage component is fixed, design freedom disappears. Use $$\\omega_0$$ to solve the other storage element and $$\\zeta$$ to solve the resistor.</p>",
          "sourcePage": "rlc-design735.html",
          "sourcePageTitle": "Design Exercise 7-35 | Design a Series RLC Circuit with Fixed Capacitance",
          "sourceUrl": "rlc-design735.html",
          "tags": [
            "series",
            "design",
            "fixed-capacitor",
            "unique"
          ],
          "order": 65
        },
        {
          "id": "ch7-room-735-c",
          "anchorId": "room-ch7-735-c",
          "title": "Subroom 7-35.3: Constraint Forge | Solve for the Resistor",
          "summary": "Now use $$R/L=150\\times10^3.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> Design a series RLC circuit with $$\\zeta=1.5$$ and $$\\omega_0=50\\ \\text{krad/s}.$$ The capacitor is fixed at $$0.1\\ \\mu\\text{F},$$ so there is only one valid solution.</p><p><strong>Scene extension:</strong> A glass case over C, with two exposed dials for L and R. This chamber covers Solve for the Resistor.</p><h4>Worked Detail 1: Room 5: Solve for the Resistor</h4><ul><li>Now use $$R/L=150\\times10^3.$$</li><li>$$R=(150\\times10^3)(4\\times10^{-3})=600\\ \\Omega.$$</li></ul><p><strong>Carry rule:</strong> When one energy-storage component is fixed, design freedom disappears. Use $$\\omega_0$$ to solve the other storage element and $$\\zeta$$ to solve the resistor.</p>",
          "sourcePage": "rlc-design735.html",
          "sourcePageTitle": "Design Exercise 7-35 | Design a Series RLC Circuit with Fixed Capacitance",
          "sourceUrl": "rlc-design735.html",
          "tags": [
            "series",
            "design",
            "fixed-capacitor",
            "unique"
          ],
          "order": 66
        },
        {
          "id": "ch7-room-735-d",
          "anchorId": "room-ch7-735-d",
          "title": "Subroom 7-35.4: Final Seal | Why the Answer Is Unique",
          "summary": "With $$C$$ fixed, the two equations determine $$L$$ and $$R$$ exactly.",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> Design a series RLC circuit with $$\\zeta=1.5$$ and $$\\omega_0=50\\ \\text{krad/s}.$$ The capacitor is fixed at $$0.1\\ \\mu\\text{F},$$ so there is only one valid solution.</p><p><strong>Scene extension:</strong> A glass case over C, with two exposed dials for L and R. This chamber covers Why the Answer Is Unique.</p><h4>Worked Detail 1: Room 6: Why the Answer Is Unique</h4><ul><li>With $$C$$ fixed, the two equations determine $$L$$ and $$R$$ exactly.</li><li>There is no remaining design freedom.</li></ul><p><strong>Carry rule:</strong> When one energy-storage component is fixed, design freedom disappears. Use $$\\omega_0$$ to solve the other storage element and $$\\zeta$$ to solve the resistor.</p>",
          "sourcePage": "rlc-design735.html",
          "sourcePageTitle": "Design Exercise 7-35 | Design a Series RLC Circuit with Fixed Capacitance",
          "sourceUrl": "rlc-design735.html",
          "tags": [
            "series",
            "design",
            "fixed-capacitor",
            "unique"
          ],
          "order": 67
        }
      ],
      "blocks": [
        {
          "id": "palace-ch7-master-corridor-block-1",
          "width": 290,
          "height": 180,
          "title": "7-22 | Step Balcony",
          "sourceRoomIds": [
            "ch7-room-722-a",
            "ch7-room-722-b",
            "ch7-room-722-c",
            "ch7-room-722-d"
          ],
          "mnemonicPeg": "Gold crown on a balcony, then two colored ribbons under one fading roof.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Write the Differential Equation to Read the Forced Response -> Response Frame | Normalize the Homogeneous Equation to Identify the Damping Case -> Constraint Forge | Write the Natural Response to Apply the Zero-State Initial Conditions -> Final Seal | Solve for $$K_2$$ to Final Capacitor Voltage. See the flat 10 V crown before the oscillation. The red and blue ribbons remind you both sine and cosine stay alive until the initial conditions pin them down.",
          "relationType": "sequence",
          "tags": [
            "series",
            "step",
            "forced",
            "underdamped"
          ],
          "icon": "token",
          "accentVariant": "gold",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "anchor",
          "objectShape": "gate",
          "objectShapeCustom": "",
          "emotionCue": "focused",
          "motionCue": "ringing",
          "sequenceIndex": 1,
          "x": 150,
          "y": 180
        },
        {
          "id": "palace-ch7-master-corridor-block-2",
          "width": 290,
          "height": 180,
          "title": "7-23 | Root Forge Hall",
          "sourceRoomIds": [
            "ch7-room-723-a",
            "ch7-room-723-b",
            "ch7-room-723-c",
            "ch7-room-723-d"
          ],
          "mnemonicPeg": "One steel skeleton with three doors: forward, reverse, and non-unique.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Keep the Characteristic Skeleton Ready to Build the Part (a) Equation -> Response Frame | Solve Part (a) to Turn the Part (b) Target Roots into a Polynomial -> Constraint Forge | Solve Part (b) by Coefficient Matching to Translate the Part (c) Double Root -> Final Seal | Explain Why Part (c) Has No Unique Answer to Design Takeaway. The forge is reusable: the same wall formula handles all three parts, but the last door echoes to warn you the design is not unique.",
          "relationType": "sequence",
          "tags": [
            "series",
            "roots",
            "design",
            "uniqueness"
          ],
          "icon": "token",
          "accentVariant": "violet",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "hallway",
          "objectShape": "door",
          "objectShapeCustom": "",
          "emotionCue": "careful",
          "motionCue": "forging",
          "sequenceIndex": 2,
          "x": 470,
          "y": 180
        },
        {
          "id": "palace-ch7-master-corridor-block-3",
          "width": 290,
          "height": 180,
          "title": "7-24 | KCL Corridor",
          "sourceRoomIds": [
            "ch7-room-724-a",
            "ch7-room-724-b",
            "ch7-room-724-c",
            "ch7-room-724-d"
          ],
          "mnemonicPeg": "Three color-coded pipes meet under one bright source funnel.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Write the Parallel Characteristic Equation to Find the Two Real Roots -> Response Frame | Write the Inductor-Current Form to Apply the Zero-State Current Condition -> Constraint Forge | Use the Zero Initial Voltage to Solve for $$K_1$$ and $$K_2$$ -> Final Seal | Differentiate to Get the Voltage and Capacitor Current to Apply KCL for the Resistor Current. Blue pipe for iL, green for iC, orange for iR. The missing orange current only appears after the blue and green pipes are already known.",
          "relationType": "sequence",
          "tags": [
            "parallel",
            "KCL",
            "branches",
            "overdamped"
          ],
          "icon": "token",
          "accentVariant": "ember",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "bridge",
          "objectShape": "path",
          "objectShapeCustom": "",
          "emotionCue": "aggressive",
          "motionCue": "splitting",
          "sequenceIndex": 3,
          "x": 790,
          "y": 180
        },
        {
          "id": "palace-ch7-master-corridor-block-4",
          "width": 290,
          "height": 180,
          "title": "7-25A | Target Waveform Foundry",
          "sourceRoomIds": [
            "ch7-room-7251-a",
            "ch7-room-7251-b",
            "ch7-room-7251-c",
            "ch7-room-7251-d"
          ],
          "mnemonicPeg": "A metal waveform slab feeds a furnace that stamps out its two poles.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Read the Target Poles to Build the Numerical Polynomial -> Response Frame | Match the Series RLC Form to Choose a Convenient Component -> Constraint Forge | Solve for L and C -> Final Seal | Final Design Logic. The furnace glows only after the poles are read. The free-choice lever reminds you one component may be picked for convenience.",
          "relationType": "sequence",
          "tags": [
            "series",
            "design",
            "poles",
            "waveform"
          ],
          "icon": "token",
          "accentVariant": "gold",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "anchor",
          "objectShape": "cube",
          "objectShapeCustom": "",
          "emotionCue": "confident",
          "motionCue": "forging",
          "sequenceIndex": 4,
          "x": 1110,
          "y": 180
        },
        {
          "id": "palace-ch7-master-corridor-block-5",
          "width": 290,
          "height": 180,
          "title": "7-25B | Twin-Decay Coffin",
          "sourceRoomIds": [
            "ch7-room-7252-a",
            "ch7-room-7252-b",
            "ch7-room-7252-c",
            "ch7-room-7252-d"
          ],
          "mnemonicPeg": "Two ghosts in one coffin, with the current meter deciding which name belongs to which ghost.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Write the Series Characteristic Equation to Find the Two Real Roots -> Response Frame | Apply the Initial Voltage to Convert the Initial Current into a Slope -> Constraint Forge | Solve for $$K_1$$ and $$K_2$$ to Final Capacitor Voltage -> Final Seal | Differentiate to Get the Inductor Current to Read the Shape. The fast ghost flashes hard and vanishes first; the slow ghost lingers and owns the late-time shape.",
          "relationType": "sequence",
          "tags": [
            "series",
            "zero-input",
            "two-decay",
            "current"
          ],
          "icon": "token",
          "accentVariant": "violet",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "room",
          "objectShape": "door",
          "objectShapeCustom": "",
          "emotionCue": "somber",
          "motionCue": "fading",
          "sequenceIndex": 5,
          "x": 1110,
          "y": 430
        },
        {
          "id": "palace-ch7-master-corridor-block-6",
          "width": 290,
          "height": 180,
          "title": "7-26A | Threshold Observatory",
          "sourceRoomIds": [
            "ch7-room-7261-a",
            "ch7-room-7261-b",
            "ch7-room-7261-c",
            "ch7-room-7261-d"
          ],
          "mnemonicPeg": "A glass tower with a needle that only counts if it rises above the line.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Write the Parallel Equation to Match the Standard Form -> Response Frame | Compute the Natural Frequency -> Constraint Forge | Use the Critical Boundary -> Final Seal | Solve the Resistance Range. Always look up in the parallel observatory. If you look down, you accidentally apply the series rule and lose the problem.",
          "relationType": "sequence",
          "tags": [
            "parallel",
            "threshold",
            "underdamped",
            "inequality"
          ],
          "icon": "token",
          "accentVariant": "cyan",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "anchor",
          "objectShape": "arch",
          "objectShapeCustom": "",
          "emotionCue": "alert",
          "motionCue": "rising",
          "sequenceIndex": 6,
          "x": 790,
          "y": 430
        },
        {
          "id": "palace-ch7-master-corridor-block-7",
          "width": 290,
          "height": 180,
          "title": "7-26B | Repeated-Root Recovery Tank",
          "sourceRoomIds": [
            "ch7-room-7262-a",
            "ch7-room-7262-b",
            "ch7-room-7262-c",
            "ch7-room-7262-d"
          ],
          "mnemonicPeg": "One bubble rises, collapses, and repeats in the same lane.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Recognize the Repeated Root to Build the Characteristic Equation -> Response Frame | Read the Initial Voltage to Read the Initial Current -> Constraint Forge | Differentiate the Voltage to Recover $$C$$ to Match the Constant Term to Find $$L$$ -> Final Seal | Match the Linear Term to Find $$R$$ to Final Check. The tank is about reconstruction, not forward solving. The repeated bubble is the first thing you must see.",
          "relationType": "sequence",
          "tags": [
            "parallel",
            "repeated-root",
            "recovery",
            "critical"
          ],
          "icon": "token",
          "accentVariant": "ember",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "room",
          "objectShape": "flame",
          "objectShapeCustom": "",
          "emotionCue": "intense",
          "motionCue": "rising",
          "sequenceIndex": 7,
          "x": 470,
          "y": 430
        },
        {
          "id": "palace-ch7-master-corridor-block-8",
          "width": 290,
          "height": 180,
          "title": "7-27A | Parallel Design Desk",
          "sourceRoomIds": [
            "ch7-room-7271-a",
            "ch7-room-7271-b",
            "ch7-room-7271-c",
            "ch7-room-7271-d"
          ],
          "mnemonicPeg": "Two stamps and one unlocked drawer.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Start from the Parallel Form to Convert the Design Targets -> Response Frame | Choose One Component to Solve for C -> Constraint Forge | Solve for L -> Final Seal | Final Design Logic. Touch the zeta stamp first, then the omega stamp, then open the drawer to pick the easy component.",
          "relationType": "sequence",
          "tags": [
            "parallel",
            "design",
            "zeta",
            "omega0"
          ],
          "icon": "token",
          "accentVariant": "cyan",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "anchor",
          "objectShape": "cube",
          "objectShapeCustom": "",
          "emotionCue": "calm",
          "motionCue": "aligning",
          "sequenceIndex": 8,
          "x": 150,
          "y": 430
        },
        {
          "id": "palace-ch7-master-corridor-block-9",
          "width": 290,
          "height": 180,
          "title": "7-27B | Branch-Current Theater",
          "sourceRoomIds": [
            "ch7-room-7272-a",
            "ch7-room-7272-b",
            "ch7-room-7272-c",
            "ch7-room-7272-d"
          ],
          "mnemonicPeg": "Three stages and one green chorus line.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Write the Parallel Characteristic Equation to Use the Initial Current -> Response Frame | Convert the Initial Voltage into a Derivative Condition to Solve for $$K_2$$ and Finish $$i_L(t)$$ -> Constraint Forge | Differentiate to Get the Branch Voltage to Use the Voltage to Get $$i_R(t)$$ -> Final Seal | Differentiate the Voltage to Get $$i_C(t)$$ to Validate KCL from the Three Currents. Blue starts, white follows from v/R, violet follows from C dv/dt, and green cleans the whole equation to zero.",
          "relationType": "sequence",
          "tags": [
            "parallel",
            "currents",
            "KCL",
            "underdamped"
          ],
          "icon": "token",
          "accentVariant": "violet",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "hallway",
          "objectShape": "path",
          "objectShapeCustom": "",
          "emotionCue": "loud",
          "motionCue": "oscillating",
          "sequenceIndex": 9,
          "x": 150,
          "y": 680
        },
        {
          "id": "palace-ch7-master-corridor-block-10",
          "width": 290,
          "height": 180,
          "title": "7-28 | Critical Mirror Chamber",
          "sourceRoomIds": [
            "ch7-room-728-a",
            "ch7-room-728-b",
            "ch7-room-728-c",
            "ch7-room-728-d"
          ],
          "mnemonicPeg": "Two mirrors showing the same pulse from two different angles.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Recognize the Repeated Root to Build the Characteristic Equation -> Response Frame | Read the Initial State Values to Recover the Inductance -> Constraint Forge | Recover the Capacitance to Recover the Resistance -> Final Seal | Write the Resistor Current to Final Memory Pattern. Do not treat the walls as separate stories. They are the same repeated-root chamber reflected through current and voltage.",
          "relationType": "sequence",
          "tags": [
            "parallel",
            "recovery",
            "critical",
            "waveform"
          ],
          "icon": "token",
          "accentVariant": "ember",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "bridge",
          "objectShape": "gate",
          "objectShapeCustom": "",
          "emotionCue": "precise",
          "motionCue": "reflecting",
          "sequenceIndex": 10,
          "x": 470,
          "y": 680
        },
        {
          "id": "palace-ch7-master-corridor-block-11",
          "width": 290,
          "height": 180,
          "title": "7-29 | Capacitor Sweep Gallery",
          "sourceRoomIds": [
            "ch7-room-729-a",
            "ch7-room-729-b",
            "ch7-room-729-c",
            "ch7-room-729-d"
          ],
          "mnemonicPeg": "Three glass cases with wider spacing and quieter ringing from left to right.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Start from the Same Series RLC Model to Separate What Stays Fixed -> Response Frame | Track the Natural Frequency to Track the Damping Ratio -> Constraint Forge | Find the Critical Boundary to Classify the Three Representative Curves -> Final Seal | Compare This Sweep with the Resistor Sweep to Final Memory Pattern. The cases are ordered by capacitor size, not by damping label. You read the formulas first, then assign the case names.",
          "relationType": "sequence",
          "tags": [
            "series",
            "sweep",
            "damping",
            "capacitor"
          ],
          "icon": "token",
          "accentVariant": "gold",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "hallway",
          "objectShape": "path",
          "objectShapeCustom": "",
          "emotionCue": "observant",
          "motionCue": "stretching",
          "sequenceIndex": 11,
          "x": 790,
          "y": 680
        },
        {
          "id": "palace-ch7-master-corridor-block-12",
          "width": 290,
          "height": 180,
          "title": "7-30 | Flat-Sum Plot Deck",
          "sourceRoomIds": [
            "ch7-room-730-a",
            "ch7-room-730-b",
            "ch7-room-730-c",
            "ch7-room-730-d"
          ],
          "mnemonicPeg": "A gold horizon line refusing to move while the other traces swing underneath.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Start from the Solved Branch Currents to Recall the Inductor Current -> Response Frame | Recall the Capacitor Current to Recall the Resistor Current -> Constraint Forge | Add the Three Expressions to Interpret the Plot -> Final Seal | Final Memory Pattern. The gold line is the anchor. The other colors only matter because they cancel each other and leave the horizon untouched.",
          "relationType": "sequence",
          "tags": [
            "parallel",
            "plot",
            "KCL",
            "verification"
          ],
          "icon": "token",
          "accentVariant": "cyan",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "room",
          "objectShape": "path",
          "objectShapeCustom": "",
          "emotionCue": "satisfied",
          "motionCue": "canceling",
          "sequenceIndex": 12,
          "x": 1110,
          "y": 680
        },
        {
          "id": "palace-ch7-master-corridor-block-13",
          "width": 290,
          "height": 180,
          "title": "7-31 | Divider Vault",
          "sourceRoomIds": [
            "ch7-room-731-a",
            "ch7-room-731-b",
            "ch7-room-731-c",
            "ch7-room-731-d"
          ],
          "mnemonicPeg": "One merged branch key, one divider lock, two exit keys.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Collapse the Parallel LC Branch to Compute the Parallel Impedance -> Response Frame | Form the Transfer Function to Apply the 60 V Step Input -> Constraint Forge | Substitute the Element Values to Factor the Denominator -> Final Seal | Use Partial Fractions to Final Time-Domain Response. The vault refuses to open if you try to do time-domain work before the branch reduction. Merge first, then divide, then invert.",
          "relationType": "sequence",
          "tags": [
            "parallel",
            "transfer",
            "divider",
            "pulse"
          ],
          "icon": "token",
          "accentVariant": "violet",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "anchor",
          "objectShape": "gate",
          "objectShapeCustom": "",
          "emotionCue": "methodical",
          "motionCue": "unlocking",
          "sequenceIndex": 13,
          "x": 1110,
          "y": 930
        },
        {
          "id": "palace-ch7-master-corridor-block-14",
          "width": 290,
          "height": 180,
          "title": "7-32 | Critical Crown Room",
          "sourceRoomIds": [
            "ch7-room-732-a",
            "ch7-room-732-b",
            "ch7-room-732-c",
            "ch7-room-732-d"
          ],
          "mnemonicPeg": "A crown, a frozen clock, and a glowing power meter in one room.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Start from the Figure 7-47 Denominator to Match the Standard Second-Order Pattern -> Response Frame | Impose Critical Damping to Evaluate the Resistor Value -> Constraint Forge | Write the Critical Output Response to Find the Peak Voltage -> Final Seal | Find the Source Current to Compute the Maximum Source Power. The crown fixes the resistor. The clock fixes the peak time. The meter only turns on after the current formula is already known.",
          "relationType": "sequence",
          "tags": [
            "critical",
            "design",
            "peak",
            "power"
          ],
          "icon": "token",
          "accentVariant": "gold",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "room",
          "objectShape": "door",
          "objectShapeCustom": "",
          "emotionCue": "decisive",
          "motionCue": "freezing",
          "sequenceIndex": 14,
          "x": 790,
          "y": 930
        },
        {
          "id": "palace-ch7-master-corridor-block-15",
          "width": 290,
          "height": 180,
          "title": "7-33 | Reverse-Engineering Vault",
          "sourceRoomIds": [
            "ch7-room-733-a",
            "ch7-room-733-b",
            "ch7-room-733-c",
            "ch7-room-733-d"
          ],
          "mnemonicPeg": "One vault, two displays, three recovered component values.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Read the Root Pair to Build the Characteristic Equation -> Response Frame | Read the State Values and the Input to Recover the Capacitance -> Constraint Forge | Recover L and R -> Final Seal | Find the Resistor Voltage. The left display is voltage, the right display is current, but the roots sit above both. Read them before anything else.",
          "relationType": "sequence",
          "tags": [
            "series",
            "recovery",
            "waveform",
            "underdamped"
          ],
          "icon": "token",
          "accentVariant": "cyan",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "anchor",
          "objectShape": "gate",
          "objectShapeCustom": "",
          "emotionCue": "detective",
          "motionCue": "extracting",
          "sequenceIndex": 15,
          "x": 470,
          "y": 930
        },
        {
          "id": "palace-ch7-master-corridor-block-16",
          "width": 290,
          "height": 180,
          "title": "7-34 | Duality Mirror Hall",
          "sourceRoomIds": [
            "ch7-room-734-a",
            "ch7-room-734-b",
            "ch7-room-734-c",
            "ch7-room-734-d"
          ],
          "mnemonicPeg": "Two opposite doors facing each other across one mirror line.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Write the Series Equation to Match the Standard Form -> Response Frame | Use the Critical Boundary -> Constraint Forge | Evaluate the Threshold -> Final Seal | Compare with the Parallel Case. Whenever resistance range questions appear, ask first whether the circuit is series or parallel. The mirror hall only works if the topology is identified immediately.",
          "relationType": "sequence",
          "tags": [
            "comparison",
            "duality",
            "series",
            "parallel"
          ],
          "icon": "token",
          "accentVariant": "ember",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "bridge",
          "objectShape": "door",
          "objectShapeCustom": "",
          "emotionCue": "clear",
          "motionCue": "mirroring",
          "sequenceIndex": 16,
          "x": 150,
          "y": 930
        },
        {
          "id": "palace-ch7-master-corridor-block-17",
          "width": 290,
          "height": 180,
          "title": "7-35 | Fixed-Capacitor Seal",
          "sourceRoomIds": [
            "ch7-room-735-a",
            "ch7-room-735-b",
            "ch7-room-735-c",
            "ch7-room-735-d"
          ],
          "mnemonicPeg": "A glass case over C, with two exposed dials for L and R.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Match the Series Standard Form to Convert the Design Targets -> Response Frame | Use the Fixed Capacitor to Solve for the Inductor -> Constraint Forge | Solve for the Resistor -> Final Seal | Why the Answer Is Unique. Do not look for a free-choice lever here. The sealed capacitor removes it, so the two equations close the whole room.",
          "relationType": "sequence",
          "tags": [
            "series",
            "design",
            "fixed-capacitor",
            "unique"
          ],
          "icon": "token",
          "accentVariant": "gold",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "anchor",
          "objectShape": "gate",
          "objectShapeCustom": "",
          "emotionCue": "certain",
          "motionCue": "locking",
          "sequenceIndex": 17,
          "x": 150,
          "y": 1180
        }
      ],
      "edges": [
        {
          "id": "palace-ch7-master-corridor-edge-1",
          "fromBlockId": "palace-ch7-master-corridor-block-1",
          "toBlockId": "palace-ch7-master-corridor-block-2",
          "label": "next room"
        },
        {
          "id": "palace-ch7-master-corridor-edge-2",
          "fromBlockId": "palace-ch7-master-corridor-block-2",
          "toBlockId": "palace-ch7-master-corridor-block-3",
          "label": "next room"
        },
        {
          "id": "palace-ch7-master-corridor-edge-3",
          "fromBlockId": "palace-ch7-master-corridor-block-3",
          "toBlockId": "palace-ch7-master-corridor-block-4",
          "label": "next room"
        },
        {
          "id": "palace-ch7-master-corridor-edge-4",
          "fromBlockId": "palace-ch7-master-corridor-block-4",
          "toBlockId": "palace-ch7-master-corridor-block-5",
          "label": "next room"
        },
        {
          "id": "palace-ch7-master-corridor-edge-5",
          "fromBlockId": "palace-ch7-master-corridor-block-5",
          "toBlockId": "palace-ch7-master-corridor-block-6",
          "label": "next room"
        },
        {
          "id": "palace-ch7-master-corridor-edge-6",
          "fromBlockId": "palace-ch7-master-corridor-block-6",
          "toBlockId": "palace-ch7-master-corridor-block-7",
          "label": "next room"
        },
        {
          "id": "palace-ch7-master-corridor-edge-7",
          "fromBlockId": "palace-ch7-master-corridor-block-7",
          "toBlockId": "palace-ch7-master-corridor-block-8",
          "label": "next room"
        },
        {
          "id": "palace-ch7-master-corridor-edge-8",
          "fromBlockId": "palace-ch7-master-corridor-block-8",
          "toBlockId": "palace-ch7-master-corridor-block-9",
          "label": "next room"
        },
        {
          "id": "palace-ch7-master-corridor-edge-9",
          "fromBlockId": "palace-ch7-master-corridor-block-9",
          "toBlockId": "palace-ch7-master-corridor-block-10",
          "label": "next room"
        },
        {
          "id": "palace-ch7-master-corridor-edge-10",
          "fromBlockId": "palace-ch7-master-corridor-block-10",
          "toBlockId": "palace-ch7-master-corridor-block-11",
          "label": "next room"
        },
        {
          "id": "palace-ch7-master-corridor-edge-11",
          "fromBlockId": "palace-ch7-master-corridor-block-11",
          "toBlockId": "palace-ch7-master-corridor-block-12",
          "label": "next room"
        },
        {
          "id": "palace-ch7-master-corridor-edge-12",
          "fromBlockId": "palace-ch7-master-corridor-block-12",
          "toBlockId": "palace-ch7-master-corridor-block-13",
          "label": "next room"
        },
        {
          "id": "palace-ch7-master-corridor-edge-13",
          "fromBlockId": "palace-ch7-master-corridor-block-13",
          "toBlockId": "palace-ch7-master-corridor-block-14",
          "label": "next room"
        },
        {
          "id": "palace-ch7-master-corridor-edge-14",
          "fromBlockId": "palace-ch7-master-corridor-block-14",
          "toBlockId": "palace-ch7-master-corridor-block-15",
          "label": "next room"
        },
        {
          "id": "palace-ch7-master-corridor-edge-15",
          "fromBlockId": "palace-ch7-master-corridor-block-15",
          "toBlockId": "palace-ch7-master-corridor-block-16",
          "label": "next room"
        },
        {
          "id": "palace-ch7-master-corridor-edge-16",
          "fromBlockId": "palace-ch7-master-corridor-block-16",
          "toBlockId": "palace-ch7-master-corridor-block-17",
          "label": "next room"
        }
      ],
      "sketches": [],
      "images": [],
      "viewport": {
        "zoom": 0.4
      }
    },
    {
      "id": "palace-ch7-series-forge",
      "name": "Series Response Forge",
      "importedPages": [
        "rlc-ex722-example.html",
        "rlc-design723.html",
        "rlc-design725-example.html",
        "rlc-ex725.html",
        "rlc-ex729.html",
        "rlc-ex733.html",
        "rlc-design735.html"
      ],
      "importedRooms": [
        {
          "id": "ch7-room-722-a",
          "anchorId": "room-ch7-722-a",
          "title": "Subroom 7-22.1: Setup Lens | Write the Differential Equation to Read the Forced Response",
          "summary": "For the capacitor voltage, the step-driven equation is Then The input is a constant step of 10 V, so the steady forced response is simply",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> A series RLC circuit in zero state is driven by a step input. Find the capacitor voltage for $$t\\ge 0.$$ The fastest route is to separate the forced response from the underdamped natural response, then use the zero-state initial conditions to solve the constants.</p><p><strong>Scene extension:</strong> Gold crown on a balcony, then two colored ribbons under one fading roof. This chamber covers Write the Differential Equation to Read the Forced Response.</p><h4>Worked Detail 1: Room 1: Write the Differential Equation</h4><ul><li>For the capacitor voltage, the step-driven equation is</li><li>$$10^{-6}\\frac{d^2v_C}{dt^2}+0.5\\times 10^{-3}\\frac{dv_C}{dt}+v_C(t)=10,\\qquad t\\ge 0.$$</li></ul><h4>Worked Detail 2: Room 2: Read the Forced Response</h4><ul><li>The input is a constant step of 10 V, so the steady forced response is simply</li><li>$$v_{CF}(t)=10.$$</li></ul><p><strong>Carry rule:</strong> For this step response, the entire chain is: constant input gives the forced 10 V, the normalized homogeneous equation gives the underdamped natural part, and the zero-state conditions lock the two constants.</p>",
          "sourcePage": "rlc-ex722-example.html",
          "sourcePageTitle": "Example 7-22 | Series Step Response of Capacitor Voltage",
          "sourceUrl": "rlc-ex722-example.html",
          "tags": [
            "series",
            "step",
            "forced",
            "underdamped"
          ],
          "order": 0
        },
        {
          "id": "ch7-room-722-b",
          "anchorId": "room-ch7-722-b",
          "title": "Subroom 7-22.2: Response Frame | Normalize the Homogeneous Equation to Identify the Damping Case",
          "summary": "The homogeneous part is Then From $$2\\zeta\\omega_0=500,$$ we get $$\\zeta=0.25.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> A series RLC circuit in zero state is driven by a step input. Find the capacitor voltage for $$t\\ge 0.$$ The fastest route is to separate the forced response from the underdamped natural response, then use the zero-state initial conditions to solve the constants.</p><p><strong>Scene extension:</strong> Gold crown on a balcony, then two colored ribbons under one fading roof. This chamber covers Normalize the Homogeneous Equation to Identify the Damping Case.</p><h4>Worked Detail 1: Room 3: Normalize the Homogeneous Equation</h4><ul><li>The homogeneous part is</li><li>$$\\frac{d^2v_{CN}}{dt^2}+500\\frac{dv_{CN}}{dt}+10^6v_{CN}(t)=0.$$</li><li>Comparing with the standard second-order form gives</li><li>$$\\omega_0=1000,\\qquad 2\\zeta\\omega_0=500.$$</li></ul><h4>Worked Detail 2: Room 4: Identify the Damping Case</h4><ul><li>From $$2\\zeta\\omega_0=500,$$ we get $$\\zeta=0.25.$$</li><li>Since $$\\zeta&lt;1,$$ the response is underdamped.</li><li>So</li><li>$$\\alpha=\\zeta\\omega_0=250,\\qquad \\omega_d=\\omega_0\\sqrt{1-\\zeta^2}=968.$$</li></ul><p><strong>Carry rule:</strong> For this step response, the entire chain is: constant input gives the forced 10 V, the normalized homogeneous equation gives the underdamped natural part, and the zero-state conditions lock the two constants.</p>",
          "sourcePage": "rlc-ex722-example.html",
          "sourcePageTitle": "Example 7-22 | Series Step Response of Capacitor Voltage",
          "sourceUrl": "rlc-ex722-example.html",
          "tags": [
            "series",
            "step",
            "forced",
            "underdamped"
          ],
          "order": 1
        },
        {
          "id": "ch7-room-722-c",
          "anchorId": "room-ch7-722-c",
          "title": "Subroom 7-22.3: Constraint Forge | Write the Natural Response to Apply the Zero-State Initial Conditions",
          "summary": "The underdamped natural response is Then Because the circuit starts in zero state,",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> A series RLC circuit in zero state is driven by a step input. Find the capacitor voltage for $$t\\ge 0.$$ The fastest route is to separate the forced response from the underdamped natural response, then use the zero-state initial conditions to solve the constants.</p><p><strong>Scene extension:</strong> Gold crown on a balcony, then two colored ribbons under one fading roof. This chamber covers Write the Natural Response to Apply the Zero-State Initial Conditions.</p><h4>Worked Detail 1: Room 5: Write the Natural Response</h4><ul><li>The underdamped natural response is</li><li>$$v_{CN}(t)=K_1e^{-250t}\\cos 968t+K_2e^{-250t}\\sin 968t.$$</li><li>The full solution is</li><li>$$v_C(t)=10+K_1e^{-250t}\\cos 968t+K_2e^{-250t}\\sin 968t.$$</li></ul><h4>Worked Detail 2: Room 6: Apply the Zero-State Initial Conditions</h4><ul><li>Because the circuit starts in zero state,</li><li>$$v_C(0)=0,\\qquad \\left.\\frac{dv_C}{dt}\\right|_0=0.$$</li><li>From $$v_C(0)=0,$$</li><li>$$0=10+K_1,\\qquad K_1=-10.$$</li></ul><p><strong>Carry rule:</strong> For this step response, the entire chain is: constant input gives the forced 10 V, the normalized homogeneous equation gives the underdamped natural part, and the zero-state conditions lock the two constants.</p>",
          "sourcePage": "rlc-ex722-example.html",
          "sourcePageTitle": "Example 7-22 | Series Step Response of Capacitor Voltage",
          "sourceUrl": "rlc-ex722-example.html",
          "tags": [
            "series",
            "step",
            "forced",
            "underdamped"
          ],
          "order": 2
        },
        {
          "id": "ch7-room-722-d",
          "anchorId": "room-ch7-722-d",
          "title": "Subroom 7-22.4: Final Seal | Solve for $$K_2$$ to Final Capacitor Voltage",
          "summary": "Differentiate the full response and evaluate at $$t=0.$$ Then Substitute the constants:",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> A series RLC circuit in zero state is driven by a step input. Find the capacitor voltage for $$t\\ge 0.$$ The fastest route is to separate the forced response from the underdamped natural response, then use the zero-state initial conditions to solve the constants.</p><p><strong>Scene extension:</strong> Gold crown on a balcony, then two colored ribbons under one fading roof. This chamber covers Solve for $$K_2$$ to Final Capacitor Voltage.</p><h4>Worked Detail 1: Room 7: Solve for $$K_2$$</h4><ul><li>Differentiate the full response and evaluate at $$t=0.$$</li><li>This gives</li><li>$$0=-250K_1+968K_2.$$</li><li>With $$K_1=-10,$$</li><li>$$K_2=-2.58.$$</li></ul><h4>Worked Detail 2: Room 8: Final Capacitor Voltage</h4><ul><li>Substitute the constants:</li><li>$$\\boxed{v_C(t)=10-10e^{-250t}\\cos 968t-2.58e^{-250t}\\sin 968t\\ \\text{V}}.$$</li><li>This is the textbook step response with overshoot and ringing before settling to 10 V.</li></ul><p><strong>Carry rule:</strong> For this step response, the entire chain is: constant input gives the forced 10 V, the normalized homogeneous equation gives the underdamped natural part, and the zero-state conditions lock the two constants.</p>",
          "sourcePage": "rlc-ex722-example.html",
          "sourcePageTitle": "Example 7-22 | Series Step Response of Capacitor Voltage",
          "sourceUrl": "rlc-ex722-example.html",
          "tags": [
            "series",
            "step",
            "forced",
            "underdamped"
          ],
          "order": 3
        },
        {
          "id": "ch7-room-723-a",
          "anchorId": "room-ch7-723-a",
          "title": "Subroom 7-23.1: Setup Lens | Keep the Characteristic Skeleton Ready to Build the Part (a) Equation",
          "summary": "A series RLC circuit always uses $$LCs^2+R_TC s+1=0$$ or, after normalization, $$s^2+\\dfrac{R_T}{L}s+\\dfrac{1}{LC}=0.$$ Then Use $$R_T=2000\\ \\Omega,$$ $$L=0.1\\ \\text{H},$$ and $$C=0.4\\times?",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> For a series RLC circuit, work in both directions: in part (a) compute the roots from given $$R_T,$$ $$L,$$ and $$C;$$ in part (b) choose $$R_T$$ and $$C$$ from a target complex root pair; in part (c) design for a repeated root at $$-10^4$$ and explain why that condition does not produce a unique circuit.</p><p><strong>Scene extension:</strong> One steel skeleton with three doors: forward, reverse, and non-unique. This chamber covers Keep the Characteristic Skeleton Ready to Build the Part (a) Equation.</p><h4>Worked Detail 1: Room 1: Keep the Characteristic Skeleton Ready</h4><ul>\n              <li>A series RLC circuit always uses $$LCs^2+R_TC s+1=0$$ or, after normalization, $$s^2+\\dfrac{R_T}{L}s+\\dfrac{1}{LC}=0.$$</li>\n              <li>Part (a) goes from components to roots.</li>\n              <li>Parts (b) and (c) go from roots back to components.</li>\n            </ul><h4>Worked Detail 2: Room 2: Build the Part (a) Equation</h4><ul>\n              <li>Use $$R_T=2000\\ \\Omega,$$ $$L=0.1\\ \\text{H},$$ and $$C=0.4\\times 10^{-6}\\ \\text{F}. $$</li>\n              <li>Then $$LC=4\\times 10^{-8}$$ and $$R_TC=8\\times 10^{-4}. $$</li>\n              <li>So the characteristic equation is $$4\\times 10^{-8}s^2+8\\times 10^{-4}s+1=0,$$ or normalized as $$s^2+20{,}000s+25\\times 10^6=0.$$</li>\n            </ul><p><strong>Carry rule:</strong> Part (a) moves from elements to roots. Parts (b) and (c) move from roots to element constraints. The algebra is the same in both directions because the characteristic equation is the shared bridge.</p>",
          "sourcePage": "rlc-design723.html",
          "sourcePageTitle": "Design Exercise 7-23 | Design from Target Roots",
          "sourceUrl": "rlc-design723.html",
          "tags": [
            "series",
            "roots",
            "design",
            "uniqueness"
          ],
          "order": 4
        },
        {
          "id": "ch7-room-723-b",
          "anchorId": "room-ch7-723-b",
          "title": "Subroom 7-23.2: Response Frame | Solve Part (a) to Turn the Part (b) Target Roots into a Polynomial",
          "summary": "Apply the quadratic formula to $$s^2+20{,}000s+25\\times 10^6=0.$$ Then The target roots are $$-1000\\pm j2000.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> For a series RLC circuit, work in both directions: in part (a) compute the roots from given $$R_T,$$ $$L,$$ and $$C;$$ in part (b) choose $$R_T$$ and $$C$$ from a target complex root pair; in part (c) design for a repeated root at $$-10^4$$ and explain why that condition does not produce a unique circuit.</p><p><strong>Scene extension:</strong> One steel skeleton with three doors: forward, reverse, and non-unique. This chamber covers Solve Part (a) to Turn the Part (b) Target Roots into a Polynomial.</p><h4>Worked Detail 1: Room 3: Solve Part (a)</h4><ul>\n              <li>Apply the quadratic formula to $$s^2+20{,}000s+25\\times 10^6=0.$$</li>\n              <li>The roots are $$s=\\dfrac{-20{,}000\\pm\\sqrt{20{,}000^2-4(25\\times 10^6)}}{2}. $$</li>\n              <li>That gives $$s_1\\approx -1340$$ and $$s_2\\approx -18{,}660.$$</li>\n            </ul><h4>Worked Detail 2: Room 4: Turn the Part (b) Target Roots into a Polynomial</h4><ul>\n              <li>The target roots are $$-1000\\pm j2000.$$</li>\n              <li>Their characteristic equation is $$\\left(s+1000-j2000\\right)\\left(s+1000+j2000\\right)=0.$$</li>\n              <li>Expanding gives $$s^2+2000s+5\\times 10^6=0.$$</li>\n            </ul><p><strong>Carry rule:</strong> Part (a) moves from elements to roots. Parts (b) and (c) move from roots to element constraints. The algebra is the same in both directions because the characteristic equation is the shared bridge.</p>",
          "sourcePage": "rlc-design723.html",
          "sourcePageTitle": "Design Exercise 7-23 | Design from Target Roots",
          "sourceUrl": "rlc-design723.html",
          "tags": [
            "series",
            "roots",
            "design",
            "uniqueness"
          ],
          "order": 5
        },
        {
          "id": "ch7-room-723-c",
          "anchorId": "room-ch7-723-c",
          "title": "Subroom 7-23.3: Constraint Forge | Solve Part (b) by Coefficient Matching to Translate the Part (c) Double Root",
          "summary": "Match $$s^2+2000s+5\\times 10^6$$ with $$s^2+\\dfrac{R_T}{L}s+\\dfrac{1}{LC}. $$ Then The requirement $$s_1=s_2=-10^4$$ means the normalized quadratic is $$\\left(s+10^4\\right)^2=s^2+2\\times 10?",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> For a series RLC circuit, work in both directions: in part (a) compute the roots from given $$R_T,$$ $$L,$$ and $$C;$$ in part (b) choose $$R_T$$ and $$C$$ from a target complex root pair; in part (c) design for a repeated root at $$-10^4$$ and explain why that condition does not produce a unique circuit.</p><p><strong>Scene extension:</strong> One steel skeleton with three doors: forward, reverse, and non-unique. This chamber covers Solve Part (b) by Coefficient Matching to Translate the Part (c) Double Root.</p><h4>Worked Detail 1: Room 5: Solve Part (b) by Coefficient Matching</h4><ul>\n              <li>Match $$s^2+2000s+5\\times 10^6$$ with $$s^2+\\dfrac{R_T}{L}s+\\dfrac{1}{LC}. $$</li>\n              <li>From the linear term, $$\\dfrac{R_T}{L}=2000,$$ so $$R_T=2000(0.1)=200\\ \\Omega.$$</li>\n              <li>From the constant term, $$\\dfrac{1}{LC}=5\\times 10^6,$$ so $$C=\\dfrac{1}{5\\times 10^6(0.1)}=2\\times 10^{-6}\\ \\text{F}. $$</li>\n            </ul><h4>Worked Detail 2: Room 6: Translate the Part (c) Double Root</h4><ul>\n              <li>The requirement $$s_1=s_2=-10^4$$ means the normalized quadratic is $$\\left(s+10^4\\right)^2=s^2+2\\times 10^4 s+10^8. $$</li>\n              <li>Matching with $$s^2+\\dfrac{R_T}{L}s+\\dfrac{1}{LC}$$ gives $$\\dfrac{R_T}{L}=2\\times 10^4$$ and $$LC=10^{-8}. $$</li>\n              <li>In unnormalized form the same conditions are $$R_TC=2\\times 10^{-4}$$ and $$LC=10^{-8}. $$</li>\n            </ul><p><strong>Carry rule:</strong> Part (a) moves from elements to roots. Parts (b) and (c) move from roots to element constraints. The algebra is the same in both directions because the characteristic equation is the shared bridge.</p>",
          "sourcePage": "rlc-design723.html",
          "sourcePageTitle": "Design Exercise 7-23 | Design from Target Roots",
          "sourceUrl": "rlc-design723.html",
          "tags": [
            "series",
            "roots",
            "design",
            "uniqueness"
          ],
          "order": 6
        },
        {
          "id": "ch7-room-723-d",
          "anchorId": "room-ch7-723-d",
          "title": "Subroom 7-23.4: Final Seal | Explain Why Part (c) Has No Unique Answer to Design Takeaway",
          "summary": "Part (c) asks for $$R_T,$$ $$L,$$ and $$C,$$ but the repeated-root condition supplies only two independent equations. Then When roots are given, they determine the characteristic coefficien?",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> For a series RLC circuit, work in both directions: in part (a) compute the roots from given $$R_T,$$ $$L,$$ and $$C;$$ in part (b) choose $$R_T$$ and $$C$$ from a target complex root pair; in part (c) design for a repeated root at $$-10^4$$ and explain why that condition does not produce a unique circuit.</p><p><strong>Scene extension:</strong> One steel skeleton with three doors: forward, reverse, and non-unique. This chamber covers Explain Why Part (c) Has No Unique Answer to Design Takeaway.</p><h4>Worked Detail 1: Room 7: Explain Why Part (c) Has No Unique Answer</h4><ul>\n              <li>Part (c) asks for $$R_T,$$ $$L,$$ and $$C,$$ but the repeated-root condition supplies only two independent equations.</li>\n              <li>That means infinitely many series RLC circuits satisfy the same root requirement.</li>\n              <li>One valid choice is $$C=1\\times 10^{-6}\\ \\text{F},$$ which forces $$L=10\\ \\text{mH}$$ from $$LC=10^{-8},$$ and then $$R_T=200\\ \\Omega$$ from $$R_TC=2\\times 10^{-4}. $$</li>\n            </ul><h4>Worked Detail 2: Room 8: Design Takeaway</h4><ul>\n              <li>When roots are given, they determine the characteristic coefficients.</li>\n              <li>Those coefficients determine algebraic relationships among $$R_T,$$ $$L,$$ and $$C.$$</li>\n              <li>If the number of independent relationships is smaller than the number of unknowns, the design is not unique.</li>\n            </ul><p><strong>Carry rule:</strong> Part (a) moves from elements to roots. Parts (b) and (c) move from roots to element constraints. The algebra is the same in both directions because the characteristic equation is the shared bridge.</p>",
          "sourcePage": "rlc-design723.html",
          "sourcePageTitle": "Design Exercise 7-23 | Design from Target Roots",
          "sourceUrl": "rlc-design723.html",
          "tags": [
            "series",
            "roots",
            "design",
            "uniqueness"
          ],
          "order": 7
        },
        {
          "id": "ch7-room-7251-a",
          "anchorId": "room-ch7-7251-a",
          "title": "Subroom 7-25A.1: Setup Lens | Read the Target Poles to Build the Numerical Polynomial",
          "summary": "The response contains two distinct exponentials. Then Multiply the factors from the roots:",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> Design a series RLC circuit whose zero-state capacitor-voltage step response is $$v_C(t)=V_A-\\frac{5}{4}V_Ae^{-400t}+\\frac{1}{4}V_Ae^{-2000t},\\ t\\ge0.$$ Read the poles from the waveform, build the required characteristic equation, and choose one valid component set.</p><p><strong>Scene extension:</strong> A metal waveform slab feeds a furnace that stamps out its two poles. This chamber covers Read the Target Poles to Build the Numerical Polynomial.</p><h4>Worked Detail 1: Room 1: Read the Target Poles</h4><ul><li>The response contains two distinct exponentials.</li><li>Those exponentials reveal the roots directly: $$-400$$ and $$-2000.$$</li></ul><h4>Worked Detail 2: Room 2: Build the Numerical Polynomial</h4><ul><li>Multiply the factors from the roots:</li><li>$$(s+400)(s+2000)=s^2+2400s+8\\times10^5.$$</li></ul><p><strong>Carry rule:</strong> For design-from-waveform problems, read the poles first. The target response fixes the polynomial before the components are chosen.</p>",
          "sourcePage": "rlc-design725-example.html",
          "sourcePageTitle": "Design Example 7-25 | Design a Series RLC Circuit from a Target Step Response",
          "sourceUrl": "rlc-design725-example.html",
          "tags": [
            "series",
            "design",
            "poles",
            "waveform"
          ],
          "order": 8
        },
        {
          "id": "ch7-room-7251-b",
          "anchorId": "room-ch7-7251-b",
          "title": "Subroom 7-25A.2: Response Frame | Match the Series RLC Form to Choose a Convenient Component",
          "summary": "For a series RLC circuit, the characteristic equation is $$s^2+\\frac{R}{L}s+\\frac{1}{LC}=0.$$ Then There are three circuit parameters and only two constraints.",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> Design a series RLC circuit whose zero-state capacitor-voltage step response is $$v_C(t)=V_A-\\frac{5}{4}V_Ae^{-400t}+\\frac{1}{4}V_Ae^{-2000t},\\ t\\ge0.$$ Read the poles from the waveform, build the required characteristic equation, and choose one valid component set.</p><p><strong>Scene extension:</strong> A metal waveform slab feeds a furnace that stamps out its two poles. This chamber covers Match the Series RLC Form to Choose a Convenient Component.</p><h4>Worked Detail 1: Room 3: Match the Series RLC Form</h4><ul><li>For a series RLC circuit, the characteristic equation is $$s^2+\\frac{R}{L}s+\\frac{1}{LC}=0.$$</li><li>Matching coefficients gives $$R/L=2400$$ and $$1/(LC)=8\\times10^5.$$</li></ul><h4>Worked Detail 2: Room 4: Choose a Convenient Component</h4><ul><li>There are three circuit parameters and only two constraints.</li><li>Choose $$R=3\\ \\text{k}\\Omega$$ to make the arithmetic clean.</li></ul><p><strong>Carry rule:</strong> For design-from-waveform problems, read the poles first. The target response fixes the polynomial before the components are chosen.</p>",
          "sourcePage": "rlc-design725-example.html",
          "sourcePageTitle": "Design Example 7-25 | Design a Series RLC Circuit from a Target Step Response",
          "sourceUrl": "rlc-design725-example.html",
          "tags": [
            "series",
            "design",
            "poles",
            "waveform"
          ],
          "order": 9
        },
        {
          "id": "ch7-room-7251-c",
          "anchorId": "room-ch7-7251-c",
          "title": "Subroom 7-25A.3: Constraint Forge | Solve for L and C",
          "summary": "From $$R/L=2400,$$ $$L=3000/2400=1.25\\ \\text{H}.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> Design a series RLC circuit whose zero-state capacitor-voltage step response is $$v_C(t)=V_A-\\frac{5}{4}V_Ae^{-400t}+\\frac{1}{4}V_Ae^{-2000t},\\ t\\ge0.$$ Read the poles from the waveform, build the required characteristic equation, and choose one valid component set.</p><p><strong>Scene extension:</strong> A metal waveform slab feeds a furnace that stamps out its two poles. This chamber covers Solve for L and C.</p><h4>Worked Detail 1: Room 5: Solve for L and C</h4><ul><li>From $$R/L=2400,$$ $$L=3000/2400=1.25\\ \\text{H}.$$</li><li>From $$1/(LC)=8\\times10^5,$$ $$C=1/((1.25)(8\\times10^5))=1\\ \\mu\\text{F}.$$</li></ul><p><strong>Carry rule:</strong> For design-from-waveform problems, read the poles first. The target response fixes the polynomial before the components are chosen.</p>",
          "sourcePage": "rlc-design725-example.html",
          "sourcePageTitle": "Design Example 7-25 | Design a Series RLC Circuit from a Target Step Response",
          "sourceUrl": "rlc-design725-example.html",
          "tags": [
            "series",
            "design",
            "poles",
            "waveform"
          ],
          "order": 10
        },
        {
          "id": "ch7-room-7251-d",
          "anchorId": "room-ch7-7251-d",
          "title": "Subroom 7-25A.4: Final Seal | Final Design Logic",
          "summary": "The chosen set satisfies both coefficient conditions.",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> Design a series RLC circuit whose zero-state capacitor-voltage step response is $$v_C(t)=V_A-\\frac{5}{4}V_Ae^{-400t}+\\frac{1}{4}V_Ae^{-2000t},\\ t\\ge0.$$ Read the poles from the waveform, build the required characteristic equation, and choose one valid component set.</p><p><strong>Scene extension:</strong> A metal waveform slab feeds a furnace that stamps out its two poles. This chamber covers Final Design Logic.</p><h4>Worked Detail 1: Room 6: Final Design Logic</h4><ul><li>The chosen set satisfies both coefficient conditions.</li><li>Many other designs are possible because one component can be selected freely.</li></ul><p><strong>Carry rule:</strong> For design-from-waveform problems, read the poles first. The target response fixes the polynomial before the components are chosen.</p>",
          "sourcePage": "rlc-design725-example.html",
          "sourcePageTitle": "Design Example 7-25 | Design a Series RLC Circuit from a Target Step Response",
          "sourceUrl": "rlc-design725-example.html",
          "tags": [
            "series",
            "design",
            "poles",
            "waveform"
          ],
          "order": 11
        },
        {
          "id": "ch7-room-7252-a",
          "anchorId": "room-ch7-7252-a",
          "title": "Subroom 7-25B.1: Setup Lens | Write the Series Characteristic Equation to Find the Two Real Roots",
          "summary": "For a zero-input series RLC circuit, use Then Factoring or solving gives",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> For a series RLC circuit with $$R=250\\ \\Omega,$$ $$L=10\\ \\text{mH},$$ $$C=1\\ \\mu\\text{F},$$ $$V_0=0,$$ and $$I_0=30\\ \\text{mA},$$ find the capacitor voltage and inductor current for $$t\\ge 0.$$</p><p><strong>Scene extension:</strong> Two ghosts in one coffin, with the current meter deciding which name belongs to which ghost. This chamber covers Write the Series Characteristic Equation to Find the Two Real Roots.</p><h4>Worked Detail 1: Room 1: Write the Series Characteristic Equation</h4><ul>\n              <li>For a zero-input series RLC circuit, use</li>\n              <li>$$s^2+\\frac{R}{L}s+\\frac{1}{LC}=0.$$</li>\n              <li>Substitute the values:</li>\n              <li>$$s^2+\\frac{250}{0.01}s+\\frac{1}{0.01\\times 10^{-6}}=0.$$</li>\n              <li>So</li>\n              <li>$$s^2+25000s+10^8=0.$$</li>\n            </ul><h4>Worked Detail 2: Room 2: Find the Two Real Roots</h4><ul>\n              <li>Factoring or solving gives</li>\n              <li>$$s_1=-5000,\\qquad s_2=-20000.$$</li>\n              <li>So the capacitor-voltage template is</li>\n              <li>$$v_C(t)=K_1e^{-5000t}+K_2e^{-20000t}.$$</li>\n            </ul><p><strong>Carry rule:</strong> For a series zero-input problem with voltage as the state variable, write the two-root voltage form, use $$v_C(0)$$ to connect the constants, use $$i=C\\,dv/dt$$ for the slope condition, then differentiate once more to recover the current.</p>",
          "sourcePage": "rlc-ex725.html",
          "sourcePageTitle": "Exercise 7-25 | Series Zero-Input Voltage and Current",
          "sourceUrl": "rlc-ex725.html",
          "tags": [
            "series",
            "zero-input",
            "two-decay",
            "current"
          ],
          "order": 12
        },
        {
          "id": "ch7-room-7252-b",
          "anchorId": "room-ch7-7252-b",
          "title": "Subroom 7-25B.2: Response Frame | Apply the Initial Voltage to Convert the Initial Current into a Slope",
          "summary": "At $$t=0,$$ Then Because the current is the same through every series element,",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> For a series RLC circuit with $$R=250\\ \\Omega,$$ $$L=10\\ \\text{mH},$$ $$C=1\\ \\mu\\text{F},$$ $$V_0=0,$$ and $$I_0=30\\ \\text{mA},$$ find the capacitor voltage and inductor current for $$t\\ge 0.$$</p><p><strong>Scene extension:</strong> Two ghosts in one coffin, with the current meter deciding which name belongs to which ghost. This chamber covers Apply the Initial Voltage to Convert the Initial Current into a Slope.</p><h4>Worked Detail 1: Room 3: Apply the Initial Voltage</h4><ul>\n              <li>At $$t=0,$$</li>\n              <li>$$v_C(0)=K_1+K_2=0.$$</li>\n              <li>Therefore</li>\n              <li>$$K_2=-K_1.$$</li>\n            </ul><h4>Worked Detail 2: Room 4: Convert the Initial Current into a Slope</h4><ul>\n              <li>Because the current is the same through every series element,</li>\n              <li>$$i_L(t)=i_C(t)=C\\frac{dv_C}{dt}.$$</li>\n              <li>Differentiate the voltage template:</li>\n              <li>$$\\frac{dv_C}{dt}=-5000K_1e^{-5000t}-20000K_2e^{-20000t}.$$</li>\n              <li>At $$t=0,$$</li>\n              <li>$$I_0=C(-5000K_1-20000K_2).$$</li>\n            </ul><p><strong>Carry rule:</strong> For a series zero-input problem with voltage as the state variable, write the two-root voltage form, use $$v_C(0)$$ to connect the constants, use $$i=C\\,dv/dt$$ for the slope condition, then differentiate once more to recover the current.</p>",
          "sourcePage": "rlc-ex725.html",
          "sourcePageTitle": "Exercise 7-25 | Series Zero-Input Voltage and Current",
          "sourceUrl": "rlc-ex725.html",
          "tags": [
            "series",
            "zero-input",
            "two-decay",
            "current"
          ],
          "order": 13
        },
        {
          "id": "ch7-room-7252-c",
          "anchorId": "room-ch7-7252-c",
          "title": "Subroom 7-25B.3: Constraint Forge | Solve for $$K_1$$ and $$K_2$$ to Final Capacitor Voltage",
          "summary": "Use $$C=10^{-6}\\ \\text{F}$$ and $$I_0=30\\ \\text{mA}=0.03\\ \\text{A}.$$ Then Substitute the constants into the voltage template:",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> For a series RLC circuit with $$R=250\\ \\Omega,$$ $$L=10\\ \\text{mH},$$ $$C=1\\ \\mu\\text{F},$$ $$V_0=0,$$ and $$I_0=30\\ \\text{mA},$$ find the capacitor voltage and inductor current for $$t\\ge 0.$$</p><p><strong>Scene extension:</strong> Two ghosts in one coffin, with the current meter deciding which name belongs to which ghost. This chamber covers Solve for $$K_1$$ and $$K_2$$ to Final Capacitor Voltage.</p><h4>Worked Detail 1: Room 5: Solve for $$K_1$$ and $$K_2$$</h4><ul>\n              <li>Use $$C=10^{-6}\\ \\text{F}$$ and $$I_0=30\\ \\text{mA}=0.03\\ \\text{A}.$$</li>\n              <li>Then</li>\n              <li>$$0.03=10^{-6}(-5000K_1-20000K_2).$$</li>\n              <li>With $$K_2=-K_1,$$ this becomes</li>\n              <li>$$0.03=10^{-6}(15000K_1),$$ so $$K_1=2$$ and $$K_2=-2.$$</li>\n            </ul><h4>Worked Detail 2: Room 6: Final Capacitor Voltage</h4><ul>\n              <li>Substitute the constants into the voltage template:</li>\n              <li>$$\\boxed{v_C(t)=2e^{-5000t}-2e^{-20000t}\\ \\text{V}}.$$</li>\n            </ul><p><strong>Carry rule:</strong> For a series zero-input problem with voltage as the state variable, write the two-root voltage form, use $$v_C(0)$$ to connect the constants, use $$i=C\\,dv/dt$$ for the slope condition, then differentiate once more to recover the current.</p>",
          "sourcePage": "rlc-ex725.html",
          "sourcePageTitle": "Exercise 7-25 | Series Zero-Input Voltage and Current",
          "sourceUrl": "rlc-ex725.html",
          "tags": [
            "series",
            "zero-input",
            "two-decay",
            "current"
          ],
          "order": 14
        },
        {
          "id": "ch7-room-7252-d",
          "anchorId": "room-ch7-7252-d",
          "title": "Subroom 7-25B.4: Final Seal | Differentiate to Get the Inductor Current to Read the Shape",
          "summary": "Differentiate the final voltage: Then The circuit is overdamped because the roots are two different real negatives.",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> For a series RLC circuit with $$R=250\\ \\Omega,$$ $$L=10\\ \\text{mH},$$ $$C=1\\ \\mu\\text{F},$$ $$V_0=0,$$ and $$I_0=30\\ \\text{mA},$$ find the capacitor voltage and inductor current for $$t\\ge 0.$$</p><p><strong>Scene extension:</strong> Two ghosts in one coffin, with the current meter deciding which name belongs to which ghost. This chamber covers Differentiate to Get the Inductor Current to Read the Shape.</p><h4>Worked Detail 1: Room 7: Differentiate to Get the Inductor Current</h4><ul>\n              <li>Differentiate the final voltage:</li>\n              <li>$$\\frac{dv_C}{dt}=-10000e^{-5000t}+40000e^{-20000t}.$$</li>\n              <li>Multiply by $$C=10^{-6}\\ \\text{F}:$$</li>\n              <li>$$i_L(t)=10^{-6}\\left(-10000e^{-5000t}+40000e^{-20000t}\\right).$$</li>\n              <li>So</li>\n              <li>$$\\boxed{i_L(t)=-10e^{-5000t}+40e^{-20000t}\\ \\text{mA}}.$$</li>\n            </ul><h4>Worked Detail 2: Room 8: Read the Shape</h4><ul>\n              <li>The circuit is overdamped because the roots are two different real negatives.</li>\n              <li>The faster $$e^{-20000t}$$ term dies first, so the slower $$e^{-5000t}$$ term dominates later time.</li>\n            </ul><p><strong>Carry rule:</strong> For a series zero-input problem with voltage as the state variable, write the two-root voltage form, use $$v_C(0)$$ to connect the constants, use $$i=C\\,dv/dt$$ for the slope condition, then differentiate once more to recover the current.</p>",
          "sourcePage": "rlc-ex725.html",
          "sourcePageTitle": "Exercise 7-25 | Series Zero-Input Voltage and Current",
          "sourceUrl": "rlc-ex725.html",
          "tags": [
            "series",
            "zero-input",
            "two-decay",
            "current"
          ],
          "order": 15
        },
        {
          "id": "ch7-room-729-a",
          "anchorId": "room-ch7-729-a",
          "title": "Subroom 7-29.1: Setup Lens | Start from the Same Series RLC Model to Separate What Stays Fixed",
          "summary": "The capacitor voltage satisfies Then With $$R=1\\ \\text{k}\\Omega$$ and $$L=2\\ \\text{H},$$ the damping coefficient is fixed at",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> Keep the series RLC step-response setup from Example 7-22, but vary the capacitor instead of the resistor. The goal is to track how the capacitor sweep changes the capacitor voltage waveform, the damping ratio, and the natural frequency.</p><p><strong>Scene extension:</strong> Three glass cases with wider spacing and quieter ringing from left to right. This chamber covers Start from the Same Series RLC Model to Separate What Stays Fixed.</p><h4>Worked Detail 1: Room 1: Start from the Same Series RLC Model</h4><ul><li>The capacitor voltage satisfies</li><li>$$\\frac{d^2v_C}{dt^2}+\\frac{R}{L}\\frac{dv_C}{dt}+\\frac{1}{LC}v_C=\\frac{V_A}{LC}.$$</li><li>Only $$C$$ is changing in this exercise.</li></ul><h4>Worked Detail 2: Room 2: Separate What Stays Fixed</h4><ul><li>With $$R=1\\ \\text{k}\\Omega$$ and $$L=2\\ \\text{H},$$ the damping coefficient is fixed at</li><li>$$\\alpha=\\frac{R}{2L}=250\\ \\text{rad/s}. $$</li><li>That means the resistor is no longer the sweep knob.</li></ul><p><strong>Carry rule:</strong> For this series RLC family, increasing $$C$$ pulls the natural frequency down and pushes the damping ratio up. That is why the waveform both slows down and loses its oscillation as the capacitor grows.</p>",
          "sourcePage": "rlc-ex729.html",
          "sourcePageTitle": "Exercise 7-29 | Capacitor Sweep in a Series RLC Step Response",
          "sourceUrl": "rlc-ex729.html",
          "tags": [
            "series",
            "sweep",
            "damping",
            "capacitor"
          ],
          "order": 16
        },
        {
          "id": "ch7-room-729-b",
          "anchorId": "room-ch7-729-b",
          "title": "Subroom 7-29.2: Response Frame | Track the Natural Frequency to Track the Damping Ratio",
          "summary": "The natural frequency is Then The damping ratio is",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> Keep the series RLC step-response setup from Example 7-22, but vary the capacitor instead of the resistor. The goal is to track how the capacitor sweep changes the capacitor voltage waveform, the damping ratio, and the natural frequency.</p><p><strong>Scene extension:</strong> Three glass cases with wider spacing and quieter ringing from left to right. This chamber covers Track the Natural Frequency to Track the Damping Ratio.</p><h4>Worked Detail 1: Room 3: Track the Natural Frequency</h4><ul><li>The natural frequency is</li><li>$$\\omega_n=\\frac{1}{\\sqrt{LC}}.$$</li><li>So increasing $$C$$ makes $$\\omega_n$$ smaller.</li><li>The oscillation spacing grows wider as the capacitor gets larger.</li></ul><h4>Worked Detail 2: Room 4: Track the Damping Ratio</h4><ul><li>The damping ratio is</li><li>$$\\zeta=\\frac{\\alpha}{\\omega_n}=\\frac{R}{2}\\sqrt{\\frac{C}{L}}.$$</li><li>So increasing $$C$$ makes $$\\zeta$$ larger.</li><li>This is why the response becomes less oscillatory as $$C$$ increases.</li></ul><p><strong>Carry rule:</strong> For this series RLC family, increasing $$C$$ pulls the natural frequency down and pushes the damping ratio up. That is why the waveform both slows down and loses its oscillation as the capacitor grows.</p>",
          "sourcePage": "rlc-ex729.html",
          "sourcePageTitle": "Exercise 7-29 | Capacitor Sweep in a Series RLC Step Response",
          "sourceUrl": "rlc-ex729.html",
          "tags": [
            "series",
            "sweep",
            "damping",
            "capacitor"
          ],
          "order": 17
        },
        {
          "id": "ch7-room-729-c",
          "anchorId": "room-ch7-729-c",
          "title": "Subroom 7-29.3: Constraint Forge | Find the Critical Boundary to Classify the Three Representative Curves",
          "summary": "Critical damping occurs at $$\\zeta=1.$$ Then $$C=0.5\\ \\mu\\text{F} < 8\\ \\mu\\text{F}$$ gives Case C, underdamped.",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> Keep the series RLC step-response setup from Example 7-22, but vary the capacitor instead of the resistor. The goal is to track how the capacitor sweep changes the capacitor voltage waveform, the damping ratio, and the natural frequency.</p><p><strong>Scene extension:</strong> Three glass cases with wider spacing and quieter ringing from left to right. This chamber covers Find the Critical Boundary to Classify the Three Representative Curves.</p><h4>Worked Detail 1: Room 5: Find the Critical Boundary</h4><ul><li>Critical damping occurs at $$\\zeta=1.$$</li><li>Solving gives</li><li>$$C_{\\text{crit}}=\\frac{4L}{R^2}=8\\ \\mu\\text{F}. $$</li><li>That divides the sweep into Cases C, B, and A.</li></ul><h4>Worked Detail 2: Room 6: Classify the Three Representative Curves</h4><ul><li>$$C=0.5\\ \\mu\\text{F} &lt; 8\\ \\mu\\text{F}$$ gives Case C, underdamped.</li><li>$$C=8\\ \\mu\\text{F}$$ gives Case B, critically damped.</li><li>$$C=20\\ \\mu\\text{F} &gt; 8\\ \\mu\\text{F}$$ gives Case A, overdamped.</li></ul><p><strong>Carry rule:</strong> For this series RLC family, increasing $$C$$ pulls the natural frequency down and pushes the damping ratio up. That is why the waveform both slows down and loses its oscillation as the capacitor grows.</p>",
          "sourcePage": "rlc-ex729.html",
          "sourcePageTitle": "Exercise 7-29 | Capacitor Sweep in a Series RLC Step Response",
          "sourceUrl": "rlc-ex729.html",
          "tags": [
            "series",
            "sweep",
            "damping",
            "capacitor"
          ],
          "order": 18
        },
        {
          "id": "ch7-room-729-d",
          "anchorId": "room-ch7-729-d",
          "title": "Subroom 7-29.4: Final Seal | Compare This Sweep with the Resistor Sweep to Final Memory Pattern",
          "summary": "Changing $$R$$ mainly changes damping because $$\\omega_n=1/\\sqrt{LC}$$ stays fixed. Then Bigger capacitor means slower natural rhythm and heavier damping.",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> Keep the series RLC step-response setup from Example 7-22, but vary the capacitor instead of the resistor. The goal is to track how the capacitor sweep changes the capacitor voltage waveform, the damping ratio, and the natural frequency.</p><p><strong>Scene extension:</strong> Three glass cases with wider spacing and quieter ringing from left to right. This chamber covers Compare This Sweep with the Resistor Sweep to Final Memory Pattern.</p><h4>Worked Detail 1: Room 7: Compare This Sweep with the Resistor Sweep</h4><ul><li>Changing $$R$$ mainly changes damping because $$\\omega_n=1/\\sqrt{LC}$$ stays fixed.</li><li>Changing $$C$$ changes both $$\\zeta$$ and $$\\omega_n.$$</li><li>So the envelope and the oscillation spacing both move.</li></ul><h4>Worked Detail 2: Room 8: Final Memory Pattern</h4><ul><li>Bigger capacitor means slower natural rhythm and heavier damping.</li><li>The sweep direction is</li><li>$$\\text{Case C} \\rightarrow \\text{Case B} \\rightarrow \\text{Case A}$$</li><li>as $$C$$ increases through the critical value.</li></ul><p><strong>Carry rule:</strong> For this series RLC family, increasing $$C$$ pulls the natural frequency down and pushes the damping ratio up. That is why the waveform both slows down and loses its oscillation as the capacitor grows.</p>",
          "sourcePage": "rlc-ex729.html",
          "sourcePageTitle": "Exercise 7-29 | Capacitor Sweep in a Series RLC Step Response",
          "sourceUrl": "rlc-ex729.html",
          "tags": [
            "series",
            "sweep",
            "damping",
            "capacitor"
          ],
          "order": 19
        },
        {
          "id": "ch7-room-733-a",
          "anchorId": "room-ch7-733-a",
          "title": "Subroom 7-33.1: Setup Lens | Read the Root Pair to Build the Characteristic Equation",
          "summary": "The damped cosine pattern shows an underdamped response. Then Use $$s^2+2\\alpha s+(\\alpha^2+\\beta^2)=0.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> The step response of a series RLC circuit is observed to be $$v_C(t)=15-15e^{-1000t}\\cos 1000t\\ \\text{V}$$ and $$i_L(t)=45e^{-1000t}\\cos 1000t+45e^{-1000t}\\sin 1000t\\ \\text{mA}.$$ Recover the characteristic equation, the initial state values, the source amplitude, the element values, and the resistor voltage.</p><p><strong>Scene extension:</strong> One vault, two displays, three recovered component values. This chamber covers Read the Root Pair to Build the Characteristic Equation.</p><h4>Worked Detail 1: Room 1: Read the Root Pair</h4><ul><li>The damped cosine pattern shows an underdamped response.</li><li>From the waveform, $$\\alpha=1000$$ and $$\\beta=1000,$$ so the roots are $$-1000\\pm j1000.$$</li></ul><h4>Worked Detail 2: Room 2: Build the Characteristic Equation</h4><ul><li>Use $$s^2+2\\alpha s+(\\alpha^2+\\beta^2)=0.$$</li><li>This gives $$\\boxed{s^2+2000s+2\\times10^6=0}.$$</li></ul><p><strong>Carry rule:</strong> Waveform first, coefficients second, component values third. Once the root pair and the final value are known, the rest of the circuit can be rebuilt directly.</p>",
          "sourcePage": "rlc-ex733.html",
          "sourcePageTitle": "Exercise 7-33 | Recover a Series RLC Circuit from Its Step Response",
          "sourceUrl": "rlc-ex733.html",
          "tags": [
            "series",
            "recovery",
            "waveform",
            "underdamped"
          ],
          "order": 20
        },
        {
          "id": "ch7-room-733-b",
          "anchorId": "room-ch7-733-b",
          "title": "Subroom 7-33.2: Response Frame | Read the State Values and the Input to Recover the Capacitance",
          "summary": "At $$t=0,$$ $$v_C(0)=15-15=0.$$ Then Differentiate the voltage:",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> The step response of a series RLC circuit is observed to be $$v_C(t)=15-15e^{-1000t}\\cos 1000t\\ \\text{V}$$ and $$i_L(t)=45e^{-1000t}\\cos 1000t+45e^{-1000t}\\sin 1000t\\ \\text{mA}.$$ Recover the characteristic equation, the initial state values, the source amplitude, the element values, and the resistor voltage.</p><p><strong>Scene extension:</strong> One vault, two displays, three recovered component values. This chamber covers Read the State Values and the Input to Recover the Capacitance.</p><h4>Worked Detail 1: Room 3: Read the State Values and the Input</h4><ul><li>At $$t=0,$$ $$v_C(0)=15-15=0.$$</li><li>Also $$i_L(0)=45\\ \\text{mA}.$$</li><li>As $$t\\to\\infty,$$ $$v_C(\\infty)=15\\ \\text{V},$$ so $$V_A=15\\ \\text{V}.$$</li></ul><h4>Worked Detail 2: Room 4: Recover the Capacitance</h4><ul><li>Differentiate the voltage:</li><li>$$\\frac{dv_C}{dt}=15000e^{-1000t}\\cos1000t+15000e^{-1000t}\\sin1000t.$$</li><li>Since $$i=C\\,dv_C/dt,$$ matching the current waveform gives $$C=45\\times10^{-3}/15000=3\\ \\mu\\text{F}.$$</li></ul><p><strong>Carry rule:</strong> Waveform first, coefficients second, component values third. Once the root pair and the final value are known, the rest of the circuit can be rebuilt directly.</p>",
          "sourcePage": "rlc-ex733.html",
          "sourcePageTitle": "Exercise 7-33 | Recover a Series RLC Circuit from Its Step Response",
          "sourceUrl": "rlc-ex733.html",
          "tags": [
            "series",
            "recovery",
            "waveform",
            "underdamped"
          ],
          "order": 21
        },
        {
          "id": "ch7-room-733-c",
          "anchorId": "room-ch7-733-c",
          "title": "Subroom 7-33.3: Constraint Forge | Recover L and R",
          "summary": "For series RLC, $$s^2+\\frac{R}{L}s+\\frac{1}{LC}=0.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> The step response of a series RLC circuit is observed to be $$v_C(t)=15-15e^{-1000t}\\cos 1000t\\ \\text{V}$$ and $$i_L(t)=45e^{-1000t}\\cos 1000t+45e^{-1000t}\\sin 1000t\\ \\text{mA}.$$ Recover the characteristic equation, the initial state values, the source amplitude, the element values, and the resistor voltage.</p><p><strong>Scene extension:</strong> One vault, two displays, three recovered component values. This chamber covers Recover L and R.</p><h4>Worked Detail 1: Room 5: Recover L and R</h4><ul><li>For series RLC, $$s^2+\\frac{R}{L}s+\\frac{1}{LC}=0.$$</li><li>So $$R/L=2000$$ and $$1/(LC)=2\\times10^6.$$</li><li>With $$C=3\\ \\mu\\text{F},$$ $$L=1/((3\\times10^{-6})(2\\times10^6))=167\\ \\text{mH}.$$</li><li>Then $$R=2000L=333\\ \\Omega.$$</li></ul><p><strong>Carry rule:</strong> Waveform first, coefficients second, component values third. Once the root pair and the final value are known, the rest of the circuit can be rebuilt directly.</p>",
          "sourcePage": "rlc-ex733.html",
          "sourcePageTitle": "Exercise 7-33 | Recover a Series RLC Circuit from Its Step Response",
          "sourceUrl": "rlc-ex733.html",
          "tags": [
            "series",
            "recovery",
            "waveform",
            "underdamped"
          ],
          "order": 22
        },
        {
          "id": "ch7-room-733-d",
          "anchorId": "room-ch7-733-d",
          "title": "Subroom 7-33.4: Final Seal | Find the Resistor Voltage",
          "summary": "In a series circuit, $$v_R=Ri.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> The step response of a series RLC circuit is observed to be $$v_C(t)=15-15e^{-1000t}\\cos 1000t\\ \\text{V}$$ and $$i_L(t)=45e^{-1000t}\\cos 1000t+45e^{-1000t}\\sin 1000t\\ \\text{mA}.$$ Recover the characteristic equation, the initial state values, the source amplitude, the element values, and the resistor voltage.</p><p><strong>Scene extension:</strong> One vault, two displays, three recovered component values. This chamber covers Find the Resistor Voltage.</p><h4>Worked Detail 1: Room 6: Find the Resistor Voltage</h4><ul><li>In a series circuit, $$v_R=Ri.$$</li><li>Multiply $$333\\ \\Omega$$ by the current waveform to get</li><li>$$\\boxed{v_R(t)=15e^{-1000t}\\cos1000t+15e^{-1000t}\\sin1000t\\ \\text{V}}.$$</li></ul><p><strong>Carry rule:</strong> Waveform first, coefficients second, component values third. Once the root pair and the final value are known, the rest of the circuit can be rebuilt directly.</p>",
          "sourcePage": "rlc-ex733.html",
          "sourcePageTitle": "Exercise 7-33 | Recover a Series RLC Circuit from Its Step Response",
          "sourceUrl": "rlc-ex733.html",
          "tags": [
            "series",
            "recovery",
            "waveform",
            "underdamped"
          ],
          "order": 23
        },
        {
          "id": "ch7-room-735-a",
          "anchorId": "room-ch7-735-a",
          "title": "Subroom 7-35.1: Setup Lens | Match the Series Standard Form to Convert the Design Targets",
          "summary": "Use $$s^2+\\frac{R}{L}s+\\frac{1}{LC}=0.$$ Then $$R/L=2\\zeta\\omega_0=2(1.5)(50\\times10^3)=150\\times10^3.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> Design a series RLC circuit with $$\\zeta=1.5$$ and $$\\omega_0=50\\ \\text{krad/s}.$$ The capacitor is fixed at $$0.1\\ \\mu\\text{F},$$ so there is only one valid solution.</p><p><strong>Scene extension:</strong> A glass case over C, with two exposed dials for L and R. This chamber covers Match the Series Standard Form to Convert the Design Targets.</p><h4>Worked Detail 1: Room 1: Match the Series Standard Form</h4><ul><li>Use $$s^2+\\frac{R}{L}s+\\frac{1}{LC}=0.$$</li><li>Compare with $$s^2+2\\zeta\\omega_0s+\\omega_0^2=0.$$</li></ul><h4>Worked Detail 2: Room 2: Convert the Design Targets</h4><ul><li>$$R/L=2\\zeta\\omega_0=2(1.5)(50\\times10^3)=150\\times10^3.$$</li><li>$$1/(LC)=\\omega_0^2=(50\\times10^3)^2=2.5\\times10^9.$$</li></ul><p><strong>Carry rule:</strong> When one energy-storage component is fixed, design freedom disappears. Use $$\\omega_0$$ to solve the other storage element and $$\\zeta$$ to solve the resistor.</p>",
          "sourcePage": "rlc-design735.html",
          "sourcePageTitle": "Design Exercise 7-35 | Design a Series RLC Circuit with Fixed Capacitance",
          "sourceUrl": "rlc-design735.html",
          "tags": [
            "series",
            "design",
            "fixed-capacitor",
            "unique"
          ],
          "order": 24
        },
        {
          "id": "ch7-room-735-b",
          "anchorId": "room-ch7-735-b",
          "title": "Subroom 7-35.2: Response Frame | Use the Fixed Capacitor to Solve for the Inductor",
          "summary": "The capacitor is given: $$C=0.1\\ \\mu\\text{F}=10^{-7}\\ \\text{F}.$$ Then $$L=1/(C\\omega_0^2)=1/((10^{-7})(2.5\\times10^9))=4\\times10^{-3}\\ \\text{H}=4\\ \\text{mH}.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> Design a series RLC circuit with $$\\zeta=1.5$$ and $$\\omega_0=50\\ \\text{krad/s}.$$ The capacitor is fixed at $$0.1\\ \\mu\\text{F},$$ so there is only one valid solution.</p><p><strong>Scene extension:</strong> A glass case over C, with two exposed dials for L and R. This chamber covers Use the Fixed Capacitor to Solve for the Inductor.</p><h4>Worked Detail 1: Room 3: Use the Fixed Capacitor</h4><ul><li>The capacitor is given: $$C=0.1\\ \\mu\\text{F}=10^{-7}\\ \\text{F}.$$</li><li>This removes the free-choice step that appears in the open design examples.</li></ul><h4>Worked Detail 2: Room 4: Solve for the Inductor</h4><ul><li>$$L=1/(C\\omega_0^2)=1/((10^{-7})(2.5\\times10^9))=4\\times10^{-3}\\ \\text{H}=4\\ \\text{mH}.$$</li></ul><p><strong>Carry rule:</strong> When one energy-storage component is fixed, design freedom disappears. Use $$\\omega_0$$ to solve the other storage element and $$\\zeta$$ to solve the resistor.</p>",
          "sourcePage": "rlc-design735.html",
          "sourcePageTitle": "Design Exercise 7-35 | Design a Series RLC Circuit with Fixed Capacitance",
          "sourceUrl": "rlc-design735.html",
          "tags": [
            "series",
            "design",
            "fixed-capacitor",
            "unique"
          ],
          "order": 25
        },
        {
          "id": "ch7-room-735-c",
          "anchorId": "room-ch7-735-c",
          "title": "Subroom 7-35.3: Constraint Forge | Solve for the Resistor",
          "summary": "Now use $$R/L=150\\times10^3.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> Design a series RLC circuit with $$\\zeta=1.5$$ and $$\\omega_0=50\\ \\text{krad/s}.$$ The capacitor is fixed at $$0.1\\ \\mu\\text{F},$$ so there is only one valid solution.</p><p><strong>Scene extension:</strong> A glass case over C, with two exposed dials for L and R. This chamber covers Solve for the Resistor.</p><h4>Worked Detail 1: Room 5: Solve for the Resistor</h4><ul><li>Now use $$R/L=150\\times10^3.$$</li><li>$$R=(150\\times10^3)(4\\times10^{-3})=600\\ \\Omega.$$</li></ul><p><strong>Carry rule:</strong> When one energy-storage component is fixed, design freedom disappears. Use $$\\omega_0$$ to solve the other storage element and $$\\zeta$$ to solve the resistor.</p>",
          "sourcePage": "rlc-design735.html",
          "sourcePageTitle": "Design Exercise 7-35 | Design a Series RLC Circuit with Fixed Capacitance",
          "sourceUrl": "rlc-design735.html",
          "tags": [
            "series",
            "design",
            "fixed-capacitor",
            "unique"
          ],
          "order": 26
        },
        {
          "id": "ch7-room-735-d",
          "anchorId": "room-ch7-735-d",
          "title": "Subroom 7-35.4: Final Seal | Why the Answer Is Unique",
          "summary": "With $$C$$ fixed, the two equations determine $$L$$ and $$R$$ exactly.",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> Design a series RLC circuit with $$\\zeta=1.5$$ and $$\\omega_0=50\\ \\text{krad/s}.$$ The capacitor is fixed at $$0.1\\ \\mu\\text{F},$$ so there is only one valid solution.</p><p><strong>Scene extension:</strong> A glass case over C, with two exposed dials for L and R. This chamber covers Why the Answer Is Unique.</p><h4>Worked Detail 1: Room 6: Why the Answer Is Unique</h4><ul><li>With $$C$$ fixed, the two equations determine $$L$$ and $$R$$ exactly.</li><li>There is no remaining design freedom.</li></ul><p><strong>Carry rule:</strong> When one energy-storage component is fixed, design freedom disappears. Use $$\\omega_0$$ to solve the other storage element and $$\\zeta$$ to solve the resistor.</p>",
          "sourcePage": "rlc-design735.html",
          "sourcePageTitle": "Design Exercise 7-35 | Design a Series RLC Circuit with Fixed Capacitance",
          "sourceUrl": "rlc-design735.html",
          "tags": [
            "series",
            "design",
            "fixed-capacitor",
            "unique"
          ],
          "order": 27
        }
      ],
      "blocks": [
        {
          "id": "palace-ch7-series-forge-block-1",
          "width": 290,
          "height": 180,
          "title": "7-22 | Step Balcony",
          "sourceRoomIds": [
            "ch7-room-722-a",
            "ch7-room-722-b",
            "ch7-room-722-c",
            "ch7-room-722-d"
          ],
          "mnemonicPeg": "Gold crown on a balcony, then two colored ribbons under one fading roof.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Write the Differential Equation to Read the Forced Response -> Response Frame | Normalize the Homogeneous Equation to Identify the Damping Case -> Constraint Forge | Write the Natural Response to Apply the Zero-State Initial Conditions -> Final Seal | Solve for $$K_2$$ to Final Capacitor Voltage. See the flat 10 V crown before the oscillation. The red and blue ribbons remind you both sine and cosine stay alive until the initial conditions pin them down.",
          "relationType": "sequence",
          "tags": [
            "series",
            "step",
            "forced",
            "underdamped"
          ],
          "icon": "token",
          "accentVariant": "gold",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "anchor",
          "objectShape": "gate",
          "objectShapeCustom": "",
          "emotionCue": "focused",
          "motionCue": "ringing",
          "sequenceIndex": 1,
          "x": 150,
          "y": 180
        },
        {
          "id": "palace-ch7-series-forge-block-2",
          "width": 290,
          "height": 180,
          "title": "7-23 | Root Forge Hall",
          "sourceRoomIds": [
            "ch7-room-723-a",
            "ch7-room-723-b",
            "ch7-room-723-c",
            "ch7-room-723-d"
          ],
          "mnemonicPeg": "One steel skeleton with three doors: forward, reverse, and non-unique.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Keep the Characteristic Skeleton Ready to Build the Part (a) Equation -> Response Frame | Solve Part (a) to Turn the Part (b) Target Roots into a Polynomial -> Constraint Forge | Solve Part (b) by Coefficient Matching to Translate the Part (c) Double Root -> Final Seal | Explain Why Part (c) Has No Unique Answer to Design Takeaway. The forge is reusable: the same wall formula handles all three parts, but the last door echoes to warn you the design is not unique.",
          "relationType": "sequence",
          "tags": [
            "series",
            "roots",
            "design",
            "uniqueness"
          ],
          "icon": "token",
          "accentVariant": "violet",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "hallway",
          "objectShape": "door",
          "objectShapeCustom": "",
          "emotionCue": "careful",
          "motionCue": "forging",
          "sequenceIndex": 2,
          "x": 470,
          "y": 180
        },
        {
          "id": "palace-ch7-series-forge-block-3",
          "width": 290,
          "height": 180,
          "title": "7-25A | Target Waveform Foundry",
          "sourceRoomIds": [
            "ch7-room-7251-a",
            "ch7-room-7251-b",
            "ch7-room-7251-c",
            "ch7-room-7251-d"
          ],
          "mnemonicPeg": "A metal waveform slab feeds a furnace that stamps out its two poles.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Read the Target Poles to Build the Numerical Polynomial -> Response Frame | Match the Series RLC Form to Choose a Convenient Component -> Constraint Forge | Solve for L and C -> Final Seal | Final Design Logic. The furnace glows only after the poles are read. The free-choice lever reminds you one component may be picked for convenience.",
          "relationType": "sequence",
          "tags": [
            "series",
            "design",
            "poles",
            "waveform"
          ],
          "icon": "token",
          "accentVariant": "gold",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "anchor",
          "objectShape": "cube",
          "objectShapeCustom": "",
          "emotionCue": "confident",
          "motionCue": "forging",
          "sequenceIndex": 3,
          "x": 790,
          "y": 180
        },
        {
          "id": "palace-ch7-series-forge-block-4",
          "width": 290,
          "height": 180,
          "title": "7-25B | Twin-Decay Coffin",
          "sourceRoomIds": [
            "ch7-room-7252-a",
            "ch7-room-7252-b",
            "ch7-room-7252-c",
            "ch7-room-7252-d"
          ],
          "mnemonicPeg": "Two ghosts in one coffin, with the current meter deciding which name belongs to which ghost.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Write the Series Characteristic Equation to Find the Two Real Roots -> Response Frame | Apply the Initial Voltage to Convert the Initial Current into a Slope -> Constraint Forge | Solve for $$K_1$$ and $$K_2$$ to Final Capacitor Voltage -> Final Seal | Differentiate to Get the Inductor Current to Read the Shape. The fast ghost flashes hard and vanishes first; the slow ghost lingers and owns the late-time shape.",
          "relationType": "sequence",
          "tags": [
            "series",
            "zero-input",
            "two-decay",
            "current"
          ],
          "icon": "token",
          "accentVariant": "violet",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "room",
          "objectShape": "door",
          "objectShapeCustom": "",
          "emotionCue": "somber",
          "motionCue": "fading",
          "sequenceIndex": 4,
          "x": 150,
          "y": 430
        },
        {
          "id": "palace-ch7-series-forge-block-5",
          "width": 290,
          "height": 180,
          "title": "7-29 | Capacitor Sweep Gallery",
          "sourceRoomIds": [
            "ch7-room-729-a",
            "ch7-room-729-b",
            "ch7-room-729-c",
            "ch7-room-729-d"
          ],
          "mnemonicPeg": "Three glass cases with wider spacing and quieter ringing from left to right.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Start from the Same Series RLC Model to Separate What Stays Fixed -> Response Frame | Track the Natural Frequency to Track the Damping Ratio -> Constraint Forge | Find the Critical Boundary to Classify the Three Representative Curves -> Final Seal | Compare This Sweep with the Resistor Sweep to Final Memory Pattern. The cases are ordered by capacitor size, not by damping label. You read the formulas first, then assign the case names.",
          "relationType": "sequence",
          "tags": [
            "series",
            "sweep",
            "damping",
            "capacitor"
          ],
          "icon": "token",
          "accentVariant": "gold",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "hallway",
          "objectShape": "path",
          "objectShapeCustom": "",
          "emotionCue": "observant",
          "motionCue": "stretching",
          "sequenceIndex": 5,
          "x": 470,
          "y": 430
        },
        {
          "id": "palace-ch7-series-forge-block-6",
          "width": 290,
          "height": 180,
          "title": "7-33 | Reverse-Engineering Vault",
          "sourceRoomIds": [
            "ch7-room-733-a",
            "ch7-room-733-b",
            "ch7-room-733-c",
            "ch7-room-733-d"
          ],
          "mnemonicPeg": "One vault, two displays, three recovered component values.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Read the Root Pair to Build the Characteristic Equation -> Response Frame | Read the State Values and the Input to Recover the Capacitance -> Constraint Forge | Recover L and R -> Final Seal | Find the Resistor Voltage. The left display is voltage, the right display is current, but the roots sit above both. Read them before anything else.",
          "relationType": "sequence",
          "tags": [
            "series",
            "recovery",
            "waveform",
            "underdamped"
          ],
          "icon": "token",
          "accentVariant": "cyan",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "anchor",
          "objectShape": "gate",
          "objectShapeCustom": "",
          "emotionCue": "detective",
          "motionCue": "extracting",
          "sequenceIndex": 6,
          "x": 790,
          "y": 430
        },
        {
          "id": "palace-ch7-series-forge-block-7",
          "width": 290,
          "height": 180,
          "title": "7-35 | Fixed-Capacitor Seal",
          "sourceRoomIds": [
            "ch7-room-735-a",
            "ch7-room-735-b",
            "ch7-room-735-c",
            "ch7-room-735-d"
          ],
          "mnemonicPeg": "A glass case over C, with two exposed dials for L and R.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Match the Series Standard Form to Convert the Design Targets -> Response Frame | Use the Fixed Capacitor to Solve for the Inductor -> Constraint Forge | Solve for the Resistor -> Final Seal | Why the Answer Is Unique. Do not look for a free-choice lever here. The sealed capacitor removes it, so the two equations close the whole room.",
          "relationType": "sequence",
          "tags": [
            "series",
            "design",
            "fixed-capacitor",
            "unique"
          ],
          "icon": "token",
          "accentVariant": "gold",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "anchor",
          "objectShape": "gate",
          "objectShapeCustom": "",
          "emotionCue": "certain",
          "motionCue": "locking",
          "sequenceIndex": 7,
          "x": 150,
          "y": 680
        }
      ],
      "edges": [
        {
          "id": "palace-ch7-series-forge-edge-1",
          "fromBlockId": "palace-ch7-series-forge-block-1",
          "toBlockId": "palace-ch7-series-forge-block-2",
          "label": "next room"
        },
        {
          "id": "palace-ch7-series-forge-edge-2",
          "fromBlockId": "palace-ch7-series-forge-block-2",
          "toBlockId": "palace-ch7-series-forge-block-3",
          "label": "next room"
        },
        {
          "id": "palace-ch7-series-forge-edge-3",
          "fromBlockId": "palace-ch7-series-forge-block-3",
          "toBlockId": "palace-ch7-series-forge-block-4",
          "label": "next room"
        },
        {
          "id": "palace-ch7-series-forge-edge-4",
          "fromBlockId": "palace-ch7-series-forge-block-4",
          "toBlockId": "palace-ch7-series-forge-block-5",
          "label": "next room"
        },
        {
          "id": "palace-ch7-series-forge-edge-5",
          "fromBlockId": "palace-ch7-series-forge-block-5",
          "toBlockId": "palace-ch7-series-forge-block-6",
          "label": "next room"
        },
        {
          "id": "palace-ch7-series-forge-edge-6",
          "fromBlockId": "palace-ch7-series-forge-block-6",
          "toBlockId": "palace-ch7-series-forge-block-7",
          "label": "next room"
        }
      ],
      "sketches": [],
      "images": [],
      "viewport": {
        "zoom": 0.76
      }
    },
    {
      "id": "palace-ch7-parallel-citadel",
      "name": "Parallel Current Citadel",
      "importedPages": [
        "rlc-ex724-example.html",
        "rlc-ex726-example.html",
        "rlc-ex726.html",
        "rlc-design727-example.html",
        "rlc-ex727.html",
        "rlc-ex728.html",
        "rlc-ex730.html",
        "rlc-ex731.html"
      ],
      "importedRooms": [
        {
          "id": "ch7-room-724-a",
          "anchorId": "room-ch7-724-a",
          "title": "Subroom 7-24.1: Setup Lens | Write the Parallel Characteristic Equation to Find the Two Real Roots",
          "summary": "For a parallel RLC circuit, use Then The roots are",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> The circuit in Figure 7-45 is in the zero state. Find the current through the resistor for $$t\\ge 0.$$ The clean route is to solve the inductor current first, then derive the voltage and the capacitor current before applying KCL for the resistor branch.</p><p><strong>Scene extension:</strong> Three color-coded pipes meet under one bright source funnel. This chamber covers Write the Parallel Characteristic Equation to Find the Two Real Roots.</p><h4>Worked Detail 1: Room 1: Write the Parallel Characteristic Equation</h4><ul><li>For a parallel RLC circuit, use</li><li>$$s^2+\\frac{1}{RC}s+\\frac{1}{LC}=0.$$</li><li>With $$R=470,\\ L=0.1,\\ C=10^{-7},$$</li><li>$$s^2+21276.6s+10^8=0.$$</li></ul><h4>Worked Detail 2: Room 2: Find the Two Real Roots</h4><ul><li>The roots are</li><li>$$s_1=-14300,\\qquad s_2=-7000.$$</li><li>So the inductor-current response is overdamped.</li></ul><p><strong>Carry rule:</strong> This page is a KCL chain: solve $$i_L$$ first, derive the common voltage, convert it into $$i_C,$$ and use the source-current split to recover $$i_R.$$</p>",
          "sourcePage": "rlc-ex724-example.html",
          "sourcePageTitle": "Example 7-24 | Parallel Zero-State Current Through the Resistor",
          "sourceUrl": "rlc-ex724-example.html",
          "tags": [
            "parallel",
            "KCL",
            "branches",
            "overdamped"
          ],
          "order": 0
        },
        {
          "id": "ch7-room-724-b",
          "anchorId": "room-ch7-724-b",
          "title": "Subroom 7-24.2: Response Frame | Write the Inductor-Current Form to Apply the Zero-State Current Condition",
          "summary": "Because the source is a 25 mA step current, the inductor current has a forced constant term. Then At $$t=0,$$ the inductor current cannot jump from zero.",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> The circuit in Figure 7-45 is in the zero state. Find the current through the resistor for $$t\\ge 0.$$ The clean route is to solve the inductor current first, then derive the voltage and the capacitor current before applying KCL for the resistor branch.</p><p><strong>Scene extension:</strong> Three color-coded pipes meet under one bright source funnel. This chamber covers Write the Inductor-Current Form to Apply the Zero-State Current Condition.</p><h4>Worked Detail 1: Room 3: Write the Inductor-Current Form</h4><ul><li>Because the source is a 25 mA step current, the inductor current has a forced constant term.</li><li>Use</li><li>$$i_L(t)=K_1e^{-14300t}+K_2e^{-7000t}+25.$$</li></ul><h4>Worked Detail 2: Room 4: Apply the Zero-State Current Condition</h4><ul><li>At $$t=0,$$ the inductor current cannot jump from zero.</li><li>So</li><li>$$0=K_1+K_2+25.$$</li></ul><p><strong>Carry rule:</strong> This page is a KCL chain: solve $$i_L$$ first, derive the common voltage, convert it into $$i_C,$$ and use the source-current split to recover $$i_R.$$</p>",
          "sourcePage": "rlc-ex724-example.html",
          "sourcePageTitle": "Example 7-24 | Parallel Zero-State Current Through the Resistor",
          "sourceUrl": "rlc-ex724-example.html",
          "tags": [
            "parallel",
            "KCL",
            "branches",
            "overdamped"
          ],
          "order": 1
        },
        {
          "id": "ch7-room-724-c",
          "anchorId": "room-ch7-724-c",
          "title": "Subroom 7-24.3: Constraint Forge | Use the Zero Initial Voltage to Solve for $$K_1$$ and $$K_2$$",
          "summary": "The capacitor voltage starts at zero, and the parallel branch voltage equals the inductor voltage. Then Solving the two equations gives",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> The circuit in Figure 7-45 is in the zero state. Find the current through the resistor for $$t\\ge 0.$$ The clean route is to solve the inductor current first, then derive the voltage and the capacitor current before applying KCL for the resistor branch.</p><p><strong>Scene extension:</strong> Three color-coded pipes meet under one bright source funnel. This chamber covers Use the Zero Initial Voltage to Solve for $$K_1$$ and $$K_2$$.</p><h4>Worked Detail 1: Room 5: Use the Zero Initial Voltage</h4><ul><li>The capacitor voltage starts at zero, and the parallel branch voltage equals the inductor voltage.</li><li>So</li><li>$$v(0)=L\\left.\\frac{di_L}{dt}\\right|_0=0.$$</li><li>That gives</li><li>$$-14300K_1-7000K_2=0.$$</li></ul><h4>Worked Detail 2: Room 6: Solve for $$K_1$$ and $$K_2$$</h4><ul><li>Solving the two equations gives</li><li>$$K_1=24,\\qquad K_2=-49.$$</li><li>Therefore</li><li>$$i_L(t)=24e^{-14300t}-49e^{-7000t}+25\\ \\text{mA}. $$</li></ul><p><strong>Carry rule:</strong> This page is a KCL chain: solve $$i_L$$ first, derive the common voltage, convert it into $$i_C,$$ and use the source-current split to recover $$i_R.$$</p>",
          "sourcePage": "rlc-ex724-example.html",
          "sourcePageTitle": "Example 7-24 | Parallel Zero-State Current Through the Resistor",
          "sourceUrl": "rlc-ex724-example.html",
          "tags": [
            "parallel",
            "KCL",
            "branches",
            "overdamped"
          ],
          "order": 2
        },
        {
          "id": "ch7-room-724-d",
          "anchorId": "room-ch7-724-d",
          "title": "Subroom 7-24.4: Final Seal | Differentiate to Get the Voltage and Capacitor Current to Apply KCL for the Resistor Current",
          "summary": "Use $$v=L\\,di_L/dt$$ to get Then At the top node,",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> The circuit in Figure 7-45 is in the zero state. Find the current through the resistor for $$t\\ge 0.$$ The clean route is to solve the inductor current first, then derive the voltage and the capacitor current before applying KCL for the resistor branch.</p><p><strong>Scene extension:</strong> Three color-coded pipes meet under one bright source funnel. This chamber covers Differentiate to Get the Voltage and Capacitor Current to Apply KCL for the Resistor Current.</p><h4>Worked Detail 1: Room 7: Differentiate to Get the Voltage and Capacitor Current</h4><ul><li>Use $$v=L\\,di_L/dt$$ to get</li><li>$$v(t)=-34.3e^{-14300t}+34.3e^{-7000t}\\ \\text{V}. $$</li><li>Then use $$i_C=C\\,dv/dt$$ to get</li><li>$$i_C(t)=49e^{-14300t}-24e^{-7000t}\\ \\text{mA}. $$</li></ul><h4>Worked Detail 2: Room 8: Apply KCL for the Resistor Current</h4><ul><li>At the top node,</li><li>$$i_R(t)=i_s(t)-i_L(t)-i_C(t).$$</li><li>Substitute the known expressions and simplify:</li><li>$$\\boxed{i_R(t)=-73e^{-14300t}+73e^{-7000t}\\ \\text{mA}}.$$</li></ul><p><strong>Carry rule:</strong> This page is a KCL chain: solve $$i_L$$ first, derive the common voltage, convert it into $$i_C,$$ and use the source-current split to recover $$i_R.$$</p>",
          "sourcePage": "rlc-ex724-example.html",
          "sourcePageTitle": "Example 7-24 | Parallel Zero-State Current Through the Resistor",
          "sourceUrl": "rlc-ex724-example.html",
          "tags": [
            "parallel",
            "KCL",
            "branches",
            "overdamped"
          ],
          "order": 3
        },
        {
          "id": "ch7-room-7261-a",
          "anchorId": "room-ch7-7261-a",
          "title": "Subroom 7-26A.1: Setup Lens | Write the Parallel Equation to Match the Standard Form",
          "summary": "Use the natural-response form $$LCs^2+\\frac{L}{R_N}s+1=0.$$ Then Compare with $$s^2+2\\zeta\\omega_0s+\\omega_0^2=0.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> What range of source resistance produces an underdamped natural response in a parallel RLC circuit with $$L=200\\ \\text{mH}$$ and $$C=0.032\\ \\mu\\text{F}?$$ Normalize the parallel characteristic equation, match it to the standard second-order form, and impose $$\\zeta&lt;1.$$</p><p><strong>Scene extension:</strong> A glass tower with a needle that only counts if it rises above the line. This chamber covers Write the Parallel Equation to Match the Standard Form.</p><h4>Worked Detail 1: Room 1: Write the Parallel Equation</h4><ul><li>Use the natural-response form $$LCs^2+\\frac{L}{R_N}s+1=0.$$</li><li>Divide by $$LC$$ to get $$s^2+\\frac{1}{R_NC}s+\\frac{1}{LC}=0.$$</li></ul><h4>Worked Detail 2: Room 2: Match the Standard Form</h4><ul><li>Compare with $$s^2+2\\zeta\\omega_0s+\\omega_0^2=0.$$</li><li>So $$2\\zeta\\omega_0=1/(R_NC)$$ and $$\\omega_0^2=1/(LC).$$</li></ul><p><strong>Carry rule:</strong> In a parallel RLC circuit, more resistance means less damping. Normalize first, find the critical threshold, then move upward in resistance for underdamping.</p>",
          "sourcePage": "rlc-ex726-example.html",
          "sourcePageTitle": "Example 7-26 | Source-Resistance Range for an Underdamped Parallel RLC Response",
          "sourceUrl": "rlc-ex726-example.html",
          "tags": [
            "parallel",
            "threshold",
            "underdamped",
            "inequality"
          ],
          "order": 4
        },
        {
          "id": "ch7-room-7261-b",
          "anchorId": "room-ch7-7261-b",
          "title": "Subroom 7-26A.2: Response Frame | Compute the Natural Frequency",
          "summary": "$$\\omega_0=1/\\sqrt{LC}=1/\\sqrt{(0.2)(32\\times10^{-9})}=12.5\\times10^3\\ \\text{rad/s}.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> What range of source resistance produces an underdamped natural response in a parallel RLC circuit with $$L=200\\ \\text{mH}$$ and $$C=0.032\\ \\mu\\text{F}?$$ Normalize the parallel characteristic equation, match it to the standard second-order form, and impose $$\\zeta&lt;1.$$</p><p><strong>Scene extension:</strong> A glass tower with a needle that only counts if it rises above the line. This chamber covers Compute the Natural Frequency.</p><h4>Worked Detail 1: Room 3: Compute the Natural Frequency</h4><ul><li>$$\\omega_0=1/\\sqrt{LC}=1/\\sqrt{(0.2)(32\\times10^{-9})}=12.5\\times10^3\\ \\text{rad/s}.$$</li></ul><p><strong>Carry rule:</strong> In a parallel RLC circuit, more resistance means less damping. Normalize first, find the critical threshold, then move upward in resistance for underdamping.</p>",
          "sourcePage": "rlc-ex726-example.html",
          "sourcePageTitle": "Example 7-26 | Source-Resistance Range for an Underdamped Parallel RLC Response",
          "sourceUrl": "rlc-ex726-example.html",
          "tags": [
            "parallel",
            "threshold",
            "underdamped",
            "inequality"
          ],
          "order": 5
        },
        {
          "id": "ch7-room-7261-c",
          "anchorId": "room-ch7-7261-c",
          "title": "Subroom 7-26A.3: Constraint Forge | Use the Critical Boundary",
          "summary": "Underdamped means $$\\zeta<1.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> What range of source resistance produces an underdamped natural response in a parallel RLC circuit with $$L=200\\ \\text{mH}$$ and $$C=0.032\\ \\mu\\text{F}?$$ Normalize the parallel characteristic equation, match it to the standard second-order form, and impose $$\\zeta&lt;1.$$</p><p><strong>Scene extension:</strong> A glass tower with a needle that only counts if it rises above the line. This chamber covers Use the Critical Boundary.</p><h4>Worked Detail 1: Room 4: Use the Critical Boundary</h4><ul><li>Underdamped means $$\\zeta&lt;1.$$</li><li>The boundary occurs at $$\\zeta=1,$$ so $$R_N=1/(2\\omega_0C).$$</li></ul><p><strong>Carry rule:</strong> In a parallel RLC circuit, more resistance means less damping. Normalize first, find the critical threshold, then move upward in resistance for underdamping.</p>",
          "sourcePage": "rlc-ex726-example.html",
          "sourcePageTitle": "Example 7-26 | Source-Resistance Range for an Underdamped Parallel RLC Response",
          "sourceUrl": "rlc-ex726-example.html",
          "tags": [
            "parallel",
            "threshold",
            "underdamped",
            "inequality"
          ],
          "order": 6
        },
        {
          "id": "ch7-room-7261-d",
          "anchorId": "room-ch7-7261-d",
          "title": "Subroom 7-26A.4: Final Seal | Solve the Resistance Range",
          "summary": "$$R_N=1/(2(12.5\\times10^3)(32\\times10^{-9}))=1250\\ \\Omega.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> What range of source resistance produces an underdamped natural response in a parallel RLC circuit with $$L=200\\ \\text{mH}$$ and $$C=0.032\\ \\mu\\text{F}?$$ Normalize the parallel characteristic equation, match it to the standard second-order form, and impose $$\\zeta&lt;1.$$</p><p><strong>Scene extension:</strong> A glass tower with a needle that only counts if it rises above the line. This chamber covers Solve the Resistance Range.</p><h4>Worked Detail 1: Room 5: Solve the Resistance Range</h4><ul><li>$$R_N=1/(2(12.5\\times10^3)(32\\times10^{-9}))=1250\\ \\Omega.$$</li><li>For a parallel RLC circuit, underdamping lies on the larger-resistance side, so $$\\boxed{R_N&gt;1250\\ \\Omega}.$$</li></ul><p><strong>Carry rule:</strong> In a parallel RLC circuit, more resistance means less damping. Normalize first, find the critical threshold, then move upward in resistance for underdamping.</p>",
          "sourcePage": "rlc-ex726-example.html",
          "sourcePageTitle": "Example 7-26 | Source-Resistance Range for an Underdamped Parallel RLC Response",
          "sourceUrl": "rlc-ex726-example.html",
          "tags": [
            "parallel",
            "threshold",
            "underdamped",
            "inequality"
          ],
          "order": 7
        },
        {
          "id": "ch7-room-7262-a",
          "anchorId": "room-ch7-7262-a",
          "title": "Subroom 7-26B.1: Setup Lens | Recognize the Repeated Root to Build the Characteristic Equation",
          "summary": "The voltage contains the factor $$te^{-500t}.$$ Then A repeated root at $$-500$$ means",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> A series RLC circuit has the zero-input responses $$v_C(t)=2000te^{-500t}\\ \\text{V}$$ and $$i_L(t)=3.2e^{-500t}-1600te^{-500t}\\ \\text{mA}.$$ Find the characteristic equation, the initial state values, and the element values $$R,$$ $$L,$$ and $$C.$$</p><p><strong>Scene extension:</strong> One bubble rises, collapses, and repeats in the same lane. This chamber covers Recognize the Repeated Root to Build the Characteristic Equation.</p><h4>Worked Detail 1: Room 1: Recognize the Repeated Root</h4><ul>\n              <li>The voltage contains the factor $$te^{-500t}.$$</li>\n              <li>That is the standard critical-damping signature for a repeated root.</li>\n              <li>So the characteristic equation must have</li>\n              <li>$$s_1=s_2=-500.$$</li>\n            </ul><h4>Worked Detail 2: Room 2: Build the Characteristic Equation</h4><ul>\n              <li>A repeated root at $$-500$$ means</li>\n              <li>$$\\left(s+500\\right)^2=0.$$</li>\n              <li>Expand it:</li>\n              <li>$$s^2+1000s+250000=0.$$</li>\n              <li>So</li>\n              <li>$$\\boxed{s^2+1000s+25\\times 10^4=0}.$$</li>\n            </ul><p><strong>Carry rule:</strong> When a zero-input response includes $$te^{-\\alpha t},$$ think repeated root first, then read initial values directly, use $$i=C\\,dv/dt$$ to recover $$C,$$ and finish by matching the characteristic-equation coefficients for $$L$$ and $$R.$$</p>",
          "sourcePage": "rlc-ex726.html",
          "sourcePageTitle": "Exercise 7-26 | Recover the Circuit from Zero-Input Responses",
          "sourceUrl": "rlc-ex726.html",
          "tags": [
            "parallel",
            "repeated-root",
            "recovery",
            "critical"
          ],
          "order": 8
        },
        {
          "id": "ch7-room-7262-b",
          "anchorId": "room-ch7-7262-b",
          "title": "Subroom 7-26B.2: Response Frame | Read the Initial Voltage to Read the Initial Current",
          "summary": "Evaluate the given voltage at $$t=0.$$ Then Evaluate the given current at $$t=0.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> A series RLC circuit has the zero-input responses $$v_C(t)=2000te^{-500t}\\ \\text{V}$$ and $$i_L(t)=3.2e^{-500t}-1600te^{-500t}\\ \\text{mA}.$$ Find the characteristic equation, the initial state values, and the element values $$R,$$ $$L,$$ and $$C.$$</p><p><strong>Scene extension:</strong> One bubble rises, collapses, and repeats in the same lane. This chamber covers Read the Initial Voltage to Read the Initial Current.</p><h4>Worked Detail 1: Room 3: Read the Initial Voltage</h4><ul>\n              <li>Evaluate the given voltage at $$t=0.$$</li>\n              <li>Because of the factor $$t,$$</li>\n              <li>$$v_C(0)=2000(0)e^0=0.$$</li>\n              <li>Therefore</li>\n              <li>$$\\boxed{V_0=0}. $$</li>\n            </ul><h4>Worked Detail 2: Room 4: Read the Initial Current</h4><ul>\n              <li>Evaluate the given current at $$t=0.$$</li>\n              <li>The exponential becomes 1 and the term with $$t$$ disappears.</li>\n              <li>So</li>\n              <li>$$i_L(0)=3.2\\ \\text{mA}.$$</li>\n              <li>Therefore</li>\n              <li>$$\\boxed{I_0=3.2\\ \\text{mA}}.$$</li>\n            </ul><p><strong>Carry rule:</strong> When a zero-input response includes $$te^{-\\alpha t},$$ think repeated root first, then read initial values directly, use $$i=C\\,dv/dt$$ to recover $$C,$$ and finish by matching the characteristic-equation coefficients for $$L$$ and $$R.$$</p>",
          "sourcePage": "rlc-ex726.html",
          "sourcePageTitle": "Exercise 7-26 | Recover the Circuit from Zero-Input Responses",
          "sourceUrl": "rlc-ex726.html",
          "tags": [
            "parallel",
            "repeated-root",
            "recovery",
            "critical"
          ],
          "order": 9
        },
        {
          "id": "ch7-room-7262-c",
          "anchorId": "room-ch7-7262-c",
          "title": "Subroom 7-26B.3: Constraint Forge | Differentiate the Voltage to Recover $$C$$ to Match the Constant Term to Find $$L$$",
          "summary": "For a series circuit, Then For a series RLC circuit, the normalized equation is",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> A series RLC circuit has the zero-input responses $$v_C(t)=2000te^{-500t}\\ \\text{V}$$ and $$i_L(t)=3.2e^{-500t}-1600te^{-500t}\\ \\text{mA}.$$ Find the characteristic equation, the initial state values, and the element values $$R,$$ $$L,$$ and $$C.$$</p><p><strong>Scene extension:</strong> One bubble rises, collapses, and repeats in the same lane. This chamber covers Differentiate the Voltage to Recover $$C$$ to Match the Constant Term to Find $$L$$.</p><h4>Worked Detail 1: Room 5: Differentiate the Voltage to Recover $$C$$</h4><ul>\n              <li>For a series circuit,</li>\n              <li>$$i_L(t)=i_C(t)=C\\frac{dv_C}{dt}.$$</li>\n              <li>Differentiate the voltage:</li>\n              <li>$$\\frac{dv_C}{dt}=2000e^{-500t}-10^6te^{-500t}.$$</li>\n              <li>At $$t=0,$$</li>\n              <li>$$\\left.\\frac{dv_C}{dt}\\right|_0=2000.$$</li>\n              <li>So</li>\n              <li>$$0.0032=C(2000),\\qquad C=1.6\\times 10^{-6}\\ \\text{F}. $$</li>\n            </ul><h4>Worked Detail 2: Room 6: Match the Constant Term to Find $$L$$</h4><ul>\n              <li>For a series RLC circuit, the normalized equation is</li>\n              <li>$$s^2+\\frac{R}{L}s+\\frac{1}{LC}=0.$$</li>\n              <li>Match the constant term:</li>\n              <li>$$\\frac{1}{LC}=250000.$$</li>\n              <li>With $$C=1.6\\times 10^{-6},$$</li>\n              <li>$$L=\\frac{1}{250000(1.6\\times 10^{-6})}=2.5\\ \\text{H}. $$</li>\n            </ul><p><strong>Carry rule:</strong> When a zero-input response includes $$te^{-\\alpha t},$$ think repeated root first, then read initial values directly, use $$i=C\\,dv/dt$$ to recover $$C,$$ and finish by matching the characteristic-equation coefficients for $$L$$ and $$R.$$</p>",
          "sourcePage": "rlc-ex726.html",
          "sourcePageTitle": "Exercise 7-26 | Recover the Circuit from Zero-Input Responses",
          "sourceUrl": "rlc-ex726.html",
          "tags": [
            "parallel",
            "repeated-root",
            "recovery",
            "critical"
          ],
          "order": 10
        },
        {
          "id": "ch7-room-7262-d",
          "anchorId": "room-ch7-7262-d",
          "title": "Subroom 7-26B.4: Final Seal | Match the Linear Term to Find $$R$$ to Final Check",
          "summary": "Match the coefficient of $$s$$: Then The given responses are now fully consistent with the recovered circuit:",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> A series RLC circuit has the zero-input responses $$v_C(t)=2000te^{-500t}\\ \\text{V}$$ and $$i_L(t)=3.2e^{-500t}-1600te^{-500t}\\ \\text{mA}.$$ Find the characteristic equation, the initial state values, and the element values $$R,$$ $$L,$$ and $$C.$$</p><p><strong>Scene extension:</strong> One bubble rises, collapses, and repeats in the same lane. This chamber covers Match the Linear Term to Find $$R$$ to Final Check.</p><h4>Worked Detail 1: Room 7: Match the Linear Term to Find $$R$$</h4><ul>\n              <li>Match the coefficient of $$s$$:</li>\n              <li>$$\\frac{R}{L}=1000.$$</li>\n              <li>With $$L=2.5\\ \\text{H},$$</li>\n              <li>$$R=1000(2.5)=2500\\ \\Omega=2.5\\ \\text{k}\\Omega.$$</li>\n            </ul><h4>Worked Detail 2: Room 8: Final Check</h4><ul>\n              <li>The given responses are now fully consistent with the recovered circuit:</li>\n              <li>$$\\boxed{R=2.5\\ \\text{k}\\Omega,\\ L=2.5\\ \\text{H},\\ C=1.6\\ \\mu\\text{F}}.$$</li>\n              <li>The repeated root explains the critical-damping form with the factor $$te^{-500t}.$$</li>\n            </ul><p><strong>Carry rule:</strong> When a zero-input response includes $$te^{-\\alpha t},$$ think repeated root first, then read initial values directly, use $$i=C\\,dv/dt$$ to recover $$C,$$ and finish by matching the characteristic-equation coefficients for $$L$$ and $$R.$$</p>",
          "sourcePage": "rlc-ex726.html",
          "sourcePageTitle": "Exercise 7-26 | Recover the Circuit from Zero-Input Responses",
          "sourceUrl": "rlc-ex726.html",
          "tags": [
            "parallel",
            "repeated-root",
            "recovery",
            "critical"
          ],
          "order": 11
        },
        {
          "id": "ch7-room-7271-a",
          "anchorId": "room-ch7-7271-a",
          "title": "Subroom 7-27A.1: Setup Lens | Start from the Parallel Form to Convert the Design Targets",
          "summary": "Use $$s^2+\\frac{1}{RC}s+\\frac{1}{LC}=0.$$ Then From $$\\zeta=0.5$$ and $$\\omega_0=25\\times10^3,$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> Design a parallel RLC circuit with $$\\zeta=0.5$$ and $$\\omega_0=25\\ \\text{krad/s}.$$ Turn those targets into coefficient constraints, choose one convenient component, and solve for the other two.</p><p><strong>Scene extension:</strong> Two stamps and one unlocked drawer. This chamber covers Start from the Parallel Form to Convert the Design Targets.</p><h4>Worked Detail 1: Room 1: Start from the Parallel Form</h4><ul><li>Use $$s^2+\\frac{1}{RC}s+\\frac{1}{LC}=0.$$</li><li>Compare with $$s^2+2\\zeta\\omega_0s+\\omega_0^2=0.$$</li></ul><h4>Worked Detail 2: Room 2: Convert the Design Targets</h4><ul><li>From $$\\zeta=0.5$$ and $$\\omega_0=25\\times10^3,$$</li><li>$$\\frac{1}{RC}=2\\zeta\\omega_0=25\\times10^3.$$</li><li>Also $$\\frac{1}{LC}=\\omega_0^2=(25\\times10^3)^2=6.25\\times10^8.$$</li></ul><p><strong>Carry rule:</strong> Convert $$\\zeta$$ and $$\\omega_0$$ into the coefficient of $$s$$ and the constant term, then pick one component and let the equations solve the rest.</p>",
          "sourcePage": "rlc-design727-example.html",
          "sourcePageTitle": "Design Example 7-27 | Design a Parallel RLC Circuit for a Target Damping Ratio and Natural Frequency",
          "sourceUrl": "rlc-design727-example.html",
          "tags": [
            "parallel",
            "design",
            "zeta",
            "omega0"
          ],
          "order": 12
        },
        {
          "id": "ch7-room-7271-b",
          "anchorId": "room-ch7-7271-b",
          "title": "Subroom 7-27A.2: Response Frame | Choose One Component to Solve for C",
          "summary": "There are three parameters and two equations. Then $$C=1/((10\\times10^3)(25\\times10^3))=4\\times10^{-9}\\ \\text{F}=4000\\ \\text{pF}.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> Design a parallel RLC circuit with $$\\zeta=0.5$$ and $$\\omega_0=25\\ \\text{krad/s}.$$ Turn those targets into coefficient constraints, choose one convenient component, and solve for the other two.</p><p><strong>Scene extension:</strong> Two stamps and one unlocked drawer. This chamber covers Choose One Component to Solve for C.</p><h4>Worked Detail 1: Room 3: Choose One Component</h4><ul><li>There are three parameters and two equations.</li><li>Choose $$R=10\\ \\text{k}\\Omega.$$</li></ul><h4>Worked Detail 2: Room 4: Solve for C</h4><ul><li>$$C=1/((10\\times10^3)(25\\times10^3))=4\\times10^{-9}\\ \\text{F}=4000\\ \\text{pF}.$$</li></ul><p><strong>Carry rule:</strong> Convert $$\\zeta$$ and $$\\omega_0$$ into the coefficient of $$s$$ and the constant term, then pick one component and let the equations solve the rest.</p>",
          "sourcePage": "rlc-design727-example.html",
          "sourcePageTitle": "Design Example 7-27 | Design a Parallel RLC Circuit for a Target Damping Ratio and Natural Frequency",
          "sourceUrl": "rlc-design727-example.html",
          "tags": [
            "parallel",
            "design",
            "zeta",
            "omega0"
          ],
          "order": 13
        },
        {
          "id": "ch7-room-7271-c",
          "anchorId": "room-ch7-7271-c",
          "title": "Subroom 7-27A.3: Constraint Forge | Solve for L",
          "summary": "$$L=1/(C\\omega_0^2)=1/((4\\times10^{-9})(6.25\\times10^8))=0.4\\ \\text{H}.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> Design a parallel RLC circuit with $$\\zeta=0.5$$ and $$\\omega_0=25\\ \\text{krad/s}.$$ Turn those targets into coefficient constraints, choose one convenient component, and solve for the other two.</p><p><strong>Scene extension:</strong> Two stamps and one unlocked drawer. This chamber covers Solve for L.</p><h4>Worked Detail 1: Room 5: Solve for L</h4><ul><li>$$L=1/(C\\omega_0^2)=1/((4\\times10^{-9})(6.25\\times10^8))=0.4\\ \\text{H}.$$</li></ul><p><strong>Carry rule:</strong> Convert $$\\zeta$$ and $$\\omega_0$$ into the coefficient of $$s$$ and the constant term, then pick one component and let the equations solve the rest.</p>",
          "sourcePage": "rlc-design727-example.html",
          "sourcePageTitle": "Design Example 7-27 | Design a Parallel RLC Circuit for a Target Damping Ratio and Natural Frequency",
          "sourceUrl": "rlc-design727-example.html",
          "tags": [
            "parallel",
            "design",
            "zeta",
            "omega0"
          ],
          "order": 14
        },
        {
          "id": "ch7-room-7271-d",
          "anchorId": "room-ch7-7271-d",
          "title": "Subroom 7-27A.4: Final Seal | Final Design Logic",
          "summary": "The chosen set meets both the damping-ratio and natural-frequency targets.",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> Design a parallel RLC circuit with $$\\zeta=0.5$$ and $$\\omega_0=25\\ \\text{krad/s}.$$ Turn those targets into coefficient constraints, choose one convenient component, and solve for the other two.</p><p><strong>Scene extension:</strong> Two stamps and one unlocked drawer. This chamber covers Final Design Logic.</p><h4>Worked Detail 1: Room 6: Final Design Logic</h4><ul><li>The chosen set meets both the damping-ratio and natural-frequency targets.</li><li>Many other designs are possible because one component remains free.</li></ul><p><strong>Carry rule:</strong> Convert $$\\zeta$$ and $$\\omega_0$$ into the coefficient of $$s$$ and the constant term, then pick one component and let the equations solve the rest.</p>",
          "sourcePage": "rlc-design727-example.html",
          "sourcePageTitle": "Design Example 7-27 | Design a Parallel RLC Circuit for a Target Damping Ratio and Natural Frequency",
          "sourceUrl": "rlc-design727-example.html",
          "tags": [
            "parallel",
            "design",
            "zeta",
            "omega0"
          ],
          "order": 15
        },
        {
          "id": "ch7-room-7272-a",
          "anchorId": "room-ch7-7272-a",
          "title": "Subroom 7-27B.1: Setup Lens | Write the Parallel Characteristic Equation to Use the Initial Current",
          "summary": "For a zero-input parallel RLC circuit, use Then At $$t=0,$$ the cosine term is 1 and the sine term is 0.",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> A parallel RLC circuit has $$R=1\\ \\text{k}\\Omega,$$ $$C=1\\ \\mu\\text{F},$$ $$L=100\\ \\text{mH},$$ $$I_0=100\\ \\text{mA},$$ and $$V_0=0.$$ Plot the zero-input responses of the inductor, resistor, and capacitor currents on one axis, then show that Kirchhoff's current law holds at every instant.</p><p><strong>Scene extension:</strong> Three stages and one green chorus line. This chamber covers Write the Parallel Characteristic Equation to Use the Initial Current.</p><h4>Worked Detail 1: Room 1: Write the Parallel Characteristic Equation</h4><ul>\n              <li>For a zero-input parallel RLC circuit, use</li>\n              <li>$$LCs^2+\\frac{L}{R}s+1=0.$$</li>\n              <li>Substitute the values:</li>\n              <li>$$10^{-7}s^2+10^{-4}s+1=0.$$</li>\n              <li>Normalized form:</li>\n              <li>$$s^2+1000s+10^7=0.$$</li>\n            </ul><h4>Worked Detail 2: Room 2: Find the Roots and Pick the Current Template</h4><ul>\n              <li>The roots are</li>\n              <li>$$s_{1,2}=-500\\pm j3122.5.$$</li>\n              <li>So the zero-input inductor current is underdamped:</li>\n              <li>$$i_L(t)=e^{-500t}\\left(K_1\\cos 3122.5t+K_2\\sin 3122.5t\\right).$$</li>\n            </ul><h4>Worked Detail 3: Room 3: Use the Initial Current</h4><ul>\n              <li>At $$t=0,$$ the cosine term is 1 and the sine term is 0.</li>\n              <li>So</li>\n              <li>$$i_L(0)=K_1=100\\ \\text{mA}.$$</li>\n            </ul><p><strong>Carry rule:</strong> For a parallel zero-input problem, solve the current first, use the shared parallel voltage to get $$v(t),$$ then derive $$i_R$$ and $$i_C$$ from that same voltage. KCL becomes the final consistency check.</p>",
          "sourcePage": "rlc-ex727.html",
          "sourcePageTitle": "Exercise 7-27 | Parallel Zero-Input Currents and KCL",
          "sourceUrl": "rlc-ex727.html",
          "tags": [
            "parallel",
            "currents",
            "KCL",
            "underdamped"
          ],
          "order": 16
        },
        {
          "id": "ch7-room-7272-b",
          "anchorId": "room-ch7-7272-b",
          "title": "Subroom 7-27B.2: Response Frame | Convert the Initial Voltage into a Derivative Condition to Solve for $$K_2$$ and Finish $$i_L(t)$$",
          "summary": "In the parallel circuit, Then With $$K_1=100,$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> A parallel RLC circuit has $$R=1\\ \\text{k}\\Omega,$$ $$C=1\\ \\mu\\text{F},$$ $$L=100\\ \\text{mH},$$ $$I_0=100\\ \\text{mA},$$ and $$V_0=0.$$ Plot the zero-input responses of the inductor, resistor, and capacitor currents on one axis, then show that Kirchhoff's current law holds at every instant.</p><p><strong>Scene extension:</strong> Three stages and one green chorus line. This chamber covers Convert the Initial Voltage into a Derivative Condition to Solve for $$K_2$$ and Finish $$i_L(t)$$.</p><h4>Worked Detail 1: Room 4: Convert the Initial Voltage into a Derivative Condition</h4><ul>\n              <li>In the parallel circuit,</li>\n              <li>$$v_C(0)=v_L(0)=L\\left.\\frac{di_L}{dt}\\right|_0.$$</li>\n              <li>Since $$v_C(0)=0,$$ we require</li>\n              <li>$$\\left.\\frac{di_L}{dt}\\right|_0=0.$$</li>\n              <li>This gives</li>\n              <li>$$-500K_1+3122.5K_2=0.$$</li>\n            </ul><h4>Worked Detail 2: Room 5: Solve for $$K_2$$ and Finish $$i_L(t)$$</h4><ul>\n              <li>With $$K_1=100,$$</li>\n              <li>$$K_2=\\frac{500(100)}{3122.5}\\approx 16.0.$$</li>\n              <li>Therefore</li>\n              <li>$$\\boxed{i_L(t)=e^{-500t}\\left(100\\cos 3122.5t+16.0\\sin 3122.5t\\right)\\ \\text{mA}}.$$</li>\n            </ul><p><strong>Carry rule:</strong> For a parallel zero-input problem, solve the current first, use the shared parallel voltage to get $$v(t),$$ then derive $$i_R$$ and $$i_C$$ from that same voltage. KCL becomes the final consistency check.</p>",
          "sourcePage": "rlc-ex727.html",
          "sourcePageTitle": "Exercise 7-27 | Parallel Zero-Input Currents and KCL",
          "sourceUrl": "rlc-ex727.html",
          "tags": [
            "parallel",
            "currents",
            "KCL",
            "underdamped"
          ],
          "order": 17
        },
        {
          "id": "ch7-room-7272-c",
          "anchorId": "room-ch7-7272-c",
          "title": "Subroom 7-27B.3: Constraint Forge | Differentiate to Get the Branch Voltage to Use the Voltage to Get $$i_R(t)$$",
          "summary": "Use $$v=L\\,di_L/dt.$$ Then Apply Ohm's law on the resistor branch:",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> A parallel RLC circuit has $$R=1\\ \\text{k}\\Omega,$$ $$C=1\\ \\mu\\text{F},$$ $$L=100\\ \\text{mH},$$ $$I_0=100\\ \\text{mA},$$ and $$V_0=0.$$ Plot the zero-input responses of the inductor, resistor, and capacitor currents on one axis, then show that Kirchhoff's current law holds at every instant.</p><p><strong>Scene extension:</strong> Three stages and one green chorus line. This chamber covers Differentiate to Get the Branch Voltage to Use the Voltage to Get $$i_R(t)$$.</p><h4>Worked Detail 1: Room 6: Differentiate to Get the Branch Voltage</h4><ul>\n              <li>Use $$v=L\\,di_L/dt.$$</li>\n              <li>The derivative condition cancels the cosine term at the start, leaving</li>\n              <li>$$v_C(t)=v_L(t)=-32.0e^{-500t}\\sin 3122.5t\\ \\text{V}. $$</li>\n            </ul><h4>Worked Detail 2: Room 7: Use the Voltage to Get $$i_R(t)$$</h4><ul>\n              <li>Apply Ohm's law on the resistor branch:</li>\n              <li>$$i_R(t)=\\frac{v_C(t)}{R}=\\frac{-32.0e^{-500t}\\sin 3122.5t}{1000}. $$</li>\n              <li>So</li>\n              <li>$$\\boxed{i_R(t)=-32.0e^{-500t}\\sin 3122.5t\\ \\text{mA}}.$$</li>\n            </ul><p><strong>Carry rule:</strong> For a parallel zero-input problem, solve the current first, use the shared parallel voltage to get $$v(t),$$ then derive $$i_R$$ and $$i_C$$ from that same voltage. KCL becomes the final consistency check.</p>",
          "sourcePage": "rlc-ex727.html",
          "sourcePageTitle": "Exercise 7-27 | Parallel Zero-Input Currents and KCL",
          "sourceUrl": "rlc-ex727.html",
          "tags": [
            "parallel",
            "currents",
            "KCL",
            "underdamped"
          ],
          "order": 18
        },
        {
          "id": "ch7-room-7272-d",
          "anchorId": "room-ch7-7272-d",
          "title": "Subroom 7-27B.4: Final Seal | Differentiate the Voltage to Get $$i_C(t)$$ to Validate KCL from the Three Currents",
          "summary": "Use $$i_C=C\\,dv_C/dt.$$ Then Add the three branch currents:",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> A parallel RLC circuit has $$R=1\\ \\text{k}\\Omega,$$ $$C=1\\ \\mu\\text{F},$$ $$L=100\\ \\text{mH},$$ $$I_0=100\\ \\text{mA},$$ and $$V_0=0.$$ Plot the zero-input responses of the inductor, resistor, and capacitor currents on one axis, then show that Kirchhoff's current law holds at every instant.</p><p><strong>Scene extension:</strong> Three stages and one green chorus line. This chamber covers Differentiate the Voltage to Get $$i_C(t)$$ to Validate KCL from the Three Currents.</p><h4>Worked Detail 1: Room 8: Differentiate the Voltage to Get $$i_C(t)$$</h4><ul>\n              <li>Use $$i_C=C\\,dv_C/dt.$$</li>\n              <li>After differentiation and simplification,</li>\n              <li>$$\\boxed{i_C(t)=e^{-500t}\\left(-100\\cos 3122.5t+16.0\\sin 3122.5t\\right)\\ \\text{mA}}.$$</li>\n            </ul><h4>Worked Detail 2: Room 9: Validate KCL from the Three Currents</h4><ul>\n              <li>Add the three branch currents:</li>\n              <li>$$i_L+i_R+i_C=e^{-500t}\\left(100\\cos+16\\sin-32\\sin-100\\cos+16\\sin\\right).$$</li>\n              <li>The cosine terms cancel and the sine terms also cancel, so</li>\n              <li>$$\\boxed{i_L(t)+i_R(t)+i_C(t)=0}$$ for every $$t.$$</li>\n            </ul><p><strong>Carry rule:</strong> For a parallel zero-input problem, solve the current first, use the shared parallel voltage to get $$v(t),$$ then derive $$i_R$$ and $$i_C$$ from that same voltage. KCL becomes the final consistency check.</p>",
          "sourcePage": "rlc-ex727.html",
          "sourcePageTitle": "Exercise 7-27 | Parallel Zero-Input Currents and KCL",
          "sourceUrl": "rlc-ex727.html",
          "tags": [
            "parallel",
            "currents",
            "KCL",
            "underdamped"
          ],
          "order": 19
        },
        {
          "id": "ch7-room-728-a",
          "anchorId": "room-ch7-728-a",
          "title": "Subroom 7-28.1: Setup Lens | Recognize the Repeated Root to Build the Characteristic Equation",
          "summary": "The current response contains $$te^{-2000t}.$$ Then The repeated root gives",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> The zero-input responses of a parallel RLC circuit are observed as $$i_L(t)=10te^{-2000t}\\ \\text{A}$$ and $$v_C(t)=10e^{-2000t}-20000te^{-2000t}\\ \\text{V}.$$ Recover the characteristic equation, the initial state values, the element values, and the resistor current.</p><p><strong>Scene extension:</strong> Two mirrors showing the same pulse from two different angles. This chamber covers Recognize the Repeated Root to Build the Characteristic Equation.</p><h4>Worked Detail 1: Room 1: Recognize the Repeated Root</h4><ul><li>The current response contains $$te^{-2000t}.$$</li><li>That is the signature of a critically damped response with repeated root</li><li>$$s_1=s_2=-2000.$$</li></ul><h4>Worked Detail 2: Room 2: Build the Characteristic Equation</h4><ul><li>The repeated root gives</li><li>$$\\left(s+2000\\right)^2=0.$$</li><li>Expanding yields</li><li>$$\\boxed{s^2+4000s+4\\times 10^6=0}.$$</li></ul><p><strong>Carry rule:</strong> When you see $$te^{-\\alpha t}$$ in a zero-input response, think repeated root first. Then use the waveform itself to read the state variables and recover the element values by coefficient matching.</p>",
          "sourcePage": "rlc-ex728.html",
          "sourcePageTitle": "Exercise 7-28 | Recover a Parallel RLC Circuit from Its Responses",
          "sourceUrl": "rlc-ex728.html",
          "tags": [
            "parallel",
            "recovery",
            "critical",
            "waveform"
          ],
          "order": 20
        },
        {
          "id": "ch7-room-728-b",
          "anchorId": "room-ch7-728-b",
          "title": "Subroom 7-28.2: Response Frame | Read the Initial State Values to Recover the Inductance",
          "summary": "At $$t=0,$$ the inductor current is Then Use the parallel inductor relation",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> The zero-input responses of a parallel RLC circuit are observed as $$i_L(t)=10te^{-2000t}\\ \\text{A}$$ and $$v_C(t)=10e^{-2000t}-20000te^{-2000t}\\ \\text{V}.$$ Recover the characteristic equation, the initial state values, the element values, and the resistor current.</p><p><strong>Scene extension:</strong> Two mirrors showing the same pulse from two different angles. This chamber covers Read the Initial State Values to Recover the Inductance.</p><h4>Worked Detail 1: Room 3: Read the Initial State Values</h4><ul><li>At $$t=0,$$ the inductor current is</li><li>$$i_L(0)=10(0)e^0=0.$$</li><li>The capacitor voltage is</li><li>$$v_C(0)=10e^0-20000(0)e^0=10\\ \\text{V}. $$</li></ul><h4>Worked Detail 2: Room 4: Recover the Inductance</h4><ul><li>Use the parallel inductor relation</li><li>$$v_C(0)=L\\left.\\frac{di_L}{dt}\\right|_0.$$</li><li>Differentiate $$i_L(t)=10te^{-2000t}:$$</li><li>$$\\frac{di_L}{dt}=10e^{-2000t}-20000te^{-2000t}.$$</li><li>At $$t=0,$$</li><li>$$\\left.\\frac{di_L}{dt}\\right|_0=10.$$</li><li>So $$10=L(10),$$ which gives $$L=1\\ \\text{H}. $$</li></ul><p><strong>Carry rule:</strong> When you see $$te^{-\\alpha t}$$ in a zero-input response, think repeated root first. Then use the waveform itself to read the state variables and recover the element values by coefficient matching.</p>",
          "sourcePage": "rlc-ex728.html",
          "sourcePageTitle": "Exercise 7-28 | Recover a Parallel RLC Circuit from Its Responses",
          "sourceUrl": "rlc-ex728.html",
          "tags": [
            "parallel",
            "recovery",
            "critical",
            "waveform"
          ],
          "order": 21
        },
        {
          "id": "ch7-room-728-c",
          "anchorId": "room-ch7-728-c",
          "title": "Subroom 7-28.3: Constraint Forge | Recover the Capacitance to Recover the Resistance",
          "summary": "For a parallel RLC circuit, the constant term of the normalized equation is Then The coefficient of $$s$$ in the normalized parallel equation is",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> The zero-input responses of a parallel RLC circuit are observed as $$i_L(t)=10te^{-2000t}\\ \\text{A}$$ and $$v_C(t)=10e^{-2000t}-20000te^{-2000t}\\ \\text{V}.$$ Recover the characteristic equation, the initial state values, the element values, and the resistor current.</p><p><strong>Scene extension:</strong> Two mirrors showing the same pulse from two different angles. This chamber covers Recover the Capacitance to Recover the Resistance.</p><h4>Worked Detail 1: Room 5: Recover the Capacitance</h4><ul><li>For a parallel RLC circuit, the constant term of the normalized equation is</li><li>$$\\frac{1}{LC}=4\\times 10^6.$$</li><li>With $$L=1,$$</li><li>$$C=\\frac{1}{4\\times 10^6}=0.25\\times 10^{-6}\\ \\text{F}=0.25\\ \\mu\\text{F}. $$</li></ul><h4>Worked Detail 2: Room 6: Recover the Resistance</h4><ul><li>The coefficient of $$s$$ in the normalized parallel equation is</li><li>$$\\frac{1}{RC}=4000.$$</li><li>With $$C=0.25\\times 10^{-6},$$</li><li>$$R=\\frac{1}{4000(0.25\\times 10^{-6})}=1000\\ \\Omega. $$</li></ul><p><strong>Carry rule:</strong> When you see $$te^{-\\alpha t}$$ in a zero-input response, think repeated root first. Then use the waveform itself to read the state variables and recover the element values by coefficient matching.</p>",
          "sourcePage": "rlc-ex728.html",
          "sourcePageTitle": "Exercise 7-28 | Recover a Parallel RLC Circuit from Its Responses",
          "sourceUrl": "rlc-ex728.html",
          "tags": [
            "parallel",
            "recovery",
            "critical",
            "waveform"
          ],
          "order": 22
        },
        {
          "id": "ch7-room-728-d",
          "anchorId": "room-ch7-728-d",
          "title": "Subroom 7-28.4: Final Seal | Write the Resistor Current to Final Memory Pattern",
          "summary": "Use Ohm's law on the resistor branch: Then Critical damping is the key clue here.",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> The zero-input responses of a parallel RLC circuit are observed as $$i_L(t)=10te^{-2000t}\\ \\text{A}$$ and $$v_C(t)=10e^{-2000t}-20000te^{-2000t}\\ \\text{V}.$$ Recover the characteristic equation, the initial state values, the element values, and the resistor current.</p><p><strong>Scene extension:</strong> Two mirrors showing the same pulse from two different angles. This chamber covers Write the Resistor Current to Final Memory Pattern.</p><h4>Worked Detail 1: Room 7: Write the Resistor Current</h4><ul><li>Use Ohm's law on the resistor branch:</li><li>$$i_R(t)=\\frac{v_C(t)}{R}. $$</li><li>With $$R=1\\ \\text{k}\\Omega,$$</li><li>$$\\boxed{i_R(t)=10e^{-2000t}-20000te^{-2000t}\\ \\text{mA}}.$$</li></ul><h4>Worked Detail 2: Room 8: Final Memory Pattern</h4><ul><li>Critical damping is the key clue here.</li><li>Once the repeated root is seen, the rest is a straight recovery chain: characteristic equation, initial values, element values, then resistor current.</li></ul><p><strong>Carry rule:</strong> When you see $$te^{-\\alpha t}$$ in a zero-input response, think repeated root first. Then use the waveform itself to read the state variables and recover the element values by coefficient matching.</p>",
          "sourcePage": "rlc-ex728.html",
          "sourcePageTitle": "Exercise 7-28 | Recover a Parallel RLC Circuit from Its Responses",
          "sourceUrl": "rlc-ex728.html",
          "tags": [
            "parallel",
            "recovery",
            "critical",
            "waveform"
          ],
          "order": 23
        },
        {
          "id": "ch7-room-730-a",
          "anchorId": "room-ch7-730-a",
          "title": "Subroom 7-30.1: Setup Lens | Start from the Solved Branch Currents to Recall the Inductor Current",
          "summary": "Example 7-24 already gives the three branch currents. Then The inductor current is",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> Use the parallel RLC of Figure 7-45 and plot the currents through the resistor, inductor, and capacitor. The textbook point is not just the shapes of the three curves, but the fact that their sum stays equal to the 25 mA source current for all time.</p><p><strong>Scene extension:</strong> A gold horizon line refusing to move while the other traces swing underneath. This chamber covers Start from the Solved Branch Currents to Recall the Inductor Current.</p><h4>Worked Detail 1: Room 1: Start from the Solved Branch Currents</h4><ul><li>Example 7-24 already gives the three branch currents.</li><li>This exercise is about plotting them together and reading the node law directly from the graph.</li></ul><h4>Worked Detail 2: Room 2: Recall the Inductor Current</h4><ul><li>The inductor current is</li><li>$$i_L(t)=24e^{-14300t}-49e^{-7000t}+25\\ \\text{mA}. $$</li><li>It starts at zero and settles to 25 mA.</li></ul><p><strong>Carry rule:</strong> Whenever the branch currents all come from one KCL derivation, the plot should show a stable total. Here the algebra predicts it and the graph confirms it: the three branches always sum to the source current.</p>",
          "sourcePage": "rlc-ex730.html",
          "sourcePageTitle": "Exercise 7-30 | Plot the Parallel RLC Branch Currents",
          "sourceUrl": "rlc-ex730.html",
          "tags": [
            "parallel",
            "plot",
            "KCL",
            "verification"
          ],
          "order": 24
        },
        {
          "id": "ch7-room-730-b",
          "anchorId": "room-ch7-730-b",
          "title": "Subroom 7-30.2: Response Frame | Recall the Capacitor Current to Recall the Resistor Current",
          "summary": "The capacitor current is Then The resistor current is",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> Use the parallel RLC of Figure 7-45 and plot the currents through the resistor, inductor, and capacitor. The textbook point is not just the shapes of the three curves, but the fact that their sum stays equal to the 25 mA source current for all time.</p><p><strong>Scene extension:</strong> A gold horizon line refusing to move while the other traces swing underneath. This chamber covers Recall the Capacitor Current to Recall the Resistor Current.</p><h4>Worked Detail 1: Room 3: Recall the Capacitor Current</h4><ul><li>The capacitor current is</li><li>$$i_C(t)=49e^{-14300t}-24e^{-7000t}\\ \\text{mA}. $$</li><li>It is purely transient and decays to zero.</li></ul><h4>Worked Detail 2: Room 4: Recall the Resistor Current</h4><ul><li>The resistor current is</li><li>$$i_R(t)=-73e^{-14300t}+73e^{-7000t}\\ \\text{mA}. $$</li><li>It also decays to zero because the final branch voltage goes to zero.</li></ul><p><strong>Carry rule:</strong> Whenever the branch currents all come from one KCL derivation, the plot should show a stable total. Here the algebra predicts it and the graph confirms it: the three branches always sum to the source current.</p>",
          "sourcePage": "rlc-ex730.html",
          "sourcePageTitle": "Exercise 7-30 | Plot the Parallel RLC Branch Currents",
          "sourceUrl": "rlc-ex730.html",
          "tags": [
            "parallel",
            "plot",
            "KCL",
            "verification"
          ],
          "order": 25
        },
        {
          "id": "ch7-room-730-c",
          "anchorId": "room-ch7-730-c",
          "title": "Subroom 7-30.3: Constraint Forge | Add the Three Expressions to Interpret the Plot",
          "summary": "Sum the currents term by term: Then The inductor branch rises toward the source current.",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> Use the parallel RLC of Figure 7-45 and plot the currents through the resistor, inductor, and capacitor. The textbook point is not just the shapes of the three curves, but the fact that their sum stays equal to the 25 mA source current for all time.</p><p><strong>Scene extension:</strong> A gold horizon line refusing to move while the other traces swing underneath. This chamber covers Add the Three Expressions to Interpret the Plot.</p><h4>Worked Detail 1: Room 5: Add the Three Expressions</h4><ul><li>Sum the currents term by term:</li><li>$$i_L+i_C+i_R$$</li><li>$$=(24+49-73)e^{-14300t}+(-49-24+73)e^{-7000t}+25.$$</li><li>All transient terms cancel, leaving only 25 mA.</li></ul><h4>Worked Detail 2: Room 6: Interpret the Plot</h4><ul><li>The inductor branch rises toward the source current.</li><li>The resistor and capacitor currents are transient redistribution currents.</li><li>Their combined effect never violates KCL.</li></ul><p><strong>Carry rule:</strong> Whenever the branch currents all come from one KCL derivation, the plot should show a stable total. Here the algebra predicts it and the graph confirms it: the three branches always sum to the source current.</p>",
          "sourcePage": "rlc-ex730.html",
          "sourcePageTitle": "Exercise 7-30 | Plot the Parallel RLC Branch Currents",
          "sourceUrl": "rlc-ex730.html",
          "tags": [
            "parallel",
            "plot",
            "KCL",
            "verification"
          ],
          "order": 26
        },
        {
          "id": "ch7-room-730-d",
          "anchorId": "room-ch7-730-d",
          "title": "Subroom 7-30.4: Final Seal | Final Memory Pattern",
          "summary": "This graph is a conservation picture.",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> Use the parallel RLC of Figure 7-45 and plot the currents through the resistor, inductor, and capacitor. The textbook point is not just the shapes of the three curves, but the fact that their sum stays equal to the 25 mA source current for all time.</p><p><strong>Scene extension:</strong> A gold horizon line refusing to move while the other traces swing underneath. This chamber covers Final Memory Pattern.</p><h4>Worked Detail 1: Room 7: Final Memory Pattern</h4><ul><li>This graph is a conservation picture.</li><li>The source current is constant, and the branch currents reshuffle that fixed 25 mA until the transients die out.</li></ul><p><strong>Carry rule:</strong> Whenever the branch currents all come from one KCL derivation, the plot should show a stable total. Here the algebra predicts it and the graph confirms it: the three branches always sum to the source current.</p>",
          "sourcePage": "rlc-ex730.html",
          "sourcePageTitle": "Exercise 7-30 | Plot the Parallel RLC Branch Currents",
          "sourceUrl": "rlc-ex730.html",
          "tags": [
            "parallel",
            "plot",
            "KCL",
            "verification"
          ],
          "order": 27
        },
        {
          "id": "ch7-room-731-a",
          "anchorId": "room-ch7-731-a",
          "title": "Subroom 7-31.1: Setup Lens | Collapse the Parallel LC Branch to Compute the Parallel Impedance",
          "summary": "The inductor and capacitor are in parallel, so first replace them with an equivalent impedance. Then The parallel branch is",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> Find the zero-state response of $$v_o(t)$$ for Figure 7-47 when the source is $$v_s(t)=60u(t)\\ \\text{V}.$$ The circuit is a 200 ohm series resistor feeding a parallel combination of a 125 mH inductor and a 0.5 microfarad capacitor, with the output taken across the parallel branch.</p><p><strong>Scene extension:</strong> One merged branch key, one divider lock, two exit keys. This chamber covers Collapse the Parallel LC Branch to Compute the Parallel Impedance.</p><h4>Worked Detail 1: Room 1: Collapse the Parallel LC Branch</h4><ul><li>The inductor and capacitor are in parallel, so first replace them with an equivalent impedance.</li><li>Use</li><li>$$Z_L=sL,\\qquad Z_C=\\frac{1}{sC}.$$</li></ul><h4>Worked Detail 2: Room 2: Compute the Parallel Impedance</h4><ul><li>The parallel branch is</li><li>$$Z_p=\\frac{Z_LZ_C}{Z_L+Z_C}=\\frac{sL}{1+s^2LC}. $$</li><li>This is the impedance that sits after the 200 ohm resistor.</li></ul><p><strong>Carry rule:</strong> This problem is a divider problem in disguise. Replace the parallel LC with one impedance, form the transfer function, multiply by the step input, factor the quadratic, and invert the two simple exponentials.</p>",
          "sourcePage": "rlc-ex731.html",
          "sourcePageTitle": "Exercise 7-31 | Zero-State Output Response of Figure 7-47",
          "sourceUrl": "rlc-ex731.html",
          "tags": [
            "parallel",
            "transfer",
            "divider",
            "pulse"
          ],
          "order": 28
        },
        {
          "id": "ch7-room-731-b",
          "anchorId": "room-ch7-731-b",
          "title": "Subroom 7-31.2: Response Frame | Form the Transfer Function to Apply the 60 V Step Input",
          "summary": "Use the voltage divider: Then Because $$V_s(s)=60/s,$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> Find the zero-state response of $$v_o(t)$$ for Figure 7-47 when the source is $$v_s(t)=60u(t)\\ \\text{V}.$$ The circuit is a 200 ohm series resistor feeding a parallel combination of a 125 mH inductor and a 0.5 microfarad capacitor, with the output taken across the parallel branch.</p><p><strong>Scene extension:</strong> One merged branch key, one divider lock, two exit keys. This chamber covers Form the Transfer Function to Apply the 60 V Step Input.</p><h4>Worked Detail 1: Room 3: Form the Transfer Function</h4><ul><li>Use the voltage divider:</li><li>$$\\frac{V_o}{V_s}=\\frac{Z_p}{R+Z_p}. $$</li><li>Substitute $$Z_p$$ and simplify:</li><li>$$\\frac{V_o}{V_s}=\\frac{sL}{RLCs^2+Ls+R}. $$</li></ul><h4>Worked Detail 2: Room 4: Apply the 60 V Step Input</h4><ul><li>Because $$V_s(s)=60/s,$$</li><li>$$V_o(s)=\\frac{60}{s}\\cdot \\frac{sL}{RLCs^2+Ls+R}=\\frac{60L}{RLCs^2+Ls+R}. $$</li></ul><p><strong>Carry rule:</strong> This problem is a divider problem in disguise. Replace the parallel LC with one impedance, form the transfer function, multiply by the step input, factor the quadratic, and invert the two simple exponentials.</p>",
          "sourcePage": "rlc-ex731.html",
          "sourcePageTitle": "Exercise 7-31 | Zero-State Output Response of Figure 7-47",
          "sourceUrl": "rlc-ex731.html",
          "tags": [
            "parallel",
            "transfer",
            "divider",
            "pulse"
          ],
          "order": 29
        },
        {
          "id": "ch7-room-731-c",
          "anchorId": "room-ch7-731-c",
          "title": "Subroom 7-31.3: Constraint Forge | Substitute the Element Values to Factor the Denominator",
          "summary": "With $$R=200,$$ $$L=0.125,$$ and $$C=0.5\\times10^{-6},$$ Then The quadratic factors as",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> Find the zero-state response of $$v_o(t)$$ for Figure 7-47 when the source is $$v_s(t)=60u(t)\\ \\text{V}.$$ The circuit is a 200 ohm series resistor feeding a parallel combination of a 125 mH inductor and a 0.5 microfarad capacitor, with the output taken across the parallel branch.</p><p><strong>Scene extension:</strong> One merged branch key, one divider lock, two exit keys. This chamber covers Substitute the Element Values to Factor the Denominator.</p><h4>Worked Detail 1: Room 5: Substitute the Element Values</h4><ul><li>With $$R=200,$$ $$L=0.125,$$ and $$C=0.5\\times10^{-6},$$</li><li>$$V_o(s)=\\frac{7.5}{1.25\\times10^{-5}s^2+0.125s+200}. $$</li><li>Dividing through by $$1.25\\times10^{-5}$$ gives</li><li>$$V_o(s)=\\frac{600000}{s^2+10000s+1.6\\times10^7}. $$</li></ul><h4>Worked Detail 2: Room 6: Factor the Denominator</h4><ul><li>The quadratic factors as</li><li>$$s^2+10000s+1.6\\times10^7=(s+2000)(s+8000). $$</li><li>So</li><li>$$V_o(s)=\\frac{600000}{(s+2000)(s+8000)}. $$</li></ul><p><strong>Carry rule:</strong> This problem is a divider problem in disguise. Replace the parallel LC with one impedance, form the transfer function, multiply by the step input, factor the quadratic, and invert the two simple exponentials.</p>",
          "sourcePage": "rlc-ex731.html",
          "sourcePageTitle": "Exercise 7-31 | Zero-State Output Response of Figure 7-47",
          "sourceUrl": "rlc-ex731.html",
          "tags": [
            "parallel",
            "transfer",
            "divider",
            "pulse"
          ],
          "order": 30
        },
        {
          "id": "ch7-room-731-d",
          "anchorId": "room-ch7-731-d",
          "title": "Subroom 7-31.4: Final Seal | Use Partial Fractions to Final Time-Domain Response",
          "summary": "Write Then The inverse Laplace transform gives",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> Find the zero-state response of $$v_o(t)$$ for Figure 7-47 when the source is $$v_s(t)=60u(t)\\ \\text{V}.$$ The circuit is a 200 ohm series resistor feeding a parallel combination of a 125 mH inductor and a 0.5 microfarad capacitor, with the output taken across the parallel branch.</p><p><strong>Scene extension:</strong> One merged branch key, one divider lock, two exit keys. This chamber covers Use Partial Fractions to Final Time-Domain Response.</p><h4>Worked Detail 1: Room 7: Use Partial Fractions</h4><ul><li>Write</li><li>$$\\frac{600000}{(s+2000)(s+8000)}=\\frac{100}{s+2000}-\\frac{100}{s+8000}. $$</li><li>Now invert term by term.</li></ul><h4>Worked Detail 2: Room 8: Final Time-Domain Response</h4><ul><li>The inverse Laplace transform gives</li><li>$$\\boxed{v_o(t)=100\\left(e^{-2000t}-e^{-8000t}\\right)\\ \\text{V}}.$$</li><li>This is a zero-state pulse response that rises from zero and decays back to zero because the inductor is a short circuit at DC.</li></ul><p><strong>Carry rule:</strong> This problem is a divider problem in disguise. Replace the parallel LC with one impedance, form the transfer function, multiply by the step input, factor the quadratic, and invert the two simple exponentials.</p>",
          "sourcePage": "rlc-ex731.html",
          "sourcePageTitle": "Exercise 7-31 | Zero-State Output Response of Figure 7-47",
          "sourceUrl": "rlc-ex731.html",
          "tags": [
            "parallel",
            "transfer",
            "divider",
            "pulse"
          ],
          "order": 31
        }
      ],
      "blocks": [
        {
          "id": "palace-ch7-parallel-citadel-block-1",
          "width": 290,
          "height": 180,
          "title": "7-24 | KCL Corridor",
          "sourceRoomIds": [
            "ch7-room-724-a",
            "ch7-room-724-b",
            "ch7-room-724-c",
            "ch7-room-724-d"
          ],
          "mnemonicPeg": "Three color-coded pipes meet under one bright source funnel.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Write the Parallel Characteristic Equation to Find the Two Real Roots -> Response Frame | Write the Inductor-Current Form to Apply the Zero-State Current Condition -> Constraint Forge | Use the Zero Initial Voltage to Solve for $$K_1$$ and $$K_2$$ -> Final Seal | Differentiate to Get the Voltage and Capacitor Current to Apply KCL for the Resistor Current. Blue pipe for iL, green for iC, orange for iR. The missing orange current only appears after the blue and green pipes are already known.",
          "relationType": "sequence",
          "tags": [
            "parallel",
            "KCL",
            "branches",
            "overdamped"
          ],
          "icon": "token",
          "accentVariant": "ember",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "bridge",
          "objectShape": "path",
          "objectShapeCustom": "",
          "emotionCue": "aggressive",
          "motionCue": "splitting",
          "sequenceIndex": 1,
          "x": 150,
          "y": 180
        },
        {
          "id": "palace-ch7-parallel-citadel-block-2",
          "width": 290,
          "height": 180,
          "title": "7-26A | Threshold Observatory",
          "sourceRoomIds": [
            "ch7-room-7261-a",
            "ch7-room-7261-b",
            "ch7-room-7261-c",
            "ch7-room-7261-d"
          ],
          "mnemonicPeg": "A glass tower with a needle that only counts if it rises above the line.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Write the Parallel Equation to Match the Standard Form -> Response Frame | Compute the Natural Frequency -> Constraint Forge | Use the Critical Boundary -> Final Seal | Solve the Resistance Range. Always look up in the parallel observatory. If you look down, you accidentally apply the series rule and lose the problem.",
          "relationType": "sequence",
          "tags": [
            "parallel",
            "threshold",
            "underdamped",
            "inequality"
          ],
          "icon": "token",
          "accentVariant": "cyan",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "anchor",
          "objectShape": "arch",
          "objectShapeCustom": "",
          "emotionCue": "alert",
          "motionCue": "rising",
          "sequenceIndex": 2,
          "x": 470,
          "y": 180
        },
        {
          "id": "palace-ch7-parallel-citadel-block-3",
          "width": 290,
          "height": 180,
          "title": "7-26B | Repeated-Root Recovery Tank",
          "sourceRoomIds": [
            "ch7-room-7262-a",
            "ch7-room-7262-b",
            "ch7-room-7262-c",
            "ch7-room-7262-d"
          ],
          "mnemonicPeg": "One bubble rises, collapses, and repeats in the same lane.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Recognize the Repeated Root to Build the Characteristic Equation -> Response Frame | Read the Initial Voltage to Read the Initial Current -> Constraint Forge | Differentiate the Voltage to Recover $$C$$ to Match the Constant Term to Find $$L$$ -> Final Seal | Match the Linear Term to Find $$R$$ to Final Check. The tank is about reconstruction, not forward solving. The repeated bubble is the first thing you must see.",
          "relationType": "sequence",
          "tags": [
            "parallel",
            "repeated-root",
            "recovery",
            "critical"
          ],
          "icon": "token",
          "accentVariant": "ember",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "room",
          "objectShape": "flame",
          "objectShapeCustom": "",
          "emotionCue": "intense",
          "motionCue": "rising",
          "sequenceIndex": 3,
          "x": 790,
          "y": 180
        },
        {
          "id": "palace-ch7-parallel-citadel-block-4",
          "width": 290,
          "height": 180,
          "title": "7-27A | Parallel Design Desk",
          "sourceRoomIds": [
            "ch7-room-7271-a",
            "ch7-room-7271-b",
            "ch7-room-7271-c",
            "ch7-room-7271-d"
          ],
          "mnemonicPeg": "Two stamps and one unlocked drawer.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Start from the Parallel Form to Convert the Design Targets -> Response Frame | Choose One Component to Solve for C -> Constraint Forge | Solve for L -> Final Seal | Final Design Logic. Touch the zeta stamp first, then the omega stamp, then open the drawer to pick the easy component.",
          "relationType": "sequence",
          "tags": [
            "parallel",
            "design",
            "zeta",
            "omega0"
          ],
          "icon": "token",
          "accentVariant": "cyan",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "anchor",
          "objectShape": "cube",
          "objectShapeCustom": "",
          "emotionCue": "calm",
          "motionCue": "aligning",
          "sequenceIndex": 4,
          "x": 150,
          "y": 430
        },
        {
          "id": "palace-ch7-parallel-citadel-block-5",
          "width": 290,
          "height": 180,
          "title": "7-27B | Branch-Current Theater",
          "sourceRoomIds": [
            "ch7-room-7272-a",
            "ch7-room-7272-b",
            "ch7-room-7272-c",
            "ch7-room-7272-d"
          ],
          "mnemonicPeg": "Three stages and one green chorus line.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Write the Parallel Characteristic Equation to Use the Initial Current -> Response Frame | Convert the Initial Voltage into a Derivative Condition to Solve for $$K_2$$ and Finish $$i_L(t)$$ -> Constraint Forge | Differentiate to Get the Branch Voltage to Use the Voltage to Get $$i_R(t)$$ -> Final Seal | Differentiate the Voltage to Get $$i_C(t)$$ to Validate KCL from the Three Currents. Blue starts, white follows from v/R, violet follows from C dv/dt, and green cleans the whole equation to zero.",
          "relationType": "sequence",
          "tags": [
            "parallel",
            "currents",
            "KCL",
            "underdamped"
          ],
          "icon": "token",
          "accentVariant": "violet",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "hallway",
          "objectShape": "path",
          "objectShapeCustom": "",
          "emotionCue": "loud",
          "motionCue": "oscillating",
          "sequenceIndex": 5,
          "x": 470,
          "y": 430
        },
        {
          "id": "palace-ch7-parallel-citadel-block-6",
          "width": 290,
          "height": 180,
          "title": "7-28 | Critical Mirror Chamber",
          "sourceRoomIds": [
            "ch7-room-728-a",
            "ch7-room-728-b",
            "ch7-room-728-c",
            "ch7-room-728-d"
          ],
          "mnemonicPeg": "Two mirrors showing the same pulse from two different angles.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Recognize the Repeated Root to Build the Characteristic Equation -> Response Frame | Read the Initial State Values to Recover the Inductance -> Constraint Forge | Recover the Capacitance to Recover the Resistance -> Final Seal | Write the Resistor Current to Final Memory Pattern. Do not treat the walls as separate stories. They are the same repeated-root chamber reflected through current and voltage.",
          "relationType": "sequence",
          "tags": [
            "parallel",
            "recovery",
            "critical",
            "waveform"
          ],
          "icon": "token",
          "accentVariant": "ember",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "bridge",
          "objectShape": "gate",
          "objectShapeCustom": "",
          "emotionCue": "precise",
          "motionCue": "reflecting",
          "sequenceIndex": 6,
          "x": 790,
          "y": 430
        },
        {
          "id": "palace-ch7-parallel-citadel-block-7",
          "width": 290,
          "height": 180,
          "title": "7-30 | Flat-Sum Plot Deck",
          "sourceRoomIds": [
            "ch7-room-730-a",
            "ch7-room-730-b",
            "ch7-room-730-c",
            "ch7-room-730-d"
          ],
          "mnemonicPeg": "A gold horizon line refusing to move while the other traces swing underneath.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Start from the Solved Branch Currents to Recall the Inductor Current -> Response Frame | Recall the Capacitor Current to Recall the Resistor Current -> Constraint Forge | Add the Three Expressions to Interpret the Plot -> Final Seal | Final Memory Pattern. The gold line is the anchor. The other colors only matter because they cancel each other and leave the horizon untouched.",
          "relationType": "sequence",
          "tags": [
            "parallel",
            "plot",
            "KCL",
            "verification"
          ],
          "icon": "token",
          "accentVariant": "cyan",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "room",
          "objectShape": "path",
          "objectShapeCustom": "",
          "emotionCue": "satisfied",
          "motionCue": "canceling",
          "sequenceIndex": 7,
          "x": 150,
          "y": 680
        },
        {
          "id": "palace-ch7-parallel-citadel-block-8",
          "width": 290,
          "height": 180,
          "title": "7-31 | Divider Vault",
          "sourceRoomIds": [
            "ch7-room-731-a",
            "ch7-room-731-b",
            "ch7-room-731-c",
            "ch7-room-731-d"
          ],
          "mnemonicPeg": "One merged branch key, one divider lock, two exit keys.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Collapse the Parallel LC Branch to Compute the Parallel Impedance -> Response Frame | Form the Transfer Function to Apply the 60 V Step Input -> Constraint Forge | Substitute the Element Values to Factor the Denominator -> Final Seal | Use Partial Fractions to Final Time-Domain Response. The vault refuses to open if you try to do time-domain work before the branch reduction. Merge first, then divide, then invert.",
          "relationType": "sequence",
          "tags": [
            "parallel",
            "transfer",
            "divider",
            "pulse"
          ],
          "icon": "token",
          "accentVariant": "violet",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "anchor",
          "objectShape": "gate",
          "objectShapeCustom": "",
          "emotionCue": "methodical",
          "motionCue": "unlocking",
          "sequenceIndex": 8,
          "x": 470,
          "y": 680
        }
      ],
      "edges": [
        {
          "id": "palace-ch7-parallel-citadel-edge-1",
          "fromBlockId": "palace-ch7-parallel-citadel-block-1",
          "toBlockId": "palace-ch7-parallel-citadel-block-2",
          "label": "next room"
        },
        {
          "id": "palace-ch7-parallel-citadel-edge-2",
          "fromBlockId": "palace-ch7-parallel-citadel-block-2",
          "toBlockId": "palace-ch7-parallel-citadel-block-3",
          "label": "next room"
        },
        {
          "id": "palace-ch7-parallel-citadel-edge-3",
          "fromBlockId": "palace-ch7-parallel-citadel-block-3",
          "toBlockId": "palace-ch7-parallel-citadel-block-4",
          "label": "next room"
        },
        {
          "id": "palace-ch7-parallel-citadel-edge-4",
          "fromBlockId": "palace-ch7-parallel-citadel-block-4",
          "toBlockId": "palace-ch7-parallel-citadel-block-5",
          "label": "next room"
        },
        {
          "id": "palace-ch7-parallel-citadel-edge-5",
          "fromBlockId": "palace-ch7-parallel-citadel-block-5",
          "toBlockId": "palace-ch7-parallel-citadel-block-6",
          "label": "next room"
        },
        {
          "id": "palace-ch7-parallel-citadel-edge-6",
          "fromBlockId": "palace-ch7-parallel-citadel-block-6",
          "toBlockId": "palace-ch7-parallel-citadel-block-7",
          "label": "next room"
        },
        {
          "id": "palace-ch7-parallel-citadel-edge-7",
          "fromBlockId": "palace-ch7-parallel-citadel-block-7",
          "toBlockId": "palace-ch7-parallel-citadel-block-8",
          "label": "next room"
        }
      ],
      "sketches": [],
      "images": [],
      "viewport": {
        "zoom": 0.72
      }
    },
    {
      "id": "palace-ch7-damping-tower",
      "name": "Damping and Design Tower",
      "importedPages": [
        "rlc-design723.html",
        "rlc-ex726-example.html",
        "rlc-ex729.html",
        "rlc-design732.html",
        "rlc-eval734.html",
        "rlc-design735.html"
      ],
      "importedRooms": [
        {
          "id": "ch7-room-723-a",
          "anchorId": "room-ch7-723-a",
          "title": "Subroom 7-23.1: Setup Lens | Keep the Characteristic Skeleton Ready to Build the Part (a) Equation",
          "summary": "A series RLC circuit always uses $$LCs^2+R_TC s+1=0$$ or, after normalization, $$s^2+\\dfrac{R_T}{L}s+\\dfrac{1}{LC}=0.$$ Then Use $$R_T=2000\\ \\Omega,$$ $$L=0.1\\ \\text{H},$$ and $$C=0.4\\times?",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> For a series RLC circuit, work in both directions: in part (a) compute the roots from given $$R_T,$$ $$L,$$ and $$C;$$ in part (b) choose $$R_T$$ and $$C$$ from a target complex root pair; in part (c) design for a repeated root at $$-10^4$$ and explain why that condition does not produce a unique circuit.</p><p><strong>Scene extension:</strong> One steel skeleton with three doors: forward, reverse, and non-unique. This chamber covers Keep the Characteristic Skeleton Ready to Build the Part (a) Equation.</p><h4>Worked Detail 1: Room 1: Keep the Characteristic Skeleton Ready</h4><ul>\n              <li>A series RLC circuit always uses $$LCs^2+R_TC s+1=0$$ or, after normalization, $$s^2+\\dfrac{R_T}{L}s+\\dfrac{1}{LC}=0.$$</li>\n              <li>Part (a) goes from components to roots.</li>\n              <li>Parts (b) and (c) go from roots back to components.</li>\n            </ul><h4>Worked Detail 2: Room 2: Build the Part (a) Equation</h4><ul>\n              <li>Use $$R_T=2000\\ \\Omega,$$ $$L=0.1\\ \\text{H},$$ and $$C=0.4\\times 10^{-6}\\ \\text{F}. $$</li>\n              <li>Then $$LC=4\\times 10^{-8}$$ and $$R_TC=8\\times 10^{-4}. $$</li>\n              <li>So the characteristic equation is $$4\\times 10^{-8}s^2+8\\times 10^{-4}s+1=0,$$ or normalized as $$s^2+20{,}000s+25\\times 10^6=0.$$</li>\n            </ul><p><strong>Carry rule:</strong> Part (a) moves from elements to roots. Parts (b) and (c) move from roots to element constraints. The algebra is the same in both directions because the characteristic equation is the shared bridge.</p>",
          "sourcePage": "rlc-design723.html",
          "sourcePageTitle": "Design Exercise 7-23 | Design from Target Roots",
          "sourceUrl": "rlc-design723.html",
          "tags": [
            "series",
            "roots",
            "design",
            "uniqueness"
          ],
          "order": 0
        },
        {
          "id": "ch7-room-723-b",
          "anchorId": "room-ch7-723-b",
          "title": "Subroom 7-23.2: Response Frame | Solve Part (a) to Turn the Part (b) Target Roots into a Polynomial",
          "summary": "Apply the quadratic formula to $$s^2+20{,}000s+25\\times 10^6=0.$$ Then The target roots are $$-1000\\pm j2000.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> For a series RLC circuit, work in both directions: in part (a) compute the roots from given $$R_T,$$ $$L,$$ and $$C;$$ in part (b) choose $$R_T$$ and $$C$$ from a target complex root pair; in part (c) design for a repeated root at $$-10^4$$ and explain why that condition does not produce a unique circuit.</p><p><strong>Scene extension:</strong> One steel skeleton with three doors: forward, reverse, and non-unique. This chamber covers Solve Part (a) to Turn the Part (b) Target Roots into a Polynomial.</p><h4>Worked Detail 1: Room 3: Solve Part (a)</h4><ul>\n              <li>Apply the quadratic formula to $$s^2+20{,}000s+25\\times 10^6=0.$$</li>\n              <li>The roots are $$s=\\dfrac{-20{,}000\\pm\\sqrt{20{,}000^2-4(25\\times 10^6)}}{2}. $$</li>\n              <li>That gives $$s_1\\approx -1340$$ and $$s_2\\approx -18{,}660.$$</li>\n            </ul><h4>Worked Detail 2: Room 4: Turn the Part (b) Target Roots into a Polynomial</h4><ul>\n              <li>The target roots are $$-1000\\pm j2000.$$</li>\n              <li>Their characteristic equation is $$\\left(s+1000-j2000\\right)\\left(s+1000+j2000\\right)=0.$$</li>\n              <li>Expanding gives $$s^2+2000s+5\\times 10^6=0.$$</li>\n            </ul><p><strong>Carry rule:</strong> Part (a) moves from elements to roots. Parts (b) and (c) move from roots to element constraints. The algebra is the same in both directions because the characteristic equation is the shared bridge.</p>",
          "sourcePage": "rlc-design723.html",
          "sourcePageTitle": "Design Exercise 7-23 | Design from Target Roots",
          "sourceUrl": "rlc-design723.html",
          "tags": [
            "series",
            "roots",
            "design",
            "uniqueness"
          ],
          "order": 1
        },
        {
          "id": "ch7-room-723-c",
          "anchorId": "room-ch7-723-c",
          "title": "Subroom 7-23.3: Constraint Forge | Solve Part (b) by Coefficient Matching to Translate the Part (c) Double Root",
          "summary": "Match $$s^2+2000s+5\\times 10^6$$ with $$s^2+\\dfrac{R_T}{L}s+\\dfrac{1}{LC}. $$ Then The requirement $$s_1=s_2=-10^4$$ means the normalized quadratic is $$\\left(s+10^4\\right)^2=s^2+2\\times 10?",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> For a series RLC circuit, work in both directions: in part (a) compute the roots from given $$R_T,$$ $$L,$$ and $$C;$$ in part (b) choose $$R_T$$ and $$C$$ from a target complex root pair; in part (c) design for a repeated root at $$-10^4$$ and explain why that condition does not produce a unique circuit.</p><p><strong>Scene extension:</strong> One steel skeleton with three doors: forward, reverse, and non-unique. This chamber covers Solve Part (b) by Coefficient Matching to Translate the Part (c) Double Root.</p><h4>Worked Detail 1: Room 5: Solve Part (b) by Coefficient Matching</h4><ul>\n              <li>Match $$s^2+2000s+5\\times 10^6$$ with $$s^2+\\dfrac{R_T}{L}s+\\dfrac{1}{LC}. $$</li>\n              <li>From the linear term, $$\\dfrac{R_T}{L}=2000,$$ so $$R_T=2000(0.1)=200\\ \\Omega.$$</li>\n              <li>From the constant term, $$\\dfrac{1}{LC}=5\\times 10^6,$$ so $$C=\\dfrac{1}{5\\times 10^6(0.1)}=2\\times 10^{-6}\\ \\text{F}. $$</li>\n            </ul><h4>Worked Detail 2: Room 6: Translate the Part (c) Double Root</h4><ul>\n              <li>The requirement $$s_1=s_2=-10^4$$ means the normalized quadratic is $$\\left(s+10^4\\right)^2=s^2+2\\times 10^4 s+10^8. $$</li>\n              <li>Matching with $$s^2+\\dfrac{R_T}{L}s+\\dfrac{1}{LC}$$ gives $$\\dfrac{R_T}{L}=2\\times 10^4$$ and $$LC=10^{-8}. $$</li>\n              <li>In unnormalized form the same conditions are $$R_TC=2\\times 10^{-4}$$ and $$LC=10^{-8}. $$</li>\n            </ul><p><strong>Carry rule:</strong> Part (a) moves from elements to roots. Parts (b) and (c) move from roots to element constraints. The algebra is the same in both directions because the characteristic equation is the shared bridge.</p>",
          "sourcePage": "rlc-design723.html",
          "sourcePageTitle": "Design Exercise 7-23 | Design from Target Roots",
          "sourceUrl": "rlc-design723.html",
          "tags": [
            "series",
            "roots",
            "design",
            "uniqueness"
          ],
          "order": 2
        },
        {
          "id": "ch7-room-723-d",
          "anchorId": "room-ch7-723-d",
          "title": "Subroom 7-23.4: Final Seal | Explain Why Part (c) Has No Unique Answer to Design Takeaway",
          "summary": "Part (c) asks for $$R_T,$$ $$L,$$ and $$C,$$ but the repeated-root condition supplies only two independent equations. Then When roots are given, they determine the characteristic coefficien?",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> For a series RLC circuit, work in both directions: in part (a) compute the roots from given $$R_T,$$ $$L,$$ and $$C;$$ in part (b) choose $$R_T$$ and $$C$$ from a target complex root pair; in part (c) design for a repeated root at $$-10^4$$ and explain why that condition does not produce a unique circuit.</p><p><strong>Scene extension:</strong> One steel skeleton with three doors: forward, reverse, and non-unique. This chamber covers Explain Why Part (c) Has No Unique Answer to Design Takeaway.</p><h4>Worked Detail 1: Room 7: Explain Why Part (c) Has No Unique Answer</h4><ul>\n              <li>Part (c) asks for $$R_T,$$ $$L,$$ and $$C,$$ but the repeated-root condition supplies only two independent equations.</li>\n              <li>That means infinitely many series RLC circuits satisfy the same root requirement.</li>\n              <li>One valid choice is $$C=1\\times 10^{-6}\\ \\text{F},$$ which forces $$L=10\\ \\text{mH}$$ from $$LC=10^{-8},$$ and then $$R_T=200\\ \\Omega$$ from $$R_TC=2\\times 10^{-4}. $$</li>\n            </ul><h4>Worked Detail 2: Room 8: Design Takeaway</h4><ul>\n              <li>When roots are given, they determine the characteristic coefficients.</li>\n              <li>Those coefficients determine algebraic relationships among $$R_T,$$ $$L,$$ and $$C.$$</li>\n              <li>If the number of independent relationships is smaller than the number of unknowns, the design is not unique.</li>\n            </ul><p><strong>Carry rule:</strong> Part (a) moves from elements to roots. Parts (b) and (c) move from roots to element constraints. The algebra is the same in both directions because the characteristic equation is the shared bridge.</p>",
          "sourcePage": "rlc-design723.html",
          "sourcePageTitle": "Design Exercise 7-23 | Design from Target Roots",
          "sourceUrl": "rlc-design723.html",
          "tags": [
            "series",
            "roots",
            "design",
            "uniqueness"
          ],
          "order": 3
        },
        {
          "id": "ch7-room-7261-a",
          "anchorId": "room-ch7-7261-a",
          "title": "Subroom 7-26A.1: Setup Lens | Write the Parallel Equation to Match the Standard Form",
          "summary": "Use the natural-response form $$LCs^2+\\frac{L}{R_N}s+1=0.$$ Then Compare with $$s^2+2\\zeta\\omega_0s+\\omega_0^2=0.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> What range of source resistance produces an underdamped natural response in a parallel RLC circuit with $$L=200\\ \\text{mH}$$ and $$C=0.032\\ \\mu\\text{F}?$$ Normalize the parallel characteristic equation, match it to the standard second-order form, and impose $$\\zeta&lt;1.$$</p><p><strong>Scene extension:</strong> A glass tower with a needle that only counts if it rises above the line. This chamber covers Write the Parallel Equation to Match the Standard Form.</p><h4>Worked Detail 1: Room 1: Write the Parallel Equation</h4><ul><li>Use the natural-response form $$LCs^2+\\frac{L}{R_N}s+1=0.$$</li><li>Divide by $$LC$$ to get $$s^2+\\frac{1}{R_NC}s+\\frac{1}{LC}=0.$$</li></ul><h4>Worked Detail 2: Room 2: Match the Standard Form</h4><ul><li>Compare with $$s^2+2\\zeta\\omega_0s+\\omega_0^2=0.$$</li><li>So $$2\\zeta\\omega_0=1/(R_NC)$$ and $$\\omega_0^2=1/(LC).$$</li></ul><p><strong>Carry rule:</strong> In a parallel RLC circuit, more resistance means less damping. Normalize first, find the critical threshold, then move upward in resistance for underdamping.</p>",
          "sourcePage": "rlc-ex726-example.html",
          "sourcePageTitle": "Example 7-26 | Source-Resistance Range for an Underdamped Parallel RLC Response",
          "sourceUrl": "rlc-ex726-example.html",
          "tags": [
            "parallel",
            "threshold",
            "underdamped",
            "inequality"
          ],
          "order": 4
        },
        {
          "id": "ch7-room-7261-b",
          "anchorId": "room-ch7-7261-b",
          "title": "Subroom 7-26A.2: Response Frame | Compute the Natural Frequency",
          "summary": "$$\\omega_0=1/\\sqrt{LC}=1/\\sqrt{(0.2)(32\\times10^{-9})}=12.5\\times10^3\\ \\text{rad/s}.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> What range of source resistance produces an underdamped natural response in a parallel RLC circuit with $$L=200\\ \\text{mH}$$ and $$C=0.032\\ \\mu\\text{F}?$$ Normalize the parallel characteristic equation, match it to the standard second-order form, and impose $$\\zeta&lt;1.$$</p><p><strong>Scene extension:</strong> A glass tower with a needle that only counts if it rises above the line. This chamber covers Compute the Natural Frequency.</p><h4>Worked Detail 1: Room 3: Compute the Natural Frequency</h4><ul><li>$$\\omega_0=1/\\sqrt{LC}=1/\\sqrt{(0.2)(32\\times10^{-9})}=12.5\\times10^3\\ \\text{rad/s}.$$</li></ul><p><strong>Carry rule:</strong> In a parallel RLC circuit, more resistance means less damping. Normalize first, find the critical threshold, then move upward in resistance for underdamping.</p>",
          "sourcePage": "rlc-ex726-example.html",
          "sourcePageTitle": "Example 7-26 | Source-Resistance Range for an Underdamped Parallel RLC Response",
          "sourceUrl": "rlc-ex726-example.html",
          "tags": [
            "parallel",
            "threshold",
            "underdamped",
            "inequality"
          ],
          "order": 5
        },
        {
          "id": "ch7-room-7261-c",
          "anchorId": "room-ch7-7261-c",
          "title": "Subroom 7-26A.3: Constraint Forge | Use the Critical Boundary",
          "summary": "Underdamped means $$\\zeta<1.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> What range of source resistance produces an underdamped natural response in a parallel RLC circuit with $$L=200\\ \\text{mH}$$ and $$C=0.032\\ \\mu\\text{F}?$$ Normalize the parallel characteristic equation, match it to the standard second-order form, and impose $$\\zeta&lt;1.$$</p><p><strong>Scene extension:</strong> A glass tower with a needle that only counts if it rises above the line. This chamber covers Use the Critical Boundary.</p><h4>Worked Detail 1: Room 4: Use the Critical Boundary</h4><ul><li>Underdamped means $$\\zeta&lt;1.$$</li><li>The boundary occurs at $$\\zeta=1,$$ so $$R_N=1/(2\\omega_0C).$$</li></ul><p><strong>Carry rule:</strong> In a parallel RLC circuit, more resistance means less damping. Normalize first, find the critical threshold, then move upward in resistance for underdamping.</p>",
          "sourcePage": "rlc-ex726-example.html",
          "sourcePageTitle": "Example 7-26 | Source-Resistance Range for an Underdamped Parallel RLC Response",
          "sourceUrl": "rlc-ex726-example.html",
          "tags": [
            "parallel",
            "threshold",
            "underdamped",
            "inequality"
          ],
          "order": 6
        },
        {
          "id": "ch7-room-7261-d",
          "anchorId": "room-ch7-7261-d",
          "title": "Subroom 7-26A.4: Final Seal | Solve the Resistance Range",
          "summary": "$$R_N=1/(2(12.5\\times10^3)(32\\times10^{-9}))=1250\\ \\Omega.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> What range of source resistance produces an underdamped natural response in a parallel RLC circuit with $$L=200\\ \\text{mH}$$ and $$C=0.032\\ \\mu\\text{F}?$$ Normalize the parallel characteristic equation, match it to the standard second-order form, and impose $$\\zeta&lt;1.$$</p><p><strong>Scene extension:</strong> A glass tower with a needle that only counts if it rises above the line. This chamber covers Solve the Resistance Range.</p><h4>Worked Detail 1: Room 5: Solve the Resistance Range</h4><ul><li>$$R_N=1/(2(12.5\\times10^3)(32\\times10^{-9}))=1250\\ \\Omega.$$</li><li>For a parallel RLC circuit, underdamping lies on the larger-resistance side, so $$\\boxed{R_N&gt;1250\\ \\Omega}.$$</li></ul><p><strong>Carry rule:</strong> In a parallel RLC circuit, more resistance means less damping. Normalize first, find the critical threshold, then move upward in resistance for underdamping.</p>",
          "sourcePage": "rlc-ex726-example.html",
          "sourcePageTitle": "Example 7-26 | Source-Resistance Range for an Underdamped Parallel RLC Response",
          "sourceUrl": "rlc-ex726-example.html",
          "tags": [
            "parallel",
            "threshold",
            "underdamped",
            "inequality"
          ],
          "order": 7
        },
        {
          "id": "ch7-room-729-a",
          "anchorId": "room-ch7-729-a",
          "title": "Subroom 7-29.1: Setup Lens | Start from the Same Series RLC Model to Separate What Stays Fixed",
          "summary": "The capacitor voltage satisfies Then With $$R=1\\ \\text{k}\\Omega$$ and $$L=2\\ \\text{H},$$ the damping coefficient is fixed at",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> Keep the series RLC step-response setup from Example 7-22, but vary the capacitor instead of the resistor. The goal is to track how the capacitor sweep changes the capacitor voltage waveform, the damping ratio, and the natural frequency.</p><p><strong>Scene extension:</strong> Three glass cases with wider spacing and quieter ringing from left to right. This chamber covers Start from the Same Series RLC Model to Separate What Stays Fixed.</p><h4>Worked Detail 1: Room 1: Start from the Same Series RLC Model</h4><ul><li>The capacitor voltage satisfies</li><li>$$\\frac{d^2v_C}{dt^2}+\\frac{R}{L}\\frac{dv_C}{dt}+\\frac{1}{LC}v_C=\\frac{V_A}{LC}.$$</li><li>Only $$C$$ is changing in this exercise.</li></ul><h4>Worked Detail 2: Room 2: Separate What Stays Fixed</h4><ul><li>With $$R=1\\ \\text{k}\\Omega$$ and $$L=2\\ \\text{H},$$ the damping coefficient is fixed at</li><li>$$\\alpha=\\frac{R}{2L}=250\\ \\text{rad/s}. $$</li><li>That means the resistor is no longer the sweep knob.</li></ul><p><strong>Carry rule:</strong> For this series RLC family, increasing $$C$$ pulls the natural frequency down and pushes the damping ratio up. That is why the waveform both slows down and loses its oscillation as the capacitor grows.</p>",
          "sourcePage": "rlc-ex729.html",
          "sourcePageTitle": "Exercise 7-29 | Capacitor Sweep in a Series RLC Step Response",
          "sourceUrl": "rlc-ex729.html",
          "tags": [
            "series",
            "sweep",
            "damping",
            "capacitor"
          ],
          "order": 8
        },
        {
          "id": "ch7-room-729-b",
          "anchorId": "room-ch7-729-b",
          "title": "Subroom 7-29.2: Response Frame | Track the Natural Frequency to Track the Damping Ratio",
          "summary": "The natural frequency is Then The damping ratio is",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> Keep the series RLC step-response setup from Example 7-22, but vary the capacitor instead of the resistor. The goal is to track how the capacitor sweep changes the capacitor voltage waveform, the damping ratio, and the natural frequency.</p><p><strong>Scene extension:</strong> Three glass cases with wider spacing and quieter ringing from left to right. This chamber covers Track the Natural Frequency to Track the Damping Ratio.</p><h4>Worked Detail 1: Room 3: Track the Natural Frequency</h4><ul><li>The natural frequency is</li><li>$$\\omega_n=\\frac{1}{\\sqrt{LC}}.$$</li><li>So increasing $$C$$ makes $$\\omega_n$$ smaller.</li><li>The oscillation spacing grows wider as the capacitor gets larger.</li></ul><h4>Worked Detail 2: Room 4: Track the Damping Ratio</h4><ul><li>The damping ratio is</li><li>$$\\zeta=\\frac{\\alpha}{\\omega_n}=\\frac{R}{2}\\sqrt{\\frac{C}{L}}.$$</li><li>So increasing $$C$$ makes $$\\zeta$$ larger.</li><li>This is why the response becomes less oscillatory as $$C$$ increases.</li></ul><p><strong>Carry rule:</strong> For this series RLC family, increasing $$C$$ pulls the natural frequency down and pushes the damping ratio up. That is why the waveform both slows down and loses its oscillation as the capacitor grows.</p>",
          "sourcePage": "rlc-ex729.html",
          "sourcePageTitle": "Exercise 7-29 | Capacitor Sweep in a Series RLC Step Response",
          "sourceUrl": "rlc-ex729.html",
          "tags": [
            "series",
            "sweep",
            "damping",
            "capacitor"
          ],
          "order": 9
        },
        {
          "id": "ch7-room-729-c",
          "anchorId": "room-ch7-729-c",
          "title": "Subroom 7-29.3: Constraint Forge | Find the Critical Boundary to Classify the Three Representative Curves",
          "summary": "Critical damping occurs at $$\\zeta=1.$$ Then $$C=0.5\\ \\mu\\text{F} < 8\\ \\mu\\text{F}$$ gives Case C, underdamped.",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> Keep the series RLC step-response setup from Example 7-22, but vary the capacitor instead of the resistor. The goal is to track how the capacitor sweep changes the capacitor voltage waveform, the damping ratio, and the natural frequency.</p><p><strong>Scene extension:</strong> Three glass cases with wider spacing and quieter ringing from left to right. This chamber covers Find the Critical Boundary to Classify the Three Representative Curves.</p><h4>Worked Detail 1: Room 5: Find the Critical Boundary</h4><ul><li>Critical damping occurs at $$\\zeta=1.$$</li><li>Solving gives</li><li>$$C_{\\text{crit}}=\\frac{4L}{R^2}=8\\ \\mu\\text{F}. $$</li><li>That divides the sweep into Cases C, B, and A.</li></ul><h4>Worked Detail 2: Room 6: Classify the Three Representative Curves</h4><ul><li>$$C=0.5\\ \\mu\\text{F} &lt; 8\\ \\mu\\text{F}$$ gives Case C, underdamped.</li><li>$$C=8\\ \\mu\\text{F}$$ gives Case B, critically damped.</li><li>$$C=20\\ \\mu\\text{F} &gt; 8\\ \\mu\\text{F}$$ gives Case A, overdamped.</li></ul><p><strong>Carry rule:</strong> For this series RLC family, increasing $$C$$ pulls the natural frequency down and pushes the damping ratio up. That is why the waveform both slows down and loses its oscillation as the capacitor grows.</p>",
          "sourcePage": "rlc-ex729.html",
          "sourcePageTitle": "Exercise 7-29 | Capacitor Sweep in a Series RLC Step Response",
          "sourceUrl": "rlc-ex729.html",
          "tags": [
            "series",
            "sweep",
            "damping",
            "capacitor"
          ],
          "order": 10
        },
        {
          "id": "ch7-room-729-d",
          "anchorId": "room-ch7-729-d",
          "title": "Subroom 7-29.4: Final Seal | Compare This Sweep with the Resistor Sweep to Final Memory Pattern",
          "summary": "Changing $$R$$ mainly changes damping because $$\\omega_n=1/\\sqrt{LC}$$ stays fixed. Then Bigger capacitor means slower natural rhythm and heavier damping.",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> Keep the series RLC step-response setup from Example 7-22, but vary the capacitor instead of the resistor. The goal is to track how the capacitor sweep changes the capacitor voltage waveform, the damping ratio, and the natural frequency.</p><p><strong>Scene extension:</strong> Three glass cases with wider spacing and quieter ringing from left to right. This chamber covers Compare This Sweep with the Resistor Sweep to Final Memory Pattern.</p><h4>Worked Detail 1: Room 7: Compare This Sweep with the Resistor Sweep</h4><ul><li>Changing $$R$$ mainly changes damping because $$\\omega_n=1/\\sqrt{LC}$$ stays fixed.</li><li>Changing $$C$$ changes both $$\\zeta$$ and $$\\omega_n.$$</li><li>So the envelope and the oscillation spacing both move.</li></ul><h4>Worked Detail 2: Room 8: Final Memory Pattern</h4><ul><li>Bigger capacitor means slower natural rhythm and heavier damping.</li><li>The sweep direction is</li><li>$$\\text{Case C} \\rightarrow \\text{Case B} \\rightarrow \\text{Case A}$$</li><li>as $$C$$ increases through the critical value.</li></ul><p><strong>Carry rule:</strong> For this series RLC family, increasing $$C$$ pulls the natural frequency down and pushes the damping ratio up. That is why the waveform both slows down and loses its oscillation as the capacitor grows.</p>",
          "sourcePage": "rlc-ex729.html",
          "sourcePageTitle": "Exercise 7-29 | Capacitor Sweep in a Series RLC Step Response",
          "sourceUrl": "rlc-ex729.html",
          "tags": [
            "series",
            "sweep",
            "damping",
            "capacitor"
          ],
          "order": 11
        },
        {
          "id": "ch7-room-732-a",
          "anchorId": "room-ch7-732-a",
          "title": "Subroom 7-32.1: Setup Lens | Start from the Figure 7-47 Denominator to Match the Standard Second-Order Pattern",
          "summary": "From Exercise 7-31, the output denominator for this network is Then Compare with",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> Select the resistor value in Figure 7-47 that makes the response critically damped, then find the maximum value of $$v_o(t)$$ and the time when it occurs. Finally determine the maximum power delivered by the 60 V source.</p><p><strong>Scene extension:</strong> A crown, a frozen clock, and a glowing power meter in one room. This chamber covers Start from the Figure 7-47 Denominator to Match the Standard Second-Order Pattern.</p><h4>Worked Detail 1: Room 1: Start from the Figure 7-47 Denominator</h4><ul><li>From Exercise 7-31, the output denominator for this network is</li><li>$$RLCs^2+Ls+R.$$</li><li>Divide by $$RLC$$ to get the standard form</li><li>$$s^2+\\frac{1}{RC}s+\\frac{1}{LC}. $$</li></ul><h4>Worked Detail 2: Room 2: Match the Standard Second-Order Pattern</h4><ul><li>Compare with</li><li>$$s^2+2\\alpha s+\\omega_0^2.$$</li><li>So</li><li>$$2\\alpha=\\frac{1}{RC},\\qquad \\omega_0=\\frac{1}{\\sqrt{LC}}.$$</li></ul><p><strong>Carry rule:</strong> This design problem is a three-step chain: force the repeated root to get $$R,$$ use the critical-response form to get the peak output time and value, then combine the source voltage with the peak source current to get the maximum power.</p>",
          "sourcePage": "rlc-design732.html",
          "sourcePageTitle": "Design Exercise 7-32 | Choose R for Critical Damping in Figure 7-47",
          "sourceUrl": "rlc-design732.html",
          "tags": [
            "critical",
            "design",
            "peak",
            "power"
          ],
          "order": 12
        },
        {
          "id": "ch7-room-732-b",
          "anchorId": "room-ch7-732-b",
          "title": "Subroom 7-32.2: Response Frame | Impose Critical Damping to Evaluate the Resistor Value",
          "summary": "Critical damping means $$\\alpha=\\omega_0.$$ Then With $$L=0.125\\ \\text{H}$$ and $$C=0.5\\times10^{-6}\\ \\text{F},$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> Select the resistor value in Figure 7-47 that makes the response critically damped, then find the maximum value of $$v_o(t)$$ and the time when it occurs. Finally determine the maximum power delivered by the 60 V source.</p><p><strong>Scene extension:</strong> A crown, a frozen clock, and a glowing power meter in one room. This chamber covers Impose Critical Damping to Evaluate the Resistor Value.</p><h4>Worked Detail 1: Room 3: Impose Critical Damping</h4><ul><li>Critical damping means $$\\alpha=\\omega_0.$$</li><li>Therefore</li><li>$$\\frac{1}{2RC}=\\frac{1}{\\sqrt{LC}}.$$</li><li>Solve for the design resistor:</li><li>$$R_{\\text{crit}}=\\frac{1}{2}\\sqrt{\\frac{L}{C}}. $$</li></ul><h4>Worked Detail 2: Room 4: Evaluate the Resistor Value</h4><ul><li>With $$L=0.125\\ \\text{H}$$ and $$C=0.5\\times10^{-6}\\ \\text{F},$$</li><li>$$R_{\\text{crit}}=\\frac{1}{2}\\sqrt{\\frac{0.125}{0.5\\times10^{-6}}}=250\\ \\Omega. $$</li></ul><p><strong>Carry rule:</strong> This design problem is a three-step chain: force the repeated root to get $$R,$$ use the critical-response form to get the peak output time and value, then combine the source voltage with the peak source current to get the maximum power.</p>",
          "sourcePage": "rlc-design732.html",
          "sourcePageTitle": "Design Exercise 7-32 | Choose R for Critical Damping in Figure 7-47",
          "sourceUrl": "rlc-design732.html",
          "tags": [
            "critical",
            "design",
            "peak",
            "power"
          ],
          "order": 13
        },
        {
          "id": "ch7-room-732-c",
          "anchorId": "room-ch7-732-c",
          "title": "Subroom 7-32.3: Constraint Forge | Write the Critical Output Response to Find the Peak Voltage",
          "summary": "At $$R=250\\ \\Omega,$$ the denominator becomes Then Differentiate:",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> Select the resistor value in Figure 7-47 that makes the response critically damped, then find the maximum value of $$v_o(t)$$ and the time when it occurs. Finally determine the maximum power delivered by the 60 V source.</p><p><strong>Scene extension:</strong> A crown, a frozen clock, and a glowing power meter in one room. This chamber covers Write the Critical Output Response to Find the Peak Voltage.</p><h4>Worked Detail 1: Room 5: Write the Critical Output Response</h4><ul><li>At $$R=250\\ \\Omega,$$ the denominator becomes</li><li>$$s^2+8000s+1.6\\times10^7=(s+4000)^2. $$</li><li>The step output is</li><li>$$V_o(s)=\\frac{480000}{(s+4000)^2}.$$</li><li>So</li><li>$$v_o(t)=480000te^{-4000t}\\ \\text{V}. $$</li></ul><h4>Worked Detail 2: Room 6: Find the Peak Voltage</h4><ul><li>Differentiate:</li><li>$$\\frac{dv_o}{dt}=480000e^{-4000t}(1-4000t). $$</li><li>Set the derivative to zero:</li><li>$$1-4000t=0\\Rightarrow t=\\frac{1}{4000}=250\\ \\mu s. $$</li><li>Then</li><li>$$v_{o,\\max}=480000\\left(\\frac{1}{4000}\\right)e^{-1}=\\frac{120}{e}=44.15\\ \\text{V}. $$</li></ul><p><strong>Carry rule:</strong> This design problem is a three-step chain: force the repeated root to get $$R,$$ use the critical-response form to get the peak output time and value, then combine the source voltage with the peak source current to get the maximum power.</p>",
          "sourcePage": "rlc-design732.html",
          "sourcePageTitle": "Design Exercise 7-32 | Choose R for Critical Damping in Figure 7-47",
          "sourceUrl": "rlc-design732.html",
          "tags": [
            "critical",
            "design",
            "peak",
            "power"
          ],
          "order": 14
        },
        {
          "id": "ch7-room-732-d",
          "anchorId": "room-ch7-732-d",
          "title": "Subroom 7-32.4: Final Seal | Find the Source Current to Compute the Maximum Source Power",
          "summary": "Use Ohm's law on the series resistor: Then The source voltage is a constant 60 V step.",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> Select the resistor value in Figure 7-47 that makes the response critically damped, then find the maximum value of $$v_o(t)$$ and the time when it occurs. Finally determine the maximum power delivered by the 60 V source.</p><p><strong>Scene extension:</strong> A crown, a frozen clock, and a glowing power meter in one room. This chamber covers Find the Source Current to Compute the Maximum Source Power.</p><h4>Worked Detail 1: Room 7: Find the Source Current</h4><ul><li>Use Ohm's law on the series resistor:</li><li>$$i_s(t)=\\frac{v_s-v_o}{R}. $$</li><li>With $$v_s=60$$ and $$R=250,$$</li><li>$$i_s(t)=0.24-1920te^{-4000t}\\ \\text{A}. $$</li><li>This is largest at $$t=0$$ and again as $$t\\to\\infty,$$ where it equals 0.24 A.</li></ul><h4>Worked Detail 2: Room 8: Compute the Maximum Source Power</h4><ul><li>The source voltage is a constant 60 V step.</li><li>So the maximum delivered power is</li><li>$$P_{s,\\max}=v_s i_{s,\\max}=60(0.24)=14.4\\ \\text{W}. $$</li></ul><p><strong>Carry rule:</strong> This design problem is a three-step chain: force the repeated root to get $$R,$$ use the critical-response form to get the peak output time and value, then combine the source voltage with the peak source current to get the maximum power.</p>",
          "sourcePage": "rlc-design732.html",
          "sourcePageTitle": "Design Exercise 7-32 | Choose R for Critical Damping in Figure 7-47",
          "sourceUrl": "rlc-design732.html",
          "tags": [
            "critical",
            "design",
            "peak",
            "power"
          ],
          "order": 15
        },
        {
          "id": "ch7-room-734-a",
          "anchorId": "room-ch7-734-a",
          "title": "Subroom 7-34.1: Setup Lens | Write the Series Equation to Match the Standard Form",
          "summary": "For a series RLC circuit, use $$s^2+\\frac{R}{L}s+\\frac{1}{LC}=0.$$ Then Compare with $$s^2+2\\zeta\\omega_0s+\\omega_0^2=0.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> Part (a) asks for the source-resistance range that produces an underdamped natural response in a series RLC circuit with $$L=200\\ \\text{mH}$$ and $$C=0.032\\ \\mu\\text{F}.$$ Part (b) compares that result with the parallel-circuit answer from Example 7-26.</p><p><strong>Scene extension:</strong> Two opposite doors facing each other across one mirror line. This chamber covers Write the Series Equation to Match the Standard Form.</p><h4>Worked Detail 1: Room 1: Write the Series Equation</h4><ul><li>For a series RLC circuit, use $$s^2+\\frac{R}{L}s+\\frac{1}{LC}=0.$$</li></ul><h4>Worked Detail 2: Room 2: Match the Standard Form</h4><ul><li>Compare with $$s^2+2\\zeta\\omega_0s+\\omega_0^2=0.$$</li><li>That gives $$2\\zeta\\omega_0=R/L.$$</li></ul><p><strong>Carry rule:</strong> Series likes small resistance for underdamping. Parallel likes large resistance for underdamping.</p>",
          "sourcePage": "rlc-eval734.html",
          "sourcePageTitle": "Evaluation Exercise 7-34 | Compare Underdamped Resistance Ranges in Series and Parallel RLC Circuits",
          "sourceUrl": "rlc-eval734.html",
          "tags": [
            "comparison",
            "duality",
            "series",
            "parallel"
          ],
          "order": 16
        },
        {
          "id": "ch7-room-734-b",
          "anchorId": "room-ch7-734-b",
          "title": "Subroom 7-34.2: Response Frame | Use the Critical Boundary",
          "summary": "Underdamped means $$\\zeta<1.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> Part (a) asks for the source-resistance range that produces an underdamped natural response in a series RLC circuit with $$L=200\\ \\text{mH}$$ and $$C=0.032\\ \\mu\\text{F}.$$ Part (b) compares that result with the parallel-circuit answer from Example 7-26.</p><p><strong>Scene extension:</strong> Two opposite doors facing each other across one mirror line. This chamber covers Use the Critical Boundary.</p><h4>Worked Detail 1: Room 3: Use the Critical Boundary</h4><ul><li>Underdamped means $$\\zeta&lt;1.$$</li><li>At the boundary, $$R/L=2\\omega_0.$$</li><li>Since $$\\omega_0=1/\\sqrt{LC},$$ the critical resistance is $$R_c=2\\sqrt{L/C}.$$</li></ul><p><strong>Carry rule:</strong> Series likes small resistance for underdamping. Parallel likes large resistance for underdamping.</p>",
          "sourcePage": "rlc-eval734.html",
          "sourcePageTitle": "Evaluation Exercise 7-34 | Compare Underdamped Resistance Ranges in Series and Parallel RLC Circuits",
          "sourceUrl": "rlc-eval734.html",
          "tags": [
            "comparison",
            "duality",
            "series",
            "parallel"
          ],
          "order": 17
        },
        {
          "id": "ch7-room-734-c",
          "anchorId": "room-ch7-734-c",
          "title": "Subroom 7-34.3: Constraint Forge | Evaluate the Threshold",
          "summary": "With $$L=0.2\\ \\text{H}$$ and $$C=32\\times10^{-9}\\ \\text{F},$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> Part (a) asks for the source-resistance range that produces an underdamped natural response in a series RLC circuit with $$L=200\\ \\text{mH}$$ and $$C=0.032\\ \\mu\\text{F}.$$ Part (b) compares that result with the parallel-circuit answer from Example 7-26.</p><p><strong>Scene extension:</strong> Two opposite doors facing each other across one mirror line. This chamber covers Evaluate the Threshold.</p><h4>Worked Detail 1: Room 4: Evaluate the Threshold</h4><ul><li>With $$L=0.2\\ \\text{H}$$ and $$C=32\\times10^{-9}\\ \\text{F},$$</li><li>$$R_c=2\\sqrt{0.2/(32\\times10^{-9})}=5000\\ \\Omega.$$</li><li>So the underdamped range is $$\\boxed{R&lt;5\\ \\text{k}\\Omega}.$$</li></ul><p><strong>Carry rule:</strong> Series likes small resistance for underdamping. Parallel likes large resistance for underdamping.</p>",
          "sourcePage": "rlc-eval734.html",
          "sourcePageTitle": "Evaluation Exercise 7-34 | Compare Underdamped Resistance Ranges in Series and Parallel RLC Circuits",
          "sourceUrl": "rlc-eval734.html",
          "tags": [
            "comparison",
            "duality",
            "series",
            "parallel"
          ],
          "order": 18
        },
        {
          "id": "ch7-room-734-d",
          "anchorId": "room-ch7-734-d",
          "title": "Subroom 7-34.4: Final Seal | Compare with the Parallel Case",
          "summary": "In a series circuit, smaller resistance means less damping.",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> Part (a) asks for the source-resistance range that produces an underdamped natural response in a series RLC circuit with $$L=200\\ \\text{mH}$$ and $$C=0.032\\ \\mu\\text{F}.$$ Part (b) compares that result with the parallel-circuit answer from Example 7-26.</p><p><strong>Scene extension:</strong> Two opposite doors facing each other across one mirror line. This chamber covers Compare with the Parallel Case.</p><h4>Worked Detail 1: Room 5: Compare with the Parallel Case</h4><ul><li>In a series circuit, smaller resistance means less damping.</li><li>In a parallel circuit, larger resistance means less damping.</li><li>The two results point in opposite directions because series and parallel RLC circuits are dual.</li></ul><p><strong>Carry rule:</strong> Series likes small resistance for underdamping. Parallel likes large resistance for underdamping.</p>",
          "sourcePage": "rlc-eval734.html",
          "sourcePageTitle": "Evaluation Exercise 7-34 | Compare Underdamped Resistance Ranges in Series and Parallel RLC Circuits",
          "sourceUrl": "rlc-eval734.html",
          "tags": [
            "comparison",
            "duality",
            "series",
            "parallel"
          ],
          "order": 19
        },
        {
          "id": "ch7-room-735-a",
          "anchorId": "room-ch7-735-a",
          "title": "Subroom 7-35.1: Setup Lens | Match the Series Standard Form to Convert the Design Targets",
          "summary": "Use $$s^2+\\frac{R}{L}s+\\frac{1}{LC}=0.$$ Then $$R/L=2\\zeta\\omega_0=2(1.5)(50\\times10^3)=150\\times10^3.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Set up the model, the known data, and the response category before any heavy algebra starts.</p><p><strong>Page thread:</strong> Design a series RLC circuit with $$\\zeta=1.5$$ and $$\\omega_0=50\\ \\text{krad/s}.$$ The capacitor is fixed at $$0.1\\ \\mu\\text{F},$$ so there is only one valid solution.</p><p><strong>Scene extension:</strong> A glass case over C, with two exposed dials for L and R. This chamber covers Match the Series Standard Form to Convert the Design Targets.</p><h4>Worked Detail 1: Room 1: Match the Series Standard Form</h4><ul><li>Use $$s^2+\\frac{R}{L}s+\\frac{1}{LC}=0.$$</li><li>Compare with $$s^2+2\\zeta\\omega_0s+\\omega_0^2=0.$$</li></ul><h4>Worked Detail 2: Room 2: Convert the Design Targets</h4><ul><li>$$R/L=2\\zeta\\omega_0=2(1.5)(50\\times10^3)=150\\times10^3.$$</li><li>$$1/(LC)=\\omega_0^2=(50\\times10^3)^2=2.5\\times10^9.$$</li></ul><p><strong>Carry rule:</strong> When one energy-storage component is fixed, design freedom disappears. Use $$\\omega_0$$ to solve the other storage element and $$\\zeta$$ to solve the resistor.</p>",
          "sourcePage": "rlc-design735.html",
          "sourcePageTitle": "Design Exercise 7-35 | Design a Series RLC Circuit with Fixed Capacitance",
          "sourceUrl": "rlc-design735.html",
          "tags": [
            "series",
            "design",
            "fixed-capacitor",
            "unique"
          ],
          "order": 20
        },
        {
          "id": "ch7-room-735-b",
          "anchorId": "room-ch7-735-b",
          "title": "Subroom 7-35.2: Response Frame | Use the Fixed Capacitor to Solve for the Inductor",
          "summary": "The capacitor is given: $$C=0.1\\ \\mu\\text{F}=10^{-7}\\ \\text{F}.$$ Then $$L=1/(C\\omega_0^2)=1/((10^{-7})(2.5\\times10^9))=4\\times10^{-3}\\ \\text{H}=4\\ \\text{mH}.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Build the governing template or structural equation that the rest of the page depends on.</p><p><strong>Page thread:</strong> Design a series RLC circuit with $$\\zeta=1.5$$ and $$\\omega_0=50\\ \\text{krad/s}.$$ The capacitor is fixed at $$0.1\\ \\mu\\text{F},$$ so there is only one valid solution.</p><p><strong>Scene extension:</strong> A glass case over C, with two exposed dials for L and R. This chamber covers Use the Fixed Capacitor to Solve for the Inductor.</p><h4>Worked Detail 1: Room 3: Use the Fixed Capacitor</h4><ul><li>The capacitor is given: $$C=0.1\\ \\mu\\text{F}=10^{-7}\\ \\text{F}.$$</li><li>This removes the free-choice step that appears in the open design examples.</li></ul><h4>Worked Detail 2: Room 4: Solve for the Inductor</h4><ul><li>$$L=1/(C\\omega_0^2)=1/((10^{-7})(2.5\\times10^9))=4\\times10^{-3}\\ \\text{H}=4\\ \\text{mH}.$$</li></ul><p><strong>Carry rule:</strong> When one energy-storage component is fixed, design freedom disappears. Use $$\\omega_0$$ to solve the other storage element and $$\\zeta$$ to solve the resistor.</p>",
          "sourcePage": "rlc-design735.html",
          "sourcePageTitle": "Design Exercise 7-35 | Design a Series RLC Circuit with Fixed Capacitance",
          "sourceUrl": "rlc-design735.html",
          "tags": [
            "series",
            "design",
            "fixed-capacitor",
            "unique"
          ],
          "order": 21
        },
        {
          "id": "ch7-room-735-c",
          "anchorId": "room-ch7-735-c",
          "title": "Subroom 7-35.3: Constraint Forge | Solve for the Resistor",
          "summary": "Now use $$R/L=150\\times10^3.$$",
          "contentHtml": "<p><strong>Subroom role:</strong> Apply the page constraints, initial conditions, measurements, or design targets to solve the unknowns.</p><p><strong>Page thread:</strong> Design a series RLC circuit with $$\\zeta=1.5$$ and $$\\omega_0=50\\ \\text{krad/s}.$$ The capacitor is fixed at $$0.1\\ \\mu\\text{F},$$ so there is only one valid solution.</p><p><strong>Scene extension:</strong> A glass case over C, with two exposed dials for L and R. This chamber covers Solve for the Resistor.</p><h4>Worked Detail 1: Room 5: Solve for the Resistor</h4><ul><li>Now use $$R/L=150\\times10^3.$$</li><li>$$R=(150\\times10^3)(4\\times10^{-3})=600\\ \\Omega.$$</li></ul><p><strong>Carry rule:</strong> When one energy-storage component is fixed, design freedom disappears. Use $$\\omega_0$$ to solve the other storage element and $$\\zeta$$ to solve the resistor.</p>",
          "sourcePage": "rlc-design735.html",
          "sourcePageTitle": "Design Exercise 7-35 | Design a Series RLC Circuit with Fixed Capacitance",
          "sourceUrl": "rlc-design735.html",
          "tags": [
            "series",
            "design",
            "fixed-capacitor",
            "unique"
          ],
          "order": 22
        },
        {
          "id": "ch7-room-735-d",
          "anchorId": "room-ch7-735-d",
          "title": "Subroom 7-35.4: Final Seal | Why the Answer Is Unique",
          "summary": "With $$C$$ fixed, the two equations determine $$L$$ and $$R$$ exactly.",
          "contentHtml": "<p><strong>Subroom role:</strong> Seal the final result, verify the logic, and read the physical meaning of the finished response.</p><p><strong>Page thread:</strong> Design a series RLC circuit with $$\\zeta=1.5$$ and $$\\omega_0=50\\ \\text{krad/s}.$$ The capacitor is fixed at $$0.1\\ \\mu\\text{F},$$ so there is only one valid solution.</p><p><strong>Scene extension:</strong> A glass case over C, with two exposed dials for L and R. This chamber covers Why the Answer Is Unique.</p><h4>Worked Detail 1: Room 6: Why the Answer Is Unique</h4><ul><li>With $$C$$ fixed, the two equations determine $$L$$ and $$R$$ exactly.</li><li>There is no remaining design freedom.</li></ul><p><strong>Carry rule:</strong> When one energy-storage component is fixed, design freedom disappears. Use $$\\omega_0$$ to solve the other storage element and $$\\zeta$$ to solve the resistor.</p>",
          "sourcePage": "rlc-design735.html",
          "sourcePageTitle": "Design Exercise 7-35 | Design a Series RLC Circuit with Fixed Capacitance",
          "sourceUrl": "rlc-design735.html",
          "tags": [
            "series",
            "design",
            "fixed-capacitor",
            "unique"
          ],
          "order": 23
        }
      ],
      "blocks": [
        {
          "id": "palace-ch7-damping-tower-block-1",
          "width": 290,
          "height": 180,
          "title": "7-23 | Root Forge Hall",
          "sourceRoomIds": [
            "ch7-room-723-a",
            "ch7-room-723-b",
            "ch7-room-723-c",
            "ch7-room-723-d"
          ],
          "mnemonicPeg": "One steel skeleton with three doors: forward, reverse, and non-unique.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Keep the Characteristic Skeleton Ready to Build the Part (a) Equation -> Response Frame | Solve Part (a) to Turn the Part (b) Target Roots into a Polynomial -> Constraint Forge | Solve Part (b) by Coefficient Matching to Translate the Part (c) Double Root -> Final Seal | Explain Why Part (c) Has No Unique Answer to Design Takeaway. The forge is reusable: the same wall formula handles all three parts, but the last door echoes to warn you the design is not unique.",
          "relationType": "sequence",
          "tags": [
            "series",
            "roots",
            "design",
            "uniqueness"
          ],
          "icon": "token",
          "accentVariant": "violet",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "hallway",
          "objectShape": "door",
          "objectShapeCustom": "",
          "emotionCue": "careful",
          "motionCue": "forging",
          "sequenceIndex": 1,
          "x": 150,
          "y": 180
        },
        {
          "id": "palace-ch7-damping-tower-block-2",
          "width": 290,
          "height": 180,
          "title": "7-26A | Threshold Observatory",
          "sourceRoomIds": [
            "ch7-room-7261-a",
            "ch7-room-7261-b",
            "ch7-room-7261-c",
            "ch7-room-7261-d"
          ],
          "mnemonicPeg": "A glass tower with a needle that only counts if it rises above the line.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Write the Parallel Equation to Match the Standard Form -> Response Frame | Compute the Natural Frequency -> Constraint Forge | Use the Critical Boundary -> Final Seal | Solve the Resistance Range. Always look up in the parallel observatory. If you look down, you accidentally apply the series rule and lose the problem.",
          "relationType": "sequence",
          "tags": [
            "parallel",
            "threshold",
            "underdamped",
            "inequality"
          ],
          "icon": "token",
          "accentVariant": "cyan",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "anchor",
          "objectShape": "arch",
          "objectShapeCustom": "",
          "emotionCue": "alert",
          "motionCue": "rising",
          "sequenceIndex": 2,
          "x": 470,
          "y": 180
        },
        {
          "id": "palace-ch7-damping-tower-block-3",
          "width": 290,
          "height": 180,
          "title": "7-29 | Capacitor Sweep Gallery",
          "sourceRoomIds": [
            "ch7-room-729-a",
            "ch7-room-729-b",
            "ch7-room-729-c",
            "ch7-room-729-d"
          ],
          "mnemonicPeg": "Three glass cases with wider spacing and quieter ringing from left to right.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Start from the Same Series RLC Model to Separate What Stays Fixed -> Response Frame | Track the Natural Frequency to Track the Damping Ratio -> Constraint Forge | Find the Critical Boundary to Classify the Three Representative Curves -> Final Seal | Compare This Sweep with the Resistor Sweep to Final Memory Pattern. The cases are ordered by capacitor size, not by damping label. You read the formulas first, then assign the case names.",
          "relationType": "sequence",
          "tags": [
            "series",
            "sweep",
            "damping",
            "capacitor"
          ],
          "icon": "token",
          "accentVariant": "gold",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "hallway",
          "objectShape": "path",
          "objectShapeCustom": "",
          "emotionCue": "observant",
          "motionCue": "stretching",
          "sequenceIndex": 3,
          "x": 790,
          "y": 180
        },
        {
          "id": "palace-ch7-damping-tower-block-4",
          "width": 290,
          "height": 180,
          "title": "7-32 | Critical Crown Room",
          "sourceRoomIds": [
            "ch7-room-732-a",
            "ch7-room-732-b",
            "ch7-room-732-c",
            "ch7-room-732-d"
          ],
          "mnemonicPeg": "A crown, a frozen clock, and a glowing power meter in one room.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Start from the Figure 7-47 Denominator to Match the Standard Second-Order Pattern -> Response Frame | Impose Critical Damping to Evaluate the Resistor Value -> Constraint Forge | Write the Critical Output Response to Find the Peak Voltage -> Final Seal | Find the Source Current to Compute the Maximum Source Power. The crown fixes the resistor. The clock fixes the peak time. The meter only turns on after the current formula is already known.",
          "relationType": "sequence",
          "tags": [
            "critical",
            "design",
            "peak",
            "power"
          ],
          "icon": "token",
          "accentVariant": "gold",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "room",
          "objectShape": "door",
          "objectShapeCustom": "",
          "emotionCue": "decisive",
          "motionCue": "freezing",
          "sequenceIndex": 4,
          "x": 150,
          "y": 430
        },
        {
          "id": "palace-ch7-damping-tower-block-5",
          "width": 290,
          "height": 180,
          "title": "7-34 | Duality Mirror Hall",
          "sourceRoomIds": [
            "ch7-room-734-a",
            "ch7-room-734-b",
            "ch7-room-734-c",
            "ch7-room-734-d"
          ],
          "mnemonicPeg": "Two opposite doors facing each other across one mirror line.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Write the Series Equation to Match the Standard Form -> Response Frame | Use the Critical Boundary -> Constraint Forge | Evaluate the Threshold -> Final Seal | Compare with the Parallel Case. Whenever resistance range questions appear, ask first whether the circuit is series or parallel. The mirror hall only works if the topology is identified immediately.",
          "relationType": "sequence",
          "tags": [
            "comparison",
            "duality",
            "series",
            "parallel"
          ],
          "icon": "token",
          "accentVariant": "ember",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "bridge",
          "objectShape": "door",
          "objectShapeCustom": "",
          "emotionCue": "clear",
          "motionCue": "mirroring",
          "sequenceIndex": 5,
          "x": 470,
          "y": 430
        },
        {
          "id": "palace-ch7-damping-tower-block-6",
          "width": 290,
          "height": 180,
          "title": "7-35 | Fixed-Capacitor Seal",
          "sourceRoomIds": [
            "ch7-room-735-a",
            "ch7-room-735-b",
            "ch7-room-735-c",
            "ch7-room-735-d"
          ],
          "mnemonicPeg": "A glass case over C, with two exposed dials for L and R.",
          "memoryCues": "Walk this page as four linked subrooms: Setup Lens | Match the Series Standard Form to Convert the Design Targets -> Response Frame | Use the Fixed Capacitor to Solve for the Inductor -> Constraint Forge | Solve for the Resistor -> Final Seal | Why the Answer Is Unique. Do not look for a free-choice lever here. The sealed capacitor removes it, so the two equations close the whole room.",
          "relationType": "sequence",
          "tags": [
            "series",
            "design",
            "fixed-capacitor",
            "unique"
          ],
          "icon": "token",
          "accentVariant": "gold",
          "revisionNote": "",
          "status": "revised",
          "sceneType": "anchor",
          "objectShape": "gate",
          "objectShapeCustom": "",
          "emotionCue": "certain",
          "motionCue": "locking",
          "sequenceIndex": 6,
          "x": 790,
          "y": 430
        }
      ],
      "edges": [
        {
          "id": "palace-ch7-damping-tower-edge-1",
          "fromBlockId": "palace-ch7-damping-tower-block-1",
          "toBlockId": "palace-ch7-damping-tower-block-2",
          "label": "next room"
        },
        {
          "id": "palace-ch7-damping-tower-edge-2",
          "fromBlockId": "palace-ch7-damping-tower-block-2",
          "toBlockId": "palace-ch7-damping-tower-block-3",
          "label": "next room"
        },
        {
          "id": "palace-ch7-damping-tower-edge-3",
          "fromBlockId": "palace-ch7-damping-tower-block-3",
          "toBlockId": "palace-ch7-damping-tower-block-4",
          "label": "next room"
        },
        {
          "id": "palace-ch7-damping-tower-edge-4",
          "fromBlockId": "palace-ch7-damping-tower-block-4",
          "toBlockId": "palace-ch7-damping-tower-block-5",
          "label": "next room"
        },
        {
          "id": "palace-ch7-damping-tower-edge-5",
          "fromBlockId": "palace-ch7-damping-tower-block-5",
          "toBlockId": "palace-ch7-damping-tower-block-6",
          "label": "next room"
        }
      ],
      "sketches": [],
      "images": [],
      "viewport": {
        "zoom": 0.8
      }
    }
  ]
};

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function buildDefaultState() {
    return clone(DEFAULT_STATE);
  }

  global.MemoryBuilderSeed = {
    defaultState: DEFAULT_STATE,
    buildDefaultState: buildDefaultState
  };
})(window);
