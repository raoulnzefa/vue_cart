<template>
  <div
    id="product"
    class="product card mb-4"
  >
    <img
      class="product__picture card-img-top p-2"
      :src="item.picture" alt="img"
    >
    <div class="card-body">
      <h5 class="product__title card-title">
        {{item.name}}
      </h5>
      <p class="product__price card-text">{{item.price}}{{currency}}</p>
      <button
        class="product__button btn btn-primary"
        @click="$emit('button-click', item)"
      >
        {{buttonTitle}}
      </button>
    </div>
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
    currency: {
      type: String,
      required: true
    },
    buttonTitle: {
      type: String,
      default: 'Button'
    }
  }
}
</script>
