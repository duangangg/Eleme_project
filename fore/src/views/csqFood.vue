<template>
    <div class="food">
        <div class="food_hd">
            <router-link to="/#" class="iconfont icon-iconfontjiantou1"></router-link>
            <i>美食</i>
        </div>
        <div class="food_class">
          <ul class="nav">
            <li>
              <router-link to="/csqFood">全部</router-link>
            </li>
            <li v-for="(item,index) in list3"
            :key="index">
              <router-link to="/csqEasyFood">{{list3[index].name}}</router-link>
            </li>
          </ul>
          <div class="categories" @click="isShow = !isShow">
            <span class="iconfont icon-iconfontarrows1"></span>
          </div>
        </div>

        <transition name="categories">
          <div v-if="isShow" class="filter_category_open">
            <div class="categories_main">
              <div class="top">
                <h3>请选择分类</h3>
                <span class="iconfont icon-guanbi" @click="isShow = !isShow"></span>
              </div>
              <div class="categoriesMain">
                <ul class="class_name">
                  <li>
                    <div class="blue">
                      <span class="menu-name">美食</span>
                      <span class="menu-num">89</span>
                    </div>
                  </li>
                  <li v-for="(item,index) in list4"
                  :key="index">
                    <div>
                      <span class="menu-name">{{list4[index].name}}</span>
                      <span class="menu-num">{{list4[index].count}}</span>
                    </div>
                  </li>
                </ul>
                <ul class="class_main">
                  <li v-for="(item,index) in list5"
                  :key="index">
                    <img :src="'//fuss10.elemecdn.com/'+list5[index].image_url.substr(0,1)+'/'+list5[index].image_url.substr(1,2)+'/'+list5

[index].image_url.substr

