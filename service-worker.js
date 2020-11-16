/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.png",
    "revision": "a420ce1a42b555b413ccf97ee836b3cf"
  },
  {
    "url": "404.html",
    "revision": "52114b3b814549388534037e93da4698"
  },
  {
    "url": "assets/css/0.styles.430b9fab.css",
    "revision": "153bc2e48c5a37535b02a1818e7299bd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.15b0c2f8.js",
    "revision": "e130a7f5549f7c7fa72533eabd4a1457"
  },
  {
    "url": "assets/js/11.878fad0a.js",
    "revision": "46c044d2ed0c4fd1d7994d4782a9ee10"
  },
  {
    "url": "assets/js/12.5a5a3c4e.js",
    "revision": "d5d2feed0d570054f631f96452ae394b"
  },
  {
    "url": "assets/js/13.1dd985a4.js",
    "revision": "a6c3d95fac92c70e9a42044655fe7d4c"
  },
  {
    "url": "assets/js/14.cf9aa131.js",
    "revision": "e9f2d423bdf8d61922eb714a26ecb9c1"
  },
  {
    "url": "assets/js/15.aa02178b.js",
    "revision": "cf765b16a01d047029203e948a8a458d"
  },
  {
    "url": "assets/js/16.4432dbf5.js",
    "revision": "5bbe866a0400dbb3ade0946284636122"
  },
  {
    "url": "assets/js/17.edb8c025.js",
    "revision": "90df0fa8dc27aafcbe2d8ebb1e106fb6"
  },
  {
    "url": "assets/js/18.112e9689.js",
    "revision": "e474061aad8a15ad1a78d801a1a8f986"
  },
  {
    "url": "assets/js/19.bfbce126.js",
    "revision": "e77f4dcaa8a3d3ae93f94347ee8b7956"
  },
  {
    "url": "assets/js/2.47b02f67.js",
    "revision": "96edd7db564114729abb2fa919fc9aa5"
  },
  {
    "url": "assets/js/20.9597431e.js",
    "revision": "7d84228d37dd7063209fc31c20e6aff4"
  },
  {
    "url": "assets/js/21.28829582.js",
    "revision": "269493fbd4ff0995af812547d9a5820c"
  },
  {
    "url": "assets/js/22.f3b87b9c.js",
    "revision": "d923536e2803a6afe152e9452f8def27"
  },
  {
    "url": "assets/js/23.2bab1564.js",
    "revision": "69c1f0a4fb29cbfb10876d44d09d2767"
  },
  {
    "url": "assets/js/24.98b953b2.js",
    "revision": "219fc80fe3cba13d9c33afb2cc66c11f"
  },
  {
    "url": "assets/js/25.6ec4b8fd.js",
    "revision": "d2db0ddb46be4f37df8d618435ed1570"
  },
  {
    "url": "assets/js/26.9d8ef471.js",
    "revision": "b54cc6fa3a7527c5fc3fc5f048a34fde"
  },
  {
    "url": "assets/js/27.d0f32e08.js",
    "revision": "8372b6f524fdbc246fdc4ac82bd2391a"
  },
  {
    "url": "assets/js/28.61e1694a.js",
    "revision": "449673b187598b190c93f1e85aa2133b"
  },
  {
    "url": "assets/js/29.07e36d10.js",
    "revision": "583d19c50a37f36111405f9e0973e3b8"
  },
  {
    "url": "assets/js/3.f92b3275.js",
    "revision": "77e64b2d2974b5efb9bd8875ab83e0cd"
  },
  {
    "url": "assets/js/30.b382e003.js",
    "revision": "0cfc26a62d145bbf0d07e7f4376a3fe1"
  },
  {
    "url": "assets/js/31.b6962b3e.js",
    "revision": "febc0f622b509c1f5460f7852e3e1087"
  },
  {
    "url": "assets/js/32.49f363e9.js",
    "revision": "7dabda03aba97ee4a80056ffe72866ae"
  },
  {
    "url": "assets/js/33.c1973620.js",
    "revision": "b124ea947f017227653c5bbb4144a17f"
  },
  {
    "url": "assets/js/34.5bd93d7d.js",
    "revision": "a8c90784fe9c2b718073ed04cab46567"
  },
  {
    "url": "assets/js/35.56c9e32b.js",
    "revision": "25e7fb5f84543e3ded14b3f3eb1b4de5"
  },
  {
    "url": "assets/js/36.5803445c.js",
    "revision": "5e5dcf3e3734e420f345224264cc9426"
  },
  {
    "url": "assets/js/37.8f90dc87.js",
    "revision": "9411be51a42fc47a3ab9dfa5fea5ce14"
  },
  {
    "url": "assets/js/38.3b55f15a.js",
    "revision": "417d1fdb220329af04923e1c2a0d4ff2"
  },
  {
    "url": "assets/js/39.1cfa798a.js",
    "revision": "dd714576e6912fac9d6193b69de84585"
  },
  {
    "url": "assets/js/4.60f449fe.js",
    "revision": "bfef6df66da8bfa5e025ca3c53e1d45a"
  },
  {
    "url": "assets/js/40.86d6e67d.js",
    "revision": "fcec961a437671fb89b5bd97e99833d2"
  },
  {
    "url": "assets/js/41.ca7fbb96.js",
    "revision": "89356deaac7a2ed071fe2db9c62410e9"
  },
  {
    "url": "assets/js/42.2b659992.js",
    "revision": "8b61c79a1678bae5047a686efa3fd0af"
  },
  {
    "url": "assets/js/43.cc65acdc.js",
    "revision": "c507240343750d710bffccf3458eb90e"
  },
  {
    "url": "assets/js/5.3a663e68.js",
    "revision": "b912e16837b19c8c817900c7c06af83e"
  },
  {
    "url": "assets/js/6.1c4ff45f.js",
    "revision": "42d0cb3538e1bda323064335a5efa2d7"
  },
  {
    "url": "assets/js/7.ecef6bb2.js",
    "revision": "9f49a5b381a09c66453dfe6411160435"
  },
  {
    "url": "assets/js/8.d0fe07ef.js",
    "revision": "7dd72d5dcb18e3072caa17bd025c6b55"
  },
  {
    "url": "assets/js/9.d6cf07b9.js",
    "revision": "4230d4c263fb86a8a63080b6479bd74b"
  },
  {
    "url": "assets/js/app.f8d87596.js",
    "revision": "89a7b6e852e6903702c04153f60275ca"
  },
  {
    "url": "guide/index.html",
    "revision": "bd147ebb4a8380a1be87a97a29dd42e7"
  },
  {
    "url": "img/1.png",
    "revision": "a420ce1a42b555b413ccf97ee836b3cf"
  },
  {
    "url": "img/10.jpg",
    "revision": "fa9cb989370b99534fda70678801ba79"
  },
  {
    "url": "img/122.jpeg",
    "revision": "e9baf1d6767001d020df0ab53adda83f"
  },
  {
    "url": "img/123.jpg",
    "revision": "5c18cbad1f143657295ddd2446a850c6"
  },
  {
    "url": "img/2.png",
    "revision": "859a45ed4dfc50627425f02e69a4aea7"
  },
  {
    "url": "img/3.png",
    "revision": "6e7bd553361c4d6778923dc70b485aa3"
  },
  {
    "url": "img/4.png",
    "revision": "e8d42f9c37a3b16da70a905ee056f90e"
  },
  {
    "url": "img/5.jpg",
    "revision": "d4837a7a8fcda4cd15205009a13a491b"
  },
  {
    "url": "index.html",
    "revision": "6bd619180427b22912bad2be86823879"
  },
  {
    "url": "js/01js.html",
    "revision": "a7c7d957797d282287628d7bb4d39e69"
  },
  {
    "url": "js/02js.html",
    "revision": "0f0b5592f2a0f7c0457d2ffa48532bd2"
  },
  {
    "url": "js/index.html",
    "revision": "30d0ad65a5314f1dd5f8cf39a2c2930d"
  },
  {
    "url": "node/index.html",
    "revision": "2baed17f3bb5569437151fa951095826"
  },
  {
    "url": "ui/index.html",
    "revision": "18cd17a42ee29d4a09502ca42a565799"
  },
  {
    "url": "大前端/H5/index.html",
    "revision": "91557f982c5497116f3897a721f36513"
  },
  {
    "url": "大前端/H5/vueH5.html",
    "revision": "282efbf557c9e999361908044dfc51b1"
  },
  {
    "url": "大前端/http/index.html",
    "revision": "e8143d3e91a05a23c66556d1ed8fa334"
  },
  {
    "url": "大前端/index.html",
    "revision": "2f7d95177b6c32e19ac86aad26afebfb"
  },
  {
    "url": "大前端/vue/index.html",
    "revision": "824556cd495a29ee06e9e37358ea88ac"
  },
  {
    "url": "每日一记/2019年8月.html",
    "revision": "d1f3997817db2384e68215cbb07aa26e"
  },
  {
    "url": "每日一记/index.html",
    "revision": "cd11e716613e61368aec07ef9e186255"
  },
  {
    "url": "每日一记/复习/vue.html",
    "revision": "4a96df34d38da667441107d9b6cd41af"
  },
  {
    "url": "每日一记/学习/宝塔配置.html",
    "revision": "bbdcbda5ff786ee216e79481c28e9260"
  },
  {
    "url": "每日一记/工作/git.html",
    "revision": "e9e395db02b5567e2894e7885b178809"
  },
  {
    "url": "算法修炼/index.html",
    "revision": "3ab7840076240d9b4b4f4005d6f53c4f"
  },
  {
    "url": "算法修炼/二叉树.html",
    "revision": "d59872fbfbb4659bbcc9f92752ae9fd1"
  },
  {
    "url": "算法修炼/动态规划.html",
    "revision": "b696f368f17ee4d19c3aca4471fef7d2"
  },
  {
    "url": "算法修炼/哈希表.html",
    "revision": "8c836ee1e88700e3f44cebcf8ad7e07c"
  },
  {
    "url": "算法修炼/回溯算法.html",
    "revision": "fce20d62ed4e543686b6cdad87b2e6ae"
  },
  {
    "url": "算法修炼/图.html",
    "revision": "4362eb70f9d3e6bdb96730ae19a10f57"
  },
  {
    "url": "算法修炼/堆.html",
    "revision": "f2e92fcd6da23425c2d07bd908daab43"
  },
  {
    "url": "算法修炼/字符串.html",
    "revision": "5a63ac8ba1bb6ae3fb1a6cb805047987"
  },
  {
    "url": "算法修炼/手写源码.html",
    "revision": "697620a613b10dc06f980e6c8d05541c"
  },
  {
    "url": "算法修炼/排序算法.html",
    "revision": "d238e21e424da66ac9b832182d07ea8b"
  },
  {
    "url": "算法修炼/数组篇.html",
    "revision": "9863a88d47718e69133c6b4e879140bc"
  },
  {
    "url": "算法修炼/查找算法.html",
    "revision": "9cc1d750872f3690d207edae548b4178"
  },
  {
    "url": "算法修炼/栈.html",
    "revision": "a83af40e5af59080ed90c29c4ae7f6d0"
  },
  {
    "url": "算法修炼/算法基础.html",
    "revision": "035a1abc33736448ab266ba249393ef5"
  },
  {
    "url": "算法修炼/编程题.html",
    "revision": "c80e0d7f5d8bf61b3865645f588bb60f"
  },
  {
    "url": "算法修炼/贪心算法.html",
    "revision": "6592eebe12992fe485180631c9d99288"
  },
  {
    "url": "算法修炼/链表.html",
    "revision": "ff885b45e7c94f1305f64527523634b6"
  },
  {
    "url": "算法修炼/队列.html",
    "revision": "4e85864535c7dae622c607fc30bf2104"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
