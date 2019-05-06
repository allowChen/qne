<template>
  <div class="qne-city" ref="wrapper"  v-if="city">
    <div>
      <div class="city-top">
        <span class="icon-top-icon" @click="back"></span>
        <h5>城市选择</h5>
        <input type="text" class="form-control" id="textControl" placeholder="输入城市名或拼音" v-model="keywords">
      </div>
      <div v-if="keywords" class="search-content">
        <ul>
          <li v-for="(item, index) in  list" :key="index" v-text="item.name" class="search-item" @click="picker(item.id)"></li>

          <li v-show="hasNoData" class="search-item">
            没有匹配到数据
          </li>

        </ul>
      </div>
      <div v-else>
        <div class="city-current">
          <h5>当前城市</h5>
          <ul>
            <li v-text="currentCity" @click="pick(currentCity)"></li>
          </ul>
        </div>
        <div class="city-hot">
          <h5>热门城市</h5>
          <ul>
            <li v-for="(item, index) in city.hotCities" :key="index" @click="picker(item.id)">{{item.name}}</li>
          </ul>
        </div>
          <div class="city-picker" v-for="(item, key, index) in city.cities" :key="index">
            <h5 ref="listGroup">{{key}}</h5>
            <ul>
              <li v-for="val in item" @click="picker(val.id)">{{val.name}}</li>
            </ul>
          </div>
      </div>
    </div>
    <div class="cityPicker-fixed" v-if="!keywords">
      <ul>
        <li v-for="(item, key, index) in city.cities" :key="index" :data-index="index" @touchstart="jump"
            >{{key}}
        </li>

      </ul>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "qneCity",
    data() {
      return {
        currentCity: '',
        city: '',
        keywords: '',
        list: []
      }
    },
    created() {
      this.currentCity = this.$route.query.city
      this.city = this.$store.state.city
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper, {
          //获取scroll事件,用来监听
          probeType: 3,
          click: true
        })
    },
    watch: {
      keywords(){
        if (!this.keywords) {
          this.list = []
          return
        }
        //const result = []
        let arr = Object.values(this.city.cities)
        arr.forEach((el)=>{
          el.forEach((val)=>{
            if (val.spell.startsWith(this.keywords) || val.name.startsWith(this.keywords)) {
              this.list.push(val)
            }
          })
        })
      }
    },
    computed: {
      hasNoData(){
        return !this.list.length
      }
    },
    methods: {
      jump(e) {
        //获取绑定的index
        let index = e.target.getAttribute('data-index')
        //使用better-scroll的scrollToElement方法实现跳转
        this.scroll.scrollToElement(this.$refs.listGroup[index], 1000)
      },
      picker(id){
        // console.log(id);
        this.$router.push({path: '/home?id=' + id})

      },
      pick(name){
        this.$router.push({path: '/home?name=' + name})
      },
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less">
  .qne-city {
    overflow: hidden;
    overflow-y: scroll;
    height: 100vh;
    width: 100vw;
    position: relative;

    .city-top {
      overflow: hidden;
      height: 1.58rem;
      position: relative;
      background-color: #00bcd4;
      .icon-top-icon {
        margin: .23rem 0 0 .2rem;
        font-size: .48rem;
        color: #ffffff;
        position: absolute;
        top: 0;
        left: 0;
      }
      h5 {
        color: #ffffff;
        font-weight: 400;
        font-size: .3rem;
        margin-top: .26rem;
      }
      #textControl {
        font-size: .2rem;
        outline: none;
        height: .62rem;
        position: absolute;
        bottom: .11rem;
        left: 0;
        width: 97%;
        border-radius: .1rem;
        border: none;
        margin: 0 .11rem;
        color: #757575;
        text-align: center;
      }
    }
    .city-current {
      height: 1.42rem;
      width: 100%;
      font-size: .2rem;
      h5 {
        height: .52rem;
        line-height: .52rem;
        text-align: left;
        padding-left: .2rem;
        color: #858585;
        background-color: #eeeeee;
      }
      ul {
        overflow: hidden;
        border-top: .01rem solid #cccccc;
        border-bottom: .01rem solid #cccccc;
        li {
          margin: .2rem .2rem;
          color: #333333;
          height: .5rem;
          line-height: .5rem;
          width: 2.04rem;
          text-align: center;
          border: .01rem solid #cccccc;
          border-radius: .1rem;
        }
      }
    }

    .city-hot {
      margin-bottom: .01rem;
      width: 100%;
      font-size: .2rem;
      h5 {
        height: .52rem;
        line-height: .52rem;
        text-align: left;
        padding-left: .2rem;
        color: #858585;
        background-color: #eeeeee;
      }
      ul {
        width: 100%;
        overflow: hidden;
        border-top: .01rem solid #cccccc;
        border-bottom: .01rem solid #cccccc;
        li {
          float: left;
          margin: .2rem .2rem;
          color: #333333;
          height: .5rem;
          line-height: .5rem;
          width: 2.04rem;
          text-align: center;
          border: .01rem solid #cccccc;
          border-radius: .1rem;
        }
      }
    }

    .city-picker-parent {
      width: 100%;
    }
    .city-picker {
      width: 100%;
      font-size: .2rem;
      h5 {
        height: .52rem;
        line-height: .52rem;
        text-align: left;
        padding-left: .2rem;
        color: #858585;
        background-color: #eeeeee;
      }
      ul {
        text-align: left;
        width: 98%;
        height: 100%;
        li {
          border-bottom: .01rem solid #cccccc;
          width: 100%;
          color: #333333;
          padding-left: .2rem;
          line-height: .75rem;
          height: 100%;
        }
        li:last-of-type {
          border-bottom: none;
        }
      }

    }
    .search-content {
      position: absolute;
      top: 1.58rem;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      .search-item {
        font-size: .28rem;
        border-bottom: .01rem solid #cccccc;
        text-align: left;
        padding-left: .2rem;
        color: gray;
        background-color: #eeeeee;
      }
    }
    .cityPicker-fixed {
      width: .3rem;
      height: 8.8rem;
      position: fixed;
      right: .1rem;
      top: 50%;
      transform: translateY(-50%);
      li {
        font-size: .3rem;
        color: #00bcd4;
        margin-top: .03rem;
      }
    }
  }

  .qne-city::-webkit-scrollbar {
    display: none;
  }

</style>
