<template>
    <div class="footer">
        <ul>
          <li>
            <router-link to='/ShowYe'>
              <i class="iconfont icon-changyonglogo40"></i>
              <p class="p_index">首页</p>
            </router-link>
          </li>
          <li>
            <router-link to='/Find'>
              <i class="iconfont icon-faxian"></i>
              <p>发现</p>
            </router-link>
            </li>
          <li>
            <router-link to='/Order'>
              <i class="iconfont icon-dingdan"></i>
              <p>订单</p>
            </router-link>
          </li>
          <li>
            <router-link to='/My'>
              <i class="iconfont icon-My"></i>
              <P>我的</P>
            </router-link>
          </li>
        </ul>
      </div>
</template>
<style lang='scss'>
@import url('../../static/font/iconfont.css');
*{
  padding: 0;
  margin: 0;
}
body{
  overflow-y: auto;
}
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  height: 3.75rem;
  width: 100%;
  background: #ffffff;
  border-top: 1px solid rgb(245, 230, 230);
  color: white;
  ul{
    display:flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    height: 100%;
    li{
      width: 23%;
      list-style: none;
      text-align: center;
      a{
        display: block;
        height: .47rem;
        font-size: .09rem;
        color: #7f7f7f;
        text-decoration: none;
        .icon-changyonglogo40{
          font-size: 2.12rem;
          margin-top: 0.56rem;
          display: block;
          margin-bottom: 0.1rem;
        }
        .icon-faxian{
            font-size: 1.12rem;
            margin-top: 0.56rem;
            display: block;
            margin-bottom: 0.1rem;
        }
        .icon-dingdan{
            display: block;
            margin-top: 0.55rem;
            font-size: 1.13rem;
            margin-bottom: 2px;
        }
        .icon-My{
            display: block;
            font-size: 1.3rem;
            margin-top: 0.55rem;
            margin-bottom: 0.1rem;
        }
      }
    }
  }
}
</style>
