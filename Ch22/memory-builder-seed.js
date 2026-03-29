(function (global) {
  function buildDefaultState() {
    return {
      selectedPalaceId: 'palace-ch22-starter',
      palaces: [
        {
          id: 'palace-ch22-starter',
          name: 'Chapter 22 Starter',
          importedPages: [],
          importedRooms: [],
          blocks: [],
          edges: [],
          sketches: [],
          images: [],
          viewport: { zoom: 1 }
        }
      ]
    };
  }

  global.MemoryBuilderSeed = {
    buildDefaultState: buildDefaultState
  };
})(window);