(3)+'.'+list5[index].image_url.substr(32)+'?imageMogr/format/webp/thumbnail/!80x80r/gravity/Center/crop/80x80/'">
                    <span class="menu_all">{{list5[index].name}}</span>
                    <span>{{list5[index].count}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </transition>

        <div class="main">
          <div class="convenience">
            <div class="convenience_hd">
              <span>省心套餐</span>
              <a href="#">更多 ></a>
            </div>
            <div class="convenience_main">
              <div class="convenience_1" v-for="(item,index) in list2"
              :key="index">
                <img :src="'//fuss10.elemecdn.com/'+list2[index].foods[0].image_path.substr(0,1)+'/'+list2[index].foods[0].image_path.substr(1,2)+'/'+list2[index].foods[0].image_path.substr

(3)+'.'+list2[index].foods[0].image_path.substr(32)+'?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'">
                <p class="goods_name">{{list2[index].foods[0].name}}</p>
                <p class="hp">
                  {{list2[index].foods[0].food_rate}}</p>
                <p class="price">
                  ¥{{list2[index].foods[0].price}}
                  </p>
              </div>
            </div>
          </div>
          <transition name="restaurant">
            <div id="searchBar" class="searchBar">
              <div class="restaurant-categroy" :class="searchBarFixed == true ? 'isFixed' : ''">
                <div>
                  <span>综合排序</span>
                  <span class="iconfont icon-xiajiantou"></span>
                </div>
                <div>距离最近</div>
                <div>品质联盟</div>
                <div @click="show=!show">
                  <span>筛选</span>
                  <span class="iconfont icon-shaixuan"></span>
                </div>
              </div>
            </div>
          </transition>
            <div v-if="show">
              <ul>
                <li></li>
              </ul>
            </div>
          <ul class="restaurant-main">
            <li v-for="(item,index) in list1"
            :key="index">
              <div class="restaurant-hd">
                <div>
                  <img :src="'//fuss10.elemecdn.com/'+list1[index].restaurant.image_path.substr(0,1)+'/'+list1[index].restaurant.image_path.substr(1,2)+'/'+list1[index].restaurant.image_path.substr

(3)+'.'+list1[index].restaurant.image_path.substr(32)+'?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'">
                </div>
                <div class="restaurant1_main">
                  <div>
                    <router-link to="/csqRestaurantMain">
                      <span class="restaurantName">
                      {{list1[index].restaurant.name}}</span>
                    </router-link>
                  </div>
                  <div class="pj">
                    <span>★★★★★</span>
                    <span>5</span>
                    <span>月售{{list1[index].restaurant.recent_order_num}}单</span>
                  </div>
                  <div>
                    <div>
                      <span>¥{{list1[index].restaurant.float_minimum_order_amount}}起送</span>|
                      <span>免配送费</span>
                    </div>
                    <div>
                      <span>{{((list1[index].restaurant.distance)/1000).toFixed(2)}}km</span>|
                      <span>{{list1[index].restaurant.order_lead_time}}分钟</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="restaurant-bd">
                <p>{{list1[index].restaurant.name}}</p>
                <p class="restaurant-bd-p">
                  <i>减</i>
                  <span>{{list1[index].restaurant.activities[0].tips}}</span>
                  <span class="hd">{{list1[index].restaurant.activities.length}}个活动</span>
                </p>
                <p>
                  <i>特</i>
                  <span>单品定价</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'csqFood',
  data () {
    return {
      isShow: false,
      show: false,
      urlT: 'https://bird.ioliu.cn/v1/?url=',
      url1: 'https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=26.658017&longitude=119.597438&keyword=&offset=0&limit=8&extras[]=activities&extras[]=tags&terminal=h5&rank_id=609cd4001de6415899d6169f0f861b6a&brand_ids[]=&restaurant_category_ids[]=209&restaurant_category_ids[]=212&restaurant_category_ids[]=213&restaurant_category_ids[]=214&restaurant_category_ids[]=215&restaurant_category_ids[]=216&restaurant_category_ids[]=217&restaurant_category_ids[]=219&restaurant_category_ids[]=265&restaurant_category_ids[]=266&restaurant_category_ids[]=267&restaurant_category_ids[]=268&restaurant_category_ids[]=269&restaurant_category_ids[]=221&restaurant_category_ids[]=222&restaurant_category_ids[]=223&restaurant_category_ids[]=224&restaurant_category_ids[]=225&restaurant_category_ids[]=226&restaurant_category_ids[]=227&restaurant_category_ids[]=228&restaurant_category_ids[]=231&restaurant_category_ids[]=232&restaurant_category_ids[]=263&restaurant_category_ids[]=218&restaurant_category_ids[]=234&restaurant_category_ids[]=235&restaurant_category_ids[]=236&restaurant_category_ids[]=237&restaurant_category_ids[]=238&restaurant_category_ids[]=211&restaurant_category_ids[]=229&restaurant_category_ids[]=230&restaurant_category_ids[]=264',
      list1: [],
      url2: 'https://h5.ele.me/restapi/shopping/v1/sale_list_index?type=quality_meal&latitude=26.658017&longitude=119.597438',
      list2: [],
      url3: 'https://h5.ele.me/restapi/shopping/v2/foods_page/sift_factors?entry_id=20004689&longitude=119.597438&latitude=26.658017&terminal=h5',
      list3: [],
      url4: 'https://h5.ele.me/restapi/shopping/v2/restaurant/category?latitude=26.658017&longitude=119.597438',
      list4: [],
      list5: [],
      list6: []
    }
  },
  mounted () {
    this.$axios.get(this.urlT + this.url1).then(result => {
      var res = result.data.items
      this.list1 = res
      // console.log(this.list1[0].restaurant.image_path.substr(32))
    })
    this.$axios.get(this.urlT + this.url2).then(result => {
      var res = result.data.query_list
      this.list2 = res
      // console.log(this.list2)
    })
    this.$axios.get(this.urlT + this.url3).then(result => {
      var res = result.data.slice(1)
      this.list3 = res
      this.list6 = result.data.slice(1).slice(2)
      // console.log(this.list3)
    })
    this.$axios.get(this.urlT + this.url4).then(result => {
      var res = result.data.slice(1).slice(1)
      this.list4 = res.slice(0, 7)
      this.list5 = result.data[1].sub_categories
      console.log(this.list4)
    })
    window.addEventListener('scroll', this.handleScroll)
  }
  // handleScroll () {
  //   var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  //   var offsetTop = document.querySelector('#searchBar').offsetTop
  //   if (scrollTop > offsetTop) {
  //     this.searchBarFixed = true
  //   } else {
  //     this.searchBarFixed = false
  //   }
  //   console.log(scrollTop)
  // }
}
</script>
<style lang="scss" scoped>
.food_hd {
  position: fixed;
  top: 0;
  width: 100%;
  height: 38px;
  line-height: 38px;
  background: #008eff;
  font-size: 15px;
  color: #fff;
  border-bottom: 1px solid #28A1FF;
  .iconfont {
    float: left;
    margin-left: 6px;
    color: #fff;
  }
  i {
    font-style: normal;
    position: absolute;
    top: 0;
    left: 175px;
  }
}
.food_class {
  overflow: auto;
  position: fixed;
  top: 39px;
  .nav {
    width: 200%;
    padding-left: 13px;
    background: #008eff;
    height: 37px;
    padding-bottom: 5px;
    font-size: 12px;
    li {
      float: left;
      margin-right: 24px;
      padding-top: 11px;
    }
    a {
      color: #A4DBFF;
      padding: 0 0 5px 0;
      text-decoration: none;
    }
    .router-link-active {
      color: #fff;
      border-bottom: 1px solid #fff;
    }
  }
  .categories {
    height: 42px;
    line-height: 42px;
    background: #008eff;
    width: 34px;
    position: fixed;
    right: 0;
    top: 39px;
    color: #fff;
    text-align: center;
  }
}

