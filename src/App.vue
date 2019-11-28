<template>
  <div id="app" class="fillcontain">
    <HomeHeaderView  v-on:itemClickEvent = "itemClickEvent" :index = "getCurrentIndex" />
    <router-view></router-view>
  </div>
</template>

<script>
import HomeHeaderView from "@/components/HomeHeaderView.vue";
export default {
  components: {
    HomeHeaderView
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
    console.log(this.$router);
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
         this.currentIndex = 4;
        break;
    }
  },
  created() {
  
  },
};
</script>

<style lang="less">
@import "./style/common";
</style>