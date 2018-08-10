<template>
  <div
    v-if="item"
    id="productAmountSetter"
    class="product-amount-setter row text-center"
  >
    <div class="col-12 d-flex justify-content-between">
      <!-- The amount decreasing button -->
      <a
        class="product-amount-setter__decrease btn d-flex align-items-center"
        @click="decreaseOrderValue(item)"
      >
        <icon name="minus" scale="1"></icon>
      </a>
      <!-- The amount setting input -->
      <input
        class="product-amount-setter__input form-control mx-3 text-center"
        type="number"
        v-model="itemNumber"
        min="1"
        @focusout="validateInput"
      >
      <!-- The amount increasing button -->
      <a
        class="product-amount-setter__increase btn d-flex align-items-center"
        @click="increaseOrderValue(item)"
      >
        <icon name="plus" scale="1"></icon>
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/plus'
import 'vue-awesome/icons/minus'

export default {
  name: 'ProductAmountSetter',
  components: {
    Icon
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    /* Two-way computed property for changing
    the number property of the current item */
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
      'decreaseOrderValue'
    ]),
    // The validation func for the amount setting input
    validateInput (e) {
      if (parseInt(e.target.value) < 1) e.target.value = 1
    }
  }
}
</script>
