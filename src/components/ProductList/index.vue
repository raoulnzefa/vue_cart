<template>
    <div
      id="productList"
      class="product-list row"
      v-if="Array.isArray(productList) && productList.length>0"
    >
    <div
      class="col-md-4 col-sm-12 col-lg-3"
      v-for="item in productList"
      :key="item.id"
    >
      <product
        class="mb-4"
        :item="item"
        :currency="currency"
      >
        <button
          class="btn btn-primary btn-block"
          @click="addOrder(item)"
        >
          Add to cart
        </button>
      </product>
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
