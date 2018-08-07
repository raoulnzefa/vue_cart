<template>
  <div id="productCart" class=" container-fluid product-cart">
    <!-- List of selected products -->
    <div
      class="product-cart__list row"
      v-if="Array.isArray(selectedProducts)"
    >
      <product-cart-item
        v-for="item in selectedProducts"
        :key="item.id"
        :item="item"
      />
    </div>
    <div class="navbar fixed-bottom navbar-expand-lg navbar-light bg-light">
      <div class="col d-flex justify-content-between my-2">
        <!-- Total price -->
        <h4 class="text-muted" v-if="selectedProductsPrice>0">
          Total price: {{selectedProductsPrice}}{{currency}}
        </h4>
        <!-- Clear cart -->
        <button
          class="btn btn-outline-danger"
          @click="clearCart()"
        >
          Clear cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductCartItem from '../ProductCartItem'

export default {
  name: 'ProductCart',
  components: {
    ProductCartItem
  },
  computed: {
    ...mapGetters(['selectedProducts', 'selectedProductsPrice', 'currency'])
  },
  methods: {
    ...mapActions(['clearCart'])
  }
}
</script>

<style lang="scss" scoped>
  @import '../../styles/product-cart.scss';
</style>
