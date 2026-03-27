(function (global) {
  function buildDefaultState() {
    return {
      selectedPalaceId: 'palace-pf-lab4-empty',
      palaces: [
        {
          id: 'palace-pf-lab4-empty',
          name: 'PF Lab 4 Palace',
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
