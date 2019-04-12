# vueproject

这是我的 `vue` 学习项目。

## 制作首页App组件

1. 完成 `Header` 组件，使用 `Mint-UI` 组件，部分导入。

2. 制作底部的 `Tabbar` 区域，使用 `MUI` 的 `Tabbar` ，从 `Tabbar.html` 代码中拷贝。

    有四个按钮，分别是首页，会员，购物车，搜索。

    - “首页”按钮图标使用默认。
    - “搜索”按钮图标修改。
    - “会员”和“购物车”按钮图标使用额外的图标。
    
    将 `MUI` 额外图标案例需要的“icons-extra.css”和“mui-icons-extra.ttf” 两个文件放入到“lib/mui”各自目录下，并在入口文件中导入。

3. 在页面中间放置一个 `router-view` 来展示路由匹配到的组件。

## 路由改造

1. 改造 `tabbar` 为 `router-link`，并添加 `to` 属性。

2. 设置路由高亮

    在 `router.js` 文件中创建路由对象的时候添加自定义激活类，`linkActiveClass: 'mui-active'`，类名为 `MUI` 默认激活样式类。

3. 创建路由组件

    所有与 `tabbar` 有关的路由组件都放在 `components/tabbar` 目录下。

    - HomeComponent.vue

    - MemberComponent.vue

    - SearchComponent.vue

    - ShopcarComponent.vue

4. 给 `router.js` 导入路由组件并挂载

## 制作首页轮播图

1. 轮播图布局使用 `Mint-UI` 组件，局部导入 `Swipe`和`SwipeItem`，在首页使用时，需要注意要获取轮播图的类名（实时编译查看），并设置其高度，其默认高度为0。

2. vue-axios 轮播图数据加载。

    `npm i -S axios` 下载 `axios` 并导入到入口文件。

3. 在 vue.config.js 中配置代理，使用 NodeProject 提供的 swipeItemList 模拟数据。

4. 获取到数据，保存到 data 上。

5. 使用 v-for 循环渲染到每个 item 中。