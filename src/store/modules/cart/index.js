import mutations from "./mutations";
import actions from "./actions";

const state = {
  selectedProducts: null
};

const getters = {
  selectedProducts: state => state.selectedProducts
};

export default {
  state,
  getters,
  mutations,
  actions
};
