(function (global) {
  function buildDefaultState() {
    return {
      selectedPalaceId: 'palace-ch23-24-starter',
      palaces: [
        {
          id: 'palace-ch23-24-starter',
          name: 'Chapter 23-24 Starter',
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
