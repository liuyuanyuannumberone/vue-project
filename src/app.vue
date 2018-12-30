<template>
    <div class="app-container">
        <!--原来的练习组件-->
        <!--<router-link to="/account">account</router-link>
        <router-link to="/goodlist">goodlist</router-link>
        <router-link to="/vueEasyTable">vueEasyTable</router-link>
        <router-link to="/vueEasyTableTwo">vueEasyTableTwo</router-link>
        <router-link to="/tableBeautifyScrollbar">v2-tableBeautifyScrollbar</router-link>
        <router-view></router-view>-->

        <!--顶部Header区域-->
        <mt-header fixed title="Vue项目"></mt-header>
        <!--/顶部Header区域-->
        <!--中间的路由 router-view 区域-->
        <transition>
            <router-view></router-view>
        </transition>
        <!--/中间的路由 router-view 区域-->
        <!--底部的Tabbar-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item " to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopcar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">0</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
        <!--/底部的Tabbar-->
    </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
    .app-container {
        padding-top: 40px;
        overflow-x: hidden; //组件切换动画，x轴无滚动条
    }

    a:hover, a:focus {
        text-decoration: none;
    }

    .v-enter {
        opacity: 0;
        transform: translateX(100%);
    }

    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        position: absolute; //消除页面离开时产生的位移
    }

    .v-enter-active,
    .v-leave-active {
        transition: all 0.5s ease;
    }
</style>
