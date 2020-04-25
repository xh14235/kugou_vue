<template>
  <div class="nav">
    <router-link
      class="nav-item"
      v-for="(item,index) of navs"
      :key="item.name"
      :to="item.path"
      :class="{'active': activeIndex == index}"
    >{{item.text}}</router-link>
  </div>
</template>

<script>
export default {
  name: "AppNav",
  data() {
    return {
      navs: [
        {
          text: "新歌",
          name: "new",
          path: "/"
        },
        {
          text: "排行",
          name: "rank",
          path: "/rank/list"
        },
        {
          text: "歌单",
          name: "song",
          path: "/song/list"
        },
        {
          text: "歌手",
          name: "singer",
          path: "/singer/category"
        }
      ]
    };
  },
  computed: {
    activeIndex() {
      let index = 0;
      switch (this.$route.path) {
        case "/":
          index = 0;
          break;
        case "/rank/list":
          index = 1;
          break;
        case "/song/list":
          index = 2;
          break;
        case "/singer/category":
          index = 3;
          break;
        default:
          break;
      }
      return index;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/css/base.styl'
.nav
  padding: 0 2vw
  margin-bottom: 1vh
  box-shadow: 0 1vh 1vh 0 #e5e5e5
  display: flex
  justify-content: space-around
  align-items: center
  font-size: 5vw
  .nav-item
    display: block
    width: 100%
    height: 10vh
    line-height: 10vh
    text-align: center
    border-bottom: 5px solid #fff
    &.active
      border-bottom: 5px solid $theme
</style>
