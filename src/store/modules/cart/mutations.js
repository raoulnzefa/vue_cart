const mutations = {
  updateSelectedProducts(state, value) {
    state.selectedProducts = value;
  },

  /* Append selected product to the shopping cart */
  appendProduct(state, product) {
    // Create copy of selected product and add specific fields
    const cartItem = Object.assign({}, product);
    // Selection date
    cartItem.date = new Date();
    // Default number of selected items
    cartItem.number = 1;

    if (state.selectedProducts && Array.isArray(state.selectedProducts)) {
      const selectedProducts = state.selectedProducts;
      // Searching for the similar item to selected item
      const findProduct = selectedProducts.find(
        item => item.id === cartItem.id
      );

      // Check if item in the list
      if (findProduct) {
        const index = selectedProducts.indexOf(findProduct);
        state.selectedProducts[index].number++;
      } else {
        state.selectedProducts.push(cartItem);
      }
    } else {
      state.selectedProducts = [cartItem];
    }
  },

  updateProductNumber(state, { product, value }) {
    console.log(product + "," + value);
    const index = state.selectedProducts.indexOf(product);
    state.selectedProducts[index].number = value;
  },

  increaseProductNumber(state, product) {
    const index = state.selectedProducts.indexOf(product);
    state.selectedProducts[index].number++;
  },

  decreaseProductNumber(state, product) {
    const index = state.selectedProducts.indexOf(product);

    if (state.selectedProducts[index].number > 1) {
      state.selectedProducts[index].number--;
    }
  },

  removeSelectedProduct(state, product) {
    const index = state.selectedProducts.indexOf(product);
    state.selectedProducts.splice(index, 1);
  }
};

export default mutations;
