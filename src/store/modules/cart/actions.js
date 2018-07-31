const actions = {
  addToCart({ commit, dispatch }, product) {
    // Update store
    commit("appendProduct", product);
    // Save changed data
    dispatch("syncCart");
  },

  increaseOrder({ dispatch, commit }, product) {
    commit("increaseProductNumber", product);
    dispatch("syncCart");
  },

  decreaseOrder({ dispatch, commit }, product) {
    commit("decreaseProductNumber", product);
    dispatch("syncCart");
  },

  removeOrder({ dispatch, commit }, product) {
    commit("removeSelectedProduct", product);
    dispatch("syncCart");
  },

  clearCart({ commit, dispatch }) {
    commit("updateSelectedProducts", null);
    dispatch("syncCart");
  },

  syncCart({ state }) {
    /* Sync cart with local storage  */
    localStorage.setItem(
      "selectedProducts",
      JSON.stringify(state.selectedProducts)
    );
  },

  loadCart({ commit }) {
    /* Load cart from local storage */
    if (localStorage.getItem("selectedProducts"))
      commit(
        "updateSelectedProducts",
        JSON.parse(localStorage.getItem("selectedProducts"))
      );
  }
};

export default actions;
