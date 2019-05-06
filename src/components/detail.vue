<template>
  <div class="qne-detail">
    <div class="detail-top">
      <img :src="detail.bannerImg" alt="">
      <span class="detail-back" @click="back"></span>
      <p v-text="detail.sightName"></p>
      <span class="img-bg"></span>
      <span class="img-count" v-text="count"></span>
    </div>
    <div class="detail-content">
      <div v-for="(item, index) in detail.categoryList" :key="index" class="title-parent">
        <p v-text="item.title" class="content-title1">
        </p>
        <div v-for="(val, i) in item.children" :key="i" class="content-title2">
          <p>{{val.title}}</p>
          <div v-for="(child, j) in val.children" :key="j" class="content-title3">
            <p>{{child.title}}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
    // import store from '@/store'
    export default {
        name: "detail",
      // store,
      data(){
          return {
            detail: ''
          }
      },
      created(){
          this.detail = this.$store.state.detail
      },
      methods: {
        back(){
          this.$router.go(-1)
            // store.commit('increase')
        }
      },
      computed: {
          count: function () {
            return this.detail.gallaryImgs.length
          }
      }
    }
</script>

<style scoped lang="less">
  .qne-detail {
    position: relative;
    .detail-top {
      height: 4.12rem;
      width: 100%;
      position: relative;
      img {
        vertical-align: top;
        width: 100%;
      }
      .detail-back {
        width: .82rem;
        height: .82rem;
        border-radius: 50%;
        background-color: rgba(0,0,0,.6);
        position: absolute;
        top: .2rem;
        left: .2rem;
      }
      .detail-back::after {
        content: '\e901';
        font-family: 'icomoon';
        display: block;
        width: .5rem;
        height: .5rem;
        color: #fff;
        font-size: .6rem;
        position: absolute;
        top: 45%;
        left: 40%;
        transform: translate(-50%, -50%);
      }
      p {
        font-size: .3rem;
        color: #ffffff;
        position: absolute;
        bottom: 0;
        left: .3rem;
      }
      .img-count {
        right: 0;
        bottom: 0;
        color: #fff;
        font-size: .3rem;
        position: absolute;
        right: .4rem;
        bottom: .05rem;
      }
      .img-bg:after {
        content: '\e90d';
        font-family: icomoon;
        width: .1rem;
        height: .1rem;
        display: block;
        font-size: .3rem;
        color: #ffffff;
        position: absolute;
        top: .05rem;
        left: .3rem;
      }
      .img-bg {
        width: 1.25rem;
        height: .45rem;
        display: block;
        border-radius: .5rem;
        background-color: rgba(0,0,0,.7);
        position: absolute;
        bottom: 0;
        right: 0;
      }

    }
    .detail-content {
      .title-parent {
        height: .8rem;
        border-bottom: .01rem solid #eeeeee;
        position: relative;
        padding: .25rem .67rem;
        .content-title1,
        .content-title2 {
          height: .8rem;
          font-size: .26rem;
          text-align: left;
          position: relative;

          .content-title3 {
            height: .8rem;
            position: relative;
            margin-top: .5rem;
            margin-left: .4rem;
          }
          .content-title3:after {
            content: '';
            width: 100%;
            height: .01rem;
            display: block;
            background-color: #eeeeee;
            position: absolute;
            bottom: .21rem;
            left: -.5rem;
          }
          .content-title3:before {
            content: '\ea58';
            font-family: icomoon;
            width: .2rem;
            height: .2rem;
            display: block;
            position: absolute;
            top: .07rem;
            left: -.4rem;
          }
        }
        .content-title2 {
          margin-left: .16rem;

        }
        .content-title2:after {
          content: '';
          width: 100%;
          height: .01rem;
          display: block;
          background-color: #eeeeee;
          position: absolute;
          bottom: .15rem;
          left: -.5rem;
        }
        .content-title2:last-of-type:after {

        }
        .content-title2:last-of-type {
          height: .8rem;
          font-size: .26rem;
          text-align: left;
          margin-top: .76rem;
          margin-left: .16rem;
        }
        .content-title1:before,
        .content-title2:before,
        .content-title3:before {
          content: '\ea58';
          font-family: icomoon;
          width: .2rem;
          height: .2rem;
          display: block;
          position: absolute;
          top: .07rem;
          left: -.4rem;
        }

      }
      .title-parent:first-of-type {
        height: 3.32rem;
        width: 100%;
        border-bottom: none;
      }

      .title-parent:first-of-type:after {
        content: '';
        width: 100%;
        height: .01rem;
        display: block;
        background-color: #eeeeee;
        position: absolute;
        top: .8rem;
        left: 0;
      }
    }
  }
</style>
