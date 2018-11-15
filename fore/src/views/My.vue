<template>
    <div class="My">
        <div class="food_hd">
            <router-link to="/#" class="iconfont icon-jiantou-copy"></router-link>
            <i>我的</i>
        </div>
        <div class="banner1" @click="loginreg">
            <div class="left">
                <div class="pic">
                    <img src='../../static/img/down.png'>
                </div>
                <div class="mid" ref="uname">
                        <a href="/login">登录/</a>
                        <a href="/rigister">注册</a>
                        <p class="down">登录后享受更多特权</p>
                </div>
            </div>
            <div class="right">
               <a href="#">
                   <i class="iconfont icon-jiantou1"></i>
               </a>
            </div>
        </div>
        <div class="list">
            <ul>
                <li>
                   <p class="up up1"><i class="iconfont icon-qian"></i></p>
                   <p class="down">钱包</p>
                </li>
                <li>
                    <p class="up up2"><i class="iconfont icon-hongbao"></i></p>
                    <p class="down">红包</p>
                </li>
                <li>
                    <p class="up up3"><i class="iconfont icon-jinbi"></i></p>
                    <p class="down">金币</p>
                </li>
            </ul>
        </div>
        <div class="address">
            <div class="left">
                <i class="iconfont icon-fujin"></i>
                <p>我的地址</p>
            </div>
            <div class="right">
                <a href="#">
                   <i class="iconfont icon-jiantou1"></i>
               </a>
            </div>
        </div>
        <div class="big">
            <div class="add_up">
                <div class="left">
                    <i class="iconfont icon-fujin"></i>
                    <p>金币商城</p>
                </div>
                <div class="right">
                    <a href="#">
                    <i class="iconfont icon-jiantou1"></i>
                </a>
                </div>
            </div>
            <div class="add_down">
                <div class="left">
                    <i class="iconfont icon-fujin"></i>
                    <p>分享哪10元现金</p>
                </div>
                <div class="right">
                    <a href="#">
                    <i class="iconfont icon-jiantou1"></i>
                </a>
                </div>
            </div>
        </div>
        <div class="small">
            <div class="add_up">
                <div class="left">
                    <i class="iconfont icon-fujin"></i>
                    <p>我的客服</p>
                </div>
                <div class="right">
                    <a href="#">
                    <i class="iconfont icon-jiantou1"></i>
                </a>
                </div>
            </div>
            <div class="add_down">
                <div class="left">
                    <i class="iconfont icon-fujin"></i>
                    <p>下载饿了么APP</p>
                </div>
                <div class="right">
                    <a href="#">
                    <i class="iconfont icon-jiantou1"></i>
                </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  methods: {
    loginreg () {
      this.$router.push({path: '/login'})
    }
  },
  mounted () {
    if (Cookies.get('username')) {
      this.$refs.uname.innerText = Cookies.get('username')
    }
  }
}
</script>

