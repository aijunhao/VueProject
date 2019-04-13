# vueproject

这是我的 `vue` 学习项目。

## 制作首页App组件

1. 完成 `Header` 组件，使用 `Mint-UI` 组件，部分导入。

2. 制作底部的 `Tabbar` 区域，使用 `MUI` 的 `Tabbar` ，使用 `Tabbar.html` 中的 tabbar 组件。

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

## 九宫格效果改造

“首页”有一个六宫格，使用 `MUI` 的 `grid-default.html` 中的九宫格组件改造成六宫格，替换默认图片。

## 初始页面重定向及路由过渡效果

1. 修改初始页面不是“首页”的 bug ，在 `router.js` 路由模块添加重定向即可。

2. 过渡动画，在 `App.vue` 中设置。

    - 使用 `overflow-x: hidden;` 需要清除水平滚动条。

    - 使用 css 过渡，但是不能简单的使用 `out-in` 过渡模式，有一个空白时间差。

    - 目前使用 css 过渡，加 `.v-leave-to` 类设置 `position: absolute;` 离开过程脱离文档流来实现平滑过渡且没有空白时间差。

## 新闻页面路由搭建

1. 在 "components" 文件夹下创建 "news" 文件夹，创建 "NewsList.vue" 新闻页面。

2. “首页” 新闻页面超链接按钮改造为 `router-link`，顺便把其他几个链接也改造了。

3. 使用 `/home/newslist` 路由地址，挂载根目录，而不是作为 `/home` 的子组件。

## 新闻页面搭建

1. 绘制界面，使 “media-list.html” 改造。

2. `axios` 获取数据，使用 NodeProject 提供的 newsListApi.josn 模拟数据。

3. 渲染数据。

## 增加首页底边距。

## 时间格式化

    从接口中传过来的数据不是我们熟悉的时间格式，我们定义全局过滤器来进行格式化。

    1. 安装 moment 插件
    ```shell
    > npm i -S moment
    ```

    2. 创建 dataFormat 全局过滤器。

    3. 在 NewsList.vue 页面通过管道符使用过滤器。