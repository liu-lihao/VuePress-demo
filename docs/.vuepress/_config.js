const path = require('path');
const autoSidebar = require('./tool/autoSidebar.js')

module.exports = {
  title: 'VuePress试水', // TODO 改个标题~
  description: '这是一个VuePress试水项目的描述', // TODO 给个描述~
  port: 8888,
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  base: '/vuepress-demo/', // TODO 如果你项目放在域名的根目录，请清空，否则请加上路径~
  // TODO 例如：https://liu-lihao.github.io/vuepress-demo/index.html
  // TODO 则 base: '/vuepress-demo/'
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  themeConfig: {
    // 你的 Git 项目地址，添加后会在导航栏的最后追加
    //  repo: 'liu-lihao/node',
    // 启用编辑
    //  editLinks: true,
    // 编辑按钮的 Text
    //  editLinkText: '编辑文档！',
    // 编辑文档的所在目录
    //  docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    // docsBranch: 'master',

    smoothScroll: true, // 启用页面滚动效果
    displayAllHeaders: false, // 默认为false ， 侧边栏是否仅显示当前激活的子选项。
    logo: '/images/logo.png', // TODO 这个路径可以不用改，直接去换张图片吧
    lastUpdated: '上次更新',
    nav: [ // TODO 这里定制你的顶部导航~
      { text: '前端', link: '/' },
      {
        text: '三剑客', items: [
          { text: 'HTML', link: '/html/aa' },
          { text: 'CSS', link: '/css/aa' }
        ]
      },
      { text: '合作伙伴', link: 'https://www.baidu.com' },
    ],
    sidebar: {
      ...autoSidebar,
      '/': [], // TODO 根据你的喜好，可以来给首页添加侧边导航
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': path.join(__dirname, '../assets/images'), // TODO 使用~@img来引用这个目录下的图片。
      }
    }
  }
}


/**
 * docs/.vuepress: 用于存放全局的配置、组件、静态资源等。
 * docs/.vuepress/components: 该目录中的 Vue 组件将会被自动注册为全局组件。
 * docs/.vuepress/theme: 用于存放本地主题。
 * docs/.vuepress/styles: 用于存放样式相关的文件。
 * docs/.vuepress/styles/index.styl: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
 * docs/.vuepress/styles/palette.styl: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
 * docs/.vuepress/public: 静态资源目录。
 * docs/.vuepress/templates: 存储 HTML 模板文件。
 * docs/.vuepress/templates/dev.html: 用于开发环境的 HTML 模板文件。
 * docs/.vuepress/templates/ssr.html: 构建时基于 Vue SSR 的 HTML 模板文件。
 * docs/.vuepress/config.js: 配置文件的入口文件，也可以是 YML 或 toml。
 * docs/.vuepress/enhanceApp.js: 客户端应用的增强。
 */