<template>
  <div class="home">
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
@import url('../../static/font/iconfont.css');
*{
  padding: 0;
  margin: 0;
}
.footer{
  position: fixed;
  bottom: 0;
  height: 96px;
  width: 100%;
  box-sizing: border-box;
  background: blue;
  border-top: 1px solid lightgray;
  // background: blue;
  color: white;
  ul{
    display:flex;
    align-items: center;
    li{
      flex: 1;
      list-style: none;
      text-align: center;
      a{
        display: block;
        height: 95px;
        font-size: 18px;
        line-height: 95px;
        color: 7f7f7f;
        text-decoration: none;
        .icon-changyonglogo40
        {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
