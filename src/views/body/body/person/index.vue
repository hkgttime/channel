<template>
  <div id="person">
    <div class="left">
      <div>
        <div :class="(queryUuid === uuid)?'in':'in1'">
          <router-link tag="button" :to='uuid+ "/edit"'>
            修改信息
          </router-link>
        </div>
        <img :src="user.avatar?user.avatar:img" alt="">
      </div>
      <!-- <section>
        <h4>{{name.name}}</h4>
        <h5>权限</h5>
      </section> -->
      <section>
        <h6>通过{{user.score}}题</h6>
        <h6>积分 {{user.acceptedTotal}}</h6>
      </section>
    </div>
    <div class="right">
      <article>
        <h2>姓名</h2>
        <p>{{user.name}}</p>
      </article>
      <article>
        <h2>邮箱</h2>
        <p>{{user.email}}</p>
      </article>
      <article>
        <h2>个性签名</h2>
        <p>{{user.motto}}</p>
      </article>
      <article>
        <h2>注册时间</h2>
        <p>{{user.creatDate}}</p>
      </article>
      <article>
        <h2>创建题目数</h2>
        <p>{{user.problemTotal}}</p>
      </article>
    </div>
    <div class="out">
      <button @click="cli">
        <svg t="1583500564735" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2357" ><path d="M446.469789 0l126.142462 0 0 521.899801-126.142462 0 0-521.899801Z" p-id="2358" fill="#8a8a8a"></path><path d="M673.7817 80.582147l0 127.654043c122.012228 59.930976 206.256232 185.072814 206.256232 330.184548 0 203.27565-164.762281 368.037931-368.059221 368.037931-203.254361 0-368.037931-164.762281-368.037931-368.037931 0-145.111734 84.222714-270.253572 206.234942-330.184548L350.175721 80.582147C161.590078 147.24072 26.442002 327.012358 26.442002 538.420737c0 268.188455 217.369542 485.579287 485.557998 485.579287S997.557998 806.609192 997.557998 538.420737C997.557998 327.012358 862.388632 147.24072 673.7817 80.582147z" p-id="2359" fill="#8a8a8a"></path></svg>
        <span>注销</span>
      </button>
    </div>
  </div>
</template>

<script>
// import Card from '@/components/card.vue'
export default {
  name: 'person',
  components: {
  },
  props: {},
  data () {
    return {
      img: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2966131373,2663838631&fm=58',
      user: {
        name: '',
        email: '',
        motto: '',
        commitTotal: 0,
        acceptedTotal: 0,
        score: 0,
        avatar: '',
        creatDate: '1111-1111-1111',
        problemTotal: 0
      },
      queryUuid: ''
    }
  },
  watch: {},
  computed: {
    uuid () {
      return this.$store.state.uuid
    }
  },
  methods: {
    cli () {
      localStorage.removeItem('token')
      this.$store.commit('setToken', '')
      this.$router.replace('/')
    }
  },
  created () {},
  async mounted () {
    this.queryUuid = this.$route.params.id
    console.log(this.queryUuid)
    const data = await this.$axios.get('/user/profile', { params: { uuid: this.queryUuid } })
    if (data.data.code === 0) {
      this.user = data.data.data.user
    } else {
      this.$message('用户应该不存在')
    }
  }
}
</script>
<style lang="scss" scoped>
#person{
  padding: 32px 160px;
  display: flex;
  flex-wrap: wrap;
  // box-sizing: border-box;
}
.left{
  border-radius: 5px;
  border: 1px solid gainsboro;
  box-sizing: border-box;
  width: 35%;
  img{
    width: 100%;
    height: 290px;
  }
  &>div{
    position: relative;
  }
  // section{
  //   padding: 10px 20px;
  //   border-top: 1px solid gainsboro;
  //   h4{
  //     font-size: 20px;
  //   }
  //   h5{
  //     font-size: 12px;
  //     color: rgba($color: #000000, $alpha: 0.4);
  //     font-weight: 700;
  //   }
  // }
  section{
    display: flex;
    justify-content: space-between;
    padding: 20px 25px;
  }
}
.right{
  width: 65%;
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  article{
    border: 1px solid gainsboro;
    width: 50%;
    display: inline-block;
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: 50px;
    // margin: 10px 0;
    h2{
      background-color: rgba($color: #000000, $alpha: 0.2);
      font-size: 20px;
      padding: 5px 10px;
    }
    p{
      padding: 5px 10px;
    }
  }
}
.out{
  padding: 5px 10px;
  border-radius: 5px;
  margin: 20px;
  border-radius: 5px;
  background-color: rgba($color: #000000, $alpha: 0.1);
  position: relative;
  left: 140px;
  &:hover{
    background-color: rgba($color: #000000, $alpha: 0.2);
  }
  // flex-wrap: nowrap;
  // width: 60px;
  // align-items: center;
  button{
    flex-wrap: nowrap;
    // width: 60px;
    display: flex;
    align-items: center;
    background-color: initial;
    svg{
    // display: inline-block;
    width: 20px;
    height: 20px;
    background-color: initial;
    }
    span{
      padding-left: 5px;
    }
  }
}
.in{
  position: absolute;
  width: 100%;
  height: 290px;
  text-align: center;
  background-color: rgba($color: #000000, $alpha: 0.4);
  transition: all 1s;
  opacity: 0;
  &:hover{
    opacity: 1;
  }
  button{
    margin-top: 140px;
    padding: 5px;
    background-color: inherit;
    border: 3px solid wheat;
    color: wheat;
    border-radius: 5px;
    opacity: inherit;
    &:hover{
      background-color: khaki;
      transition: all 3s;
    }
  }
}
.in1{
  opacity: 0;
  position: absolute;
  button{
    opacity: inherit;
  }
}
</style>
