<template>
  <div 
    id="pageCart"
    class="page-cart"
  >
  <button @click="clearCart()">Remove all</button>
  <ul class="cart">
    <li 
      class="cart__item"
      v-for="item in sortedItems"
      :key="item.id"
    >
      <!-- TODO: Вынести товар в отдельный компонент, добавить поле валюта -->
      <h2 class="item_title">{{item.name}}</h2>
      <img class="item_image" :src="item.picture" alt="img">
      <h4>{{item.price}}</h4>
      <h6>{{item.number}}</h6>
      <h6>{{item.price * item.number}}</h6>
      <button @click="increaseOrder(item)">+</button>
      <button @click="decreaseOrder(item)">-</button>
      <button @click="removeOrder(item)">Delete order</button>
    </li>
  </ul>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PageCart",

  computed: {
    ...mapGetters(["selectedProducts"]),
    /* Returns array of selected products, 
    sorted by date of selection */
    sortedItems: function() {
      if (this.selectedProducts && Array.isArray(this.selectedProducts))
        return this.selectedProducts.sort((a, b) => {
          if (a.date > b.date) return -1;
          else return 1;
        });
    }
  },
  methods: {
    ...mapActions([
      "increaseOrder",
      "decreaseOrder",
      "removeOrder",
      "clearCart"
    ])
  }
};
</script>