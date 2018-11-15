<template>
    <div class="myself">
        <header>
            <div class="top">
                <img src="../assets/my.png" alt="">
                <h1>我的</h1>
            </div>
            <div class="login-reg" @click="loginreg">
                <div class="headerimg">
                    <!-- <img src="../assets/touxiang3.png" alt=""> -->
                </div>
                <div class="dg-right">
                    <h2>登录/注册</h2>
                    <p class="more">登录后享受更多特权</p>
                </div>
            </div>
        </header>
        <ul class="money">
            <li>
                <img src="../assets/my_03.png" alt="">
                <p>钱包</p>
            </li>
            <li>
                <img src="../assets/my_05.png" alt="">
                <p>红包</p>
            </li>
            <li>
                <img src="../assets/my_07.png" alt="">
                <p>金币</p>
            </li>
        </ul>
        <div class="list-son">
            <a href="" class="leftright">
                <img src="../assets/my_13.png" alt="">
                <p>我的地址</p>
                <!-- <img src="../assets/my_16.png" alt=""> -->
            </a>
        </div>
        <div class="list-son">
            <a href="" class="leftright borbom">
                <img src="../assets/my_13.png" alt="">
                <p>金币商城</p>
            </a>
            <a href="" class="leftright">
                <img src="../assets/my_13.png" alt="">
                <p>分享拿10元现金</p>
            </a>
        </div>
        <div class="list-son">
            <a href="" class="leftright borbom">
                <img src="../assets/my_13.png" alt="">
                <p>我的客服</p>
            </a>
            <a href=""  class="leftright">
                <img src="../assets/my_13.png" alt="">
                <p>下载饿了么APP</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'myself',
  methods: {
    loginreg () {
      this.$router.push({path: '/login'})
    }
  }
}
</script>

<style lang="scss" scoped>
    .myself{
        margin: 0;
        padding: 0;
        position: absolute;
        top: 0;
        width: 100%;
        left: 0;
        background-color: #f5f5f5;
    }
    *{
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
        font-size: .15rem;
        background: url(../assets/my_16.png) no-repeat 3.5rem center;
    }
    header{
        height: 1.12rem;
        width: 100%;
        background-image: linear-gradient(90deg,#0af,#0085ff);
        .top{
            h1{
                font-size: .18rem;
                color: #fff;
                position: fixed;
                top: 0;
                width: 100%;
                height: .44rem;
                line-height: .44rem;
                background-image: linear-gradient(90deg,#0af,#0085ff);
                left: 0;
            }
            img{
                position: fixed;
                top: .16rem;
                left:.19rem;
                z-index: 2;
            }
        }
        .login-reg{
            margin-top: .44rem;
            display: flex;
            align-items: center;
            width: 100%;
            height: 1.1rem;
            background: url(../assets/lgc_06.png) no-repeat 3.6rem center;
            .headerimg{
                width: .6rem;
                border-radius: 50%;
                height: .6rem;
                margin: .18rem;
                background: url(../assets/touxiang3.png) no-repeat center center;
            }
            .dg-right{
                color: white;
                h2{
                    font-size: .22rem;
                    text-indent: -0.23rem;
                    margin-bottom: .08rem;
                }
                p{
                    font-size: .12rem;
                    text-indent: .1rem;
                    background: url(../assets/ph7.png) no-repeat left;
                }
            }
        }

    }
    .money{
        font-size: .12rem;
        display: flex;
        background-color: #fff;
        border-bottom: 1px solid #f0f0f0;
        height: .84rem;
        align-content: center;
        li{
            flex: 1;
            list-style: none;
            // display: flex;
            // height: 100%;
            border-left: 1px solid #f0f0f0;
            img{
                margin-top: .25rem;
            }
            // align-items: space-around;
        }
    }
    .leftright{
        display: flex;
        height: .44rem;
        background-color: #fff;
        justify-content: flex-start;
        color: #333;
        line-height: 100%;
        align-items: center;
        img{
            width: .18rem;
            height: .18rem;
            margin: .1rem;
        }
    }
    .list-son{
        border: 1px solid #ededed;
        margin-top: .1rem;
    }
    .borbom{
        border-bottom: 1px solid #ededed;
    }

</style>
