<template>
  <div
    id="ProductCartItem"
    class="product-cart-item col-lg-3 mt-5"
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
      <div class="row text-center mt-2 mb-4">
        <div class="col-12 d-flex justify-content-between">
          <a
            class="btn d-flex align-items-center"
            @click="decreaseOrderValue(item)"
          >
            <icon name="minus" scale="1"></icon>
          </a>
          <input
            class="product-cart-item__number-input form-control mx-3 text-center"
            type="number"
            v-model="itemNumber"
            min="1"
            @focusout="validateInput"
          >
          <a
            class="btn d-flex align-items-center"
            @click="increaseOrderValue(item)"
          >
            <icon name="plus" scale="1"></icon>
          </a>
        </div>
      </div>
    </product>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Product from '../Product'
import Icon from 'vue-awesome/components/Icon'

import 'vue-awesome/icons/plus'
import 'vue-awesome/icons/minus'

export default {
  name: 'ProductCartItem',
  components: {
    Product,
    Icon
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
