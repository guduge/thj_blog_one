<template>
  <div id="app" class="fillcontain">
    <HomeHeaderView />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import HomeHeaderView from "@/components/HomeHeaderView.vue";
export default {
  components: {
    HomeHeaderView
  },
  methods: {
    ...mapActions(['changePage']),
  },
  data() {
    return {
    }
  },
  computed: {
  },
  mounted() {
    
    let routerPath =  this.$router.history.current.path;
    console.log(this.$router);
    let tempIndex = 0;
    switch (routerPath) {
      case "/":
        tempIndex = 1;

        break;
      case "/home":
        tempIndex = 1;
        break;
      case "/catalog":
        tempIndex = 2;
        break;  
      case "/me":
        tempIndex = 3;
        break;
      case "/detail":
        tempIndex = 4;
        break;
      default:
        tempIndex = 0;
         this.currentIndex = 0;
        break;
    }
    this.changePage(tempIndex);
  },
  created() {
  
  },
};
</script>

<style lang="less">
@import "./style/common";
</style>