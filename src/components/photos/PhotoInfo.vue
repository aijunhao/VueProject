<template>
  <div>
    <!-- 标题 -->
    <h3 class="title">{{ photo.title }}</h3>
    <!-- 子标题 -->
    <div class="subtitle">
      <span>发表时间：{{ photo.publishTime | dataFormat('YYYY-MM-DD HH:mm:ss') }}</span>
      <span>浏览次数：{{ photo.click }}</span>
    </div>

    <hr>

    <!-- 内容区 -->
    <div>
      <!-- 缩略图 -->
      <vue-preview
        :list="list"
        :thumbImageStyle="{width: '30%', margin: '1%'}"
        :previewBoxStyle="{border: '1px solid #eee'}"
        :tapToClose="true"
        @close="closeHandler"
        @destroy="destroyHandler"
      />
    </div>
    
    <!-- 评论区 -->
    <comment-box :id="id"></comment-box>
  </div>
</template>

<script>
import Comment from '../subcomponents/Comments.vue'

export default {
  data() {
    return {
        // 图片详情对象
        photo: {},
        // 缩略图数组
        list: []
    }
  },
  created() {
    this.getPhotoInfoById()
  },
  methods: {
    getPhotoInfoById(){
      console.log(this.id)
      this.$axios({
        method: 'get',
        url: '/getphotoinfo/' + this.id
      }).then(res => {
        console.log('成功', res.data)
        if (res.status === 200) {
          this.photo = res.data
          res.data.img_urls.forEach(item => {
            item.w = 500
            item.h = 322
          })
          this.list = res.data.img_urls
        }
      }).catch(err => {
        console.log('错误')
      })
    },
    // 缩略图即将关闭的时候，调用这个处理函数
    closeHandler() {
      console.log('closeHandler')
    },
    // 缩略图完全关闭之后，调用这个函数清理资源
    destroyHandler() {
      console.log('destroyHandler')
    }
  },
  props: ['id'],
  components: {
    'comment-box': Comment
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
  margin: 5px;
}
</style>
