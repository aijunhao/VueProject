<template>
  <div class="goods-list">
    <ul class="goods-wrapper">
      <router-link :to="'/home/goodsinfo/' + item._id" tag="li" class="goods-item" v-for="item in goodslist" :key="item._id">
        <img class="goods-img" :src="item.img_url">
        <div class="goods-msg">
          <p class="goods-title">{{ item.title }}</p>
          <div class="goods-info">
            <p class="price">
              <span class="price-now">￥{{ item.sell_price }}</span>
              <span class="price-old">￥{{ item.old_price }}</span>
            </p>
            <p class="sell">
              <span>热卖中</span>
              <span>剩{{ item.stock_quantity }}件</span>
            </p>
          </div>
        </div>
      </router-link>
    </ul>
    <p class="more" @click="getMore">加载更多</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageindex: 1,
      goodslist: []
    }
  },
  created() {
    this.getGoods()
  },
  methods: {
    getGoods() {
      this.$axios({
        method: 'get',
        url: this.$url + '/getgoods?pageindex=' + this.pageindex
      }).then(res => {
        console.log('成功', res)
        if (res.status === 200) {
          this.goodslist = this.goodslist.concat(res.data)
          console.log(this.goodslist)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getMore() {
      this.pageindex ++
      this.getGoods()
    }
  }
}
</script>

<style>

.goods-wrapper {
  margin: 1%;
  padding: 0px;
  overflow: hidden;
}
.goods-item {
  width: 48%;
  border: 1px solid #ccc;
  margin: 1% 1%;
  background-color: #fff;
  border-radius: 5px;
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 250px;
  list-style: none;
  float: left;
}
.goods-item p {
  margin: 0;
  padding: 5px;
}
.goods-img {
  width: 100%;
  margin-top: 5px;
}
.goods-title {
  font-size: 14px;
  color: black;
  padding: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.goods-info {
  background-color: #eee;
}
.price-now {
  font-size: 16px;
  font-weight: bold;
  color: red;
}
.price-old {
  font-size: 12px;
  text-decoration: line-through;
  margin-left: 10px;
}
.sell {
  display: flex;
  justify-content: space-between;
}
.more {
  font-size: 15px;
  color: #bfbfbf;
  text-align: center;
  margin: 10px auto;
}
</style>
