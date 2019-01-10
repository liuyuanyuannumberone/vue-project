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
import Vuex from 'vuex'
Vue.use(Vuex);
//new Vuex.store()实例，得到一个数据存储对象;
var store = new Vuex.Store({ //强大的双向绑定！
   // data
  state: {        //可以看作是data;专门用来存储数据
    count: 0,
    data: [],
    list: [],
  },
  //methods
  mutations: {    //可以看作是methods，如果操作state中的数据，只能通过调用mutations中的方法，不能直接在各自组件操作state中的数据,担心万一数据紊乱,无法查找原因;state固定
    increment(state){
      state.count++;
    },
    substact(state, index){   //最多支持两个参数;(state,commit提交的参数(对象，数组))
      state.count -= index;
    },
    acceptData(state, data){
      state.data = data;
    },
    listData(state, arr){
      state.list = arr;
    },
    change(state, arr){
      state.list = arr;
    }
  },
  //  computed
  getters: {
    //只负责提供数据，不负责修改数据;如果想要修改state中的数据，mutation可以修改state中的数据；和computed类似，只要数据发生变化，就会触发getter;
    optCount: function (state) {
      return "当前最新的count值:" + state.count;
    },
    pushData: function (state) {
      return state.data;
    },
  },
});
import "./components/global"
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
  router,
  store,      //vuex全局使用;
});
console.log(test, test + '-----' + title + '-----' + content);


