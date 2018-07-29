import Vuex from "vuex";
import Vue from "vue";
// modules
import products from "./modules/products";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products
  }
});
