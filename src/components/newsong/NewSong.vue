<template>
  <div>
    <Slider :banner="banner"></Slider>
    <song-list :songlist="songlist"></song-list>
  </div>
</template>

<script>
import Slider from "./Slider";
import SongList from "../public/SongList";
import api from "../../assets/js/api";
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "NewSong",
  data() {
    return {
      songlist: [],
      banner: []
    };
  },
  components: {
    Slider,
    SongList
  },
  computed: {
    ...mapState("newsong", ["newSongs", "sliderData"])
  },
  methods: {
    getNewSongList() {
      axios.get(api.newsong).then(({ data }) => {
        this.songlist = data.data;
        this.banner = data.banner;
      });
    }
  },
  created() {
    this.getNewSongList();
  }
};
</script>

<style scoped></style>
