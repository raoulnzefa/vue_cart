<template>
  <div id="pageCart" class="page-cart">
    <product-cart />
  </div>
</template>

<script>
import ProductCart from "../../ProductCart";

export default {
  name: "PageCart",
  components: {
    ProductCart
  }
};
</script>