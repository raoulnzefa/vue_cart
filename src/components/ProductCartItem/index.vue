<template>
  <div
    id="ProductCartItem"
    class="product-cart-item col-lg-3 col-sm-12 col-md-4 mt-5"
  >
    <product
          :item="item"
          :currency="currency"
          button-title="Remove from cart"
          @button-click="removeFromCart"
    >
      <div class="row mt-4 ">
        <div class="col-12 text-center">
          <h6>
            <!-- Total price: -->
            <span>Total: {{item.price * item.number}}{{currency}}</span>
          </h6>
        </div>
      </div>
      <product-amount-setter :item="item" />
    </product>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Product from '../Product'
import ProductAmountSetter from '../ProductAmountSetter'

export default {
  name: 'ProductCartItem',
  components: {
    Product,
    ProductAmountSetter
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['currency'])
    /* Two-way computed property for
    changing the value in the input */
  },
  methods: {
    ...mapActions([
      'removeFromCart'
    ])
  }
}
</script>
