const actions = {
  addToCart({ commit, dispatch }, product) {
    // Update store
    commit("appendProduct", product);
    // Save changed data
    dispatch("syncCart");
  },

  syncCart({ state, commit }) {
    /* Sync cart with local storage */
    if (state.selectedProducts) {
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
    } else {
      commit(
        "updateSelectedProducts",
        JSON.parse(localStorage.getItem("selectedProducts"))
      );
    }
  }
};

export default actions;
