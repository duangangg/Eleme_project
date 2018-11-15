<template>
  <div class="hello">
    <img src="../../static/img/logo.png" alt="" srcset="">
    <div>
      <div class="dg-error" v-show="v_error">用户名或密码错误，请重新输入</div>
      <div class="dg-error" v-show="pherr">请输入3-19位字母或数字的用户名</div>
      <form class="MessageLogin-iYvWA">
        <section class="MessageLogin-FsPlX">
          <input type="text"  v-model="username" placeholder="请输入用户名" @blur="isphone">
          <!-- <button disabled="disabled" class="CountButton-3e-kd" ubt-click="101161">获取验证码</button> -->
        </section>
        <section class="MessageLogin-FsPlX">
          <div class="dg-error" v-show="passerr">请输入密码</div>
          <input type="text"  placeholder="请输入密码" v-model="password" >
        </section>
        <section class="MessageLogin-15xD9">注册即表示已同意
         <a href="javascript:;">《用户服务协议》</a>
        </section>
        <button class="SubmitButton-2wG4T" @click="dgregister" :disabled='isclick'>注册</button>
      </form>
      <div>
        <!-- <a href="#/regi" class="MessageLogin">已有账号，去登录>></a> -->
        <router-link to='/login' class="MessageLogin">已有账号，去登录</router-link>
      </div>
      <a href="javascript:;" class="MessageLogin">关于我们</a>
    </div>
  </div>
</template>

<script>
// import qs from 'qs'
export default {
  name: 'register',
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
    // console , log(username);
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
    dgregister () {
      this.$axios.post('http://10.36.134.27:3000/register', {
        username: this.username,
        password: this.password
      }, {
      }).then(res => {
        var result = res.data
        if (result.code === 0) {
          alert('注册成功')
          // res.redirect('./dg-login.vue')
          this.$router.push({path: '/login'})
        } else {
          alert('注册失败', result.msg)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style spoce lang='scss' scoped>
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
    margin-top: 70px;
    height: 56px;
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
    margin-top: 3px;
    line-height: 21px;
    color: #999;
    text-align: left;
  }
  font-size: 14px;
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
    color:#999;
    text-align: center;
    display: block;
  }
}
</style>
