<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swipeItemList" :key="item.url">
        <img :src="item.img" alt>
      </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newslist">
            <img src="../../images/menu1.png" alt="">
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/photolist">
            <img src="../../images/menu2.png" alt="">
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/goodslist">
            <img src="../../images/menu3.png" alt="">
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="">
            <img src="../../images/menu4.png" alt="">
            <div class="mui-media-body">留言反馈</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="">
            <img src="../../images/menu5.png" alt="">
            <div class="mui-media-body">视频专区</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="">
            <img src="../../images/menu6.png" alt="">
            <div class="mui-media-body">联系我们</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
  data() {
    return {
      swipeItemList: []
    }
  },
  created() {
    this.getSwipe()
  },
  methods: {
    // 获取轮播图
    getSwipe() {
      this.$axios({
        method: 'get',
        url: '/swipeitems'
      }).then(
        res => {
          console.log('swipeitems 获取成功', res.data)
          this.swipeItemList = res.data
        }
      ).catch(
        err => {
          console.log('swipeitems 获取失败', err)
        }
      )
    }
  }
}
</script>

<style scoped>
/* 通过浏览器或得到编译后的类名，设置它的高度 */
.mint-swipe {
  height: 200px;
}

.mint-swipe-item img {
  width: 100%;
  height: 100%;
}

.mui-grid-view.mui-grid-9 {
    border: none;
}

.mui-grid-view.mui-grid-9 img {
    width: 40px;
    height: 40px;
}

.mui-media-body {
    font-size: 13px;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;
}
</style>
