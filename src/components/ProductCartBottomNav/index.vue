<template>
  <div
      class="navbar fixed-bottom navbar-expand-lg navbar-light bg-light"
    >
      <div class="col d-flex justify-content-between my-2">
        <!-- Total price -->
        <h4 class="text-muted">
          Total price: {{selectedProductsPrice}}{{currency}}
        </h4>
        <!-- Clear cart -->
        <button
          class="btn btn-outline-danger"
          @click="clearCart()"
        >
          Clear cart
        </button>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProductCartBottomNav',

  computed: {
    ...mapGetters([
      'selectedProductsPrice',
      'currency'
    ])
  },
  methods: {
    ...mapActions(['clearCart'])
  }
}
</script>
