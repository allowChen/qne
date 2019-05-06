<template>
    <div class="weekendhot">
          <div class="weekendhot-top">
            <span class="top-left">本周热门榜单</span>
            <span class="top-right">全部榜单</span>
          </div>
        <div class="content-parent" ref="wrapper">
          <ul ref="picList">
            <li v-for="(item, i) in weekendHot" :key="i" class="weekendhot-content">
              <img :src="item.imgUrl">
              <p class="content-text">{{item.desc}}</p>
              <p class="content-price">{{item.price}}</p>
            </li>
          </ul>
        </div>

    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "qneWeekendHot",
        data(){
          return {
            weekendHot: [],
          }
        },
        created(){
          this.weekendHot = this.$store.state.weekendHot.data.WeekendHot
        },
        mounted(){
          this.$nextTick(()=>{
            this._initPics();    //横向滚动
          });
        },
        watch:{
          //监听weekendHot变量的值的变化再初始化
          //防止滚动不生效
          'weekendHot'(){
            this.$nextTick(()=>{
              this._initPics();
            });
          }
        },
        methods: {
          _initPics(){

            if (this.weekendHot) {
              //先判断是否有这个属性
              //这里之所以要设置宽度，是因为ul和容器的宽度一样大
              //当ul的宽度大于容器的宽度，才能横向滚动
              let picWidth = 2.2; //设置每张图片的宽度
              let margin = 0;
              //width是所有图片的宽度和以及margin的大小和
              let width = (picWidth + margin) * this.weekendHot.length - margin;

              // console.log(width);
              this.$refs.picList.style.width = width + 'rem'; //设置ul的宽度
              this.$nextTick(() => {
                if (!this.picScroll) {
                  this.picScroll = new BScroll(this.$refs.wrapper, {
                    scrollX: true,
                    eventPassthrough: 'vertical' //忽略竖直方向的滚动
                  });
                } else {
                  this.picScroll.refresh();
                }
              });
            }
          }
        }
    }
</script>

<style scoped lang="less">
  ul {
    list-style-type: none;
  }
  .weekendhot {
    height: 3.54rem;
    width: 100%;
    border-top: .15rem solid #cccccc;
    border-bottom: .15rem solid #cccccc;
    position: relative;
    .weekendhot-top {
      width: 100%;
      position: relative;
      .top-left {
        font-size: .26rem;
        position: absolute;
        top: .15rem;
        left: .15rem;
        color: #333333;
      }
      .top-right {
        font-size: .26rem;
        position: absolute;
        right: .4rem;
        top: .15rem;
        color: #868686;
      }
      .top-right:after {
        content: '\e900';
        font-size: .26rem;
        font-family: icomoon;
        display: block;
        color: #868686;
        position: absolute;
        top: .08rem;
        right: -.2rem;
      }
    }
    .content-parent {
      width: 100%;
      height: 2.5rem;
      margin-top: .7rem;
      overflow: hidden;
      white-space: nowrap;
      ul {
        white-space: nowrap;
      }
      .weekendhot-content {
        display: inline-block;
        width: 2.2rem;
        height: 1.5rem;
        padding-left: .15rem;
        text-align: center;
        img {
          vertical-align: top;
          width: 100%;
          height: 100%;
          background-size: cover;
        }
        .content-text {
          width: 2rem;
          margin-top: .1rem;
          font-size: .24rem;
          color: #898989;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .content-price {
          margin-top: .1rem;
          color: #ff982c;
          font-size: .22rem;
        }
      }
    }

  }
</style>
