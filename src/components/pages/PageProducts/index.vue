<template>
  <div id="pageProducts" class="page-products">
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
    ...mapGetters(["productList"])
  }
};
</script>
