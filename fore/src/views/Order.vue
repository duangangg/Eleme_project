<template>
    <div>
        <header>
            <a href="/Home/ShowYe">
                <i class="iconfont icon-jiantou-copy"></i>
            </a>
            <p>订单</p>
        </header>
        <div class="list">
            <div class="left">
                <!-- <img src="" alt=""> -->
                tup
            </div>
            <div class="right">
                <div class="up">
                    <div class="up_left">
                        <div class="up_left_up">
                            <span class="span_left">绝味麻辣香锅店</span>
                            <span class="span_down">></span>
                        </div>
                        <p class="dowm_left">
                            2018-09-22 17:30
                        </p>
                    </div>
                    <div class="up_right">
                        <p>订单已送达</p>
                    </div>
                </div>
                <div class="down">
                    <div class="list_down_left">
                        <span class="span_left">排骨担任套餐（一份米饭)</span>
                        <span class="span_right">等5件商品</span>
                    </div>
                    <p class="list_down_right">￥45.24</p>
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
      url: 'https://bird.ioliu.cn/v1/?url=https://h5.ele.me/restapi/bos/v2/users/29824321/orders?limit=8&offset=0',
      goods: []
    }
  },
  mounted () {
    axios.get(this.url).then(result => {
      console.log(result)
    })
  }
}
</script>
@import url('../../static/font/iconfont.css');
<style lang="scss" scoped>
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
.list{
    margin-top: 10px;
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    .left{
        width: 40px;
        height: 40px;
        margin-top: 14px;
        margin-left: 18px;
        border: 1px solid red;
        img{
            width: 100%;
        }
    }
    .right{
        margin-left: 8px;
        margin-right: 13px;
        width: 85%;
        .up{
            display: flex;
            justify-content: space-between;
            margin-top: 16px;
            margin-bottom: 10px;
            .span_left{
                text-overflow: ellipsis;
                font-size:18px;
                color: #333;
                font-weight: 500;
                font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
            }
            .dowm_left{
                color: #999;
                font-size: 12px;
            }
            .up_right{
                font-size: 14px;
                color: #333;
                display: block;
            }
        }
        .down{
            height: 50px;
            line-height: 50px;
            display: flex;
            border-top: 1px solid #eee;
            justify-content: space-between;
            .list_down_left{
                display: flex;
            }
            .span_right{
                display: block;
                margin-left: 10px;
            }
            font-size: 14px;
            color: #666;
            .list_down_right{
                display: block;
            }
            .list_down_right{
                color:#333;
                font-weight: 700;
                font-size: 16px;
                font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
            }
        }
    }
}
</style>
