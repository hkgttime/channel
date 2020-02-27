<template>
  <div id="card">
    <h2>{{title}}</h2>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'card',
  components: {},
  props: {
    title: {
      type: String,
      default: '标题'
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
@import '@/assets/css/layout.css';
#card{
  @include card;
  h2{
    font-size: 1.25rem;
    font-weight: 700;
  }
}
</style>
