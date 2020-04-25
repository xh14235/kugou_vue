<template>
  <div id="app">
    <app-header></app-header>
    <router-view />
    <audio src loop></audio>
  </div>
</template>

<script>
import AppHeader from "@/components/public/AppHeader";
export default {
  name: "App",
  components: {
    AppHeader
  }
};
</script>

<style></style>
