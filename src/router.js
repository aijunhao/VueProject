import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/tabbar/HomeComponent.vue'
import Member from './components/tabbar/MemberComponent.vue'
import Search from './components/tabbar/SearchComponent.vue'
import Shopcar from './components/tabbar/ShopcarComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/shopcar',
      component: Shopcar
    }
  ],
  linkActiveClass: 'mui-active'
})
