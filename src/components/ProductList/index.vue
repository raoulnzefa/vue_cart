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
      :currency="currency"
      button-title="Add to cart"
      @button-click="addOrder"
    />
    <slot>
      <!-- Additional features -->
    </slot>
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
