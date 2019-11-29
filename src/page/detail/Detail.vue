<template>
  <div class="detail">
   
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "me",
  components: {},
  methods:{
      ...mapActions(['changetopContent']),
      getData(){
        setTimeout(() => {
            this.changetopContent({"index":4,"title":"Detail","content":"this is content"});
        }, 100)
      }
  },
  data() {
    return {};
  },
  created(){
    this.getData();
  },
  mounted() {
    //   this.getData();
    //   this.changetopContent({"index":4,"title":"Detail","content":"this is content"})
  },
};
</script>

<style  scoped>
</style>