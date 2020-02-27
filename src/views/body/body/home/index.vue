<template>
  <div id="home">
    this is 首页
  </div>
</template>

<script>
export default {
  name: 'home',
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
@import '@/assets/css/layout.scss';
#home{
  @include card;
}
</style>
