
<template>
  <div class="catalog_body">
    <div class="catalog_title">Blogs</div>
    <div class="catalog_content" v-for="(value, key) in commends" :key="key">
        <CatalogItemView  :commendData = "value"/>
    </div>
  </div>
</template>
<script>
import CatalogItemView from "./components/CatalogItemView.vue";
export default {
  name: "catalog",
  components: {
    CatalogItemView
  },
  data() {
    return {
      commends: [
        { title: "Android 操作系统架构开篇","time":"January 31, 2016",mark:true},
        { title: "Flutter 跨平台演进及架构开篇",time:"June 1, 2019",mark:true },
        { title: "Dart虚拟机运行原理",time:"October 5, 2019" ,mark:false},
        { title: "Android 操作系统架构开篇","time":"January 31, 2016",mark:false},
        { title: "Flutter 跨平台演进及架构开篇",time:"June 1, 2019",mark:false },
        { title: "Android 操作系统架构开篇","time":"January 31, 2016",mark:false},
        { title: "Flutter 跨平台演进及架构开篇",time:"June 1, 2019",mark:false },
        { title: "Dart虚拟机运行原理",time:"October 5, 2019" ,mark:false},
        { title: "Android 操作系统架构开篇","time":"January 31, 2016",mark:false},
        { title: "Flutter 跨平台演进及架构开篇",time:"June 1, 2019",mark:false },
      ]
    };
  }
};
</script>

<style lang = "less" scoped>
.catalog_body {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: fff;
  box-sizing: border-box;

  .catalog_content{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .catalog_title{
    font-size: 20px;
    font-weight: 800;
    color: #333;
    padding: 20px;
  }

}
</style>