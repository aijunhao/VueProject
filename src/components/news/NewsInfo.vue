<template>
  <div class="newsinfo-container">
    <h3 class="title">{{ news.title }}</h3>
    <div class="subtitle">
      <span>发表时间：{{ news.publishTime | dataFormat('YYYY-MM-DD HH:mm:ss') }}</span>
      <span>浏览次数：{{ news.clickNumber }}</span>
    </div>

    <hr>

    <div class="content" v-html="news.zhaiyao"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: {}
    }
  },
  props: ['id'],
  created() {
    this.getNewsInfo()
  },
  methods: {
    getNewsInfo() {
      this.$axios({
        methods: 'get',
        url: '/newsinfo/' + this.id,
      }).then(
        res => {
          this.news = res.data
          console.log('newsinfo 加载成功', res.data)
        }
      ).catch(
        err => {
          console.log('newsinfo 加载失败', err)
        }
      )
    }
  }
}
</script>

<style>
.newsinfo-container {
  padding: 0 8px;
}

.title {
  text-align: center;
  font-size: 30px;
  font-family: "幼圆";
  margin: 10px;
}

.subtitle {
  display: flex;
  justify-content: space-between;
  font-family: "幼圆";
  font-size: 12px;
  color: #a3a2a2;
}

.content img{
  width: 100%;
}
</style>
