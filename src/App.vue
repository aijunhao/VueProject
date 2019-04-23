<template>
  <div id="app">
    <!-- 头部 -->
    <mt-header fixed title="vue学习项目" style="z-index: 999"></mt-header>
    <!-- 过渡动画 -->
    <transition>
      <!-- 路由视图 -->
      <router-view></router-view>
    </transition>
    <!-- 底部导航 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-extra mui-icon-extra-peoples"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge" ref="badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<style lang="stylus">
#app {
  padding-top: 40px;
  padding-bottom: 51px;
  overflow-x: hidden;
}

.v-enter {
  // opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active, .v-leave-active {
  transition: all 0.5s ease;
}
</style>
