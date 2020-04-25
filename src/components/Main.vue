<template>
  <div class="main">
    <app-nav></app-nav>
    <router-view class="main2"></router-view>
  </div>
</template>

<script>
import AppNav from "./public/AppNav";
export default {
  name: "Main",
  components: {
    AppNav
  }
};
</script>

<style lang="stylus" scoped>
.main
  height: 90vh
  overflow-y: scroll
  .main2
    height: 78vh
    overflow-y: scroll
</style>
