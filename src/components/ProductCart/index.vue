<template>
  <div id="productCart" class="container-fluid product-cart">
    <!-- List of selected products -->
    <div
      class="product-cart__list row mt-5"
      v-if="selectedProductsCount>0"
    >
      <product-cart-item
        class="col-lg-3 col-sm-12 col-md-4 mb-4"
        v-for="item in selectedProducts"
        :key="item.id"
        :item="item"
      />
    </div>
    <div v-else class="row">
      <div class="col text-center mt-5">
        <span class="h4 text-black-50">
          The cart is empty
        </span>
      </div>
    </div>
    <product-cart-bottom-nav
      v-if="selectedProductsCount>0"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductCartItem from '../ProductCartItem'
import ProductCartBottomNav from '../ProductCartBottomNav'

export default {
  name: 'ProductCart',
  components: {
    ProductCartItem,
    ProductCartBottomNav
  },
  computed: {
    ...mapGetters([
      'selectedProducts',
      'selectedProductsPrice',
      'selectedProductsCount',
      'currency'
    ])
  },
  methods: {
    ...mapActions(['clearCart'])
  }
}
</script>

<style lang="scss" scoped>
  @import '../../styles/product-cart.scss';
</style>
