<template>
  <div
    id="pageProducts"
    class="page-products container-fluid"
  >
    <product-list class="mt-5" />
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
