<template>
  <div id="ProductCartItem" class="product-cart-item">
    <product
          :item="item"
          button-title="Remove from cart"
          @button-click="removeFromCart"
    />
    <h6>{{item.number}}</h6>
    <h6>{{item.price * item.number}}</h6>
    <!-- Сhange the number of products -->
    <button @click="increaseOrderValue(item)">+</button>
    <input
      type="number"
      v-model="itemNumber"
      min="1"
      @focusout="validateInput"
    >
    <button @click="decreaseOrderValue(item)">-</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
      if (e.target.value < 1) e.target.value = 1
    }
  }
}
</script>
