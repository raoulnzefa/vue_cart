<template>
  <div id="pageCart" class="page-cart">
    <h2>Cart</h2>
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