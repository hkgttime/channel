<template>
  <div id="heade">
    <section>
      临时工
    </section>
    <section>
      <input type="text">
      <router-link to="/"><svg t="1582721213838" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2173" ><path d="M938.176 832.512l-214.336-214.4c-2.496-2.496-5.248-4.352-7.872-6.528 36.16-55.552 57.344-121.728 57.344-193.024C773.312 222.72 614.592 64 418.688 64 222.848 64 64 222.72 64 418.624s158.848 354.624 354.688 354.624c71.232 0 137.472-21.248 193.216-57.344 1.984 2.752 3.904 5.376 6.336 7.744l214.4 214.528C847.232 952.768 866.24 960 885.376 960s38.208-7.232 52.8-21.888C967.296 908.992 967.296 861.76 938.176 832.512M418.688 661.248c-133.76 0-242.688-108.864-242.688-242.624 0-133.76 108.928-242.688 242.688-242.688s242.624 108.928 242.624 242.688C661.312 552.384 552.448 661.248 418.688 661.248" p-id="2174" fill="#707070"></path></svg></router-link>
      <router-link :to="this.token?'/person':'/login'"><img :src="this.token?this.head:this.img" alt="头像"></router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'heade',
  components: {},
  props: {},
  data () {
    return {
      img: 'https://cdn.luogu.org/upload/usericon/1.png'
    }
  },
  watch: {},
  computed: {
    token () {
      if (this.$store.state.token) {
        return true
      } else {
        return false
      }
    },
    head () {
      if (this.$store.state.head) {
        return this.$store.state.head
      } else {
        return 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2966131373,2663838631&fm=58'
      }
    }
  },
  methods: {},
  created () {},
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/layout';
#heade{
  @include card;
  background-color:black;
  background-image:
  radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
  radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
  radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),
  radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);
  background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
  background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 12px black;
  section{
    // width: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    &>*{
      margin: 5px;
    }
    svg{
      width: 20px;
      height: 20px;
      // position: relative;
      // right: 20px;
    }
    img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    input{
      background-color: transparent;
      border-radius: 5px;
      box-shadow: 0 0 3px 0px white;
      width: 110px;
      height: 22px;
      &:focus{
        box-shadow: 0 0 4px 0px pink;
      }
    }
  }
  section:nth-child(1){
    font-size: 26px;
    font-weight: 700;
    margin-left: 90px;
  }
}
</style>
