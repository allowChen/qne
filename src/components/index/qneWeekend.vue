<template>
    <div class="qne-weekend">
      <div class="weekend-title">
        <h5>周末去哪儿</h5>
      </div>
      <div class="weekend-content" v-for="(weekend, index) in weekendList" :key="index">
        <img :src="weekend.imgUrl" @click="skip(weekend.id, weekend.title)">
        <h5 v-text="weekend.title"></h5>
        <p v-text="weekend.desc"></p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "qneWeekend",
      data(){
          return {
            weekendList: ''
          }
      },
      created(){
          this.weekendList = this.$store.state.page.weekendList
      },
      methods: {
          skip(id, title){
            this.$router.push({path: '/detail?id=' + id + '&title = ' + title})
          }

      }
    }
</script>

<style scoped lang="less">
  .qne-weekend {
    width: 100%;
    .weekend-title {
      background-color: #eeeeee;
      padding: .27rem 0 .27rem .2rem;
      height: .8rem;
      text-align: left;
    }
    h5 {
      font-size: .26rem;
      color: #333333;
    }
    .weekend-content {
      height: 3.93rem;
      width: 100%;
      position: relative;
      text-align: left;
      img {
        vertical-align: top;
        height: 2.8rem;
        width: 100%;
        background-size: cover;
      }
      h5 {
        font-size: .26rem;
        margin: .20rem 0 0 .1rem;
        font-weight: 500;
      }
      p {
        font-size: .26rem;
        margin: .1rem 0 .21rem .1rem;
        color: #cfcfcf;
      }
    }
  }
</style>
