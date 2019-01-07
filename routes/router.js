import VueRouter from 'vue-router'
import account from '../src/components/account.vue'
import goodlist from '../src/components/goodlist.vue'
import bootstrap from '../src/components/bootstrap.vue'
import vuebootstrap from '../src/components/vuebootstrap.vue'
import elementUI from '../src/components/elementUI.vue'
import iview from '../src/components/iview.vue'
import materialize from '../src/components/materialize.vue'
import login from '../src/subcomponents/login.vue'
import register from '../src/subcomponents/register.vue'
import vueEasyTable from '../src/components/vueEasyTable.vue'
import vueEasyTableTwo from '../src/components/vueEasyTableTwo.vue'
import tableBeautifyScrollbar from '../src/components/tableBeautifyScrollbar.vue'

import HomeContainer from '../src/components/tabbar/HomeContainer.vue'
import MemberContainer from '../src/components/tabbar/MemberContainer.vue'
import ShopcarContainer from '../src/components/tabbar/ShopcarContainer.vue'
import SearchContainer from '../src/components/tabbar/SearchContainer.vue'
import NewsList from '../src/components/news/NewsList.vue'
import NewsInfo from '../src/components/news/NewsInfo.vue'
import PhotoList from '../src/components/photos/PhotoList.vue'
import Photoinfo from '../src/components/photos/Photoinfo.vue'
import GoodsList from '../src/components/goods/GoodsList.vue'


var router = new VueRouter({
  routes: [
    {path: '/', redirect: '/home'},
    {
      path: '/account', component: account,
      children: [
        {path: 'login', component: login,},
        {path: 'register', component: register}
      ]
    },
    {path: '/goodlist', component: goodlist},
    {path: '/bootstrap', component: bootstrap},
    {path: '/vuebootstrap', component: vuebootstrap},
    {path: '/elementui', component: elementUI},
    {path: '/iview', component: iview},
    {path: '/materialize', component: materialize},
    {path: '/vueEasyTable', component: vueEasyTable},
    {path: '/vueEasyTableTwo', component: vueEasyTableTwo},
    {path: '/tableBeautifyScrollbar', component: tableBeautifyScrollbar},

    {path: '/home', component: HomeContainer,},
    {path: '/home/newslist', component: NewsList},  //这样写也可以
    {path: '/home/newsinfo/:id', component: NewsInfo}, //带参数的路径
    {path: '/home/photolist', component: PhotoList},
    {path: '/home/photoinfo/:id', component: Photoinfo},
    {path: '/home/goodsList',component: GoodsList},
    {path: '/member', component: MemberContainer},
    {path: '/shopcar', component: ShopcarContainer},
    {path: '/search', component: SearchContainer},
  ],
  linkActiveClass: 'mui-active'
});


export default router