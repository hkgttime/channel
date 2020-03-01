<template>
  <div id="home">
    <section class="card1">
      <Card title="公告">
        <Table :head="head" :pub="pub">
        </Table>
      </Card>
      <Card title="最近更新">
        <Table :head="head1" :pub="pub1">
        </Table>
      </Card>
    </section>
    <section class="card2">
      <Card title="“一言（ヒトコト）">
        <h4>{{motto.title}}</h4>
        <h5>——{{motto.author}}</h5>
      </Card>
      <Card title="友情链接">
        <h6>随便放点什么</h6>
      </Card>
    </section>
  </div>
</template>

<script>
import Card from '@/components/card.vue'
import Table from '@/components/table.vue'
export default {
  name: 'home',
  components: {
    Card,
    Table
  },
  props: {},
  data () {
    return {
      head: {
        title: '标题',
        date: '时间'
      },
      pub: [
        {
          title: '阿斯达所多',
          date: '2019-123-123',
          id: '12'
        },
        {
          title: '阿斯达所多',
          date: '2019-123-123',
          id: '12'
        },
        {
          title: '阿斯达所多',
          date: '2019-123-123',
          id: '12'
        }
      ],
      motto: {
        title: '正气和狂气，理性和知性，自信和确信，在悲剧性的不合理世界，故事开始了。',
        author: '绝园的暴风雨'
      },
      head1: {
        title: '题目',
        date: '更新时间'
      },
      pub1: [
        {
          title: '阿斯达所多',
          date: '2019-123-123',
          id: '12'
        },
        {
          title: '阿斯达所多',
          date: '2019-123-123',
          id: '12'
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
#home{
  padding: 32px 160px;
  display: flex;
  box-sizing: border-box;
}
.card1{
 width: 70%;
 padding: 0 16px;
}
.card2{
  width: 30%;
  padding: 0 16px;
  h4{
    font-size: 18px;
    margin-top: 16px;
  }
  h5{
    font-size: 14px;
    text-align: right;
  }
  h6{
    font-size: 14px;
  }
}
</style>
