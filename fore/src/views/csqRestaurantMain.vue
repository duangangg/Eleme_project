<template>
  <div>
    <div>
      <div class="shop-nav" style="background-image: url('//fuss10.elemecdn.com/b/c3/dc37065d45cd4009d7702ffd17c08png.png?imageMogr/format/webp/thumbnail/350x/thumbnail/!40p/blur/10x6/');
      background-color: rgba(119,103,137,.43);">
        <router-link to="/csqFood" class="iconfont icon-iconfontjiantou1"></router-link>
        <img src="//fuss10.elemecdn.com/b/c3/dc37065d45cd4009d7702ffd17c08png.png?imageMogr/format/webp/thumbnail/150x/">
      </div>
      <div class="shop-main">
        <div class="shop-main-hd">
          <h2>华莱士(宁德师院店)</h2>
          <p class="shop-pj">
            <span>评价4.5</span>
            <span>月售885单</span>
            <span>商家配送约23分钟</span>
          </p>
        </div>
        <div class="discount">
          <div>
            <em>满减</em>
            <span>满30减10，满60减15</span>
          </div>
          <span>2个优惠</span>
        </div>
        <div class="notice">公告：欢迎光临，用餐高峰期请提前下单，谢谢。</div>
      </div>
    </div>
    <div class="shop-tab">
      <div>
        <p class="active">点餐</p>
      </div>
      <div>
        <p>评价</p>
      </div>
      <div>
        <p>商家</p>
      </div>
    </div>
    <div class="goods-main">
      <div class="recommend">
        <p class="tj">商家推荐</p>
        <ul>
          <li v-for="(item,index) in listGoods.items"
          :key="index">
          <img :src="'//fuss10.elemecdn.com/'+item.photos[0].substr(0,1)+'/'+item.photos[0].substr(1,2)+'/'+item.photos[0].substr(3)+'.'+item.photos[0].substr(32)+'?imageMogr/format/webp/thumbnail/240x/'">
            <p class="goods-name">{{ item.name }}</p>
            <p class="goods-ys">月售{{ item.month_sales }}好评率{{ item.specfoods[0].recent_rating }}%</p>
            <div>
              <p>¥{{ item.specfoods[0].price }}</p>
              <div>
                <span class="minus" @click='fn2(index)'>－</span>
                <i class="num" ref='aadd'>{{item.rating_count}}</i>
                <span class="add" @click='fn1(index)' ref='add'>＋</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="menuview">
        <ul class="menucategory">
          <li>热销</li>
          <li>优惠</li>
          <li>超值折扣</li>
          <li>套餐满减</li>
          <li>汉堡</li>
          <li>卷</li>
          <li>全鸡</li>
          <li>小食</li>
          <li>饮料</li>
          <li>新品尝鲜</li>
        </ul>
        <div class="foods-data">
          <p class="hot">
            <strong>热销</strong>
            <span>大家喜欢吃，才叫真好吃。</span>
          </p>
          <ul>
            <li v-for="(item,index) in listGoods1"
            :key="index">
              <img :src="'//fuss10.elemecdn.com/'+item.photos[0].substr(0,1)+'/'+item.photos[0].substr(1,2)+'/'+item.photos[0].substr(3)+'.'+item.photos[0].substr(32)+'?imageMogr/format/webp/thumbnail/240x/'">
              <div>
                <h3>{{ item.name }}</h3>
                <p class="goods-data-main">{{ item.description }}</p>
                <p class="goods-data-pj">
                  <span>月售{{ item.month_sales }}份</span>
                  <span>好评率100%</span>
                </p>
                <p class="zk">6.8折</p>
                <div>
                  <em class="price">¥{{ listGoods3[index].specfoods[0].price }}</em>
                  <div>
                    <span class="minus">－</span>
                    <i class="num">0</i>
                    <span class="add">＋</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
export default {
  name: 'csqRestaurantMain',
  data () {
    return {
      isShow: false,
      urlGoods: 'http://localhost:8080/static/listGoods.json',
      listGoods: [],
      listGoods1: [],
      listGoods2: [],
      listGoods3: []
    }
  },
  mounted () {
    this.$axios({
      method: 'get',
      url: '/static/listGoods.json',
      dataType: 'json',
      crossDomain: true,
      cache: false
    }).then(resolve => {
      this.listGoods = resolve.data.recommend[0]
      // console.log('请求成功', resolve.data)
    })
    this.$axios({
      method: 'get',
      url: '/static/listGoods.json',
      dataType: 'json',
      crossDomain: true,
      cache: false
    }).then(resolve => {
      this.listGoods1 = resolve.data.menu[0].foods
      this.listGoods3 = resolve.data.menu[0].foods
      // console.log('请求成功', resolve.data.menu[0].foods[0].specfoods[0].price)
    })
    this.$axios({
      method: 'get',
      url: '/static/listGoods.json',
      dataType: 'json',
      crossDomain: true,
      cache: false
    }).then(resolve => {
      this.listGoods2 = resolve.data
      console.log('请求成功', resolve.data)
    })
  },
  methods: {
    fn1 (index) {
      // console.log(++this.$refs.aadd[index].innerHTML)
      if (this.listGoods.items[index].rating_count >= 0) {
        this.listGoods.items[index].rating_count++
        console.log(++this.$refs.aadd[index].innerHTML)
      }
    },
    fn2 (index) {
      if (this.listGoods.items[index].rating_count <= 0) {
        this.listGoods.items[index].rating_count = 0
      } else {
        this.listGoods.items[index].rating_count--
        console.log(--this.$refs.aadd[index].innerHTML)
      }
      console.log()
    }
  }
}
</script>

