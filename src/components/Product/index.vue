<template>
  <div
    id="product"
    class="product"
  >
    <h3 class="product__title">
      {{item.name}}
    </h3>
    <img
      class="product__picture"
      :src="item.picture" alt="img"
    >
    <h4 class="product__price">{{item.price}}{{item.currency}}</h4>
    <button
      class="product__button"
      @click="$emit('button-click', item)"
    >
      {{buttonTitle}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    item: {
      type: Object,
      required: true
    },
    buttonTitle: {
      type: String,
      default: 'Button'
    }
  }
}
</script>
