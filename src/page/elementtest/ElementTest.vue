
<template>
  <div class="element_body">
    <el-button @click="testAction(0)" >container</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </div>
</template>
<script>
export default {
  name: "element-test",
  components: {},
  data() {
    return {};
  },
  methods: {
      testAction(index){
          switch (index) {
              case 0:
                  this.$router.push('container_test')
                break;
              case 1:
                  this.$router.push('container_test')
                break;
              default:
                  break;
          }

      }
  },
};
</script>

<style lang = "less" scoped>
.element_body {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: fff;
  box-sizing: border-box;
}
.el-row {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
.el-button {
  margin-top: 20px;
  border-radius: 4px;
}
</style>