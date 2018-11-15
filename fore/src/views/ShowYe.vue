<template>
    <div style="padding-bottom: 61px">
        <header>
            <p><a href="#/address">
                正在定位
            </a></p>
            <input type="text" placeholder="搜索饿了么商家、商品名称">
        </header>

        <div class="banner">
            <ul>
                <li v-for='(item, index) in items'
                :key="index">
                    <router-link to='/csqFood'>
                      <img :src="item.url" width="60%">
                    </router-link>
                    <p>{{ item.name }}</p>
                </li>
            </ul>
        </div>
        <div class="vip">
            <div class="vip_left">
                <i class="iconfont icon-huangguan-copy"></i>
                <span>超级会员</span>
                <span class="under">·每月领9元红包</span>
            </div>
            <div class="vip_right">
                <a href="#">
                    立即开通
                    <i class="iconfont icon-jiantou"></i>
                </a>
            </div>
        </div>

        <div class="pic_Active">
            <ul>
                <li v-for='(pic,index) in pics'
                :key="index">
                    <h2>{{pic.h2_name}}</h2>
                    <h3>{{pic.h3_name}}</h3>
                    <a href="#">
                        <h4>{{pic.h4_name}}
                            <i class="iconfont icon-jiantou"></i>
                        </h4>
                    </a>
                    <img :src="pic.url" width="50%">
                </li>
            </ul>
        </div>
        <div class="sim">
            —— 推荐商家 ——
        </div>
        <div class="ban">
            <ul>
                <li><router-link to="Show_sort">综合排序</router-link></li>
                <li><router-link to="Show_near">距离最近</router-link></li>
                <li><router-link to="Show_quality">品质联盟</router-link></li>
                <li><router-link to="Show_sort">筛选</router-link></li>
            </ul>
        </div>
        <div class="restaurants"  v-for="(item, index) in goods" :key="index">
            <div class="res_left">
                <img :src='getImgSrc(item.restaurant.image_path)'>
            </div>
            <div class="res_right">
                <div class="up">
                    <div class="h1_title">
                        <h3>{{ item.restaurant.name }}</h3>
                        <span>···</span>
                    </div>
                    <div class="num">
                        <div class="star_box">★★★★☆</div>
                        <span class="span_left">4.4</span>
                        <span class="span_right">月售{{ item.restaurant.recent_order_num }}单</span>
                    </div>
                    <div class="peiSong">
                        <div class="pei_left">
                            <span class="span_left">￥{{ item.restaurant.piecewise_agent_fee.rules[0].price }}起送</span>
                            <span class="span_right"> {{ item.restaurant.piecewise_agent_fee.description }}</span>
                        </div>
                        <div class="juli">
                            <span class="span_left">{{ item.restaurant.distance}}m</span>
                            <span class="span_right">{{ item.restaurant.order_lead_time }}分钟</span>
                        </div>
                    </div>
                    <div class="baozi">
                        <div class="left">
                            {{ item.restaurant.support_tags[0].text }}
                        </div>
                        <div class="right">
                            {{ item.restaurant.support_tags[0].text }}
                        </div>
                    </div>
                </div>
                <div class="down">
                    <div class="left">
                        <div class="sub">
                            <p class="p_up">减</p>
                            <p class="p_down">满50减10</p>
                        </div>
                        <div class="zhe">
                            <p class="p_up">折</p>
                            <p class="p_down">单品折扣</p>
                        </div>
                    </div>
                    <div class="right">
                        <span>7个活动</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      items: [
        {
          url: '../../static/img/1.webp',
          name: '美食'
        },
        {
          url: '../../static/img/2.webp',
          name: '商超便利'
        },
        {
          url: '../../static/img/3.webp',
          name: '午餐'
        },
        {
          url: '../../static/img/4.webp',
          name: '水果'
        },
        {
          url: '../../static/img/5.webp',
          name: '健康医药'
        },
        {
          url: '../../static/img/6.webp',
          name: '浪漫鲜花'
        },
        {
          url: '../../static/img/7.webp',
          name: '厨房生鲜'
        },
        {
          url: '../../static/img/8.webp',
          name: '地方小吃'
        },
        {
          url: '../../static/img/9.webp',
          name: '地方菜系'
        },
        {
          url: '../../static/img/10.webp',
          name: '麻辣烫'
        }
      ],
      pics: [
        {
          h2_name: '品质套餐',
          h3_name: '搭配齐全吃得好',
          h4_name: '立即抢购',
          url: '../../static/img/foot_1.webp'
        },
        {
          h2_name: '限量抢购',
          h3_name: '超值美味 9.9元起',
          h4_name: '26人正在抢',
          url: '../../static/img/foot_2.webp'
        }
      ],
      url: 'https://bird.ioliu.cn/v1/?url=https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=22.602965&longitude=114.117685&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5',
      goods: []
    }
  },
  methods: {
    getImgSrc (str) {
      var url = `//fuss10.elemecdn.com/${str.substr(0, 1)}/${str.substr(1, 2)}/${str.substr(3)}.${str.substr(32)}?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/`
      return url
    }
  },
  mounted () {
    axios.get(this.url).then(result => {
      var res = result.data.items
      this.goods = res
    })
  }
}
</script>

