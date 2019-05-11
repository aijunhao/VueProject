<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item._id">
        <router-link :to="'/home/newsinfo/' + item._id ">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class="mui-ellipsis">
              <span class="item1">{{ item.publishTime | dataFormat('MM-DD HH:mm:ss') }}</span>
              <span class="item2">
                <img src="../../images/view.png" alt>
              </span>
              <span class="item3">{{ item.clickNumber }}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  data() {
    return {
      newsList: []
    }
  },
  created() {
    this.getNewsList()
  },
  methods: {
    getNewsList() {
      this.$axios({
        methods: 'get',
        url: this.$url + '/newslist'
      }).then(
        res => {
          console.log('newslist 加载成功', res)
          this.newsList = res.data
        }
      ).catch(
        err => {
          console.log('newslist 加载失败', err)
        }
      )
    }
  }
}
</script>

<style scoped>
.mui-table-view h1 {
  font-size: 14px;
}

.mui-ellipsis {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
}

.item2 img {
  width: 12px;
  height: 12px;
}

.item1 {
  flex: 4;
}

.item2 {
  flex: 1;
  text-align: right;
}

.item3 {
  flex: 1;
  text-align: center;
}
</style>
