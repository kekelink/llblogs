---
title: "vue基础小知识"
date: "2019-06-21"
---

# 生命周期

```js
beforeCreate() { // 这是我们遇到的第一个生命周期函数，表示实例完全被创建出来之前，会执行它
        // console.log(this.msg)
        // this.show()
        // 注意： 在 beforeCreate 生命周期函数执行的时候，data 和 methods 中的 数据都还没有没初始化
      },
      created() { // 这是遇到的第二个生命周期函数
        // console.log(this.msg)
        // this.show()
        //  在 created 中，data 和 methods 都已经被初始化好了！
        // 如果要调用 methods 中的方法，或者操作 data 中的数据，最早，只能在 created 中操作
      },
      beforeMount() { // 这是遇到的第3个生命周期函数，表示 模板已经在内存中编辑完成了，但是尚未把 模板渲染到 页面中
        // console.log(document.getElementById('h3').innerText)
        // 在 beforeMount 执行的时候，页面中的元素，还没有被真正替换过来，只是之前写的一些模板字符串
      },
      mounted() { // 这是遇到的第4个生命周期函数，表示，内存中的模板，已经真实的挂载到了页面中，用户已经可以看到渲染好的页面了
        // console.log(document.getElementById('h3').innerText)
        // 注意： mounted 是 实例创建期间的最后一个生命周期函数，当执行完 mounted 就表示，实例已经被完全创建好了，此时，如果没有其它操作的话，这个实例，就静静的 躺在我们的内存中，一动不动
      },


      // 接下来的是运行中的两个事件
      beforeUpdate() { // 这时候，表示 我们的界面还没有被更新【数据被更新了吗？  数据肯定被更新了】
        /* console.log('界面上元素的内容：' + document.getElementById('h3').innerText)
        console.log('data 中的 msg 数据是：' + this.msg) */
        // 得出结论： 当执行 beforeUpdate 的时候，页面中的显示的数据，还是旧的，此时 data 数据是最新的，页面尚未和 最新的数据保持同步
      },
      updated() {
        console.log('界面上元素的内容：' + document.getElementById('h3').innerText)
        console.log('data 中的 msg 数据是：' + this.msg)
        // updated 事件执行的时候，页面和 data 数据已经保持同步了，都是最新的
      }
```

# 动画

1. 修改 v-前缀动画和类名动画

```js
/* v-enter 【这是一个时间点】 是进入之前，元素的起始状态，此时还没有开始进入 */
    /* v-leave-to 【这是一个时间点】 是动画离开之后，离开的终止状态，此时，元素 动画已经结束了 */
    .v-enter,
    .v-leave-to {
      opacity: 0;
      transform: translateX(150px);
    }

    /* v-enter-active 【入场动画的时间段】 */
    /* v-leave-active 【离场动画的时间段】 */
    .v-enter-active,
    .v-leave-active{
      transition: all 0.8s ease;
    }

	/*my 代替v-  指定动画 */
	.my-enter,
    .my-leave-to {
      opacity: 0;
      transform: translateY(70px);
    }

    .my-enter-active,
    .my-leave-active{
      transition: all 0.8s ease;
    }
  </style>
</head>

<body>
  <div id="app">
    <input type="button" value="toggle" @click="flag=!flag">
    <!-- 需求： 点击按钮，让 h3 显示，再点击，让 h3 隐藏 -->
    <!-- 1. 使用 transition 元素，把 需要被动画控制的元素，包裹起来 -->
    <!-- transition 元素，是 Vue 官方提供的 -->
    <transition>
      <h3 v-if="flag">这是一个H3</h3>
    </transition>
    <input type="button" value="toggle2" @click="flag2=!flag2">
      //起一个名字  就可以吧v-代替
    <transition name="my">
      <h6 v-if="flag2">这是一个H6</h6>
    </transition>
  </div>
  <script>
    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        flag: false,
        flag2: false
      },
      methods: {}
    });
  </script>
</body>
```

# vue的脚手架工具
> vetur

1. `npm install -g vue-cli`安装全局的vue-cli
2. `vue init webpack 项目名字` 使用脚手架初始化一个webpack的vue项目
3. `npm run dev`项目根目录运行此命令，然后就可以在浏览器上`localhost:8080`
4. 配置项目中·`.sass/.scss`
   + `cnpm i node-sass sass-loader -D`不需要任何的配置
   + `项目目录/config/index.js`中有一个dev的配置对象`autoOpenBrowser: true`自动在浏览器中打开