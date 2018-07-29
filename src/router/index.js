import Vue from "vue";
import Router from "vue-router";
import PageProducts from "../components/pages/PageProducts";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      redirect: { name: "products" }
    },
    {
      path: "/products",
      name: "products",
      component: PageProducts
    }
  ]
});
