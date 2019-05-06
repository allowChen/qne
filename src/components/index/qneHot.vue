<template>
  <div class="qne-hot">
    <div class="hot-title">
      <h5>热销推荐</h5>
    </div>
    <div class="hot-content">
      <div class="content-list" v-for="(item, index) in recommendList" :key="index">
        <img :src="item.imgUrl" alt="">
        <h5 v-text="item.title"></h5>
        <p v-text="item.desc"></p>
        <button @click.prevent="showDetail(item.id, item.title)">查看详情</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "qneHot",
    data() {
      return {
        recommendList: '',
      }
    },
    created() {
          this.recommendList = this.$store.state.page.recommendList
    },
    methods: {
      showDetail(id, title){
        this.$router.push({path: '/detail?id=' + id + '&title=' + title})
      }
    }
  }
</script>

<style scoped lang="less">
  .qne-hot {
    width: 100%;
    /*height: 10.3rem;*/
    .hot-title {
      width: 100%;
      height: .8rem;
      padding-left: .2rem;
      background-color: #eeeeee;
      text-align: left;
    }
    h5 {
      font-size: .26rem;
      line-height: .8rem;
      color: #333333;
    }
    .content-list {
      width: 100%;
      height: 1.89rem;
      background-color: #fff;
      padding: .1rem;
      border-bottom: .01rem solid #cccccc;
      text-align: left;
      position: relative;
      img {
        vertical-align: top;
        width: 1.69rem;
        height: 1.69rem;
        background-size: cover;
      }
      h5,
      p,
      button {
        font-size: .26rem;
        position: absolute;

        left: 1.9rem;
      }
      h5 {
        top: 0;
        font-weight: 500;
      }
      p {
        color: #cfcfcf;
        top: .7rem;
      }
      button {
        width: 1.55rem;
        height: .45rem;
        bottom: .24rem;
        border-radius: .05rem;
        border: none;
        background-color: #ff9300;
        color: #fff4e4;
      }
    }
    .content-list:last-of-type {
      border-bottom: none;
    }
  }
</style>
