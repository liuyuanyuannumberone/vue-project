<template>
    <div class="goods-info">
        <!--商品轮播图区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swipe :carouselList="carousel" :isfull="false"></swipe>
                </div>
            </div>
        </div>
        <!--/商品轮播图区域-->
        <!--商品购买区域-->
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                </div>
            </div>
            <div class="mui-card-footer">页脚</div>
        </div>
        <!--/商品购买区域-->
        <!--商品参数区域-->
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                </div>
            </div>

        </div>
        <!--/商品参数区域-->
    </div>
</template>
<script>
  import {Toast} from 'mint-ui';
  import swipe from '../childcomponents/swipe.vue'
  import mobile05 from '../../common/images/goodsimage/mobile05.jpg'
  import mobile06 from '../../common/images/goodsimage/mobile06.jpg'
  import mobile07 from '../../common/images/goodsimage/mobile07.jpg'
  export default{
    components: {
      swipe
    },
    data(){
      return {
        id: this.$route.params.id,
        carousel: [],
      }
    },
    created(){
      this.getCarousel();
    },
    methods: {
      getCarousel(){
        this.carousel = [
          {id: 1, src: mobile05},
          {id: 2, src: mobile06},
          {id: 3, src: mobile07},
        ];
        this.carousel.forEach(item => {
              item.img = item.src;
            });

        // vue-resource 获取轮播图
/*        this.$http.get("/api/getimages" + this.id).then(res => {
          if (res.body.status === 0) {
            res.body.message.forEach(item => {
              item.img = item.src;
            });
            this.carousel = res.body.message;
              /!*因为swipe封装为组件,只认识img属性*!/
          } else {
            Toast('图片详情加载失败');
          }
        })*/
      },
    },
  }
</script>
<style lang="scss" scoped>
    .goods-info {
        background-color: #eee;
        overflow: hidden;
    }
</style>