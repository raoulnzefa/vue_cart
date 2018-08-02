import mutations from "./mutations";
import actions from "./actions";

const state = {
  selectedProducts: null
};

const getters = {
  selectedProducts: state => state.selectedProducts,
  selectedProductCount: state => {
    // Count of selected products
    if (state.selectedProducts && Array.isArray(state.selectedProducts)) {
      return state.selectedProducts.length;
    }
  },
  cartTotalPrice: state =>
    // Total price of selected products
    state.selectedProducts.reduce((result, item) => {
      return (result += item.number * item.price);
    }, 0)
};

export default {
  state,
  getters,
  mutations,
  actions
};
