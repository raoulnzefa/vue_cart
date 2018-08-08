<template>
  <div
    id="ProductCartItem"
    class="product-cart-item"
  >
    <product
          :item="item"
          :currency="currency"
    >
      <div class="row mt-4 ">
        <div class="col-12 text-center mb-2">
          <h6>
            <!-- Total price: -->
            <span>Total: {{item.price * item.number}}{{currency}}</span>
          </h6>
        </div>
      </div>
      <product-amount-setter :item="item" />
      <button
          class="btn btn-danger btn-block mt-4"
          @click="removeFromCart(item)"
        >
          Remove from cart
      </button>
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
