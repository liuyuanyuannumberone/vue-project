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
        <!--六宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist" class="textDecoration">
                    <img src="../../common/images/liugongge/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist"  class="textDecoration">
                    <img src="../../common/images/liugongge/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist"  class="textDecoration">
                    <img src="../../common/images/liugongge/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#"  class="textDecoration">
                    <img src="../../common/images/liugongge/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#"  class="textDecoration">
                    <img src="../../common/images/liugongge/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#"  class="textDecoration">
                    <img src="../../common/images/liugongge/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
        <!--/六宫格-->
    </div>
</template>
<script>
  import {Toast} from 'mint-ui';
  import  img01 from '../../common/images/carouselimg/01.jpg'
  import  img02 from '../../common/images/carouselimg/02.jpg'
  import  img03  from'../../common/images/carouselimg/03.jpg'

  //图片引入，在vm实例中需要引入
  /* import  menu1  from'../../common/images/liugongge/menu1.png'
   import  menu2  from'../../common/images/liugongge/menu2.png'
   import  menu3  from'../../common/images/liugongge/menu3.png'
   import  menu4  from'../../common/images/liugongge/menu4.png'
   import  menu5  from'../../common/images/liugongge/menu5.png'
   import  menu6  from'../../common/images/liugongge/menu6.png'*/
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
      //获取轮播图
      getCarousel(){
        this.carouselList = [
          {img: img01, url: 'http://vue01.com'},
          {img: img02, url: 'http://vue02.com'},
          {img: img03, url: 'http://vue03.com'},
        ];
          /*   Toast({
           message: '加载轮播图成功',
           position: 'top',
           duration: 1000
           });*/
        //   vue-resource请求轮播图
          /*  this.$http.get('api/getlunbo').then(res => {
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

    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        .mui-table-view-cell {
            border: none;
        }
        .textDecoration{
            text-decoration: none;
        }
        img { //原来图片大小的一半
            width: 60px;
            height: 60px;
        }
        .mui-media{
            text-decoration: none;
        }
        .mui-media-body {
            font-size: 13px;
        }
    }


</style>