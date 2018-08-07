<template>
  <div
    id="pageCart"
    class="page-cart container-fluid">
    <product-cart />
  </div>
</template>

<script>
import ProductCart from '../../ProductCart'

export default {
  name: 'PageCart',
  components: {
    ProductCart
  }
}
</script>
