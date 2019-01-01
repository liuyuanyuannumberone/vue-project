<template>
    <div class="photoList">
        <!--顶部滑动条-->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id==1?'mui-active':'']" v-for="item in cates" :key="item.id">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
        <!--/顶部滑动条-->
    </div>
</template>
<script>
  //导入mui的js文件
  /*
   * 我们在初始化滑动条的时候，导入的mui.js，但是控制台报错:`Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them`,推测mui.js中用到了'caller','callee'and 'arguments',但是在webpack打包的时候，默认是启用严格模式的，所以造成冲突。
   * 解决办法：移除严格模式:把wewbpack打包时候严格模式禁用;
   * */
  import mui from'../../../lib/mui/js/mui.min'
  import {Toast} from 'mint-ui';

  export default{
    data(){
      return {
        cates: [],
      }
    },
    created(){
      this.getAllCategory();
    },
    mounted(){   //初始化滑动控件---时机很重要
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      });
    },
    methods: {
      getAllCategory(){
        this.cates = [
          {id: 1, title: "全部"},
          {id: 2, title: "热点"},
          {id: 3, title: "图片"},
          {id: 4, title: "科技"},
          {id: 5, title: "娱乐"},
          {id: 6, title: "游戏"},
          {id: 7, title: "直播"},
          {id: 8, title: "体育"},
          {id: 9, title: "科技"},
          {id: 10, title: "汽车"},
          {id: 11, title: "财经"},
          {id: 12, title: "搞笑"},
        ]
        //vue-resource 请求新闻目录
          /*this.$http.get('api/getimgcategory').then(res => {
           if (res.body.status === 0) {
           res.body.message.unshift({title: "全部", id: 0});
           this.cates = res.body.message;
           } else {
           Toast('新闻列表获取失败!');
           }
           })*/
      },
    },
  }
</script>
<style lang="scss" scoped>
    * {
        touch-action: pan-y;
    }

    .photoList {
        .mui-control-item{
            text-decoration: none;
        }
    }
</style>