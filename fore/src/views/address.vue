<template>
    <div>
         <header>
            <a href="/Home/ShowYe" class="jiantou">
                <i class="iconfont icon-jiantou-copy"></i>
            </a>
            <p>请选择地址</p>
            <router-link to='/address2'>
              新增地址
            </router-link>
        </header>
        <div class="changeAdd">
            <a href="#">重庆</a>
            <input type="text" placeholder="请输入地址">
        </div>
        <div class="current—UP">
            <p>当前地址</p>
        </div>
        <div class="current—DOMN">
            <div class="left">XXXXXXXXX</div>
            <div class="right">
                <i class="iconfont icon-icon-test"></i>
                <p>重新定位</p>
            </div>
        </div>
        <div class="current—UP">
            <p>收获地址</p>
        </div>
        <div class="infor">
            <div class="up_Infor">
                <span class="up">xxx</span>
                <span class="mid">先生</span>
                <span class="mid">15736267351</span>
            </div>
            <div class="down_Infor">
                <span>深圳市宝安区西部硅谷</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
@import url('../../static/font/iconfont.css');
<style lang='scss' scoped>
*{
    margin: 0;
    padding: 0;
}
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
    justify-content: space-between;
    .jiantou{
        display: block;
        margin-left: 13px;
    }
    p{
        display: block;
        font-size: 20px;
        font-weight: 500;
    }
    a{
        display: block;
        margin-right: 13px;
        color: #fff;
    }
}
.changeAdd{
    background: #fff;
    height: 50px;
    width: 100%;
    font-size: 12px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a{
        line-height: 50px;
        color: #333;
        font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
    }
    input{
        display: inline-block;
        height: 36px;
        width: 325px;
        border: 0;
        line-height: 36px;
        padding-left: 10px;
        background: #f2f2f2;
        font-size: 14px;
    }
}
.current—UP{
    height: 30px;
    line-height: 35px;
    font-size: 14px;
    padding-left: 15px;
    color: #666;
    padding-top: 7px;
    padding-bottom: 8px;
}
.current—DOMN{
    display: flex;
    height: 50px;
    line-height: 50px;
    background: #fff;
    font-weight: 900;
    justify-content: space-between;
    .left{
        margin-left: 13px;
    }
    .right{
        margin-right: 17px;
        color: #2395ff;
        display: flex;
        p{
            display: block;
            margin-left: 5px;
        }
    }
}
.infor{
    height: 66px;
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    background: #fff;
    .up_Infor{
        margin-top: 3px;
    }
    .up{
        font-weight: 900;
        font-size: 24px;
    }
    .mid{
        font-size: 12px;
    }
    .down_Infor{
        font-size: 14px;
    }
}
</style>