<style lang='scss' scoped>
@import url('../../static/font/iconfont.css');
a{
    text-decoration: none;
}
li{
    list-style-type: none;
}
*{
    margin: 0;
    padding: 0;
}
header{
    height: 100px;
    width: 100%;
    background: #0085ff;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    a{
        display: block;
        font-size: 0.23px;
        padding: 17px 17px 15px 17px;
        font-size: 18px;
        text-decoration: none;
        color: white;
        font-family: '微软雅黑';
    }
    input{
        margin-left: 17px;
        margin-right: 50px;
        text-align: center;
        height: 35px;
        width: 90%;
        font-size: 16px;
        font-weight: lighter;
        font-family: '微软雅黑';
    }
}
.banner{
    ul{
       display: flex;
       flex-wrap: wrap;
       width: 100%;
       margin: 15px 0;
       li{
           width: 20%;
           list-style: none;
           text-align: center;
           p{
              color: #666666;
              font-size: 12px;
              padding-bottom: 15px;
            }
          }
       }
}
.vip{
    display: flex;
    width: 96%;
    height: 44px;
    line-height: 44px;
    margin-left: 8px;
    margin-right: 8px;
    background: #feeec2;
    box-sizing: border-box;
    .vip_left{
        height: 44px;
        width: 55%;
        font-size: 16px;
        color: #644f1b;
        font-weight: bolder;
        .icon-huangguan-copy{
            color: #d7b165;
            padding-left: 12px;
            padding-right: 8px;
        }
        .under{
            font-size: 12px;
            padding-left: 5px;
            font-weight: normal;
        }
    }
    .vip_right{
        height: 33px;
        width: 45%;
        box-sizing: border-box;
        padding-left: 90px;
        font-size: 12px;
        .icon-jiantou{
            font-size: 12px;
            color: #644f1b;
        }
        a{
            color: #644f1b;
        }
    }
}
.pic_Active{
    width: 100%;
    ul{
        display: flex;
        width: 96%;
        margin-left: 8px;
        margin-right: 8px;
        box-sizing: border-box;
        justify-content: space-between;
        margin-top: 4px;
        li{
            width: 49%;
            color: #000000;
            background: #f9f9f9;
            height: 155px;
            box-sizing: border-box;
            padding: 17px 0 0 17px;
            position: relative;
            h2{
                font-size: 18px;
                padding-bottom: 10px;
            }
            h3{
                font-size: 12px;
                color: #7f7f7f;
                padding-bottom: 14px;
            }
            h4{
                font-size: 12px;
                color: #af8260;
                .icon-jiantou{
                    font-size: 12px;
                }
            }
            img{
                position: absolute;
                right: 0;
            }
        }
    }
}
.lunbo{
    margin-top: 4px;
    border: 1px solid red;
    width: 96%;
    height: 98px;
    margin-left: 8px;
    box-sizing: border-box;
    .mt-swipe{
        height: 98px;
        .mint-swipe-items-wrap{
            overflow: hidden;
            .mint-swipe-item{
                float: left;
                img{
                    height: 100%;
                }
            }
        }
    }
}
.sim{
    height: 50px;
    padding-top: 23px;
    box-sizing: border-box;
    text-align: center;
}
.ban{
    width: 95%;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 25px;
    margin-bottom: 15px;
    ul{
        display: flex;
        li{
            width: 25%;
            text-align: center;
            a{
                color: #7f7f7f;
            }
        }
    }
}
.restaurants{
    display: flex;
    height: 195px;
    width: 96%;
    margin-left: 8px;
    border-top: 1px solid #eee;
    border-bottom: 1px solod #636363;
    z-index: 100;
    img{
        width: 100%;
        display: block;
    }
    .res_left{
        height: 65px;
        width: 70px;
        margin-top: 17px;
        margin-left: 6px;
        // border: 1px solid green;
    }
    .res_right{
        margin-top: 17px;
        width: 330px;
        display: flex;
        flex-direction: column;
        margin-left: 12px;
        .up{
            width: 100%;
            display: flex;
            flex-direction: column;
            border-bottom: 1px dashed #eee;
            .h1_title{
                height: 33px;
                font-size: 16px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                line-height: 33px;
                h3{
                    font-size: 18px;
                    font-weight: 900;
                    color: #333333;
                }
            }
            .num{
                display: flex;
                flex-direction: row;
                height: 16px;
                font-size: 12px;
                line-height: 16px;
                color: #666;
                box-sizing: border-box;
                .star_box{
                    height: 100%;
                    width: 60px;
                    // background: lightsalmon;
                }
                .span_left{
                    padding-left: 8px;
                }
                .span_right{
                    padding-left: 8px;
                }
            }
            .peiSong{
                margin-top: 10px;
                height: 16px;
                font-size: 12px;
                color: #666;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .span_left{
                    border-right: 1px solid #eee;
                    padding-right: 8px;
                }
                .span_right{
                    padding-left: 3px;
                }
            }
            .baozi{
                margin-top: 14px;
                display: flex;
                flex-direction: row;
                font-size: 12px;
                color: #666;
                .left{
                    border: 1px solid #ddd;
                    height: 16px;
                    line-height: 16px;
                }
                .right{
                    border: 1px solid #ddd;
                    height: 16px;
                    line-height: 16px;
                    margin-left: 8px;
                    margin-bottom: 13px;
                }
            }
        }
        .down{
            display: flex;
            flex-direction: row;
            font-size: 12px;
            justify-content: space-between;
            .left{
                display: flex;
                flex-direction: column;
                .sub{
                    display: flex;
                    flex-direction: row;
                    .p_up{
                        display: block;
                        background: rgb(240, 115, 115);
                        color: #fff;
                        margin-left: 5px;
                        margin-top: 5px;
                        height: 16px;
                        width: 16px;
                        line-height: 16px;
                        text-align: center;
                        border-radius: 5px;
                    }
                    .p_down{
                        display: block;
                        margin-top: 5px;
                        margin-left: 5px;
                        color: #666;
                        text-overflow: ellipsis;
                        width: 214px;
                    }
                }
                .zhe{
                    display: flex;
                    flex-direction: row;
                    .p_up{
                        display: block;
                        background: rgb(240, 115, 115);
                        color: #fff;
                        margin-left: 5px;
                        margin-top: 5px;
                        height: 16px;
                        width: 16px;
                        line-height: 16px;
                        text-align: center;
                        border-radius: 5px;
                    }
                    .p_down{
                        display: block;
                        margin-top: 5px;
                        margin-left: 5px;
                        color: #666;
                        text-overflow: ellipsis;
                        width: 214px;
                    }
                }
            }
        }
    }
}
</style>
