(function (global) {
  var presetRooms = [
    { id: 'ch8-exercise-8-17-room-1', anchorId: 'room-ch8-exercise-8-17-room-1', title: 'Room 1: Bring in the Figure 8-25 Equivalent Formula', summary: 'From the application example, use the Figure 8-25 equivalent impedance formula.', contentHtml: '', sourcePage: 'ch8-exercise-8-17.html', sourcePageTitle: 'Exercise 8-17 | Evaluate Zeq in Figure 8-25', sourceUrl: 'ch8-exercise-8-17.html#room-ch8-exercise-8-17-room-1', tags: ['bring', 'figure', 'equivalent', 'formula'], order: 0 },
    { id: 'ch8-exercise-8-17-room-2', anchorId: 'room-ch8-exercise-8-17-room-2', title: 'Room 2: Compute the Real Lane', summary: 'First evaluate omega RC = 1 and reduce the real lane.', contentHtml: '', sourcePage: 'ch8-exercise-8-17.html', sourcePageTitle: 'Exercise 8-17 | Evaluate Zeq in Figure 8-25', sourceUrl: 'ch8-exercise-8-17.html#room-ch8-exercise-8-17-room-2', tags: ['compute', 'real', 'lane'], order: 1 },
    { id: 'ch8-exercise-8-17-room-3', anchorId: 'room-ch8-exercise-8-17-room-3', title: 'Room 3: Compute the Imaginary Lane', summary: 'Now compute the imaginary lane of the equivalent impedance.', contentHtml: '', sourcePage: 'ch8-exercise-8-17.html', sourcePageTitle: 'Exercise 8-17 | Evaluate Zeq in Figure 8-25', sourceUrl: 'ch8-exercise-8-17.html#room-ch8-exercise-8-17-room-3', tags: ['compute', 'imaginary', 'lane'], order: 2 },
    { id: 'ch8-exercise-8-17-room-4', anchorId: 'room-ch8-exercise-8-17-room-4', title: 'Room 4: Reassemble the Complex Answer', summary: 'Combine the two lanes into Zeq = 500 - j300 ohms.', contentHtml: '', sourcePage: 'ch8-exercise-8-17.html', sourcePageTitle: 'Exercise 8-17 | Evaluate Zeq in Figure 8-25', sourceUrl: 'ch8-exercise-8-17.html#room-ch8-exercise-8-17-room-4', tags: ['reassemble', 'complex', 'answer'], order: 3 },
    { id: 'ch8-exercise-8-17-room-5', anchorId: 'room-ch8-exercise-8-17-room-5', title: 'Room 5: State the Final Result for Both Methods', summary: 'The hand solution and Multisim check land on the same complex result.', contentHtml: '', sourcePage: 'ch8-exercise-8-17.html', sourcePageTitle: 'Exercise 8-17 | Evaluate Zeq in Figure 8-25', sourceUrl: 'ch8-exercise-8-17.html#room-ch8-exercise-8-17-room-5', tags: ['state', 'final', 'result', 'both'], order: 4 },

    { id: 'ch8-exercise-8-18-room-1', anchorId: 'room-ch8-exercise-8-18-room-1', title: 'Room 1: Reduce the Figure to One Rectangular Impedance', summary: 'Collapse the network to one equivalent rectangular input impedance.', contentHtml: '', sourcePage: 'ch8-exercise-8-18.html', sourcePageTitle: 'Exercise 8-18 | Input Impedance and Series Cancellation', sourceUrl: 'ch8-exercise-8-18.html#room-ch8-exercise-8-18-room-1', tags: ['reduce', 'figure', 'rectangular', 'impedance'], order: 0 },
    { id: 'ch8-exercise-8-18-room-2', anchorId: 'room-ch8-exercise-8-18-room-2', title: 'Room 2: Read the Meaning of the Two Lanes', summary: 'Read the real lane and recognize the positive imaginary lane as inductive.', contentHtml: '', sourcePage: 'ch8-exercise-8-18.html', sourcePageTitle: 'Exercise 8-18 | Input Impedance and Series Cancellation', sourceUrl: 'ch8-exercise-8-18.html#room-ch8-exercise-8-18-room-2', tags: ['read', 'meaning', 'lanes'], order: 1 },
    { id: 'ch8-exercise-8-18-room-3', anchorId: 'room-ch8-exercise-8-18-room-3', title: 'Room 3: Convert the Result to Polar Form', summary: 'Convert the reduced impedance to magnitude-angle form.', contentHtml: '', sourcePage: 'ch8-exercise-8-18.html', sourcePageTitle: 'Exercise 8-18 | Input Impedance and Series Cancellation', sourceUrl: 'ch8-exercise-8-18.html#room-ch8-exercise-8-18-room-3', tags: ['convert', 'result', 'polar', 'form'], order: 2 },
    { id: 'ch8-exercise-8-18-room-4', anchorId: 'room-ch8-exercise-8-18-room-4', title: 'Room 4: Choose the Series Element that Makes the Reactance Zero', summary: 'Pick the equal-and-opposite series reactance to cancel the imaginary lane.', contentHtml: '', sourcePage: 'ch8-exercise-8-18.html', sourcePageTitle: 'Exercise 8-18 | Input Impedance and Series Cancellation', sourceUrl: 'ch8-exercise-8-18.html#room-ch8-exercise-8-18-room-4', tags: ['choose', 'series', 'element', 'that'], order: 3 },
    { id: 'ch8-exercise-8-18-room-5', anchorId: 'room-ch8-exercise-8-18-room-5', title: 'Room 5: Convert the Needed Reactance into a Capacitor Value', summary: 'Turn the needed opposite reactance into a capacitor value.', contentHtml: '', sourcePage: 'ch8-exercise-8-18.html', sourcePageTitle: 'Exercise 8-18 | Input Impedance and Series Cancellation', sourceUrl: 'ch8-exercise-8-18.html#room-ch8-exercise-8-18-room-5', tags: ['convert', 'needed', 'reactance', 'into'], order: 4 },

    { id: 'ch8-exercise-8-19-room-1', anchorId: 'room-ch8-exercise-8-19-room-1', title: 'Room 1: Convert the Given Waveforms into Phasors', summary: 'Convert the given voltage and current waveforms into phasors.', contentHtml: '', sourcePage: 'ch8-exercise-8-19.html', sourcePageTitle: 'Exercise 8-19 | Identify the Unknown Element', sourceUrl: 'ch8-exercise-8-19.html#room-ch8-exercise-8-19-room-1', tags: ['convert', 'given', 'waveforms', 'into'], order: 0 },
    { id: 'ch8-exercise-8-19-room-2', anchorId: 'room-ch8-exercise-8-19-room-2', title: 'Room 2: Divide to Find the Element Impedance', summary: 'Use Z = V/I to form the element impedance in polar form.', contentHtml: '', sourcePage: 'ch8-exercise-8-19.html', sourcePageTitle: 'Exercise 8-19 | Identify the Unknown Element', sourceUrl: 'ch8-exercise-8-19.html#room-ch8-exercise-8-19-room-2', tags: ['divide', 'find', 'element', 'impedance'], order: 1 },
    { id: 'ch8-exercise-8-19-room-3', anchorId: 'room-ch8-exercise-8-19-room-3', title: 'Room 3: Convert the Impedance into Rectangular Form', summary: 'Open the polar impedance into rectangular form so the lanes are visible.', contentHtml: '', sourcePage: 'ch8-exercise-8-19.html', sourcePageTitle: 'Exercise 8-19 | Identify the Unknown Element', sourceUrl: 'ch8-exercise-8-19.html#room-ch8-exercise-8-19-room-3', tags: ['convert', 'impedance', 'into', 'rectangular'], order: 2 },
    { id: 'ch8-exercise-8-19-room-4', anchorId: 'room-ch8-exercise-8-19-room-4', title: 'Room 4: Identify the Device from the Sign of the Imaginary Part', summary: 'Use the sign of the imaginary part to identify the physical device family.', contentHtml: '', sourcePage: 'ch8-exercise-8-19.html', sourcePageTitle: 'Exercise 8-19 | Identify the Unknown Element', sourceUrl: 'ch8-exercise-8-19.html#room-ch8-exercise-8-19-room-4', tags: ['identify', 'device', 'from', 'sign'], order: 3 },
    { id: 'ch8-exercise-8-19-room-5', anchorId: 'room-ch8-exercise-8-19-room-5', title: 'Room 5: Convert the Inductive Reactance into an Inductance', summary: 'Convert the positive reactive lane into an inductance value.', contentHtml: '', sourcePage: 'ch8-exercise-8-19.html', sourcePageTitle: 'Exercise 8-19 | Identify the Unknown Element', sourceUrl: 'ch8-exercise-8-19.html#room-ch8-exercise-8-19-room-5', tags: ['convert', 'inductive', 'reactance', 'into'], order: 4 },

    { id: 'ch8-design-exercise-8-20-room-1', anchorId: 'room-ch8-design-exercise-8-20-room-1', title: 'Room 1: Bring in the Low-Pass Cutoff Formula', summary: 'Start from the low-pass cutoff relation omega_c = 1 / RC.', contentHtml: '', sourcePage: 'ch8-design-exercise-8-20.html', sourcePageTitle: 'Design Exercise 8-20 | Pick R and C for a Target Cutoff', sourceUrl: 'ch8-design-exercise-8-20.html#room-ch8-design-exercise-8-20-room-1', tags: ['bring', 'pass', 'cutoff', 'formula'], order: 0 },
    { id: 'ch8-design-exercise-8-20-room-2', anchorId: 'room-ch8-design-exercise-8-20-room-2', title: 'Room 2: Rearrange into a Product Rule', summary: 'Rearrange the cutoff formula so the design becomes a fixed RC product.', contentHtml: '', sourcePage: 'ch8-design-exercise-8-20.html', sourcePageTitle: 'Design Exercise 8-20 | Pick R and C for a Target Cutoff', sourceUrl: 'ch8-design-exercise-8-20.html#room-ch8-design-exercise-8-20-room-2', tags: ['rearrange', 'into', 'product', 'rule'], order: 1 },
    { id: 'ch8-design-exercise-8-20-room-3', anchorId: 'room-ch8-design-exercise-8-20-room-3', title: 'Room 3: Choose One Practical Component First', summary: 'Pick one practical component value before solving for the other.', contentHtml: '', sourcePage: 'ch8-design-exercise-8-20.html', sourcePageTitle: 'Design Exercise 8-20 | Pick R and C for a Target Cutoff', sourceUrl: 'ch8-design-exercise-8-20.html#room-ch8-design-exercise-8-20-room-3', tags: ['choose', 'practical', 'component', 'first'], order: 2 },
    { id: 'ch8-design-exercise-8-20-room-4', anchorId: 'room-ch8-design-exercise-8-20-room-4', title: 'Room 4: Let the Product Pull Out the Other Component', summary: 'Use the fixed product to pull out the remaining component value.', contentHtml: '', sourcePage: 'ch8-design-exercise-8-20.html', sourcePageTitle: 'Design Exercise 8-20 | Pick R and C for a Target Cutoff', sourceUrl: 'ch8-design-exercise-8-20.html#room-ch8-design-exercise-8-20-room-4', tags: ['product', 'pull', 'other', 'component'], order: 3 },
    { id: 'ch8-design-exercise-8-20-room-5', anchorId: 'room-ch8-design-exercise-8-20-room-5', title: 'Room 5: State the Design Logic Clearly', summary: 'State one valid RC pair and the fixed-product design logic behind it.', contentHtml: '', sourcePage: 'ch8-design-exercise-8-20.html', sourcePageTitle: 'Design Exercise 8-20 | Pick R and C for a Target Cutoff', sourceUrl: 'ch8-design-exercise-8-20.html#room-ch8-design-exercise-8-20-room-5', tags: ['state', 'design', 'logic', 'clearly'], order: 4 },

    { id: 'ch8-exercise-8-21-room-1', anchorId: 'room-ch8-exercise-8-21-room-1', title: 'Room 1: Write the Output-to-Input Ratio for the Inductor', summary: 'Start from the new RL divider ratio with the output across the inductor.', contentHtml: '', sourcePage: 'ch8-exercise-8-21.html', sourcePageTitle: 'Exercise 8-21 | RL High-Pass Filter Ratio', sourceUrl: 'ch8-exercise-8-21.html#room-ch8-exercise-8-21-room-1', tags: ['write', 'output', 'input', 'ratio'], order: 0 },
    { id: 'ch8-exercise-8-21-room-2', anchorId: 'room-ch8-exercise-8-21-room-2', title: 'Room 2: Take the Magnitude of the Ratio', summary: 'Take the magnitude to see the high-pass behavior cleanly.', contentHtml: '', sourcePage: 'ch8-exercise-8-21.html', sourcePageTitle: 'Exercise 8-21 | RL High-Pass Filter Ratio', sourceUrl: 'ch8-exercise-8-21.html#room-ch8-exercise-8-21-room-2', tags: ['take', 'magnitude', 'ratio'], order: 1 },
    { id: 'ch8-exercise-8-21-room-3', anchorId: 'room-ch8-exercise-8-21-room-3', title: 'Room 3: Check the Low- and High-Frequency Limits', summary: 'Inspect the low- and high-frequency limits of the RL high-pass ratio.', contentHtml: '', sourcePage: 'ch8-exercise-8-21.html', sourcePageTitle: 'Exercise 8-21 | RL High-Pass Filter Ratio', sourceUrl: 'ch8-exercise-8-21.html#room-ch8-exercise-8-21-room-3', tags: ['check', 'high', 'frequency', 'limits'], order: 2 },
    { id: 'ch8-exercise-8-21-room-4', anchorId: 'room-ch8-exercise-8-21-room-4', title: 'Room 4: Read the Filter Type and the Cutoff Rule', summary: 'Name the filter and lock the cutoff rule omega_c = R / L.', contentHtml: '', sourcePage: 'ch8-exercise-8-21.html', sourcePageTitle: 'Exercise 8-21 | RL High-Pass Filter Ratio', sourceUrl: 'ch8-exercise-8-21.html#room-ch8-exercise-8-21-room-4', tags: ['read', 'filter', 'type', 'cutoff'], order: 3 },
    { id: 'ch8-exercise-8-21-room-5', anchorId: 'room-ch8-exercise-8-21-room-5', title: 'Room 5: Lock the Contrast with the RC Low-Pass Page', summary: 'Finish by contrasting the RL high-pass rule with the RC low-pass rule.', contentHtml: '', sourcePage: 'ch8-exercise-8-21.html', sourcePageTitle: 'Exercise 8-21 | RL High-Pass Filter Ratio', sourceUrl: 'ch8-exercise-8-21.html#room-ch8-exercise-8-21-room-5', tags: ['lock', 'contrast', 'with', 'pass'], order: 4 }
  ];

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function buildDefaultState() {
    return {
      selectedPalaceId: 'palace-ch8-last-five',
      palaces: [
        {
          id: 'palace-ch8-last-five',
          name: 'Chapter 8 Last Five',
          importedPages: [
            'ch8-exercise-8-17.html',
            'ch8-exercise-8-18.html',
            'ch8-exercise-8-19.html',
            'ch8-design-exercise-8-20.html',
            'ch8-exercise-8-21.html'
          ],
          importedRooms: clone(presetRooms),
          blocks: [
            {
              id: 'block-e817',
              x: 280, y: 220,
              title: 'Evaluate Zeq Without Tuning',
              sourceRoomIds: ['ch8-exercise-8-17-room-1', 'ch8-exercise-8-17-room-2', 'ch8-exercise-8-17-room-3', 'ch8-exercise-8-17-room-4', 'ch8-exercise-8-17-room-5'],
              mnemonicPeg: 'Split the real lane and imaginary lane, then recombine.',
              memoryCues: 'Use the parent Figure 8-25 equivalent formula, keep both lanes alive, and box the untuned complex result.',
              relationType: 'sequence',
              tags: ['zeq', 'evaluation', 'complex']
            },
            {
              id: 'block-e818',
              x: 660, y: 420,
              title: 'Cancel the Remaining Reactance',
              sourceRoomIds: ['ch8-exercise-8-18-room-1', 'ch8-exercise-8-18-room-2', 'ch8-exercise-8-18-room-3', 'ch8-exercise-8-18-room-4', 'ch8-exercise-8-18-room-5'],
              mnemonicPeg: 'Read the sign, then add the opposite reactance.',
              memoryCues: 'Reduce the figure, read the positive imaginary lane, and choose a capacitor that cancels it exactly.',
              relationType: 'cause',
              tags: ['reactance', 'cancellation', 'capacitor']
            },
            {
              id: 'block-e819',
              x: 1010, y: 200,
              title: 'Identify the Unknown Element',
              sourceRoomIds: ['ch8-exercise-8-19-room-1', 'ch8-exercise-8-19-room-2', 'ch8-exercise-8-19-room-3', 'ch8-exercise-8-19-room-4', 'ch8-exercise-8-19-room-5'],
              mnemonicPeg: 'Divide V by I, then trust the sign of the imaginary lane.',
              memoryCues: 'Convert waveforms to phasors, form Z = V/I, open it to rectangular form, then classify the device.',
              relationType: 'relation',
              tags: ['phasor', 'impedance', 'inductor']
            },
            {
              id: 'block-e820',
              x: 1410, y: 480,
              title: 'Design a Low-Pass Cutoff',
              sourceRoomIds: ['ch8-design-exercise-8-20-room-1', 'ch8-design-exercise-8-20-room-2', 'ch8-design-exercise-8-20-room-3', 'ch8-design-exercise-8-20-room-4', 'ch8-design-exercise-8-20-room-5'],
              mnemonicPeg: 'Target cutoff fixes the RC product.',
              memoryCues: 'Flatten omega_c = 1/RC into a product rule, choose one practical part, and pull out the other.',
              relationType: 'sequence',
              tags: ['design', 'low-pass', 'cutoff']
            },
            {
              id: 'block-e821',
              x: 1820, y: 220,
              title: 'Mirror It as RL High-Pass',
              sourceRoomIds: ['ch8-exercise-8-21-room-1', 'ch8-exercise-8-21-room-2', 'ch8-exercise-8-21-room-3', 'ch8-exercise-8-21-room-4', 'ch8-exercise-8-21-room-5'],
              mnemonicPeg: 'High frequencies pass, and the cutoff is R over L.',
              memoryCues: 'Write the new divider ratio, inspect the limits, and contrast the RL high-pass rule with the RC low-pass page.',
              relationType: 'contrast',
              tags: ['high-pass', 'rl', 'filter']
            }
          ],
          edges: [
            { id: 'edge-1', fromBlockId: 'block-e817', toBlockId: 'block-e818', label: 'sequence' },
            { id: 'edge-2', fromBlockId: 'block-e818', toBlockId: 'block-e819', label: 'relation' },
            { id: 'edge-3', fromBlockId: 'block-e819', toBlockId: 'block-e820', label: 'contrast' },
            { id: 'edge-4', fromBlockId: 'block-e820', toBlockId: 'block-e821', label: 'sequence' }
          ],
          sketches: [
            { points: [{ x: 520, y: 300 }, { x: 560, y: 280 }, { x: 620, y: 300 }, { x: 690, y: 360 }] }
          ],
          viewport: { zoom: 1 }
        }
      ]
    };
  }

  global.MemoryBuilderSeed = {
    presetRooms: presetRooms,
    buildDefaultState: buildDefaultState
  };
})(window);