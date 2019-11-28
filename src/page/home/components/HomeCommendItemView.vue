<template>
  <div class="item_content_back">
    <div>
      <font v-if="commendData.mark" color="#EE0000">[置顶]</font>
      <div class="item-title">{{ commendData.title }}</div>
    </div>

    <div class="item-content">{{ commendData.content }}</div>
    <div class="item-time">Posted by Gityuan on {{ commendData.time }}</div>
  </div>
</template>
<script>
export default {
  name: "HomeCommendItem",
  props: {
    commendData: {
      type: Object,
      default: null
    },
    title: String
  },
  data() {
    return {
      mcommendData: this.commendData
    };
  }
};
</script>

<style lang="less" scoped>
.item_content_back {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30px 30px 0 30px;
  box-sizing: border-box;

  .item-content {
    padding-top: 8px;
    font-size: 16px;
    color: #999999;
    box-sizing: border-box;
  }
  .item-time {
    box-sizing: border-box;
    padding-top: 10px;
    font-size: 18px;
    color: #666;
  }
  .item-title {
    font-size: 30px;
    color: #333;
  }
}
</style>