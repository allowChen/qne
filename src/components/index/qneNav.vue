<template>
  <div class="qne-nav">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in res" :key="index">
        <li v-for="(item, i) in slide" :key="i">
          <img :src="item.imgUrl" :alt="item.title">
          <p v-text="item.desc"></p>
        </li>
      </swiper-slide>
      <!--<div class="swiper-pagination" slot="pagination"></div>-->
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
    export default {
        name: "qneNav",
        components: {
          swiper,
          swiperSlide
        },
        data(){
          return {
            iconList: [],
            res: [],
            swiperOption: {
              speed:1000,
              loop: true,
              indicatorDots: true,
              paginationType: 'fraction',
              pagination: {
                el: '.swiper-pagination'
              }
            },
          }
        },
        created(){
          this.iconList = this.$store.state.page.iconList
          for (var i = 0,len = this.iconList.length; i < len; i+=8) {
              this.res.push(this.iconList.slice(i, i+8))
          }
        }
    }
</script>

<style scoped lang="less">
  .qne-nav {
    width: 100%;
    height: 4.06rem;
    background-color: #fff;
    position: relative;
    li {
      margin: .24rem .32rem .22rem .33rem;
      width: 1.2rem;
      height: 1.2em;
      float: left;
      justify-content: center;
      position: relative;
      img {
        width: 80%;
        background-size: cover;
        vertical-align: top;
      }
      p {
        width: 1rem;
        height: .2rem;
        font-size: .2rem;
        position: absolute;
        bottom: -.1rem;
        left: .1rem;
        text-align: center;
        color: #333333;
      }
    }
  }
</style>
