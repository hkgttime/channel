<template>
  <div id="login">
    <section>
      <div>
        专注！享受！Coding！
      </div>
      <ul>
        <li>
          <p>邮箱</p>
          <input type="text" >
        </li>
        <li>
          <p>密码</p>
          <input type="password">
        </li>
        <li>
          <button>登录</button>
        </li>
        <li>
          <router-link tag="h4" to="/reg">
            忘记密码/邮箱验证
          </router-link>
        </li>
        <li>
          <h5>没有账号？<router-link tag="span" to="/register">注册</router-link> </h5>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'login',
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
#login{
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
          &:focus{
            box-shadow: 0px 0px 2px blue;
          }
        }
        button{
          width: 100px;
          border-radius: 5px;
          color: rgba($color: #000000, $alpha: 0.5);
          &:active{
            background-color: rgba($color: #000000, $alpha: 0.4);
          }
        }
        h4,h5{
          font-size: 14px;
        }
        h4:hover,span:hover{
          color: rgba($color: #000000, $alpha: 1);
        }
      }
    }
  }
}
</style>
