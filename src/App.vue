<template>
  <div id="app">
    <HomeTopMenu msg="Welcome to Your Vue.js App"/>
    <HomeCenterView />
    <HomeCommend />
    <div class="home-bottom">
      © 2019 tianhj.com 版权所有 豫ICP备19040612号
    </div>
  </div>
</template>

<script>
import HomeTopMenu from './page/home/components/HomeTopMenu.vue';
import HomeCenterView from './page/home/components/HomeCenterView.vue';
import HomeCommend from './page/home/HomeCommend.vue';

export default {
  name: 'app',
  components: {
    HomeTopMenu,
    HomeCenterView,
    HomeCommend,
  }
}
</script>

<style>

#app {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
}
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
