<template>
  <div id="pageProducts" class="page-products">
    <header>
      <!-- TODO: Refactor -->
      <router-link 
        class="page-product__cart-button"
        :to="{name:'cart'}"
        tag="button"
      >
        Cart 
        <span>{{ selectedProductCount }}</span>
      </router-link>
    </header>
    <h2>Products</h2>
    <product-list :items="productList" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductList from "../../ProductList";

export default {
  name: "PageProducts",
  components: {
    ProductList
  },
  computed: {
    ...mapGetters(["productList", "selectedProductCount"])
  }
};
</script>
