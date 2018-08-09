<template>
  <div
    id="product"
    class="product card"
  >
    <img
      class="product__picture card-img-top p-2"
      :src="item.picture" alt="img"
    >
    <div class="card-body text-center">
      <h5 class="product__title card-title">
        {{item.name}}
      </h5>
      <p class="product__price card-text">{{item.price}}{{currency.symbol}}</p>
      <slot>
        <!-- additional content here -->
      </slot>
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
      type: Object,
      required: true
    }
  }
}
</script>
