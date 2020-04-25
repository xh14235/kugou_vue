<template>
  <div class="header">
    <!-- <i class="iconfont header-back">&#xe60f;</i> -->
    <router-link to="/" class="header-logo">
      <img :src="logo_text" alt />
    </router-link>
    <button class="header-download">下载酷狗</button>
    <router-link to="/">
      <i class="iconfont header-search">&#xe615;</i>
    </router-link>
  </div>
</template>

<script>
import logo_text from "../../assets/img/logo__text.png";
export default {
  name: "AppHeader",
  data() {
    return {
      logo_text
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/css/base.styl'
.header
  width: 100%
  height: 10vh
  box-sizing: border-box
  display: flex
  justify-content: space-between
  align-items: center
  padding: 0 4vw
  background: $theme
  color: $white
  .header-search
    font-size: 25px
  .header-logo
    width: 35vw
    img
      width: 100%
      vertical-align: bottom
  .header-download
    border: 1px solid #fff
    border-radius: 6px
    padding: 0.9vh 6vw
</style>
