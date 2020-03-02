<template>
  <div id="item">
    <div >
      <header>
        <div>
          <input type="text" placeholder="ID/标签 查询">
          <article v-loading="false"><svg  t="1583126525303" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2337" ><path d="M402 401m-177 0a177 177 0 1 0 354 0 177 177 0 1 0-354 0Z" fill="#FFE1E1" p-id="2338"></path><path d="M622.2 548.2L786.1 712c25.3 25.3 28.9 64.5 5.7 87.7s-62.4 19.7-87.7-5.7L538.2 628.2c-39.9 24-86.7 37.8-136.7 37.8C254.9 666 136 547.1 136 400.5S254.9 135 401.5 135 667 253.9 667 400.5c0 54.6-16.5 105.4-44.8 147.7zM600 576.9c-9.8 11-20.4 21.1-31.9 30.4l161.4 161.4c12.2 12.2 28.7 13.7 36.8 5.7s6.5-24.6-5.7-36.8L600 576.9zM401.5 630C528.2 630 631 527.2 631 400.5S528.2 171 401.5 171 172 273.8 172 400.5 274.8 630 401.5 630z m0.5-433c9.9 0 18 8.1 18 18s-8.1 18-18 18c-92.8 0-168 75.2-168 168s75.2 168 168 168c9.9 0 18 8.1 18 18s-8.1 18-18 18c-112.7 0-204-91.3-204-204S289.3 197 402 197z m70.6 398.3c-9.3 3.6-19.7-1.1-23.3-10.3-3.6-9.3 1.1-19.7 10.3-23.3 3-1.1 5.9-2.5 8.7-3.9 8.8-4.7 19.7-1.3 24.3 7.5 4.7 8.8 1.3 19.7-7.5 24.3-4 2.1-8.2 4-12.5 5.7z" fill="#5483E3" p-id="2339"></path></svg></article>
        </div>
        <div>
          <el-switch
            v-model="value1"
            active-text="显示分类标签">
          </el-switch>
          <button :class="cli?'cli1':'cli2'" @click="cc">添加项目</button>
          <div v-show="cli" class="hide">
            <router-link tag="h4" to="/">新建项目</router-link>
            <router-link tag="h4" to="/">导入项目</router-link>
          </div>
        </div>
      </header>
      <nav>
        <el-pagination
          layout="prev, pager, next"
          :total="50">
        </el-pagination>
      </nav>
      <ul class="bd">
        <li>
          <article style="width:10%">编号</article>
          <article style="width:60%">题目名称</article>
          <article style="width:10%">通过</article>
          <article style="width:10%">提交</article>
          <article style="width:10%">通过率</article>
        </li>
        <li v-for="(tem,index) in arr" :key="index">
          <article style="width:10%">{{tem.id}}</article>
          <article style="width:60%">
            {{tem.title}}
          </article>
          <article style="width:10%">{{tem.pass}}</article>
          <article style="width:10%">{{tem.submit}}</article>
          <article style="width:10%">{{tem.rate}}</article>
        </li>
      </ul>
      <nav>
        <el-pagination
          layout="prev, pager, next"
          :total="80">
        </el-pagination>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item',
  components: {},
  props: {},
  data () {
    return {
      value1: false,
      cli: false,
      arr: [
        {
          id: 1,
          title: '阿萨德',
          pass: 23,
          submit: 12,
          rate: '23%'
        },
        {
          id: 2,
          title: '阿萨asdasd德',
          pass: 23,
          submit: 12,
          rate: '23%'
        },
        {
          id: 3,
          title: '阿斯达所多',
          pass: 23,
          submit: 12,
          rate: '23%'
        }
      ]
    }
  },
  watch: {},
  computed: {},
  methods: {
    cc () {
      this.cli = !this.cli
    },
    prev () {

    },
    pager () {

    },
    next () {

    }
  },
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/layout.scss';
#item::v-deep{
  padding: 32px 160px;
  // box-shadow: 2px 2px 4px black inset;
  div{
    header{
      display: flex;
      justify-content: space-between;
      position: relative;
      align-items: center;
      input{
        border-radius: 20px;
        padding: 6px 0 6px 36px;
      }
      article{
        position: relative;
        svg{
          width: 30px;
          height: 30px;
          position: absolute;
          left: 5px;
          top: -26px;
        }
      }
      .cli2{
        padding: 0 10px;
        margin: 0 10px;
        background-color: rgba($color: #000000, $alpha: 0.1);
        border-radius: 5px;
        line-height: 30px;
        &:active{
          background-color: rgba($color: #000000, $alpha: 0.2);
        }
      }
      .cli1{
        padding: 0 10px;
        margin: 0 10px;
        background-color: rgba($color: #000000, $alpha: 0.2);
        border-radius: 5px;
        line-height: 30px;
        &:active{
          background-color: rgba($color: #000000, $alpha: 0.2);
        }
      }
    }
    nav{
      text-align: center;
      .btn-prev,.number,.btn-next,.el-icon{
       background-color: inherit;
      }
    }
    .bd{
      @include tab;
      box-shadow: 2px 2px 4px black inset;
      ul{
        li{
          box-sizing: border-box;
        }
      }
    }
  }
}
.hide{
  position: absolute;
  right: 10px;
  box-shadow: 0 0 2px 0 black;
  border-radius: 5px;
  margin-top: 2px;
  animation: identifier 0.5s;
  overflow: hidden;
  h4{
    padding: 2px 10px;
    &:hover{
      background-color: rgba($color: #000000, $alpha: 0.1);
    }
  }
}
@keyframes identifier {
  from{height: 0;}
  to{height: 100%;}
}
</style>
