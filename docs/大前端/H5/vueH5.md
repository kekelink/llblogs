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