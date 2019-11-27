<template>
  <div id="app" class="fillcontain">
    <HomeTopMenu msg="Welcome to Your Vue.js App" v-on:itemClickEvent = "itemClickEvent" :index = "getCurrentIndex" />
    <HomeCenterView :index = "getCurrentIndex" />
    <router-view></router-view>
    <div class="home-bottom">
      © 2019 tianhj.com 版权所有 豫ICP备19040612号
    </div> 
  </div>
</template>

<script>
import HomeTopMenu from "@/components/HomeTopMenu.vue";
import HomeCenterView from "@/components/HomeCenterView.vue";
export default {
  components: {
    HomeTopMenu,
    HomeCenterView,
  },
  methods: {
    itemClickEvent(index){
      this.currentIndex = index;
    },
  },
  data() {
    return {
      currentIndex : 1,
    }
  },
  computed: {
    getCurrentIndex(){
      return this.currentIndex;
    }
  },
  mounted() {
    let routerPath =  this.$router.history.current.path;
    switch (routerPath) {
      case "/":
        this.currentIndex = 1;
        break;
      case "/home":
         this.currentIndex = 1;
        break;
      case "/catalog":
         this.currentIndex = 2;
        break;  
      case "/me":
         this.currentIndex = 3;
        break;
      default:
         this.currentIndex = 1;
        break;
    }
  },
};
</script>

<style lang="less">
@import "./style/common";
.home-bottom{
  display: flex;
  position: fixed;
  flex-direction: row;
  height: 40;
  width: 100%;
  bottom: 0;
  color: #000;
  margin-bottom: 20px;
  justify-content: center;
  text-align: center;
}
</style>