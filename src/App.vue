<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    // Load product list
    this.$store.dispatch("loadProductList");
    // Sync cart with local storage
    this.$store.dispatch("syncCart");
  }
};
</script>
