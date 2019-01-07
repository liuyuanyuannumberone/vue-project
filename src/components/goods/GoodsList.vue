<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="../../common/images/goodsimage/mobile01.jpg" alt="">
            <h1 class="title">小米(Mi)小米Note 16G双网通版</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥2199</span>
                    <span class="old">￥2399</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="../../common/images/goodsimage/mobile01.jpg" alt="">
            <h1 class="title">小米(Mi)小米Note 16G双网通版</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥2199</span>
                    <span class="old">￥2399</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="../../common/images/goodsimage/mobile01.jpg" alt="">
            <h1 class="title">小米(Mi)小米Note 16G双网通版</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥2199</span>
                    <span class="old">￥2399</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
  export default{
    data(){
      return {}
    },
    methods: {},
  }
</script>

<style lang="scss" scoped>
    .goods-list {
        display: flex;
        flex-flow: row wrap;
        padding: 7px;
        justify-content: space-between;
        .goods-item {
            width: 49%;
            margin: 4px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;  /*纵向布局因为有些title长*/
            justify-content: space-between;
            min-height: 293px;
            /*flex:1;*/
            /*flex:1 1 48%; 也可以*/
            border: 1px solid #ccc;
            box-shadow: 0 0 6px #ccc;
            .title {
                font-size: 14px;
                font-weight: bolder;

            }
            img {
                width: 100%;
            }
            .info {
                background-color: #eee;

                p {
                    padding: 5px;
                    margin: 0;
                }
                .price {
                    .now {
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                    }
                    .old {
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }
                .sell {
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
                }
            }
        }
    }

</style>