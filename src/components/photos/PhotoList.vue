<template>
  <div class="app">
    <!-- 顶部横向导航 -->
    <div class="wrapper">
      <ul class="content-list">
        <li v-for="item in cates" :key="item.id">
          <a
            :class="[item.id === defaultId ? 'active': 'default']"
            @click="changeItem(item.id)"
          >{{ item.title }}</a>
        </li>
      </ul>
    </div>

    <hr>

    <!-- 图片列表 -->
    <ul class="photolist">
      <router-link v-for="item in photoList" :key="item._id" tag="li" :to="'/home/photoinfo/' + item._id">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <h1 class="info-body">{{ item.zhaiyao }}</h1>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  data() {
    return {
      // 目录列表
      cates: [
        { id: 1, title: '推荐' },
        { id: 2, title: '热点' },
        { id: 3, title: '社会' },
        { id: 4, title: '娱乐' },
        { id: 5, title: '科技' },
        { id: 6, title: '美女' }
      ],
      // 图片列表
      photoList: [],
      defaultId: 1
    }
  },
  created() {
    this.getPhotoListByCateId(this.defaultId)
  },
  mounted() {
    let scroll = new BScroll('.wrapper', {
      scrollX: true,
      click: true
    })
  },
  methods: {
    changeItem(id) {
      if (this.defaultId != id) {
        this.defaultId = id
        this.getPhotoListByCateId(id)
      }
    },
    getPhotoListByCateId(cateId) {
      this.$axios({
        method: 'get',
        url: '/getphotolist/' + cateId
      }).then(res => {
        if (res.status === 200) {
          console.log('photoList', res.data)
          this.photoList = res.data
        }

      }).catch(err => {
        console.log('错误')
      })
    }
  },
}
</script>

<style>
.wrapper {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.content-list {
  width: 480px;
  margin: 5px;
  padding: 0px;
}
.content-list li {
  text-align: center;
  display: inline-block;
  width: 80px;
  list-style: none;
}
.active {
  color: #007aff;
}
.default {
  color: black;
}
.photolist {
  padding: 0px;
  text-align: center;
  margin: 0px;
}
.photolist li {
  list-style: none;
  margin-left: 5px;
  margin-right: 5px;
  position: relative;
}
.photolist img {
  width: 100%;
  box-shadow: 0 0 5px #999;
}
/* 懒加载的样式，那个加载条，和加载文字，不同与 img */
img[lazy="loading"] {
  width: 15%;
  height: 15%;
  margin: auto;
}
.info {
  color: white;
  text-align: left;
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 3px;
  background-color: rgba(0, 0, 0, 0.4);
  max-height: 84px;
}
.info-title {
  font-size: 14px;
}
.info-body {
  font-size: 12px;
}
</style>
