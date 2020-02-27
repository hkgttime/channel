<template>
  <div id="slide">
    <el-drawer
      :visible.sync="drawer"
      :direction="direction">
      <Panel @cli="cc"/>
    </el-drawer>
    <section>
      <i @click="drawer=true" v-show="!drawer">
        <svg t="1582708670097" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2101" ><path d="M474.288097 127.049604 857.759815 508.9792l-82.171488 81.8471L392.115586 208.894657 474.288097 127.049604zM857.759815 508.9792 474.288097 890.910842l-82.173534-81.84096L775.588327 427.134147 857.759815 508.9792zM435.55391 451.108165c32.088836 0 58.105373 25.908066 58.105373 57.871035 0 31.958876-26.016537 57.866942-58.105373 57.866942-32.090882 0-58.105373-25.908066-58.105373-57.866942C377.449561 477.016231 403.463028 451.108165 435.55391 451.108165zM241.8707 451.108165c32.092929 0 58.107419 25.908066 58.107419 57.871035 0 31.958876-26.013467 57.866942-58.107419 57.866942-32.088836 0-58.102303-25.908066-58.102303-57.866942C183.768397 477.016231 209.781864 451.108165 241.8707 451.108165z" p-id="2102"></path></svg>
      </i>
    </section>
  </div>
</template>

<script>
import Panel from '@/views/slide/panel'
export default {
  name: 'slide',
  components: {
    Panel
  },
  props: {},
  data () {
    return {
      drawer: false,
      direction: 'ltr'
    }
  },
  watch: {},
  computed: {},
  methods: {
    cc (data) {
      this.drawer = data
    }
  },
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
#slide::v-deep{
  section{
    position: fixed;
    left: 0;
    height: 100vh;
    i{
      display: block;
      background-color: rgba($color: #000000, $alpha: 0.1);
      border-radius: 50%;
      width: 2rem ;
      height: 2rem ;
      position: relative;
      padding: 0.5rem;
      top:40vh;
      &:hover{
        background-color: rgba($color: #000000, $alpha: 0.2);
      }
    }
  }
  #el-drawer__title{
    display: none;
  }
  .el-drawer{
    width: 10vw !important;
  }
}
</style>
