<template>
  <div class="goodsinfo-container">
    <!-- 轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <swipe :swipeItemList="swipeItemList" :isfull="false"></swipe>
      </div>
    </div>
    <!--商品购买区域  -->
    <div class="mui-card">
      <div class="mui-card-header">商品名称</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>￥2399.00</del>&nbsp;&nbsp;
            销售价：
            <span class="now_price">￥2199</span>
          </p>
          <p>
            购买数量：
            <el-input-number v-model="num" size="mini" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <!--商品详情区域  -->
    <div class="mui-card">
      <div class="mui-card-header">其他内容</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">这里数据懒得来写了</div>
      </div>
    </div>
  </div>
</template>

<script>
import swipe from '../subcomponents/Swipe.vue'

export default {
  data() {
    return {
      swipeItemList: [],
      num: 1
    }
  },
  props: ["id"],
  components: {
    swipe
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
    },
    handleChange(value) {
      console.log(value)
    }
  }
}
</script>

<style scoped>
.now_price {
  color: red;
  font-size: 16px;
  font-weight: bold;
}
</style>
