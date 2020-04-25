<template>
  <ul class="list" v-if="listtype === 'rank'">
    <li class="list-li" v-for="item of list" :key="item.id">
      <img class="list-img" :src="item.imgurl.replace('{size}','400')" alt />
      <div class="list-info">
        <span class="list-title">{{item.rankname}}</span>
      </div>
      <i class="iconfont">&#xe615;</i>
    </li>
  </ul>
  <ul class="list" v-else>
    <li class="list-li" v-for="item of list" :key="item.id">
      <img class="list-img" :src="item.imgurl.replace('{size}','400')" alt />
      <div class="list-info">
        <span class="list-title">{{item.specialname}}</span>
        <div class="list-desc" v-if="item.playcount">
          <i class="iconfont">&#xe615;</i>
          {{item.playcount}}
        </div>
      </div>
      <i class="iconfont">&#xe615;</i>
    </li>
  </ul>
</template>

<script>
export default {
  name: "PublicList",
  props: {
    list: Array,
    listtype: String
  }
};
</script>

<style lang="stylus" scoped>
.list-li
  margin-left: 4vw
  padding: 1vh 4vw 1vh 0
  border-bottom: 1px solid #e5e5e5
  display: flex
  justify-content: space-between
  align-items: center
  .list-img
    flex: 0 0 28vw
    width: 28vw
  .list-info
    flex: 0 0 50vw
    width: 50vw
    .list-title
      font-size: 5vw
      color: #333
    .list-desc
      color: #777
      .iconfont
        font-size: 4vw
  .iconfont
    font-size: 6vw
    color: #333
</style>
