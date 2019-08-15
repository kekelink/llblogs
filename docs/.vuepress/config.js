
module.exports = {
  title: '流浪博客', 
    description: 'vue,node,前端,前端博客,VuePress',
    head: [
        ['link', { rel: 'icon', href: '/img/yue.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
       
    ],
    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
      '/': {
        lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      }
    },
    base:'/llblogs/',
    serviceWorker:true,
  themeConfig: {
    lastUpdated: '最后更新', 
    repo: 'liulang2/llblogs',
    editLinks: true,
    editLinkText: '编辑文档',
    docsDir: 'docs', // 可以进行编辑
    plugins: [
      require('./plugins/my-router'),
      require('./plugins/my-loader'),
      require('vuepress-plugin-viewer'),
      '@vuepress/back-to-top',
      [ 
        '@vuepress/google-analytics', { 'ga': 'UA-124601890-1' }
      ],
      [
        '@vuepress/pwa',
        {
          serviceWorker: true,
          updatePopup: {
            message: "发现页面有新内容",
            buttonText: "刷新"
          }
        }
      ]
    ],
    nav: [
      { text: '最近动态', link: '/' },
      { text: '大前端', link: '/' },
      { text: 'node', link: '/qqq/' },
      { text: 'UI设计', link: '/' },
      { text: '算法修炼', link: '/' },
      { text: '每天一记', link: '/' },
      { text: '了解更多', link: '/' },
    ],
    sidebar: [
      {
        title: 'js',
        collapsable: false,

        children: [
          '/js/',
          '/js/01js',
          '/js/02js',
        ],
      },


    ],
    sidebarDepth: 2,
    displayAllHeaders: true
  },
  '@vuepress/back-to-top': true,
  plugins: [
    require('./plugins/my-router'),
    require('./plugins/my-loader'),
    require('vuepress-plugin-viewer'),
    '@vuepress/back-to-top',
    [ 
      '@vuepress/google-analytics', { 'ga': 'UA-124601890-1' }
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现页面有新内容",
          buttonText: "刷新"
        }
      }
    ],
    [
      'vuepress-plugin-comment',
      {
        choosen: 'gitalk', 
        options: {
          clientID: '680f2b9ce5df7a4b01b6',
          clientSecret: '903840adccfa4d33ad3ac18aa38ebf5e783669a9',
          repo: 'blog',
          owner: 'dongyuanxin',
          admin: ['dongyuanxin'],
          id: '<%- frontmatter.commentid || frontmatter.permalink %>',      // Ensure uniqueness and length less than 50
          distractionFreeMode: false,  // Facebook-like distraction free mode
          labels: ['Gitalk', 'Comment'],
          title: '「评论」<%- frontmatter.title %>',
          body: '<%- frontmatter.title %>：<%- window.location.origin %><%- frontmatter.to.path || window.location.pathname %>'
        }
      }
    ]
  ]
}