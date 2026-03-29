(function (global) {
  function buildDefaultState() {
    return {
      selectedPalaceId: 'palace-ch21-starter',
      palaces: [
        {
          id: 'palace-ch21-starter',
          name: 'Chapter 21 Starter',
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
