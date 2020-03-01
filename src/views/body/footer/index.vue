<template>
  <div id="foote">
    by 临时工
  </div>
</template>

<script>
export default {
  name: 'foote',
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
#foote{
  @include card;
  background-color: rgba($color: #000000, $alpha: 0.2);
  text-align: center;
  margin-top: 26px;
}
</style>
