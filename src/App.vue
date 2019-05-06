<template>
  <div>
    <div id="app" v-if="page">
      <router-view/>
    </div>
    <div v-else class="load">loading...</div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created(){
      this.$store.dispatch('get')
    },
    computed: {
      page(){
        return this.$store.state.page
      }
    }
  }
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul {
    list-style-type: none;
  }
  @font-face {
    font-family: 'icomoon';
    src:  url('assets/fonts/icomoon.eot?u5s570');
    src:  url('assets/fonts/icomoon.eot?u5s570#iefix') format('embedded-opentype'),
    url('assets/fonts/icomoon.ttf?u5s570') format('truetype'),
    url('assets/fonts/icomoon.woff?u5s570') format('woff'),
    url('assets/fonts/icomoon.svg?u5s570#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  [class^="icon-"], [class*=" icon-"] {
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .load {
    width: 100%;
    height: 100%;
    background-color: #cccccc;
    position: absolute;
    color: #ffffff;
  }

</style>
