<template>
  <div class="me">
    
  </div>
</template>

<script>
export default {
  name: "me",
  components: {},
  data() {
    return {
      userIntroduce:"田豪杰，2019年4月加入北京环球优路教育负责移动端iOS研发。曾就职北京大童保险销售服务有限公司技术部，曾在富腾集团技术部从事跨平台研发。有react-native, uni-app，vue，小程序，flutter 项目开发经验。",
      weboLink:"https://weibo.com/3079081013/profile?is_hot=1",
      weixinNumber:"t1689177720",
      weixinPublic:"HJ_Stick_to",
      email:"1689177720@qq.com"
    }
  },
  methods: {},
  mounted() {
      
  },
  

};
</script>

<style lang = "less" scoped>
.me {
  .me_item {
    margin: 20px;
    .section_title {
      color: #808080;
      font: 38px;
      font-weight: 800;
    }
    .section_content{
      color: #404040;
      font: 16px;
      margin: 20px;
    }
  }
  .bottom{
    height: 60px;
  }
}
</style>