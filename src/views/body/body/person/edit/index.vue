<template>
  <div id="edit">
    <div class="left">
      <label>
        <img :src="img" alt="">
        <input type="file" @change="up">
      </label>
    </div>
    <ul class="right">
      <li>
        <p>用户名</p>
        <input type="text">
      </li>
      <li>
        <p>个性签名</p>
        <input type="text">
      </li>
      <li>
        <button @click="sub">提交</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'edit',
  components: {},
  props: {},
  data () {
    return {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585465482012&di=848356da6db46b80526f2c6e4b5c59d9&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201404%2F15%2F20140415204444_kfcMj.jpeg'
    }
  },
  watch: {},
  computed: {},
  methods: {
    up (e) {
      console.log(e)
      this.img = window.URL.createObjectURL(e.target.files[0])
      console.log(this.img)
    }
    // async sub () {
    //   const res = await this.$axios.post('/user/update')
    // }
  },
  created () {},
  mounted () {
    if (this.$route.params.id === this.$store.state.uuid) {
      console.log(1)
    } else {
      this.$message('您无权访问')
    }
  }
}
</script>
<style lang="scss" scoped>
#edit{
  padding: 32px 160px;
  display: flex;
  input{
    background-color: inherit;
    border: 1px solid slategrey;
    border-radius: 5px;
    width: 100%;
    padding: 5px;
  }
}
.left{
  width: 35%;
  position: relative;
  img{
    width: 100%;
    height: 290px;
    transition: all 1s;
    &:hover{
      filter: blur(5px);
      // &:after{
      //   content: '修改图片';
      // }
    }
  }
  input{
    display: none;
  }
}
.right{
  width: 100%;
  margin-left: 35px;
  li:last-child{
    text-align: center;
    margin: 20px;
    button{
      border: 1px solid gray;
      padding: 5px;
      border-radius: 5px;
      background-color: gainsboro;
      &:active{
        background-color: gray;
      }
    }
  }
}
</style>
