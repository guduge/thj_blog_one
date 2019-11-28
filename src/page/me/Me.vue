<template>
  <div class="me">
    <div class="me_item">
      <p class="section_title">关于博主</p>
      <p class="section_content">
        {{userIntroduce}}
      </p>
    </div>
     <div class="me_item">
      <p class="section_title">博客主要内容</p>
      <ul>
        <li>
          iOS ：object-c ，swift 语言学习，学习技巧，及项目中遇到的问题
        </li>

        <li>
          跨平台技术 ：react-native ，flutter，uni-app 学习分享，技术文章总结
        </li>
          
        <li>
          前端：vue.js react.js 小程序 ,及相关框架的使用比如 webpack umi dva  antd 
        </li>
        <li>
          后端：node.js  koa 阿里的egg.js 及服务器入门相关知识 
        </li>
      </ul>
    </div>


     <div class="me_item">
      <p class="section_title">联系博主</p>
      <ul>
        <li>
          微博账号 ：<a href= "https://weibo.com/3079081013/profile">Forever_Stick_to</a>
        </li>

        <li>
          微信账号：{{ weixinNumber }}
        </li>
          
        <li>
          电子邮件：{{ email }}
        </li>
        <li>
          微信公众号：<a href= "https://mp.weixin.qq.com/mp/qrcode?scene=10000005&size=102&__biz=MzIxNjQ4NDg0MA==&mid=2247483730&idx=1&sn=9bf27824a3c51eaf094f0cbd7f1c7bb5&send_time=">{{ weixinPublic }}</a> 
        </li>
      </ul>
    </div>


  </div>
</template>

<script>
export default {
  name: "me",
  components: {},
  methods: {},
  data() {
    return {
      userIntroduce:"田豪杰，2019年4月加入北京环球优路教育负责移动端iOS研发。曾就职北京大童保险销售服务有限公司技术部，曾在富腾集团技术部从事跨平台研发。有react-native, uni-app，vue，小程序，flutter 项目开发经验。",
      weboLink:"https://weibo.com/3079081013/profile?topnav=1&wvr=6&is_all=1",
      weixinNumber:"t1689177720",
      weixinPublic:"HJ_Stick_to",
      email:"1689177720@qq.com"
    }
  },
};
</script>

<style lang = "less" scoped>
.me {
  .me_item {
    margin: 30px;
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
}
</style>