<template>
    <div
      id="productList"
      class="product-list row mt-5"
      v-if="Array.isArray(productList) && productList.length>0"
    >
    <div
      class="col-md-4 col-sm-12 col-lg-3"
      v-for="item in productList"
      :key="item.id"
    >
      <product
        :item="item"
        :currency="currency"
        button-title="Add to cart"
        @button-click="addOrder"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Product from '../Product'

export default {
  name: 'ProductList',
  components: {
    Product
  },
  computed: {
    ...mapGetters(['currency', 'productList'])
  },
  methods: {
    ...mapActions(['addOrder'])
  }
}
</script>
