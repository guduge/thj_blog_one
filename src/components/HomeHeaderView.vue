<template>
  <div class="home_header_content"  v-bind:class="{home_header_content_s:isShowSelect(3)}">
    <!-- <img class="img_background" src="../static/me/me_top_background.jpeg"> -->
    <div class="menu_top_back">
      <div class="main_title">tianhj</div>
      <div class="menu_top_right_back">
        <div
          v-bind:class="{menu_top_right_item: true,menu_top_right_item_s:isShowSelect(1)}"
          @click="itemClick(1,'/home')"
        >首页1</div>
        <div
          v-bind:class="{menu_top_right_item: true,menu_top_right_item_s:isShowSelect(2)}"
          @click="itemClick(2,'/catalog')"
        >目录</div>
        <div
          v-bind:class="{menu_top_right_item: true,menu_top_right_item_s:isShowSelect(3)}"
          @click="itemClick(3,'/me')"
        >关于我</div>
      </div>
    </div>

    <div class="content_back">
      <div class="title" v-bind:class="{color_s:isShowSelect(3)}" >{{ title }}</div>
      <div class="content" v-bind:class="{color_s:isShowSelect(3)}" >{{ tempPlatForm }}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "HelloWorld",
  data() {
    return {
      tempPlatForm:""
    };
  },
  computed: mapState({
    // 箭头函数可使代码更简练
    ...mapState(['defaultIndexM','title','content']),
    // count: state => state.defaultIndex,
  }),
  mounted() {
    let ua = navigator.userAgent.toLowerCase();
    this.tempPlatForm = ua.toString();
  },
  methods: {
    ...mapActions(['changePage']),
    isShowSelect(i) {
      return this.defaultIndexM == i;
    },

    itemClick(index, path) {

      // if (window.webkit.messageHandlers){
      //     window.webkit.messageHandlers.iosEvent.postMessage("event");
      // }
      let ua = navigator.userAgent.toLowerCase();
      console.log(ua);
      

      this.changePage(index);
      let routerPath = this.$router.history.current.path;
      if (path === routerPath) {
        return;
      }
      this.defaultIndex = index;
    //   this.$emit("itemClickEvent", index);
      switch (index) {
        case 1:
          this.$router.push("home");
          break;
        case 2:
          this.$router.push("catalog");
          break;
        case 3:
          this.$router.push("me");
          break;
        default:
          break;
      }
    }
  }
};
</script>


<style  lang="less" scoped>
.home_header_content {

    background-color: rgba(51, 51, 51, 1);
  .menu_top_back {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    color: #42b983;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    padding: 20px 20px 0 20px;
    .menu_top_right_back {
      display: flex;
      .menu_top_right_item {
        padding: 0 20px;
      }
      .menu_top_right_item_s {
        color: tomato;
      }
    }
    .main_title {
      font-size: 28px;
    }
  }
  .content_back {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 200px;
    align-items: center;
    box-sizing: border-box;
    padding: 0 20px;
    padding-bottom: 20px;
    .content {
      font-size: 20px;
      color: #fff;
    }
    .title {
      font-size: 48px;
      color: #fff;
    }
    .color_s {
        color:  tomato;
    }
  }
}
.home_header_content_s {
    background-image:url("../static/me/me_top_background.jpeg");
    background-position: 50% 50%;
    background-size:cover;
}
</style>
