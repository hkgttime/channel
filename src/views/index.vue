<template>
  <div id="views">
    <Slide/>
    <Herdaer/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Slide from '@/views/slide'
import Footer from '@/views/body/footer'
import Herdaer from '@/views/body/header'
export default {
  components: {
    Slide,
    Footer,
    Herdaer
  }
}
</script>
<style lang="scss" scoped>
#views{
  min-width: 1200px;
}
</style>
