<template>
    <div class="shopcar-container">
        <!--商品区域-->
        <div class="goods-list">
            <div class="mui-card" v-for="item in goodslist" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch  ></mt-switch>
                        <img :src="item.thumb_path" alt="">
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <numbox :initCount="$store.getters.getGoodsCount[item.id]"></numbox>
                                <!--如何从购物车中获取商品数量
                                创建空对象，循环购物车的数据,把当前循环上的这条id最为对象的属性名，count作为值;{id:count}
                                -->
                                <a href="#">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--/商品区域-->
        <!--结算区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
                </div>
            </div>
        </div>
        <!--/结算区域-->
    </div>
</template>
<script>
  import numbox from '../childcomponents/shopcar_numbox.vue'
  import mobile from '../../common/images/smallimage/MI01.jpg'
  export default{
    components: {
      numbox,
    },
    data(){
      return {
        goodslist: [],
      }
    },
    created(){
      this.getGoodslist();
    },
    methods: {
      getGoodslist(){
        var idArr = [];
        this.$store.state.car.forEach(item => {
          idArr.push(item.id);
        });
        if (idArr.length <= 0) {
          return;
        }
        this.goodslist = this.$store.state.car;
        this.goodslist.forEach(item => {
          item.title = "小米(MI)小米Note 16G双网通版";
          item.sell_price = item.price;
          item.thumb_path = mobile;
        })
        //vue-resource获购物车数据
          /* this.$http.get('/api/goods/getshopcarlist/' + idArr.join(',')).then(res => {
           if (res.body.status === 0) {
           this.goodsinfo = res.body.message;
           }
           })*/
      },
    },
  }
</script>

<style lang="scss" scoped>
    .shopcar-container {
        background-color: #eee;
        overflow: hidden;
        .goods-list {
            .mui-card-content-inner {
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
            img {
                width: 60px;
                height: 60px;
            }
            .info {
                h1 {
                    font-size: 13px;
                    font-weight: bolder;
                    margin-bottom: 18px;
                }
                .price {
                    color: red;
                    font-weight: bold;
                }
            }
        }
    }
</style>