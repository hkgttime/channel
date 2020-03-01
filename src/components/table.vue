<template>
  <div id="tabl">
    <ul>
      <li>
        <div>{{head.title}}</div>
        <div>{{head.date}}</div>
      </li>
      <li v-for="(item, index) in pub" :key="index">
        <div>
          <router-link  to="/">{{item.title}}</router-link>
        </div>
        <div>{{item.date}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tabl',
  components: {},
  props: {
    head: {
      type: Object,
      default: function () {
        return {
          title: {
            type: String,
            default: '标题'
          },
          date: {
            type: String,
            default: '时间'
          }
        }
      }
    },
    pub: {
      type: Array
    }
  },
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
#tabl ul{
  margin-top: 14px;
  box-sizing: border-box;
  li{
    display: flex;
    padding: 10px;
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
    div:nth-child(1){
      width: 80%;
    }
    div:nth-child(2){
      width: 20%;
    }
  }
}
</style>
