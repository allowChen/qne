<template>

  <div class="swiper-imgs">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in swiperSlides.swiperList" :key="index"><img :src="slide.imgUrl" alt="" ></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>


</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: "qneSwiperImgs",
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          speed:1000,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        },
        swiperSlides: ''
      }
    },
    created(){
      this.swiperSlides = this.$store.state.page
    }
  }
</script>

<style scoped lang="less">
  .swiper-imgs {
    height: 2.334rem;
    width: 100%;
    img {
      width: 100%;
      background-size: cover;
      vertical-align: top;
    }
  }
</style>
