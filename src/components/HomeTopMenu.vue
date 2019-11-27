<template>
  <div class="menu_top_back">
    <div class="main_title"> tianhj </div>
    <div class="menu_top_right_back">
      <div v-bind:class="{menu_top_right_item: true,menu_top_right_item_s:isShowSelect(1)}" @click="itemClick(1,'/home')">首页</div>
      <div v-bind:class="{menu_top_right_item: true,menu_top_right_item_s:isShowSelect(2)}" @click="itemClick(2,'/catalog')"> 目录</div>
      <div v-bind:class="{menu_top_right_item: true,menu_top_right_item_s:isShowSelect(3)}" @click="itemClick(3,'/me')">关于我</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    index: Number,
  },
  data() {
    return {
      defaultIndex:1
    }
  },
  computed: {
    
  },
  methods: {
    isShowSelect(i){
      let currentIndex;
      if ( this.index ) {
        currentIndex = this.index;
      } else {
        currentIndex = this.defaultIndex;
      }
      return  currentIndex == i;
    },
    itemClick(index,path){
      let routerPath =  this.$router.history.current.path
      if (path ===  routerPath){
        return;
      }
      this.defaultIndex = index;
      this.$emit("itemClickEvent",index);

      switch (index) {
        case 1:
          this.$router.push('home');
          break;
        case 2:
           this.$router.push('catalog');
           break;
        case 3:
           this.$router.push('me');
           break;
        default:
          break;
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>

.menu_top_back {
  background-color: rgba(51, 51, 51, 1);
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
  .menu_top_right_back{
    display: flex;
    .menu_top_right_item{
      padding: 0 20px;
    }
    .menu_top_right_item_s{
      color: tomato;
    }
  }
  .main_title{
      font-size: 28px;
  }

}


</style>
