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

        <!--/中间的路由 router-view 区域-->

        <!--底部的Tabbar-->
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item mui-active" href="#tabbar">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-chat">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">消息</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-contact">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">通讯录</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-map">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">设置</span>
            </a>
        </nav>
        <!--/底部的Tabbar-->
        <h1>1111</h1>
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
    }


</style>
