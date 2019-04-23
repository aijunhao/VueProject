<template>
  <div class="goodsinfo-container">
    <!-- 小球 -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
    <!-- 轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <swipe :swipeItemList="swipeItemList" :isfull="false"></swipe>
      </div>
    </div>
    <!--商品购买区域  -->
    <div class="mui-card" ref="test">
      <div class="mui-card-header">商品名称</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="price">
            市场价：
            <del>￥2399.00</del>&nbsp;&nbsp;
            销售价：
            <span class="now_price">￥2199</span>
          </div>
          <div>
            <span>购买数量：</span>
            <div ref="number" class="buy_number">
              <el-input-number
                v-model="num"
                size="mini"
                @change="handleChange"
                :min="1"
                :max="10"
                label="描述文字"
              ></el-input-number>
            </div>
          </div>
          <div>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopcar">加入购物车</mt-button>
          </div>
        </div>
      </div>
    </div>
    <!--商品详情区域  -->
    <div class="mui-card">
      <div class="mui-card-header">其他内容</div>
      <div class="mui-card-content">
        <div
          class="mui-card-content-inner"
        >这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了这里数据懒得来写了</div>
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
      num: 1,
      ballFlag: false
    }
  },
  props: ["id"],
  components: {
    swipe
  },
  created() {
    this.getSwipe()
  },
  mounted() {
    // 初始化小球
    var numberBox = this.$refs.number.getBoundingClientRect()
    var top = numberBox.top + numberBox.height / 2
    var left = numberBox.left + numberBox.width / 2
    this.$refs.ball.style.top = `${top}px`
    this.$refs.ball.style.left = `${left}px`
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
    },
    addToShopcar() {
      this.ballFlag = !this.ballFlag
    },
    beforeEnter: function (el) {
      // 进入之前的函数
      el.style.transform = "translate(0, 0)"
    },
    enter: function (el, done) {
      // 获取小球在页面中的位置
      var ballPosition = this.$refs.ball.getBoundingClientRect()
      // 获取父组件中角标的位置
      var badgePosition = document.getElementById("badge").getBoundingClientRect()
      // 横向偏移量
      var x = badgePosition.left - ballPosition.left
      // 纵向偏移量
      var y = badgePosition.top - ballPosition.top
      // el.offsetWidth
      el.style.transform = `translate(${x}px, ${y}px)`
      el.style.transition = "all 1s cubic-bezier(.24,-0.38,.71,-0.01)"
      done()
    },
    afterEnter: function (el) {
      // 进入之后的函数
      this.ballFlag = !this.ballFlag
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
.goodsinfo-container {
  overflow: hidden;
}
.ball {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 2;
  transform: translate();
}
.buy_number {
  display: inline-block;
}
</style>
