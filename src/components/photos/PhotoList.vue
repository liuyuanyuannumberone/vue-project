<template>
    <div class="photoList">
        <!--顶部滑动条-->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                        推荐
                    </a>
                    <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
                        热点
                    </a>
                    <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                        北京
                    </a>
                    <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                        社会
                    </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                        科技
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

  export default{
    data(){
      return {}
    },
    mounted(){   //初始化滑动控件---时机很重要
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      });
    },
    methods: {},
  }
</script>
<style lang="scss" scoped>
    * {
        touch-action: pan-y;
    }

    .photoList {

    }
</style>