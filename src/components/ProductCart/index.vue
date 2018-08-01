<template>
  <div id="productCart" class="product-cart">
    <button @click="clearCart()">Remove all</button>
    <ul 
      class="product-cart__list"
      v-for="item in sortedItems"
      :key="item.id"
    >
      <product 
        :item="item"
        button-title="Remove from cart"
        @button-click="removeFromCart"
      />
      <h6>{{item.number}}</h6>
      <h6>{{item.price * item.number}}</h6>
      <button @click="increaseOrderValue(item)">+</button>
      <button @click="decreaseOrderValue(item)">-</button>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Product from "../Product";

export default {
  name: "ProductCart",
  components: {
    Product
  },
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
      "increaseOrderValue",
      "decreaseOrderValue",
      "removeFromCart",
      "clearCart"
    ])
  }
};
</script>