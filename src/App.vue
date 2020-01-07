<template>
  <div id="app" class="fillcontain">
    <!-- <div v-if="showHeader">
      <HomeHeaderView />
    </div>-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
// import HomeHeaderView from "@/components/HomeHeaderView.vue";
export default {
  components: {
    // HomeHeaderView
  },
  methods: {
    ...mapActions(["changePage"]),
    changePageOb() {
      window.pauseVideoAll = this.pauseVideoAll;
      let routerPath = this.$router.history.current.path;
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
        case "/test":
          tempIndex = 5;
          break;
        default:
          tempIndex = 6;
          this.currentIndex = 6;
          break;
      }
      this.changePage(tempIndex);
    }
  },
  data() {
    return {};
  },
  computed: {
    // 箭头函数可使代码更简练
    ...mapState(["defaultIndexM"]),
    showHeader() {
      return this.defaultIndexM < 5;
    }
    // count: state => state.defaultIndex,
  },
  mounted() {
    this.changePageOb();
  },
  created() {},
  updated() {
    this.changePageOb();
  }
};
</script>

<style lang="less">
@import "./style/common";
</style>