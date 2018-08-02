<template>
  <div id="app">
    <header>
      <router-link
        class="app__link"
        :to="{name:'products'}"
        tag="a"
      >
        <h1>Store</h1>
      </router-link>
      <router-link
        class="app__link"
        :to="{name:'cart'}"
        tag="button"
      >
        Cart
        <span v-if="selectedProductsCount>0">
          {{ selectedProductsCount }}
        </span>
      </router-link>
    </header>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  created () {
    // Load product list
    this.$store.dispatch('loadProductList')
    // Load cart from local storage
    this.$store.dispatch('loadCart')
  },
  computed: {
    ...mapGetters(['selectedProductsCount'])
  }
}
</script>
