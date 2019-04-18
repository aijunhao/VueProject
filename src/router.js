import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/tabbar/HomeComponent.vue'
import Member from './components/tabbar/MemberComponent.vue'
import Search from './components/tabbar/SearchComponent.vue'
import Shopcar from './components/tabbar/ShopcarComponent.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import Photos from './components/photos/Photos.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
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
    },
    {
      path: '/home/newslist',
      component: NewsList
    },
    {
      path: '/home/newsinfo/:id',
      component: NewsInfo,
      props: true
    },
    {
      path: '/home/photos',
      component: Photos
    }
  ],
  linkActiveClass: 'mui-active'
})
