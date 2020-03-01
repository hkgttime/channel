<template>
  <div id="card">
    <h2>{{title}}</h2>
    <slot/>
  </div>
</template>

<script scoped>
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
<style lang="scss" >
#card{
  padding: 16px;
  box-shadow: 2px 2px 4px black inset;
  border-radius: 5px;
  margin: 34px 0;
  h2{
    font-size: 1.25rem;
    font-weight: 700;
  }
}
</style>
