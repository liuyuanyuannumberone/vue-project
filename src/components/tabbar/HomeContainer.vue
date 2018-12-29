<template>
    <div>
        <h1 style="display: none;">home</h1>
        <!--轮播图区域-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in carouselList" :key="item.url">
                <img :src="item.img" alt="">
            </mt-swipe-item>

        </mt-swipe>
        <!--/轮播图区域-->
    </div>
</template>
<script>
  import {Toast} from 'mint-ui';
  import  img01 from '../../common/images/01.jpg'
  import  img02 from '../../common/images/02.jpg'
  import  img03  from'../../common/images/03.jpg'
  export default{
    data(){
      return {
        carouselList: [],
      }
    },
    created(){
      this.getCarousel();
    },
    methods: {
      //轮播图
      getCarousel(){
        this.carouselList = [
          {img: img01, url: 'http://vue01.com'},
          {img: img02, url: 'http://vue02.com'},
          {img: img03, url: 'http://vue03.com'},
        ];
        Toast({
          message: '加载轮播图成功',
          position: 'top',
          duration: 1000
        });
       //   vue-resource请求轮播图
          /*  this.$http.get('http://vue.studyit.io/api/getlunbo').then(res => {
           if (res.body.status === 0) {
           this.carouselList = res.body.message;
           } else {
           Toast('加载轮播图失败');
           }
           })*/
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
            img {
                height: 100%;
                width: 100%;
            }
        }
        /*.mint-swipe-item:nth-of-type(2) /:nth-child(2){
            background-color: red;
        }*/
    }
</style>