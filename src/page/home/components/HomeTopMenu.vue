<template>
  <div class="menu_top_back">
    <div class="main_title"> tianhj </div>
    <div class="menu_top_right_back">
      <div class="menu_top_right_item">首页</div>
      <div class="menu_top_right_item"> 目录</div>
      <div class="menu_top_right_item">关于我</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.menu_top_back {
  background-color: rgba(51, 51, 51, 1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  color: #42b983;
  box-sizing: border-box;
  padding: 20px 20px 0 20px;

}
.menu_top_right_back{
  display: flex;
}
.menu_top_right_item{
  padding: 0 20px;
}
.main_title{
  font-size: 28px;
}
</style>
