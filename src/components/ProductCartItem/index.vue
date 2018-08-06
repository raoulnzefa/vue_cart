<template>
  <div id="ProductCartItem" class="product-cart-item">
    <product
          :item="item"
          :currency="currency"
          button-title="Remove from cart"
          @button-click="removeFromCart"
    />
    <h6>{{item.number}}</h6>
    <h6>{{item.price * item.number}}</h6>
    <!-- Сhange the number of products -->
    <button @click="increaseOrderValue(item)">+</button>
    <input
      class="product-cart-item__number-input"
      type="number"
      v-model="itemNumber"
      min="1"
      @focusout="validateInput"
    >
    <button @click="decreaseOrderValue(item)">-</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Product from '../Product'

export default {
  name: 'ProductCartItem',
  components: {
    Product
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['currency']),
    /* Two-way computed property for
    changing the value in the input */
    itemNumber: {
      get: function () {
        return this.item.number
      },
      set: function (value) {
        if (value > 0) this.setOrderValue({ product: this.item, value: value })
      }
    }
  },
  methods: {
    ...mapActions([
      'setOrderValue',
      'increaseOrderValue',
      'decreaseOrderValue',
      'removeFromCart'
    ]),
    validateInput (e) {
      if (parseInt(e.target.value) < 1) e.target.value = 1
    }
  }
}
</script>
