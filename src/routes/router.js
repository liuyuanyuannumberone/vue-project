import VueRouter from 'vue-router'
import account from '../components/account.vue'
import goodlist from '../components/goodlist.vue'
import login from '../subcomponents/login.vue'
import register from '../subcomponents/register.vue'
import vueEasyTable from '../components/vueEasyTable.vue'
import vueEasyTableTwo from '../components/vueEasyTableTwo.vue'
import tableBeautifyScrollbar from '../components/tableBeautifyScrollbar.vue'


var router = new VueRouter({
  routes: [
    {
      path: '/account', component: account,
      children: [
        {path: 'login', component: login, },
        {path: 'register', component: register}
      ]
    },
    {path: '/goodlist', component: goodlist},
    {path: '/vueEasyTable', component: vueEasyTable},
    {path: '/vueEasyTableTwo', component: vueEasyTableTwo},
    {path: '/tableBeautifyScrollbar', component: tableBeautifyScrollbar},
  ]
});

export default router