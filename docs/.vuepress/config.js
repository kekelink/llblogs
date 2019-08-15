
module.exports = {
  title: '流浪博客', 
    description: 'vue,node,前端,前端博客,VuePress',
    head: [
        ['link', { rel: 'icon', href: '/img/yue.ico' }],
       
    ],
    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
      '/': {
        lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      }
    },
    base:'/llblogs/',
  themeConfig: {
    lastUpdated: '最后更新', 
    repo: 'liulang2/llblogs',
    editLinks: true,
    nav: [
      { text: '最近动态', link: '/' },
      { text: '大前端', link: '/guide/' },
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
  }
}