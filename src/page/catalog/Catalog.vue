
<template>
  <div id="catalog">
      目录
  </div>
</template>

<script>


export default {
  name: 'catalog',
  components: {
  },
  methods: {
      
  },
  mounted() {
      this.$emit("itemClickEvent",2);
    } 
}
</script>

<style lang="less">

</style>