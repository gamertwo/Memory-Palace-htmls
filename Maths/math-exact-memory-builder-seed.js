(function (global) {
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
