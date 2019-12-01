---
title: "vue H5"
date: "2019-11-23"
---

# H5会遇到的坑！！ 

## 1.移动端适配

 rem 是相对于根元素 html 的 font-size 来做计算。通常在页面初始化时加载时通过对`document.documentElement.style.fontSize` 设置来实现。

通过对 initial-scale = 1/dpr 的设置，已将对屏幕的描述从物理像素转化到了物理像素上了，这将是后续推导的基础，且设计稿为 750px。

1. 物理像素为 750 = 375 * 2，若屏幕等分为 10 份，那么 1rem = 75px，10rem = 750px;
2. 物理像素为 1125 = 375 * 3，若屏幕等分为 10 份，那么 1rem = 112.5px, 10rem = 1125px;
3. 物理像素为 1242 = 414 * 3, 若屏幕等分为 10 份，那么 1rem = 124.2px, 10rem = 1242px;



```js
;
(function(win, lib) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var metaEl = doc.querySelector('meta[name="viewport"]');
    var flexibleEl = doc.querySelector('meta[name="flexible"]');
    var dpr = 0;
    var scale = 0;
    var tid;
    var flexible = lib.flexible || (lib.flexible = {});

    if (metaEl) {
        var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
        if (match) {
            scale = parseFloat(match[1]);
            dpr = parseInt(1 / scale);
        }
    } else if (flexibleEl) {
        var content = flexibleEl.getAttribute('content');
        if (content) {
            var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
            var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
            if (initialDpr) {
                dpr = parseFloat(initialDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));
            }
            if (maximumDpr) {
                dpr = parseFloat(maximumDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));
            }
        }
    }

    if (!dpr && !scale) {
        var isAndroid = win.navigator.appVersion.match(/android/gi);
        var isIPhone = win.navigator.appVersion.match(/iphone/gi);
        var devicePixelRatio = win.devicePixelRatio;
        if (isIPhone) {
            // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
                dpr = 3;
            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
                dpr = 2;
            } else {
                dpr = 1;
            }
        } else {
            // 其他设备下，仍旧使用1倍的方案
            dpr = 1;
        }
        scale = 1 / dpr;
    }

    docEl.setAttribute('data-dpr', dpr);
    if (!metaEl) {
        metaEl = doc.createElement('meta');
        metaEl.setAttribute('name', 'viewport');
        metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl);
        } else {
            var wrap = doc.createElement('div');
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML);
        }
    }

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        // 适配平板
        if (width / dpr > 540) {
            width = 540 * dpr;
        }
      //  这里可以设置 比例
        var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
    }

    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    if (doc.readyState === 'complete') {
        doc.body.style.fontSize = 16 * dpr + 'px';
    } else {
        doc.addEventListener('DOMContentLoaded', function(e) {
            doc.body.style.fontSize = 16 * dpr + 'px';
        }, false);
    }


    refreshRem();

    flexible.dpr = win.dpr = dpr;
    flexible.refreshRem = refreshRem;
    flexible.rem2px = function(d) {
        var val = parseFloat(d) * this.rem;
        if (typeof d === 'string' && d.match(/rem$/)) {
            val += 'px';
        }
        return val;
    }
    flexible.px2rem = function(d) {
        var val = parseFloat(d) / this.rem;
        if (typeof d === 'string' && d.match(/px$/)) {
            val += 'rem';
        }
        return val;
    }

})(window, window['lib'] || (window['lib'] = {}));
```

## 

## 2. 用插件来换算rem

  一、 vscode  `cssrem` 插件 

 下载后在 设置 

![](/llblogs/img/cssrem.PNG)

设置好你的根 font-size ，然后重启vscode  用px 会自动转换成rem

 二、 使用postcss-pxtorem  

 首先安装

 ```npm
npm install postcss-pxtorem -D
 ```

设置规则（更改postcss.config.js,该文件为使用vue-cli3自动创建的文件）

```js
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {},
    'postcss-pxtorem': {
      unitPrecision: 5,//保留rem小数点多少位
      rootValue: 37.5, //根元素大小设置，也就是html的font-size大小  我用的是vant 官网推荐这个
      propList: ['*'],
      // 注意：如果有使用第三方UI如VUX，则需要配置下忽略选择器不转换。
      // 规则是class中包含的字符串，如vux中所有的class前缀都是weui-。也可以是正则。
      // "selectorBlackList": ["weui-"],
      mediaQuery: false, //媒体查询( @media screen 之类的)中不生效
      minPixelValue: 12 //px小于12的不会被转换
    }
  }
}
```

