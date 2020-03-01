<template>
  <div id="register">
    <section>
      <div>
        专注！享受！Coding！
      </div>
      <ul>
        <li>
          <p>用户名</p>
          <input type="text" v-model="user.name" placeholder="请输入3-9个字符">
        </li>
        <li>
          <p>邮箱</p>
          <input type="text" v-model="user.email" placeholder="请输入有效邮箱">
        </li>
        <li>
          <p>密码</p>
          <input type="password" v-model="user.pwd1" placeholder="请输入6-16位密码">
          <input id="in" type="password" v-model="user.pwd2" placeholder="请输入再次输入">
        </li>
        <li class="bt">
          <input type="text" v-model="user.v">
          <button @click="cliV" :style="this.v?'pointer-events:auto':'pointer-events:none'"><span class="clock"></span>{{this.v?'获取验证码':'秒后重试'}}</button>
        </li>
        <li>
          <button @click="register">注册</button>
        </li>
        <li>
          <label>
            <input type="radio" value="agree" ><span>同意</span>
          </label>
          <a href="" >用户协议</a>
        </li>
        <li>
          <h5>已有账号？<router-link tag="span" to="/login">登录</router-link> </h5>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'register',
  components: {},
  props: {},
  data () {
    return {
      user: {
        name: '',
        email: '',
        pwd1: '',
        pwd2: '',
        v: ''
      },
      v: true
    }
  },
  watch: {},
  computed: {},
  methods: {
    checkEmail (email) {
      const reg = new RegExp('^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$')
      if (reg.test(email)) {
        return true
      } else {
        return false
      }
    },
    checkUsername (username) {
      const reg = new RegExp('^([\u2E80-\u9FFF]|[a-zA-Z])([\u2E80-\u9FFF]|[a-zA-Z]|[0-9]){2,9}$')
      if (reg.test(username)) {
        return true
      } else {
        return false
      }
    },
    checkVerification (Verification) {
      const reg = new RegExp('^[0-9]{5}$')
      if (reg.test(Verification)) {
        return true
      } else {
        return false
      }
    },
    checkEmpty (object) {
      let state = true
      let key
      for (key in object) {
        if (object[key] === '') {
          state = false
        }
      }
      return state
    },
    checkPwd (pwd1, pwd2) {
      if (pwd1 === pwd2) {
        return true
      }
      return false
    },
    async register () {
      if (this.checkEmpty(this.user)) {
        if (this.checkUsername(this.user.name)) {
          if (this.checkEmail(this.user.email)) {
            if (this.checkPwd(this.user.pwd1, this.user.pwd2)) {
              if (this.user.pwd1.length >= 6 && this.user.pwd1.length <= 16) {
                if (this.checkVerification(this.user.v)) {
                  const data = await this.$axios.post('/user/create', { name: this.user.name, password: this.user.pwd1, email: this.user.email, verificationCode: this.user.v })
                  if (data.data.code === 0) {
                    alert('注册成功，3s后转到登录界面')
                    setTimeout(() => {
                      this.$router.push('/login')
                    }, 2000)
                  } else {
                    this.$message(data.data.messge)
                  }
                } else {
                  this.$message('验证码格式不正确')
                }
              } else {
                this.$message('密码长度请控制在6-16位')
              }
            } else {
              this.$message('两次密码不同')
            }
          } else {
            this.$message('请输入正确的邮箱')
          }
        } else {
          this.$message('用户名3-10位字符,不含数字')
        }
      } else {
        this.$message('不能为空')
      }
    },
    async cliV () {
      const data = await this.$axios.get('/user/verificationcodes', { params: { email: this.user.email } })
      if (data.data.code === 0) {
        let s = 59
        this.v = false
        const btn = document.querySelector('.clock')
        btn.innerHTML = s + 1
        const set = setInterval(() => {
          btn.innerHTML = s
          s--
          if (s < 0) {
            btn.innerHTML = ''
            this.v = true
            clearInterval(set)
          }
        }, 1000)
      } else {
        this.$message(data.data.messge)
      }
    }
  },
  created () {},
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
#register{
  width: 100%;
  height: 100vh;
  section{
    width: 300px;
    margin: auto;
    position: relative;
    top:36px;
    text-align: center;
    box-shadow: 2px 2px 6px black;
    border-radius: 5px;
    div{
      padding: 36px 0;
      font-size: 36px;
      text-align: center;
    }
    ul{
      font-size: 20px;
      li{
        padding: 10px 20px;
        p{
          text-align: left;
          margin-left: 10px;
        }
        input{
          background-color: inherit;
          box-shadow: 0px 0px 2px black;
          border-radius: 5px;
          font-size: 14px;
          height: 23px;
          width: 243px;
          // padding: 5px;
          &:focus{
            box-shadow: 0px 0px 2px blue;
          }
        }
        #in{
          margin-top: 10px;
        }
        button{
          width: 100px;
          border-radius: 5px;
          color: rgba($color: #000000, $alpha: 0.5);
          background-color: rgba($color: #000000, $alpha: 0.2);
          // cursor: not-allowed;
          // pointer-events: none;
          &:active{
            background-color: rgba($color: #000000, $alpha: 0.4);
          }
        }
        span,h5,a{
          font-size: 14px;
        }
        input[type="radio"]{
          display: none;
          border:1px solid #ccc;
          width:8px;
          height: 8px;
          border-radius:2px;
          vertical-align: middle;
          margin-right: 5px;
          position: relative;
        }
        a:hover,span:hover{
          color: #000000;
        }
      }
      .bt{
        display: flex;
        justify-content: space-around;
        &>input{
          width: 100px;
        }
        &>button{
          padding: 5px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
