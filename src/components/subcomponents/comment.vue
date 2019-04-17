<template>
  <div>
    <br>
    <br>
    <h3>发表评论</h3>
    <hr>
    <textarea rows="3" placeholder="最多发表120字" maxlength="120" v-model="msg"></textarea>

    <mt-button type="primary" size="large" @click="publishComment">发表评论</mt-button>

    <br>
    <h3>评论</h3>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in comments" :key="item._id">
        <img class="mui-media-object mui-pull-left" src="http://www.aijunhao.com.cn/images/1.jpg">
        <div class="mui-media-body">
          <div class="head">
            <span class="nickname">{{ item.nickname }}</span>
            <span class="support">{{ item.support }}人点赞</span>
          </div>

          <p class="comment">{{ item.content }}</p>

          <div class="response">
            <span>{{ item.publishTime | dataFormat() }}</span>
            ·
            <span>回复他</span>
          </div>
        </div>
      </li>
    </ul>
    <p class="more" @click="getMore">{{ tips }}</p>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  data() {
    return {
      pageIndex: 1,
      comments: [],
      tips: "加载更多",
      status: true,
      msg: ''
    }
  },
  created() {
    this.getComment()
  },
  methods: {
    getComment() {
      console.log(this.id, this.pageIndex)
      this.$axios({
        methods: 'get',
        url: '/getcomments/' + this.id + "?pageindex=" + this.pageIndex
      }).then(res => {
        console.log(res.data)
        if (res.data.length) {
          this.comments = this.comments.concat(res.data)
        } else {
          this.tips = "已加载所有数据"
          this.status = false
        }
      })
        .catch(err => {
          console.log('获取失败')
        })
    },
    getMore() {
      if (this.status) {
        this.pageIndex++
        this.getComment()
      } else {
        Toast('已加载所有数据')
      }
    },
    publishComment() {
      if (this.msg.trim().lenth === 0) {
        return Toast('评论内容不能为空！')
      }
      this.$axios({
        method: 'post',
        url: '/postcomment',
        data: {
          artid: this.id,
          content: this.msg.trim()
        },
      }).then(
        res => {
          if (res.status === 200) {
            console.log('成功', res)
            // 重新加载评论
            this.comments = []
            this.pageIndex = 1
            this.msg = ''
            this.getComment()
          } else {
            Toast('评论发表失败，请重试！')
          }
          
        }
      ).catch(
        err => {
          console.log(err)
        }
      )
    }
  },
  props: ["id"]
}
</script>

<style scoped>
h3 {
  font-size: 15px;
}
textarea {
  font-size: 12px;
}
.head {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  margin-bottom: 5px;
}
.nickname {
  color: cornflowerblue;
}
.support {
  font-size: 10px;
}
.response {
  font-size: 12px;
  margin-top: 5px;
  color: #bfbfbf;
}
.mui-table-view {
  margin-bottom: 20px;
}

.mui-media-object {
  border-radius: 50%;
}

.more {
  font-size: 15px;
  color: #bfbfbf;
  text-align: center;
  margin: 20px auto;
}
</style>