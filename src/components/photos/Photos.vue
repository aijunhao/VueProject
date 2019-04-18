<template>
  <div class="app">
    <div class="wrapper">
      <ul class="content">
        <li>推荐</li>
        <li>热点</li>
        <li>社会</li>
        <li>娱乐</li>
        <li>科技</li>
        <li>美女</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  data() {
    return {

    }
  },
  mounted() {
    let scroll = new BScroll('.wrapper', {
      scrollX: true,
      click: true
    })
  },
}
</script>

<style>
.wrapper {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.content {
  width: 480px;
  padding: 0px;
  margin: 5px;
}
.content li {
  text-align: center;
  list-style: none;
  display: inline-block;
  width: 80px;
}
</style>
