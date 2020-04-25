<template>
  <div>
    <ul class="singer-list">
      <li class="list-li" v-for="(list,index) of comlist" :key="index">
        <router-link class="list-div" tag="div" to="/" v-for="item of list" :key="item.classid">
          <span class="list-span">{{item.classname}}</span>
          <i class="iconfont">&#xe615;</i>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "../../assets/js/api";
import axios from "axios";
export default {
  name: "SingerCategory",
  data() {
    return {
      singerlist: []
    };
  },
  methods: {
    getSingerList() {
      let _this = this;
      axios.get(api.singercategory).then(({ data }) => {
        _this.singerlist = data.list;
      });
    }
  },
  computed: {
    comlist() {
      let clist = [];
      clist[0] = this.singerlist.splice(0, 1);
      const len = Math.ceil(this.singerlist.length / 3) + 1;
      for (let i = 1; i < len; i++) {
        clist[i] = this.singerlist.splice(0, 3);
      }
      return clist;
    }
  },
  mounted() {
    this.getSingerList();
  }
};
</script>

<style lang="stylus" scoped>
.singer-list
  padding: 2vh 4vw
  .list-li
    border: 1px solid #e4e4e4
    background: #fbfbfb
    border-radius: 6px
    margin-bottom: 2vh
    &:last-child
      margin-bottom: 0
    .list-div
      padding: 4vw
      border-bottom: 1px solid #e4e4e4
      display: flex
      justify-content: space-between
      align-items: center
      &:last-child
        border-bottom: 0px
      .list-span
        font-size: 4.8vw
        color: #333
      .iconfont
        font-size: 5vw
        color: #666
</style>
