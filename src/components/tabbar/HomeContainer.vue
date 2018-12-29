<template>
    <div>
        <h1 style="display: none;">home</h1>
        <!--轮播图区域-->
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
  export default{
    data(){
      return {}
    },
    methods: {
      //轮播图
      carousel(){

      }
    }
  }
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;
        .mint-swipe-item {
            /*sass交替选择器，并且嵌套*/
            &:nth-of-type(1) {
                background-color: red;
            }
            &:nth-of-type(2) {
                background-color: green;
            }
            &:nth-of-type(3) {
                background-color: yellow;
            }
        }
        /*.mint-swipe-item:nth-of-type(2) /:nth-child(2){
            background-color: red;
        }*/
    }
</style>