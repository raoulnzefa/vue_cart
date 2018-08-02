<template>
  <div id="productCart" class="product-cart">
    <!-- Clear cart -->
    <button @click="clearCart()">Remove all</button>
    <!-- List of selected products -->
    <div 
      class="product-cart__list"
      v-if="selectedProducts && selectedProducts.length>0"
    >
      <product-cart-item 
        v-for="item in sortedItems"
        :key="item.id"
        :item="item"
      />
    </div>
    <!-- Total price -->
    <h3>
      Total price: {{cartTotalPrice}}
    </h3>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductCartItem from "../ProductCartItem";

export default {
  name: "ProductCart",
  components: {
    ProductCartItem
  },
  computed: {
    ...mapGetters(["selectedProducts", "cartTotalPrice"]),
    /* Returns an array of selected 
    products sorted by date of selection */
    sortedItems: function() {
      if (this.selectedProducts && this.selectedProducts.length > 0)
        return this.selectedProducts.sort((a, b) => {
          if (a.date > b.date) return -1;
          else return 1;
        });
    }
  },
  methods: {
    ...mapActions(["clearCart"])
  }
};
</script>