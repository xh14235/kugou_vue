<template>
  <div>
    <public-list :list="rankList" :listtype="'rank'"></public-list>
  </div>
</template>

<script>
import PublicList from "../public/PublicList";
import api from "../../assets/js/api";
import axios from "axios";
export default {
  name: "RankList",
  data() {
    return {
      rankList: []
    };
  },
  components: {
    PublicList
  },
  methods: {
    getRankList() {
      axios.get(api.ranklist).then(({ data }) => {
        this.rankList = data.rank.list;
        // console.log(this.rankList);
      });
    }
  },
  mounted() {
    this.getRankList();
  }
};
</script>

<style scoped></style>
