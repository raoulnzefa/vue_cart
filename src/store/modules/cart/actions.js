const actions = {
  addOrder ({ commit, dispatch }, product) {
    // Update store
    commit('appendSelectedProduct', product)
    // Save changed data
    dispatch('syncCart')
  },

  setOrderValue ({ commit, dispatch }, { product, value }) {
    commit('updateProductNumber', { product: product, value: value })
    dispatch('syncCart')
  },

  increaseOrderValue ({ dispatch, commit }, product) {
    commit('increaseProductNumber', product)
    dispatch('syncCart')
  },

  decreaseOrderValue ({ dispatch, commit }, product) {
    commit('decreaseProductNumber', product)
    dispatch('syncCart')
  },

  removeFromCart ({ dispatch, commit }, product) {
    commit('removeSelectedProduct', product)
    dispatch('syncCart')
  },

  clearCart ({ commit, dispatch }) {
    commit('updateSelectedProducts', null)
    dispatch('syncCart')
  },

  syncCart ({ state }) {
    /* Update local storage  */
    localStorage.setItem(
      'selectedProducts',
      JSON.stringify(state.selectedProducts)
    )
  },

  loadCart ({ commit }) {
    /* Load cart from local storage */
    if (localStorage.getItem('selectedProducts')) {
      commit(
        'updateSelectedProducts',
        JSON.parse(localStorage.getItem('selectedProducts'))
      )
    }
  }
}

export default actions