// ------------请选择分类------------
.filter_category_open {
  // display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,.5);
  .categories_main {
    width: 100%;
    background: #fff;
    .top {
      height: 34px;
      line-height: 34px;
      display: flex;
      justify-content: space-between;
      padding: 0 6px 0 13px;
      background: #F9F9F9;
      h3 {
        font-size: 12px;
      }
      .iconfont {
        width: 12px;
        height: 12px;
        color: #333;
        font-size: 12px;
        margin-right: 4px;
      }
    }
    .categoriesMain {
      display: flex;
      justify-content: space-between;
      .class_name {
        width: 111px;
        li {
          padding-right: 8px;
          height: 41px;
          align-items: center;
          display: flex;
          color: #666666;
          div {
            height: 17px;
            width: 100%;
            border-left: 4px #fff solid;
            display: flex;
            justify-content: space-between;
            .menu-name {
              height: 17px;
              line-height: 17px;
              padding-left: 15px;
              font-size: 12px;
            }
            .menu-num {
              width: 25px;
              height:  17px;
              line-height: 17px;
              font-size: 12px;
            }
          }
          .blue {
            height: 17px;
            border-left: 4px #2395FF solid;
            color: #848484;
          }
        }
      }
      .class_main {
        color: #666666;
        width: 178px;
        padding: 0 12px 0 18px;
        li {
          height: 41px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          img {
            height: 31px;
            width: 31px;
            margin-right: 11px;
          }
          span {
            height: 12px;
            line-height: 12px;
            font-size: 12px;
          }
          .menu_all {
            width: 64px;
            text-align: left;
          }
        }
      }
    }
  }
}

// ------------省心套餐-------------
.main {
    padding: 8px 9px 9px;
    // width: 302px;
    margin-top: 80px;
    .convenience {
      .convenience_hd {
        height: 16px;
        margin: 13px 0 7px 0;
        display: flex;
        justify-content: space-between;
        span {
          color: #333;
        }
        a {
          display: inline-block;
          width: 36px;
          color: #666;
          text-decoration: none;
        }
      }
      .convenience_main {
        overflow: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        div {
          margin: 0 12px;
          img {
            width: 93px;
          }
          p {
            line-height: 12px;
            font-size: 12px;
            margin-top: 3px;
          }
          .goods_name {
            width: 93px;
            height: 12px;
            white-space: nowrap;
            text-overflow:ellipsis;
            overflow: hidden;
          }
          .hp {
            color: #999;
          }
          .price {
            font-weight: bold;
          }
        }
      }
    }
  }

// ----------综合排序------------
.isFixed{
    position:fixed;
    background-color:#fff;
    top:0;
    z-index:999;
  }
.restaurant-categroy {
  display: flex;
  width: 100%;
  flex-direction: row;
  div {
    color: #666;
    font-size: 12px;
    flex: 1;
    height: 33px;
    line-height: 33px;
    text-align: center;
    align-items: center;
    .iconfont {
      font-size: 6px;
    }
  }
  .restaurant-enter-active {
      animation: xx 2s;
    }
  .restaurant-leave-active {
    animation: xx 2s reverse;
  }
  @keyframes xx {
      100% {
        .convenience {
          display: none;
        }
      }
  }
}
// ----------------------------------------
.restaurant-main {
  overflow: auto;
  .restaurant-hd {
    display: flex;
    flex-direction: row;
    padding: 13px 0;
    div {
      img {
        width: 55px;
        height: 55px;
      }
    }
    .restaurant1_main {
      padding-left: 22px;
      div {
        .restaurantName {
          color: #000;
          font-weight: bold;
          padding-bottom: 8px;
        }
      }
      .pj {
        font-size: 12px;
        text-align: left;
        span {
          padding-right: 4px
        }
      }
    }
  }
  .restaurant-bd {
    padding-left: 75.5px;
    .hd {
      padding-right: 15px;
      float: right;
    }
    .restaurant-bd-p {
      padding-top: 13px;
    }
    i {
      font-style: normal;
      color: #fff;
      width: 29px;
      height: 29px;
      background: red;
      border-radius: 3px;
    }
  }
}
</style>
