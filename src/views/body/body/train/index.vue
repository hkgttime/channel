<template>
  <div id="train">
    <header>
      <ul class="bd">
        <li>
          <article style="width:40%">比赛名称</article>
          <article style="width:15%">开始时间</article>
          <article style="width:15%">结束时间</article>
          <article style="width:30%">描述</article>
        </li>
        <li v-for="(tem,index) in arr" :key="index">
          <article style="width:40%">{{tem.title}}</article>
          <article style="width:15%">{{tem.sd}}</article>
          <article style="width:15%">{{tem.ed}}</article>
          <article style="width:30%">{{tem.dis}}</article>
        </li>
      </ul>
    </header>
    <nav>
      <el-pagination
        layout="prev, pager, next"
        :total="80">
      </el-pagination>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'train',
  components: {},
  props: {},
  data () {
    return {
      arr: [
        {
          title: 'asdsad',
          sd: '2019-07-13 8:00:00',
          ed: '2019-07-13 8:00:00',
          dis: 'LibreOJ NOI 模拟赛 ~Take it easy~'
        },
        {
          title: 'asdsad',
          sd: '2019-07-13 8:00:00',
          ed: '2019-07-13 8:00:00',
          dis: 'LibreOJ NOI 模拟赛 ~Take it easy~'
        },
        {
          title: 'asdsad',
          sd: '2019-07-13 8:00:00',
          ed: '2019-07-13 8:00:00',
          dis: 'LibreOJ NOI 模拟赛 ~Take it easy~'
        }
      ]
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
@import '@/assets/css/layout.scss';
.bd{
  @include tab;
  text-align: center;
  box-sizing: border-box;
  box-shadow: 2px 2px 4px black inset;
}
#train::v-deep{
  header{
    padding: 32px 160px;
  }
  nav{
    text-align: center;
    .btn-prev,.number,.btn-next,.el-icon{
    background-color: inherit;
    }
  }
}
</style>
