<template>
  <div>
    <public-list :list="songList" :listtype="'song'"></public-list>
  </div>
</template>

<script>
import PublicList from "../public/PublicList";
import api from "../../assets/js/api";
import axios from "axios";
export default {
  name: "SongList",
  data() {
    return {
      songList: []
    };
  },
  components: {
    PublicList
  },
  methods: {
    getSongList() {
      axios.get(api.songlist).then(({ data }) => {
        this.songList = data.plist.list.info;
        // console.log(this.songList);
      });
    }
  },
  mounted() {
    this.getSongList();
  }
};
</script>

<style scoped></style>
