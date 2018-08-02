<template>
    <div
      id="productList"
      class="product-list"
      v-if="Array.isArray(items)"
    >
    <product
      v-for="item in items"
      :key="item.id"
      :item="item"
      button-title="Add to cart"
      @button-click="addOrder"
    />
    <slot>
      <!-- Additional features -->
    </slot>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
  methods: {
    ...mapActions(['addOrder'])
  }
}
</script>
