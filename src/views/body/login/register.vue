<template>
  <div id="register">
    <section>
      <div>
        专注！享受！Coding！
      </div>
      <ul>
        <li>
          <p>用户名</p>
          <input type="text">
        </li>
        <li>
          <p>邮箱</p>
          <input type="text">
        </li>
        <li>
          <p>密码</p>
          <input type="password">
          <input id="in" type="password">
        </li>
        <li>
          <button>登录</button>
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
    }
  }
}
</style>
