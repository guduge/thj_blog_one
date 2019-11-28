<template>
  <div class="catalog_item_content_back">
    <span class="item-time">[{{ commendData.time }}]</span>
    <font v-if="commendData.mark" color="#EE0000">[置顶]</font>
    <span class="item-title"> {{ commendData.title }}</span>
  </div>
</template>
<script>
export default {
  name: "CatalogItemView",
  props: {
    commendData: {
      type: Object,
      default: null
    },
  },
  data() {
    return {
      mcommendData: this.commendData
    };
  }
};
</script>

<style lang="less" scoped>
.catalog_item_content_back {
  padding:  20px 0;
  margin: 0 20px;
  box-sizing: border-box;
  border-top: #e3e3e3 1px solid;

  .item-time {
    box-sizing: border-box;
    font-size: 16px;
    color: #0000ff;
    margin-right:5px; 
  }
  .item-title {
    margin-left:5px; 
    font-size: 16px;
    color: #333;
  }
}
</style>