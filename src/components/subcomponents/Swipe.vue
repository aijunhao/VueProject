<template>
  <div>
    <!-- 需要外部传入轮播图列表 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swipeItemList" :key="item._id">
        <img :src="item.img" alt="" :class="{'full': isfull }">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
  props: ["swipeItemList", "isfull"]
}
</script>

<style scoped>
/* 通过浏览器或得到编译后的类名，设置它的高度 */
.mint-swipe {
  height: 250px;
}
.mint-swipe-item {
  text-align: center;
}
.mint-swipe-item img {
  height: 100%;
}

.full {
  width: 100%;
}
</style>
