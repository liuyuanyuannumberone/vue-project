//导入样式
import 'bootstrap/dist/css/bootstrap.css'  //通过路径的形式去使用node_modules下面的文件，直接以包的名称开始引用；
import '../lib/mui/css/mui.min.css'   //和 bootstrap用法完全一样
import 'vue-easytable/umd/css/index.css'
import 'mint-ui/lib/style.css'
import '../lib/mui/css/icons-extra.css'
import '../lib/mui/css/mui.css'
import '../lib/mui/fonts/mui.ttf'
import '../lib/mui/fonts/mui-icons-extra.ttf'
import 'beautify-scrollbar/dist/index.css';
import 'v2-table/dist/index.css';
import './index.css'


//导入组件
import Vue from 'vue'
import app from './app.vue'
// 导入 table 和 分页组件
import {VTable, VPagination} from 'vue-easytable'
//导入vue-resource
import  VueResource from 'vue-resource'
Vue.use(VueResource);

//路由模块
import VueRouter from 'vue-router'
import router from '../routes/router'
Vue.use(VueRouter);

//导入Mint UI--基于 Vue.js 的移动端组件库
import MintUI from 'mint-ui'    //样式文件需要单独引入。
Vue.use(MintUI)
import V2Table from 'v2-table';
Vue.use(V2Table)

//导入js
import 'vue-easytable/umd/js/index'
import test, {title, content} from './test.js'


// 注册到全局
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)


var vm = new Vue({
  el: '#app',
  data: {},
  render: h => h(app),
  router
});
console.log(test, test + '-----' + title + '-----' + content);


