<template>
    <div class="content_back">
        <div>
            <font v-if="commendData.mark" color="#EE0000">[置顶]</font>
            <div class="title"> {{ commendData.title }} </div>
        </div>
        
        <div class="content"> {{ commendData.content }}  </div>
        <div class="time">   Posted by Gityuan on {{ commendData.time }}  </div>
    </div>
</template>
<script>
export default {
    name: 'HomeCommendItem',
    props: {
        commendData: {
            type: Object,
            default:null,
        },
        title: String,
    },
    data() {
        return {
           mcommendData:this.commendData 
        }
    },
}
</script>

<style scoped>
.content_back{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 30px 150px 0 30px;

}
.content , .time { 
    padding-top: 8px;
    font-size: 16px;
    color: #999999;
}
.time{
   padding-top: 10px;
    font-size: 18px;
    color: #666; 
}
.title{
    font-size: 30px;
    color: #333;
}

</style>