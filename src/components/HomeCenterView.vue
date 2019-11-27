<template>
  <div class="content_back">
    <div class="title">{{ getTitle }}</div>
    <div class="content">{{ getContent }}</div>
  </div>
</template>
<script>
export default {
  name: "HomeCenterView",
  props: {
    index: Number
  },
  computed: {
    getTitle() {
      let tempTitle = "";
      switch (this.index) {
        case 1:
          tempTitle = "tianhj";
          break;
        case 2:
          tempTitle = "Navigation";
          break;
        case 3:
          tempTitle = "About";
          break;
        default:
          tempTitle = "tianhj";
          break;
      }
      return tempTitle;
    },
    getContent() {
      let tempContent = "Keep on going never give up";
      switch (this.index) {
        case 1:
          tempContent = "Keep on going never give up";
          break;
        case 2:
          tempContent = "Here is the information you need";
          break;
        case 3:
          tempContent = "All things in their being are good for something";
          break;
        default:
          tempContent = "Keep on going never give up";
          break;
      }
      return tempContent;
    }
  }
};
</script>

<style lang="less" scoped>
.content_back {
  background-color: rgba(53, 53, 53, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 200px;
  align-items: center;
  box-sizing: border-box;
  .content {
    font-size: 20px;
    color: #fff;
  }
  .title {
    font-size: 48px;
    color: #fff;
  }
}
</style>