@import url('../../static/font/iconfont.css');
<style lang='scss' scoped>
a{
    text-decoration: none;
}
html{
    background: #f5f5f5;
}
header{
    display: flex;
    height: 50px;
    width: 100%;
    background:#2395ff;
    align-items: center;
    color:#fff;
    font-size: 18px;
    font-weight: 700;
    a{
        width: 43%;
        display: inline-block;
        margin-left: 8px;
        color: #fff;
    }
    p{
        display: block;
        text-align: center;
        font-family: PingFang SC,Helvetica Neue,Arial,sans-serif;
    }
}
.food_hd {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #008eff;
  font-size: 18px;
  color: #fff;
  border-bottom: 1px solid #2395ff;
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
.banner1{
    margin-top: 50px;
    height: 120px;
    background:#2395ff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
        display: flex;
        margin-left: 8px;
        height: 70px;
        .pic{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            overflow: hidden;
            img{
                width: 60px;
            }
        }
        .mid{
            margin-left: 10px;
            color: #fff;
            a{
                font-size: 23px;
                font-weight: 700;
                color: #fff;
            }
            .down{
                display: block;
                margin-top: 10px;
                font-family: PingFang SC,Helvetica Neue,Arial,sans-serif;
            }
        }
    }
    .right{
        margin-right: 8px;
        .icon-jiantou1{
            color: #fff;
        }
    }
}
.list{
    width: 100%;
    background: #fff;
    ul{
        display: flex;
        width: 100%;
        justify-content: space-around;
        text-align: center;
        li{
            list-style: none;
            height: 90px;
            .up{
                display: block;
                height: 30px;
                width: 30px;
                border-radius: 50%;
                text-align: center;
                line-height: 30px;
                overflow: hidden;
                margin-top: 15px;
            }
            .down{
                color: #333;
                display: block;
                margin-bottom: 10px;
                margin-top: 10px;
            }
            .up1{
                background: #ff9900;
                height: 26px;
                width: 26px;
                line-height: 26px;
                text-align: center;
            }
            .up2{
                background: #ff5f3e;
                height: 27px;
                width: 27px;
                line-height: 27px;
                text-align: center;
            }
            .up3{
                background: greenyellow;
            }
            .icon-qian{
                font-size: 28px;
                color: #fff;
            }
            .icon-hongbao{
               font-size: 21px;
               color: #fff;
            }
            .icon-jinbi{
                font-size: 28px;
                color: #fff;
            }
        }
    }
}
.address{
    margin-top: 10px;
    background: #fff;
    height: 50px;
    display: flex;
    line-height: 50px;
    flex-direction: row;
    justify-content: space-between;
    .left{
        display: flex;
        .icon-fujin{
            font-size: 30px;
            display: block;
            margin-left: 13px;
            color: #2395ff;
        }
        p{
            display: block;
            color: #333;
            margin-left: 13px;
            font-size: 18px;
        }
    }
    .right{
        margin-right: 13px;
        .icon-jiantou1{
            font-size: 12px;
        }
    }
}
.big{
    padding-top: 5px;
    box-sizing: border-box;
    .add_up{
        margin-top: 10px;
        background: #fff;
        height: 50px;
        display: flex;
        line-height: 50px;
        flex-direction: row;
        justify-content: space-between;
        .left{
            display: flex;
            .icon-fujin{
                font-size: 30px;
                display: block;
                margin-left: 13px;
                color: #2395ff;
            }
            p{
                display: block;
                color: #333;
                margin-left: 13px;
                font-size: 18px;
            }
        }
        .right{
            margin-right: 13px;
            .icon-jiantou1{
                font-size: 12px;
            }
        }
    }
    .add_down{
        background: #fff;
        height: 50px;
        display: flex;
        line-height: 50px;
        flex-direction: row;
        justify-content: space-between;
        .left{
            display: flex;
            .icon-fujin{
                font-size: 30px;
                display: block;
                margin-left: 13px;
                color: #2395ff;
            }
            p{
                display: block;
                color: #333;
                margin-left: 13px;
                font-size: 18px;
            }
        }
        .right{
            margin-right: 13px;
            .icon-jiantou1{
                font-size: 12px;
            }
        }
    }
}
.small{
    padding-top: 5px;
    box-sizing: border-box;
    .add_up{
        margin-top: 10px;
        background: #fff;
        height: 50px;
        display: flex;
        line-height: 50px;
        flex-direction: row;
        justify-content: space-between;
        .left{
            display: flex;
            .icon-fujin{
                font-size: 30px;
                display: block;
                margin-left: 13px;
                color: #2395ff;
            }
            p{
                display: block;
                color: #333;
                margin-left: 13px;
                font-size: 18px;
            }
        }
        .right{
            margin-right: 13px;
            .icon-jiantou1{
                font-size: 12px;
            }
        }
    }
    .add_down{
        background: #fff;
        height: 50px;
        display: flex;
        line-height: 50px;
        flex-direction: row;
        justify-content: space-between;
        .left{
            display: flex;
            .icon-fujin{
                font-size: 30px;
                display: block;
                margin-left: 13px;
                color: #2395ff;
            }
            p{
                display: block;
                color: #333;
                margin-left: 13px;
                font-size: 18px;
            }
        }
        .right{
            margin-right: 13px;
            .icon-jiantou1{
                font-size: 12px;
            }
        }
    }
}
</style>
