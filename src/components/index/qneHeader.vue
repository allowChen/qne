<template>
  <div class="qne-top">
    <span class="icon- left"></span>
    <span class="icon- search"></span>
    <input type="text" class="form-control" id="textControl" placeholder="输入城市/景点/游玩主题">
      <p class="city" @click="cityPick" v-text="currentCity"></p>
  </div>
</template>

<script>
    export default {
        name: "qneTop",
        props: ['head'],
        data(){
          return {
            currentCity: ''
          }
        },
        mounted(){
          this.currentCity = this.$route.query.name?this.$route.query.name:'常熟';
          let Obj = this.$store.state.city.cities
          let arr = Object.values(Obj)
          // console.log(this);
          arr.forEach((el) => {
            el.forEach((val)=>{
              if ( val.id == this.$route.query.id){
                this.currentCity = val.name
              }
            })
          })
        },
        methods: {
          cityPick(){
            this.$router.push({path: '/city?city=' + this.currentCity})
          },
        }
    }
</script>

<style scoped lang="less">

  .qne-top {
    width: 100%;
    height: .86rem;
    background-color: #00bcd4;
    position: relative;
    /*z-index: -2;*/
    span {
      color: #ffffff;
      font-size: .48rem;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
    .search {
      position: absolute;
      top: 50%;
      left: .8rem;
      transform: translateY(-50%);
      color: #cccccc;
      font-size: .3rem;
      z-index: 2;
    }
    #textControl {
      font-size: .25rem;
      color: #cccccc;
      outline: none;
      height: .64rem;
      width: 5.42rem;
      position: absolute;
      top: 50%;
      left: .65rem;
      transform: translateY(-50%);
      border-radius: .1rem;
      border: none;
      padding-left: .5rem;
      margin-right: 1rem;
      z-index: 1;
    }
    .city {
      font-size: .26rem;
      padding: .1rem;
      color: #ffffff;
      position: absolute;
      top: 50%;
      right: .4rem;
      transform: translateY(-50%);
    }
  }
  .qne-top:after {
    content: '\e903';
    font-family: 'icomoon';
    font-size: .2rem;
    color: #ffffff;
    position: absolute;
    top: 50%;
    right: .21rem;
    transform: translateY(-50%);
  }
</style>
