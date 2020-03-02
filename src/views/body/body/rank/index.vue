<template>
  <div id="rank">
    <header>
      <ul class="bd">
        <li>
          <article style="width:10%">排名</article>
          <article style="width:20%">用户名</article>
          <article style="width:50%">个性签名</article>
          <article style="width:10%">通过数量</article>
          <article style="width:10%">积分</article>
        </li>
        <li v-for="(tem,index) in arr" :key="index">
          <article style="width:10%">{{tem.id}}</article>
          <article style="width:20%">{{tem.name}}</article>
          <article style="width:50%">{{tem.sign}}</article>
          <article style="width:10%">{{tem.cont}}</article>
          <article style="width:10%">{{tem.int}}</article>
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
  name: 'rank',
  components: {},
  props: {},
  data () {
    return {
      arr: [
        {
          id: 1,
          name: 'asd',
          sign: 'jlhjklhjk',
          cont: 123,
          int: 123
        },
        {
          id: 2,
          name: 'asd',
          sign: 'jlhjklhjk',
          cont: 123,
          int: 123
        },
        {
          id: 3,
          name: 'asd',
          sign: 'jlhjklhjk',
          cont: 123,
          int: 123
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
  box-shadow: 2px 2px 4px black inset;
  ul{
    box-sizing: border-box;
  }
}
#rank::v-deep{
  padding: 32px 160px;
  nav{
    text-align: center;
    .btn-prev,.number,.btn-next,.el-icon{
    background-color: inherit;
    }
  }
}
</style>
