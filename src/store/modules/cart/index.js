import mutations from "./mutations";
import actions from "./actions";

const state = {
  selectedProducts: null
};

const getters = {
  selectedProducts: state => state.selectedProducts,
  selectedProductCount: state => {
    if (state.selectedProducts && Array.isArray(state.selectedProducts)) {
      return state.selectedProducts.length;
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
