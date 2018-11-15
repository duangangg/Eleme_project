<template>
  <div class="hello">
    <img src="../../static/img/logo.png">
    <div>
      <div class="dg-error" v-show="v_error">用户名或密码错误，请重新输入</div>
      <div class="dg-error" v-show="pherr">用户名错误，请重新输入</div>
      <form class="MessageLogin-iYvWA">
        <section class="MessageLogin-FsPlX">
          <input type="text"  v-model="username" placeholder="请输入用户名" @blur="isphone">
        </section>
        <section class="MessageLogin-FsPlX">
          <div class="dg-error" v-show="passerr">请输入密码</div>
          <input type="text"  placeholder="请输入密码" v-model="password" @blur="isphone">
        </section>
        <button class="SubmitButton-2wG4T" @click="dglogin" :disabled='isclick'>登录</button>
      </form>
      <div><a href="#/register" class="MessageLogin">还没有账号，去注册>></a></div>
      <a href="javascript:;" class="MessageLogin">关于我们</a>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'login',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
      username: '',
      password: '',
      v_error: false,
      pherr: false,
      isclick: true,
      passerr: false
    }
  },
  methods: {
    isphone () {
      console.log(this.username)
      console.log(this.password)
      var regNum = /^[a-zA-Z0-9]{3,19}$/
      if (regNum.test(this.username)) {
        this.pherr = false
        this.isclick = false
      } else {
        this.pherr = true
        this.isclick = true
      }
    },
    dglogin () {
      // console.log(username)
      this.$axios.post('http://10.36.134.27:3000/login', {
        username: this.username,
        password: this.password
      }, {
        // transformRequest (data) {
        //   return qs.stringity(data)
        // }
      }).then(res => {
        var result = res.data
        if (result.code === 0) {
          alert('登录成功')
          Cookies.set('username', this.username)
          this.$router.push({path: '/'})
        } else {
          alert('登录失败', result.msg)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.hello {
  .dg-error{
    text-align: left;
    color: red;
    text-indent: 10px;
  }
  a{
    text-decoration: none;
  }
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  img{
    width: 136px;
    height: 56px;
    margin-top: 70px;
    margin-bottom: 19px;
  }
  input{
    width: 300px;
    height: 48px;
    padding-left: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #333;
    font-size: 14px;
    margin-bottom: 16px;
  }
  .MessageLogin-15xD9{
    width: 300px;
    margin-top: .3px;
    line-height: 21px;
    color: #999;
    text-align: left;
  }
  font-size: 014px;
  .adp {
    width: 50px;
    height: 40px;
    background: red;
  }
  .SubmitButton-2wG4T{
    width: 300px;
    height: 48px;
    border-radius: 4px;
    background-color: #4cd96f;
    outline: none;
    border: none;
    margin-top: 30px;
    color: #ffffff;
    font-size: 16px;
  }
  .MessageLogin{
    margin-top: 20px;
    text-align: center;
    color:#999;
    display: block;
  }
}
</style>
