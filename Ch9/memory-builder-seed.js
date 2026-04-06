(function (global) {
  function room(id, title, summary, page, pageTitle, order) {
    return {
      id: id,
      anchorId: 'room-' + id,
      title: title,
      summary: summary,
      contentHtml: '',
      sourcePage: page,
      sourcePageTitle: pageTitle,
      sourceUrl: page + '#room-' + id,
      tags: title.toLowerCase().replace(/^room \d+:\s*/i, '').split(/[^a-z0-9]+/i).filter(function (tag) { return tag.length > 3; }).slice(0, 4),
      order: order
    };
  }

  var presetRooms = [
    room('ch9-example-9-1-room-1', 'Room 1: The Flat Ground Turns The Signal On', 'Unit step becomes a flat training ground.', 'ch9-example-9-1.html', 'Example 9-1 | Unit Step Transform', 0),
    room('ch9-example-9-1-room-2', 'Room 2: The Curved Blade Sweeps Across The Road', 'Integrate the exponential across time.', 'ch9-example-9-1.html', 'Example 9-1 | Unit Step Transform', 1),
    room('ch9-example-9-1-room-3', 'Room 3: The Infinity Gate Kills The Orb', 'The upper limit fades to zero.', 'ch9-example-9-1.html', 'Example 9-1 | Unit Step Transform', 2),
    room('ch9-example-9-1-room-4', 'Room 4: A White Pillar Freezes Above The Vortex', 'Lock in the image 1 over s.', 'ch9-example-9-1.html', 'Example 9-1 | Unit Step Transform', 3),

    room('ch9-exercise-9-1-room-1', 'Room 1: Start From The Old 1 Over s Picture', 'Reuse the unit-step base image.', 'ch9-exercise-9-1.html', 'Exercise 9-1 | Transform Of -7u(t)', 0),
    room('ch9-exercise-9-1-room-2', 'Room 2: Seven Black Chains Fall From Above', 'Seven chains store the magnitude.', 'ch9-exercise-9-1.html', 'Exercise 9-1 | Transform Of -7u(t)', 1),
    room('ch9-exercise-9-1-room-3', 'Room 3: The Chains Drag The Pillar Downward', 'The downward pull stores the negative sign.', 'ch9-exercise-9-1.html', 'Exercise 9-1 | Transform Of -7u(t)', 2),
    room('ch9-exercise-9-1-room-4', 'Room 4: The Vortex Stays The Same', 'Only the top changes, so the answer is -7 over s.', 'ch9-exercise-9-1.html', 'Exercise 9-1 | Transform Of -7u(t)', 3),

    room('ch9-example-9-2-room-1', 'Room 1: A Gold Ring Locks Onto The Orb', 'Alpha becomes an extra decay ring.', 'ch9-example-9-2.html', 'Example 9-2 | Transform Of e^(-alpha t)u(t)', 0),
    room('ch9-example-9-2-room-2', 'Room 2: The Ring Fuses With The Spiral Vortex', 'The denominator becomes s plus alpha.', 'ch9-example-9-2.html', 'Example 9-2 | Transform Of e^(-alpha t)u(t)', 1),
    room('ch9-example-9-2-room-3', 'Room 3: Integration Compresses The Corridor Again', 'Same integral move, upgraded denominator.', 'ch9-example-9-2.html', 'Example 9-2 | Transform Of e^(-alpha t)u(t)', 2),
    room('ch9-example-9-2-room-4', 'Room 4: The White Pillar Lands On A Collared Vortex', 'Lock in the image 1 over s plus alpha.', 'ch9-example-9-2.html', 'Example 9-2 | Transform Of e^(-alpha t)u(t)', 3),

    room('ch9-exercise-9-2-room-1', 'Room 1: The Old Collared Vortex Returns', 'Set alpha to 5.', 'ch9-exercise-9-2.html', 'Exercise 9-2 | Transform Of 8e^(-5t)u(t)', 0),
    room('ch9-exercise-9-2-room-2', 'Room 2: Eight Bright Bands Wrap Around The Pillar', 'Eight bands store the multiplier.', 'ch9-exercise-9-2.html', 'Exercise 9-2 | Transform Of 8e^(-5t)u(t)', 1),
    room('ch9-exercise-9-2-room-3', 'Room 3: Nothing Else In The Fraction Changes', 'Same transform family, updated parameter.', 'ch9-exercise-9-2.html', 'Exercise 9-2 | Transform Of 8e^(-5t)u(t)', 2),
    room('ch9-exercise-9-2-room-4', 'Room 4: The Final Image Locks As 8 Over s Plus 5', 'The answer freezes as 8 over s plus 5.', 'ch9-exercise-9-2.html', 'Exercise 9-2 | Transform Of 8e^(-5t)u(t)', 3),

    room('ch9-example-9-3-room-1', 'Room 1: Only The Gates Around Zero Matter', 'Zoom into the tiny interval around zero.', 'ch9-example-9-3.html', 'Example 9-3 | Transform Of delta(t)', 0),
    room('ch9-example-9-3-room-2', 'Room 2: A Razor-Thin Spear Spike Appears At The Marker', 'Impulse acts at one instant only.', 'ch9-example-9-3.html', 'Example 9-3 | Transform Of delta(t)', 1),
    room('ch9-example-9-3-room-3', 'Room 3: The Orb Gets Sampled Before It Can Decay', 'Sample the exponential at zero.', 'ch9-example-9-3.html', 'Example 9-3 | Transform Of delta(t)', 2),
    room('ch9-example-9-3-room-4', 'Room 4: One Bright Token Is Left Behind', 'The impulse transform becomes 1.', 'ch9-example-9-3.html', 'Example 9-3 | Transform Of delta(t)', 3),

    room('ch9-exercise-9-3-room-1', 'Room 1: Return To The Same Zero Checkpoint', 'Reuse the impulse scene.', 'ch9-exercise-9-3.html', 'Exercise 9-3 | Transform Of 0.5delta(t)', 0),
    room('ch9-exercise-9-3-room-2', 'Room 2: The Spear Strike Is Only Half Strength', 'Scale the impulse down by one half.', 'ch9-exercise-9-3.html', 'Exercise 9-3 | Transform Of 0.5delta(t)', 1),
    room('ch9-exercise-9-3-room-3', 'Room 3: The Full Token Shrinks Into A Half Coin', 'The result becomes a half-sized token.', 'ch9-exercise-9-3.html', 'Exercise 9-3 | Transform Of 0.5delta(t)', 2),
    room('ch9-exercise-9-3-room-4', 'Room 4: The Opening Route Ends With One Small Coin', 'Finish the opening Section 9-1 run.', 'ch9-exercise-9-3.html', 'Exercise 9-3 | Transform Of 0.5delta(t)', 3),

    room('ch9-pole-zero-diagrams-room-1', 'Room 1: Urahara Opens The Axis Hall', 'Map the real axis and imaginary axis before plotting anything.', 'ch9-pole-zero-diagrams.html', 'Pole-Zero Diagrams | Chapter 9 Memory Palace', 0),
    room('ch9-pole-zero-diagrams-room-2', 'Room 2: Circle Gates Mark The Zeros', 'Numerator factors become circle gates.', 'ch9-pole-zero-diagrams.html', 'Pole-Zero Diagrams | Chapter 9 Memory Palace', 1),
    room('ch9-pole-zero-diagrams-room-3', 'Room 3: Crossed Spears Mark The Poles', 'Denominator factors become pole spears.', 'ch9-pole-zero-diagrams.html', 'Pole-Zero Diagrams | Chapter 9 Memory Palace', 2),
    room('ch9-pole-zero-diagrams-room-4', 'Room 4: Twin Arches Split Into Conjugate Pairs', 'Quadratics create symmetric pairs.', 'ch9-pole-zero-diagrams.html', 'Pole-Zero Diagrams | Chapter 9 Memory Palace', 3),

    room('ch9-example-9-9-room-1', 'Room 1: Ichigo Splits The Waveform', 'Use linearity and clean the transform first.', 'ch9-example-9-9.html', 'Example 9-9 | Find Poles and Zeros', 0),
    room('ch9-example-9-9-room-2', 'Room 2: The Numerator Becomes A Circle Gate', 'Read the zero from the numerator.', 'ch9-example-9-9.html', 'Example 9-9 | Find Poles and Zeros', 1),
    room('ch9-example-9-9-room-3', 'Room 3: Crossed Spears Appear At The Denominator Roots', 'Find one real pole and one complex pair.', 'ch9-example-9-9.html', 'Example 9-9 | Find Poles and Zeros', 2),
    room('ch9-example-9-9-room-4', 'Room 4: Ichigo Pins The Final Diagram To The Wall', 'Lock the final plot before moving on.', 'ch9-example-9-9.html', 'Example 9-9 | Find Poles and Zeros', 3),

    room('ch9-exercise-9-15-room-1', 'Room 1: Rukia Freezes The Transform Into One Fraction', 'Separate numerator and denominator clearly.', 'ch9-exercise-9-15.html', 'Exercise 9-15 | Pole-Zero Plot Practice', 0),
    room('ch9-exercise-9-15-room-2', 'Room 2: A Circle Gate Forms At s=1', 'The numerator zero sits at a positive real value.', 'ch9-exercise-9-15.html', 'Exercise 9-15 | Pole-Zero Plot Practice', 1),
    room('ch9-exercise-9-15-room-3', 'Room 3: Two Spears Lock The Denominator', 'Poles land at the origin and at -1.', 'ch9-exercise-9-15.html', 'Exercise 9-15 | Pole-Zero Plot Practice', 2),
    room('ch9-exercise-9-15-room-4', 'Room 4: Rukia Shows The Clean Contrast', 'One circle and two spears finish the picture.', 'ch9-exercise-9-15.html', 'Exercise 9-15 | Pole-Zero Plot Practice', 3),

    room('ch9-example-9-10-room-1', 'Room 1: Renji Hammers A Spear Into The Origin', 'A constant term gives the origin pole.', 'ch9-example-9-10.html', 'Example 9-10 | Pole-Zero Plot With Cosine Pair', 0),
    room('ch9-example-9-10-room-2', 'Room 2: The Cosine Opens A Twin Arch', 'The cosine term creates two imaginary-axis poles.', 'ch9-example-9-10.html', 'Example 9-10 | Pole-Zero Plot With Cosine Pair', 1),
    room('ch9-example-9-10-room-3', 'Room 3: Renji Plants The Final Three Spears', 'Memorize the center, top, and bottom poles.', 'ch9-example-9-10.html', 'Example 9-10 | Pole-Zero Plot With Cosine Pair', 2),
    room('ch9-example-9-10-room-4', 'Room 4: Renji Hands The Route To Byakuya', 'Use this as the bridge to the final mixed-layout page.', 'ch9-example-9-10.html', 'Example 9-10 | Pole-Zero Plot With Cosine Pair', 3),

    room('ch9-exercise-9-16-room-1', 'Room 1: Byakuya Slides The Whole Scene Left', 'Exponential decay shifts the geometry left.', 'ch9-exercise-9-16.html', 'Exercise 9-16 | Pole-Zero Plot With Mixed Pole Layout', 0),
    room('ch9-exercise-9-16-room-2', 'Room 2: A Circle Gate Forms On The Left Axis', 'The numerator zero now sits on the negative real side.', 'ch9-exercise-9-16.html', 'Exercise 9-16 | Pole-Zero Plot With Mixed Pole Layout', 1),
    room('ch9-exercise-9-16-room-3', 'Room 3: Senbonzakura Places The Imaginary Pair', 'The conjugate pair is shifted left as a unit.', 'ch9-exercise-9-16.html', 'Exercise 9-16 | Pole-Zero Plot With Mixed Pole Layout', 2),
    room('ch9-exercise-9-16-room-4', 'Room 4: Byakuya Locks The Last Diagram', 'Finish the chapter with one clean left-shifted plot.', 'ch9-exercise-9-16.html', 'Exercise 9-16 | Pole-Zero Plot With Mixed Pole Layout', 3)
  ];

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function block(id, roomId, x, y, peg, cues, tags, sequenceIndex) {
    var found = presetRooms.find(function (entry) { return entry.id === roomId; });
    return {
      id: id,
      x: x,
      y: y,
      width: 280,
      height: 170,
      title: found ? found.title : id,
      sourceRoomIds: [roomId],
      mnemonicPeg: peg,
      memoryCues: cues,
      relationType: 'sequence',
      tags: tags,
      icon: 'token',
      accentVariant: 'cyan',
      status: 'revised',
      sceneType: 'room',
      objectShape: 'arch',
      emotionCue: 'focused',
      motionCue: 'forward',
      sequenceIndex: sequenceIndex
    };
  }

  function buildDefaultState() {
    return {
      selectedPalaceId: 'palace-ch9-signal-route',
      palaces: [
        {
          id: 'palace-ch9-signal-route',
          name: 'Chapter 9 Signal Route',
          importedPages: [
            'ch9-example-9-1.html',
            'ch9-exercise-9-1.html',
            'ch9-example-9-2.html',
            'ch9-exercise-9-2.html',
            'ch9-example-9-3.html',
            'ch9-exercise-9-3.html',
            'ch9-pole-zero-diagrams.html',
            'ch9-example-9-9.html',
            'ch9-exercise-9-15.html',
            'ch9-example-9-10.html',
            'ch9-exercise-9-16.html'
          ],
          importedRooms: clone(presetRooms),
          blocks: [
            block('b1', 'ch9-example-9-1-room-1', 150, 180, 'Flat step ground first.', 'The signal turns on and stays flat.', ['step', 'ground'], 1),
            block('b2', 'ch9-example-9-1-room-2', 470, 180, 'Curved blade means integrate.', 'The orb is swept across time.', ['integral', 'orb'], 2),
            block('b3', 'ch9-example-9-1-room-3', 790, 180, 'Infinity kills the orb.', 'Upper limit fades to zero.', ['infinity', 'decay'], 3),
            block('b4', 'ch9-example-9-1-room-4', 1110, 180, 'Pillar over vortex.', 'Lock in 1 over s.', ['pillar', 'vortex'], 4),

            block('b5', 'ch9-exercise-9-1-room-1', 1110, 430, 'Reuse 1 over s.', 'Start from the old base image.', ['linearity', 'base'], 5),
            block('b6', 'ch9-exercise-9-1-room-2', 790, 430, 'Seven chains.', 'Magnitude 7 hooks onto the pillar.', ['seven', 'chains'], 6),
            block('b7', 'ch9-exercise-9-1-room-3', 470, 430, 'Drag downward.', 'The minus sign pulls the image down.', ['negative', 'drag'], 7),
            block('b8', 'ch9-exercise-9-1-room-4', 150, 430, 'Same vortex below.', 'The answer freezes as -7 over s.', ['vortex', 'result'], 8),

            block('b9', 'ch9-example-9-2-room-1', 150, 680, 'Gold alpha ring.', 'Extra decay attaches to the orb.', ['alpha', 'ring'], 9),
            block('b10', 'ch9-example-9-2-room-2', 470, 680, 'Fuse ring and vortex.', 'The denominator becomes s plus alpha.', ['fusion', 'denominator'], 10),
            block('b11', 'ch9-example-9-2-room-3', 790, 680, 'Same blade, new base.', 'Integration repeats with the upgraded denominator.', ['integral', 'corridor'], 11),
            block('b12', 'ch9-example-9-2-room-4', 1110, 680, 'Collared vortex result.', 'Lock in 1 over s plus alpha.', ['collar', 'final'], 12),

            block('b13', 'ch9-exercise-9-2-room-1', 1110, 930, 'Set alpha to 5.', 'The collar now has five marks.', ['five', 'alpha'], 13),
            block('b14', 'ch9-exercise-9-2-room-2', 790, 930, 'Eight glowing bands.', 'The top multiplier wraps the pillar.', ['eight', 'bands'], 14),
            block('b15', 'ch9-exercise-9-2-room-3', 470, 930, 'Same transform family.', 'Only the parameter and scale change.', ['practice', 'family'], 15),
            block('b16', 'ch9-exercise-9-2-room-4', 150, 930, 'Eight over s plus 5.', 'Freeze the final image.', ['result', 'fraction'], 16),

            block('b17', 'ch9-example-9-3-room-1', 150, 1180, 'Zoom into zero.', 'Only the gates around zero matter.', ['zero', 'checkpoint'], 17),
            block('b18', 'ch9-example-9-3-room-2', 470, 1180, 'Needle spike impulse.', 'All action happens at one instant.', ['impulse', 'spike'], 18),
            block('b19', 'ch9-example-9-3-room-3', 790, 1180, 'Sample before decay.', 'The exponential is read at t equals zero.', ['sampling', 'orb'], 19),
            block('b20', 'ch9-example-9-3-room-4', 1110, 1180, 'One bright token.', 'The answer becomes 1.', ['token', 'unit'], 20),

            block('b21', 'ch9-exercise-9-3-room-1', 1110, 1430, 'Same zero checkpoint.', 'Reuse the impulse route.', ['repeat', 'checkpoint'], 21),
            block('b22', 'ch9-exercise-9-3-room-2', 790, 1430, 'Half-strength strike.', 'Scale the spike down.', ['half', 'scale'], 22),
            block('b23', 'ch9-exercise-9-3-room-3', 470, 1430, 'Half coin remains.', 'The constant result becomes 0.5.', ['coin', 'result'], 23),
            block('b24', 'ch9-exercise-9-3-room-4', 150, 1430, 'Opening route complete.', 'Section 9-1 ends with the half coin.', ['opening', 'finish'], 24),

            block('b25', 'ch9-pole-zero-diagrams-room-1', 150, 1680, 'Axis hall first.', 'Urahara opens the map and fixes the axes.', ['foundation', 'axes'], 25),
            block('b26', 'ch9-pole-zero-diagrams-room-2', 470, 1680, 'Circle equals zero.', 'The numerator becomes a circle gate.', ['zero', 'shape'], 26),
            block('b27', 'ch9-pole-zero-diagrams-room-3', 790, 1680, 'Crossed spear equals pole.', 'The denominator becomes a spear point.', ['pole', 'shape'], 27),
            block('b28', 'ch9-pole-zero-diagrams-room-4', 1110, 1680, 'Twin arch means pair.', 'Quadratic terms split into symmetric points.', ['pair', 'quadratic'], 28),

            block('b29', 'ch9-example-9-9-room-1', 1110, 1930, 'Split before plotting.', 'Ichigo cleans the waveform first.', ['ichigo', 'linearity'], 29),
            block('b30', 'ch9-example-9-9-room-2', 790, 1930, 'Numerator asks for zero.', 'The origin circle appears.', ['ichigo', 'zero'], 30),
            block('b31', 'ch9-example-9-9-room-3', 470, 1930, 'Denominator asks for poles.', 'One real pole and one pair appear.', ['ichigo', 'poles'], 31),
            block('b32', 'ch9-example-9-9-room-4', 150, 1930, 'Pin the diagram.', 'Lock the final image before moving on.', ['ichigo', 'plot'], 32),

            block('b33', 'ch9-exercise-9-15-room-1', 150, 2180, 'Freeze the fraction.', 'Rukia separates the roles cleanly.', ['rukia', 'cleanup'], 33),
            block('b34', 'ch9-exercise-9-15-room-2', 470, 2180, 'Positive real circle.', 'The zero sits at plus 1.', ['rukia', 'zero'], 34),
            block('b35', 'ch9-exercise-9-15-room-3', 790, 2180, 'Origin and left spear.', 'Two poles lock the denominator.', ['rukia', 'poles'], 35),
            block('b36', 'ch9-exercise-9-15-room-4', 1110, 2180, 'One circle, two spears.', 'This page exists to sharpen contrast.', ['rukia', 'contrast'], 36),

            block('b37', 'ch9-example-9-10-room-1', 1110, 2430, 'Center spear first.', 'Renji marks the origin pole.', ['renji', 'origin'], 37),
            block('b38', 'ch9-example-9-10-room-2', 790, 2430, 'Cosine makes a pair.', 'Twin arch opens at plus and minus j500.', ['renji', 'pair'], 38),
            block('b39', 'ch9-example-9-10-room-3', 470, 2430, 'Three-spear frame.', 'Center, top, and bottom lock the example.', ['renji', 'diagram'], 39),
            block('b40', 'ch9-example-9-10-room-4', 150, 2430, 'Bridge to the final court.', 'Renji hands the route to Byakuya.', ['renji', 'bridge'], 40),

            block('b41', 'ch9-exercise-9-16-room-1', 150, 2680, 'Shift everything left.', 'Byakuya moves the whole geometry first.', ['byakuya', 'shift'], 41),
            block('b42', 'ch9-exercise-9-16-room-2', 470, 2680, 'Left-side circle.', 'The zero now sits on the negative real axis.', ['byakuya', 'zero'], 42),
            block('b43', 'ch9-exercise-9-16-room-3', 790, 2680, 'Shifted pair together.', 'The imaginary pair slides left as a unit.', ['byakuya', 'pair'], 43),
            block('b44', 'ch9-exercise-9-16-room-4', 1110, 2680, 'Final lock.', 'The chapter ends with one exact mixed plot.', ['byakuya', 'final'], 44)
          ],
          edges: [
            { id: 'e1', fromBlockId: 'b1', toBlockId: 'b2', label: 'next room' },
            { id: 'e2', fromBlockId: 'b2', toBlockId: 'b3', label: 'next room' },
            { id: 'e3', fromBlockId: 'b3', toBlockId: 'b4', label: 'next room' },
            { id: 'e4', fromBlockId: 'b4', toBlockId: 'b5', label: 'practice' },
            { id: 'e5', fromBlockId: 'b5', toBlockId: 'b6', label: 'next room' },
            { id: 'e6', fromBlockId: 'b6', toBlockId: 'b7', label: 'next room' },
            { id: 'e7', fromBlockId: 'b7', toBlockId: 'b8', label: 'next room' },
            { id: 'e8', fromBlockId: 'b8', toBlockId: 'b9', label: 'decay' },
            { id: 'e9', fromBlockId: 'b9', toBlockId: 'b10', label: 'next room' },
            { id: 'e10', fromBlockId: 'b10', toBlockId: 'b11', label: 'next room' },
            { id: 'e11', fromBlockId: 'b11', toBlockId: 'b12', label: 'next room' },
            { id: 'e12', fromBlockId: 'b12', toBlockId: 'b13', label: 'practice' },
            { id: 'e13', fromBlockId: 'b13', toBlockId: 'b14', label: 'next room' },
            { id: 'e14', fromBlockId: 'b14', toBlockId: 'b15', label: 'next room' },
            { id: 'e15', fromBlockId: 'b15', toBlockId: 'b16', label: 'next room' },
            { id: 'e16', fromBlockId: 'b16', toBlockId: 'b17', label: 'impulse' },
            { id: 'e17', fromBlockId: 'b17', toBlockId: 'b18', label: 'next room' },
            { id: 'e18', fromBlockId: 'b18', toBlockId: 'b19', label: 'next room' },
            { id: 'e19', fromBlockId: 'b19', toBlockId: 'b20', label: 'next room' },
            { id: 'e20', fromBlockId: 'b20', toBlockId: 'b21', label: 'practice' },
            { id: 'e21', fromBlockId: 'b21', toBlockId: 'b22', label: 'next room' },
            { id: 'e22', fromBlockId: 'b22', toBlockId: 'b23', label: 'next room' },
            { id: 'e23', fromBlockId: 'b23', toBlockId: 'b24', label: 'next room' },
            { id: 'e24', fromBlockId: 'b24', toBlockId: 'b25', label: 'pole-zero' },
            { id: 'e25', fromBlockId: 'b25', toBlockId: 'b26', label: 'next room' },
            { id: 'e26', fromBlockId: 'b26', toBlockId: 'b27', label: 'next room' },
            { id: 'e27', fromBlockId: 'b27', toBlockId: 'b28', label: 'next room' },
            { id: 'e28', fromBlockId: 'b28', toBlockId: 'b29', label: 'Ichigo' },
            { id: 'e29', fromBlockId: 'b29', toBlockId: 'b30', label: 'next room' },
            { id: 'e30', fromBlockId: 'b30', toBlockId: 'b31', label: 'next room' },
            { id: 'e31', fromBlockId: 'b31', toBlockId: 'b32', label: 'next room' },
            { id: 'e32', fromBlockId: 'b32', toBlockId: 'b33', label: 'Rukia' },
            { id: 'e33', fromBlockId: 'b33', toBlockId: 'b34', label: 'next room' },
            { id: 'e34', fromBlockId: 'b34', toBlockId: 'b35', label: 'next room' },
            { id: 'e35', fromBlockId: 'b35', toBlockId: 'b36', label: 'next room' },
            { id: 'e36', fromBlockId: 'b36', toBlockId: 'b37', label: 'Renji' },
            { id: 'e37', fromBlockId: 'b37', toBlockId: 'b38', label: 'next room' },
            { id: 'e38', fromBlockId: 'b38', toBlockId: 'b39', label: 'next room' },
            { id: 'e39', fromBlockId: 'b39', toBlockId: 'b40', label: 'next room' },
            { id: 'e40', fromBlockId: 'b40', toBlockId: 'b41', label: 'Byakuya' },
            { id: 'e41', fromBlockId: 'b41', toBlockId: 'b42', label: 'next room' },
            { id: 'e42', fromBlockId: 'b42', toBlockId: 'b43', label: 'next room' },
            { id: 'e43', fromBlockId: 'b43', toBlockId: 'b44', label: 'next room' }
          ],
          sketches: [
            { points: [{ x: 235, y: 265 }, { x: 585, y: 265 }, { x: 905, y: 265 }, { x: 1225, y: 265 }], color: '#f5c245', width: 4 },
            { points: [{ x: 1225, y: 515 }, { x: 920, y: 515 }, { x: 600, y: 515 }, { x: 280, y: 515 }], color: '#5b9cf6', width: 4 },
            { points: [{ x: 280, y: 765 }, { x: 600, y: 765 }, { x: 920, y: 765 }, { x: 1225, y: 765 }], color: '#4ade80', width: 4 },
            { points: [{ x: 1225, y: 1015 }, { x: 920, y: 1015 }, { x: 600, y: 1015 }, { x: 280, y: 1015 }], color: '#c084fc', width: 4 },
            { points: [{ x: 280, y: 1265 }, { x: 600, y: 1265 }, { x: 920, y: 1265 }, { x: 1225, y: 1265 }], color: '#fb7185', width: 4 },
            { points: [{ x: 1225, y: 1515 }, { x: 920, y: 1515 }, { x: 600, y: 1515 }, { x: 280, y: 1515 }], color: '#f59e0b', width: 4 },
            { points: [{ x: 280, y: 1765 }, { x: 600, y: 1765 }, { x: 920, y: 1765 }, { x: 1225, y: 1765 }], color: '#38bdf8', width: 4 },
            { points: [{ x: 1225, y: 2015 }, { x: 920, y: 2015 }, { x: 600, y: 2015 }, { x: 280, y: 2015 }], color: '#34d399', width: 4 },
            { points: [{ x: 280, y: 2265 }, { x: 600, y: 2265 }, { x: 920, y: 2265 }, { x: 1225, y: 2265 }], color: '#a78bfa', width: 4 },
            { points: [{ x: 1225, y: 2515 }, { x: 920, y: 2515 }, { x: 600, y: 2515 }, { x: 280, y: 2515 }], color: '#f472b6', width: 4 },
            { points: [{ x: 280, y: 2765 }, { x: 600, y: 2765 }, { x: 920, y: 2765 }, { x: 1225, y: 2765 }], color: '#fb7185', width: 4 }
          ],
          viewport: { zoom: 0.62 }
        }
      ]
    };
  }

  global.MemoryBuilderSeed = {
    presetRooms: presetRooms,
    buildDefaultState: buildDefaultState
  };
})(window);