<style lang="scss" scoped>
.shop-nav {
  height: 85px;
  width: 100%;
  position: relative;
  a {
    color: #999;
    position: absolute;
    top: 4.5px;
    left: 4.5px;
  }
  img {
    width: 64px;
    height: 64px;
    position: absolute;
    bottom: -14px;
    left: 50%;
    margin-left: -32px;
  }
}

.shop-main {
  padding-top: 26px;
  text-align: center;
  .shop-main-hd {
    width: 230px;
    margin: 0 auto;
    h2 {
      font-weight: bold;
    }
    .shop-pj {
      display: flex;
      justify-content: space-around;
    }
  }
  .discount {
    margin: 10px 32px 0;
    display: flex;
    justify-content: space-between;
    div {
      em {
        font-style: normal;
        width: 46px;
        height: 22px;
        background: red;
        border-radius: 3px;
        color: #fff;
      }
      span {
        color: #000;
      }
    }
    span {
      color: #9d9d9d;
    }
  }
  .notice {
    color: #9d9d9d;
    margin: 7.5px 32px 8.5px;
    height: 12px;
    line-height: 12px;
    width: 206px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
.shop-tab {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 34px;
  line-height: 34px;
  border-bottom: 1px solid #f5f5f5;
  div {
    flex: 1;
    text-align: center;
    p {
      width: 25.5px;
      height: 31px;
      color: #8d8d8d;
      display: inline-block;
      border-bottom: 3px solid #fff;
    }
    .active {
      color: #333;
      font-weight: 700;
      border-bottom: 3px solid #59afff;
    }
  }
}
.goods-main {
  .recommend {
    padding-top: 13.5px;
    .tj {
      padding-left: 13.5px;
      margin-bottom: 8.5px;
      font-weight: bold;
    }
    ul {
      overflow: auto;
      display: flex;
      flex-direction: row;
      li {
        margin: 0 11px 0 11px;
        padding-bottom: 13.5px;
        width: 102px;
        img {
          height: 102px;
        }
        p {
          width: 102px;
          height: 12px;
          line-height: 12px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .goods-name {
          margin: 6px 0 3px 0;
        }
        .goods-ys {
          margin-bottom: 6px;
        }
        div {
          display: flex;
          justify-content: space-between;
          p {
            font-size: 14px;
            height: 18px;
            line-height: 18px;
            width: 24px;
            color: #ff6750;
          }
          div {
            span {
              text-align: center;
              width: 18px;
              height: 18px;
              line-height: 18px;
              border: 1px solid #2395ff;
              border-radius: 50%;
            }
            i {
              text-align: center;
              width: 18px;
              height: 18px;
              line-height: 18px;
            }
            .add {
              background: #2395ff;
              color: #fff;
            }
            .minus {
              background: #fff;
              color: #2395ff;
            }
          }
        }
      }
    }
  }
}
.menuview {
  display: flex;
  position: relative;
  bottom: 0;
  height: 455px;
  .menucategory {
    background: #f8f8f8;
    width: 75px;
    height: 455px;
    padding-bottom: 34px;
    position: relative;
    bottom: 0;
    li {
      padding: 15px 6px;
    }
  }
}
.foods-data {
  overflow: auto;
  .hot {
    margin-left: 8.5px;
    padding: 6.4px 25.5px 6.4px 0;
  }
  ul {
    display: flex;
    flex-direction: column;
    li {
      width: 300px;
      height: 83px;
      padding: 8.5px 0;
      display: flex;
      justify-content: space-between;
      img {
        width: 81px;
        height: 81px;
        margin-left: 8.5px;
      }
      div {
        width: 180px;
        padding-right: 12.8px;
        h3 {
          margin: 4.2px 0;
          height: 12px;
          line-height: 12px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .goods-data-main {
          margin: 4.2px 0;
          height: 12px;
          line-height: 12px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .goods-data-pj {
          margin: 5.5px;
        }
        .zk {
          color: #ff644d;
          border: 0.8px solid #fef9f8;
          border-radius: 3px;
          width: 30px;
          height: 12px;
          text-align: center;
          line-height: 12px;
        }
        div {
          display: flex;
          justify-content: space-between;
          .price {
            color: #ff644d;
          }
          div {
            width: 100px;
            padding: 0;
            span {
              text-align: center;
              width: 18px;
              height: 18px;
              line-height: 18px;
              border: 1px solid #2395ff;
              border-radius: 50%;
            }
            i {
              text-align: center;
              display: inline-block;
              width: 18px;
              height: 18px;
              line-height: 18px;
            }
            .add {
              background: #2395ff;
              color: #fff;
            }
            .minus {
              background: #fff;
              color: #2395ff;
            }
          }
        }
      }
    }
  }
}
</style>
