<template>
  <div
    id="pageCart"
    class="page-cart container-fluid">
    <div class="row">
      <div class="col text-center">
        <h2 class="mt-5">Cart</h2>
      </div>
    </div>
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