在配上 上面rem的自适应js 就可以完成移动端rem适配

##  3、 移动端300延迟

**由于移动端会有双击缩放的这个操作，因此浏览器在click之后要等待300ms，看用户有没有下一次点击，也就是这次操作是不是双击。**

**方案一：禁用缩放**

当HTML文档头部包含如下`meta`标签时：

```html
<meta name="viewport" content="user-scalable=no">
<meta name="viewport" content="initial-scale=1,maximum-scale=1">
```

表明这个页面是不可缩放的，那双击缩放的功能就没有意义了，此时浏览器可以禁用默认的双击缩放行为并且去掉300ms的点击延迟。

**缺点：**就是必须通过完全禁用缩放来达到去掉点击延迟的目的，然而完全禁用缩放并不是我们的初衷，我们只是想禁掉默认的双击缩放行为，这样就不用等待300ms来判断当前操作是否是双击。但是通常情况下，我们还是希望页面能通过双指缩放来进行缩放操作，比如放大一张图片，放大一段很小的文字。

**方案二：CSS touch-action**

`touch-action`这个CSS属性。这个属性指定了相应元素上能够触发的用户代理（也就是浏览器）的默认行为。如果将该属性值设置为`touch-action: none`，那么表示在该元素上的操作不会触发用户代理的任何默认行为，就无需进行300ms的延迟判断。

看似`touch-action: none`简单方便，可是用了之后突然发现页面不能滑动了，在浏览器中鼠标还是能正常滚动，但改成触摸模式后就不行了。在手机上也不能滑动。关于`touch-action`的属性值，具体查文档就行了。auto是默认值，表示手势操作什么的完全有浏览器自己决定。manipulation表示浏览器只允许进行滚动和持续缩放操作，类似双击缩放这种非标准操作就不可以。想当初，click事件在移动端有个300ms延时，就是因为避免和手机双击行为发生冲突。然而，当我们设置了`touch-action:manipulation`干掉了双击行为，则显然，300ms延时就不复存在，因此，`html {touch-action: manipulation;}`声明可以用来避免浏览器300ms延时问题。

> 查了touch-action的兼容性，发现在移动端大多数还是兼容的。于是移动端以后就可以大胆的使用click事件了。

**方案三：FastClick**

[FastClick](https://link.jianshu.com?t=https://github.com/ftlabs/fastclick) 是 [FT Labs](https://link.jianshu.com?t=http://labs.ft.com/) 专门为解决移动端浏览器 300 毫秒点击延迟问题所开发的一个轻量级的库。FastClick的实现原理是在检测到touchend事件的时候，会通过DOM自定义事件立即出发模拟一个click事件，并把浏览器在300ms之后的click事件阻止掉。

> 这里 FastClick 有点小坑

1. 当设置输入框`type="number"`  会  报错Failed to execute 'setSelectionRange' on 'HTMLInputElement': The input element's type ('number') does not support selection

   **解决办法:**  

   找到node_module中的文件fastclick.js, line: 327 将

   ```js
   if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
               length = targetElement.value.length;
               targetElement.setSelectionRange(length, length);
           } else {
               targetElement.focus();
       }
   ```

   替换为

   ```js

   var useSelectionRange = deviceIsIOS;
       if(useSelectionRange){
           try{
               length = targetElement.value.length;
               targetElement.setSelectionRange(length, length);
           }catch(error){
               useSelectionRange = false;
           }
       }
       if (!useSelectionRange) {
           targetElement.focus();
       }
   ```

2. 页面引入fastClick.js后，滑动H5页面的时候发现谷歌浏览器会报错,如下：

   Unable to preventDefault inside passive event listener due to target being treated as passive. See <https://www.chromestatus.com/>...

   > 查询了之后发现这是因为Chrome及其内核浏览器更新了一项新特性，原先只会报黄色等级的错误，现在升到红色了。那么如何解决呢？

一般现在有两种方案：

1. 最简单的是加上`*{ touch-action: manipulation; }` 干掉了双击行为.  用了这个属性 其实 就可以不需要使用到`FastClick` 了
2. 手动清除默认行为

```js
document.addEventListener('touchmove', function (event) {
    event.preventDefault();
}, {
    passive: false
});
```

