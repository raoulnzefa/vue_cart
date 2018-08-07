<template>
  <div
    id="pageProducts"
    class="page-products container-fluid"
  >
    <product-list />
  </div>
</template>

<script>
import ProductList from '../../ProductList'

export default {
  name: 'PageProducts',
  components: {
    ProductList
  }
}
</script>
