<template>
  <div id="app">
    <header>
      <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div class="col-md">
          <router-link
            class="app__link navbar-brand"
            :to="{name:'products'}"
            tag="a"
          >
            <h1>Store</h1>
          </router-link>
        </div>
        <div class="col d-flex justify-content-end">
          <router-link
            class="app__link"
            :to="{name:'cart'}"
            tag="a"
          >
            <icon name="shopping-cart" scale=2></icon>
            <span v-if="selectedProductsCount>0" class="badge badge-danger">
              {{ selectedProductsCount }}
            </span>
          </router-link>
        </div>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Icon from 'vue-awesome/components/Icon'

import 'vue-awesome/icons/shopping-cart'

export default {
  name: 'App',
  components: {
    Icon
  },
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

<style lang="scss" scoped>
  @import './styles/app.scss';
</style>
