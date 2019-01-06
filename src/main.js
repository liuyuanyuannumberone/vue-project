//导入样式
//bootstrap
import 'bootstrap/dist/css/bootstrap.css'  //通过路径的形式去使用node_modules下面的文件，直接以包的名称开始引用；
import 'bootstrap-vue/dist/bootstrap-vue.css'

//mui
import '../lib/mui/css/mui.min.css'   //和 bootstrap用法完全一样
import '../lib/mui/css/icons-extra.css'
import '../lib/mui/css/mui.css'
import '../lib/mui/fonts/mui.ttf'
import '../lib/mui/fonts/mui-icons-extra.ttf'

//导入materialize Google 材质设计（Material Design）for web
// import '../lib/materialize/css/materialize.min.css'
// import '../lib/materialize/js/materialize.min'

import 'vue-easytable/umd/css/index.css'
import 'mint-ui/lib/style.css'
//v2-table
import 'beautify-scrollbar/dist/index.css';
import 'v2-table/dist/index.css';

import './index.css'


//导入组件
import Vue from 'vue'
import app from './app.vue'

//引入bootstrap-vue
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入iview组件
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

// 导入 table 和 分页组件  vue-easytable
import {VTable, VPagination} from 'vue-easytable'
//导入vue-resource
import  VueResource from 'vue-resource'
Vue.use(VueResource);
//配置请求根路径
Vue.http.options.root = 'http://vue.studyit.io';
Vue.http.options.emulateJSON = true;   //全局设置post时候数据表单格式组织形式
//如果您的Web服务器无法处理编码为的请求application/json，则可以启用该emulateJSON选项。这将以application/x-www-form-urlencodedMIME类型的形式发送请求，就像从普通的HTML表单一样。

//定义全局过滤器
//导入格式化时间的插件
import moment from 'moment'
Vue.filter('dateFormat', function (date, pattern = "YYYY--MM--DD hh:mm:ss") {
  return moment(date).format(pattern);
});

//路由模块
import VueRouter from 'vue-router'
import router from '../routes/router'
Vue.use(VueRouter);

//导入Mint UI--基于 Vue.js 的移动端组件库
import MintUI from 'mint-ui'    //样式文件需要单独引入。
Vue.use(MintUI);
import V2Table from 'v2-table';
Vue.use(V2Table);
//安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview);
// Vue.use(preview, {
//   mainClass: 'pswp--minimal--dark',
//   barsSize: {top: 0, bottom: 0},
//   captionEl: false,
//   fullscreenEl: false,
//   shareEl: false,
//   bgOpacity: 0.85,
//   tapToClose: true,
//   tapToToggleControls: false
// });
//导入js
//  import $ from 'jquery'
// import  'jquery/dist/jquery.min'

import 'bootstrap/dist/js/bootstrap.min'
import 'vue-easytable/umd/js/index'
import test, {title, content} from './test.js'


// 注册到全局
Vue.component(VTable.name, VTable);
Vue.component(VPagination.name, VPagination);


var vm = new Vue({
  el: '#app',
  data: {},
  render: h => h(app),
  router
});
console.log(test, test + '-----' + title + '-----' + content);


