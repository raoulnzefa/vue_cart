<template>
  <div
    id="pageProducts"
    class="page-products container-fluid"
  >
    <div class="row">
      <div class="col">
        <product-list :items="productList" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductList from '../../ProductList'

export default {
  name: 'PageProducts',
  components: {
    ProductList
  },
  computed: {
    ...mapGetters(['productList'])
  }
}
</script>
