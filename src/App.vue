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
  }
};
</script>
