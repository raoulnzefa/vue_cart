<template>
  <div id="pageProducts" class="page-products">
    <h2>Products</h2>
    <ul 
      class="page-products__list"
      v-if="productList && productList.length>0"  
    >
      <li 
        class="page-products__item"
        v-for="product in productList"
        :key="product.id"
      >
        <h3 class="page-products__item-title">
          {{product.name}}
        </h3>
        <img :src="product.picture" alt="img">
        <h4>{{product.price}}</h4>
      </li>
    </ul>  
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PageProducts",
  computed: {
    ...mapGetters(["productList"])
  }
};
</script>
