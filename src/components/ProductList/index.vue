<template>
    <div
      id="productList"
      class="product-list row mt-5"
      v-if="Array.isArray(items)"
    >
    <div
      class="col-md-4 col-sm-12 col-lg-3"
      v-for="item in items"
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
  props: {
    items: {
      type: Array,
      default: null
    }
  },
  computed: {
    ...mapGetters(['currency'])
  },
  methods: {
    ...mapActions(['addOrder'])
  }
}
</script>
