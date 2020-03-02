<template>
  <div id="record">
    <header>
      占位
    </header>
    <footer>
      <ul class="bd">
        <li>
          <article style="width:5%">编号</article>
          <article style="width:35%">题目</article>
          <article style="width:5%">状态</article>
          <article style="width:5%">分数</article>
          <article style="width:5%">总时间</article>
          <article style="width:10%">内存</article>
          <article style="width:10%">代码/答题文件</article>
          <article style="width:10%">提交者</article>
          <article style="width:15%">提交时间</article>
        </li>
        <li v-for="(item,index) in arr" :key="index">
          <article style="width:5%">{{item.a}}</article>
          <article style="width:35%">{{item.b}}</article>
          <article style="width:5%">{{item.c}}</article>
          <article style="width:5%">{{item.d}}</article>
          <article style="width:5%">{{item.e}}</article>
          <article style="width:10%">{{item.f}}</article>
          <article style="width:10%">{{item.g}}</article>
          <article style="width:10%">{{item.h}}</article>
          <article style="width:15%">{{item.i}}</article>
        </li>
      </ul>
    </footer>
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
  name: 'record',
  components: {},
  props: {},
  data () {
    return {
      arr: [
        {
          a: 1,
          b: 'asds',
          c: 'asd',
          d: 12,
          e: 12,
          f: '12k',
          g: 'asd',
          h: 'asd',
          i: '2020-03-02 15:43:34'
        },
        {
          a: 1,
          b: 'asds',
          c: 'asd',
          d: 12,
          e: 12,
          f: '12k',
          g: 'asd',
          h: 'asd',
          i: '2020-03-02 15:43:34'
        },
        {
          a: 1,
          b: 'asds',
          c: 'asd',
          d: 12,
          e: 12,
          f: '12k',
          g: 'asd',
          h: 'asd',
          i: '2020-03-02 15:43:34'
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
#record::v-deep{
  padding: 32px 160px;
  .bd{
    @include tab;
    box-shadow: 2px 2px 4px black inset;
    text-align: center;
  }
  nav{
    text-align: center;
    .btn-prev,.number,.btn-next,.el-icon{
    background-color: inherit;
    }
  }
}
</style>
