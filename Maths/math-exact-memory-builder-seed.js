(function (global) {
  function buildDefaultState() {
    return {
      selectedPalaceId: 'palace-math-exact',
      palaces: [
        {
          id: 'palace-math-exact',
          name: 'Math Exercise 3.13 Odd Palace',
          importedPages: [
            'math-ex313-q1-solvable-p.html',
            'math-ex313-q3-solvable-p.html',
            'math-ex313-q5-clairaut.html'
          ],
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
