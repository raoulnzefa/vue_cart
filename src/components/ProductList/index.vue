<template>
  <ul
    id="productList"
    class="product-list"
    v-if="items && items.length>0"  
  >
    <li 
      class="product-list__item"
      v-for="item in items"
      :key="item.id"
    >
      <h3 class="product-list__item-title">
        {{item.name}}
      </h3>
      <img
        class="product-list__item-picture" 
        :src="item.picture" alt="img"
      >
      <h4 class="product-list__item-price">{{item.price}}</h4>
      <button 
        class="product-list__button"
        @click="addToCart(item)"
      >
       Add to cart
      </button>
    </li>
    </ul>  
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProductList",
  props: {
    items: {
      type: Array,
      default: null
    }
  },
  methods: {
    ...mapActions(["addToCart"])
  }
};
</script>

