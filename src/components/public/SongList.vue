<template>
  <ul>
    <li class="song-list" v-for="(item,index) of songlist" :key="index">
      <div class="song-name">{{item.filename}}</div>
      <i class="iconfont">&#xe615;</i>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SongList",
  props: {
    songlist: Array
  }
};
</script>

<style lang="stylus" scoped>
.song-list
  margin-left: 4vw
  padding-right: 4vw
  height: 10vh
  border-bottom: 1px solid #e5e5e5
  display: flex
  justify-content: space-between
  align-items: center
  font-size: 5vw
  color: #333
  .iconfont
    font-size: 6vw
    color: #333
</style>
