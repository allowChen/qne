<template>
  <div>
    <qne-header :head="info"></qne-header>
    <swiper-imgs></swiper-imgs>
    <qne-nav></qne-nav>
    <qne-weekend-hot></qne-weekend-hot>
    <qne-hot></qne-hot>
    <qne-weekend></qne-weekend>
    <qne-footer></qne-footer>
  </div>

</template>

<script>
  import qneHeader from './index/qneHeader.vue'
  import swiperImgs from './index/qneSwiperImgs.vue'
  import qneNav from './index/qneNav.vue'
  import qneHot from './index/qneHot'
  import qneWeekend from './index/qneWeekend'
  import qneFooter from './index/qneFooter'
  import qneWeekendHot from './index/qneWeekendHot'

    export default {
        name: "index",
        data(){
            return {
              info: null
            }
        },
        components: {
          qneHeader,
          swiperImgs,
          qneNav,
          qneWeekendHot,
          qneHot,
          qneWeekend,
          qneFooter
        }
    }
</script>

<style scoped lang="less">

</style>
