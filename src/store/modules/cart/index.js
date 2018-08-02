import mutations from "./mutations";
import actions from "./actions";

const state = {
  selectedProducts: null
};

const getters = {
  selectedProducts: state => state.selectedProducts,
  // Count of selected products
  selectedProductsCount: state => {
    if (Array.isArray(state.selectedProducts)) {
      return state.selectedProducts.length;
    } else {
      return 0;
    }
  },
  // Total price of selected products
  selectedProductsPrice: state => {
    if (Array.isArray(state.selectedProducts)) {
      return state.selectedProducts.reduce((result, item) => {
        return (result += item.number * item.price);
      }, 0);
    } else {
      return 0;
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
