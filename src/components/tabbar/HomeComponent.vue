<template>
    <div>
        home
        <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in swipeItemList" :key="item.url">
            <img :src="item.img" alt="">
        </mt-swipe-item>
        </mt-swipe>

    </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
    data() {
        return {
            swipeItemList: []
        }
    },
    created() {
        this.getSwipe()
    },
    methods: {
        // 获取轮播图
        getSwipe() {
            this.$axios({
                method: 'get',
                url: '/swipeItems'
            }).then(
                res => {
                    console.log('获取成功', res.data)
                    if (res.data.swipeItems.status == 0){
                        // 加载轮播图成功
                        this.swipeItemList = res.data.swipeItems.message
                        console.log(this.swipeItemList)
                        Toast("加载轮播图成功")
                    } else {
                        // 加载轮播图失败
                        Toast("加载轮播图失败")
                    }
                }
            ).catch(
                err => {
                    console.log('获取失败', err)
                }
            )
        }
    }
}
</script>

<style scoped>
/* 通过浏览器或得到编译后的类名，设置它的高度 */
.mint-swipe {
    height: 200px;
}

.mint-swipe-item:nth-child(1) {
    background-color: aqua
}

.mint-swipe-item:nth-child(2) {
    background-color: antiquewhite
}

.mint-swipe-item:nth-child(3) {
    background-color: fuchsia
}

.mint-swipe-item img {
    width: 100%;
    height: 100%;
}
</style>
