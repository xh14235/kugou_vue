<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) of banner" :key="index">
        <a :href="item.extra.tourl" class="slider-link">
          <img :src="item.imgurl" :alt="item.title" class="slider-img" />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    banner: Array
  }
};
</script>

<style lang="stylus" scoped>
.slider-img
  width: 100%
</style>
