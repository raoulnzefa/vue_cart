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
      <img :src="item.picture" alt="img">
      <h4>{{item.price}}</h4>
    </li>
    </ul>  
</template>

<script>
export default {
  name: "ProductList",
  props: {
    items: {
      type: Array,
      default: null
    }
  }
};
</script>

