import { DefaultTheme, defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GESP 编程题库网",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/site-logo-large.svg', width: 24, height: 24 },
    outline: { level: 'deep', label: '页面导航' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'C++', link: '/cpp/' },
      { text: 'Python', link: '/python/' },
      { text: '图形化编程', link: '/scratch/' }
    ],

    sidebar: {
      
      '/scratch/': { base: '/scratch/', items: sidebarScratch() },
      '/python/': { base: '/python/', items: sidebarPython() },
      '/cpp/': { base: '/cpp/', items: sidebarCpp() },

    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jonaslgtm' }
    ],
    //设置页脚
     footer: {
      //message: 'Released under the MIT License.',
      //版权内容：
      copyright: 'Copyright © 2025-present <a href="https://github.com/jonaslgtm"> Jonaslgtm </a>'
    }
  }
})

// Scratch 侧边栏
function sidebarScratch(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '😸 图形化编程',
      items: [
        { text: '认证大纲 📋', link: 'scratch-outline' },
        { text: '认证样题 📝', link: 'scratch-sampleTest' },
        {
          text: '图形化认证一级',
          collapsed: false,
          base: '/scratch/level-01-',
          items: [
            { text: '2025 年 1 级试题', link: '2025' },
            { text: '2024 年 1 级试题', link: '2024' },
            { text: '2023 年 1 级试题', link: '2023' },

          ]
        },
        {
          text: '图形化认证二级',
          collapsed: false,          
          base: '/scratch/level-02-',
          items: [
            { text: '2025 年 2 级试题', link: '2025' },
            { text: '2024 年 2 级试题', link: '2024' },
            { text: '2023 年 2 级试题', link: '2023' },

          ]
        },
        {
        text: '图形化认证三级',
        collapsed: false,
        base: '/scratch/level-03-',
        items: [
            { text: '2025 年 3 级试题', link: '2025' },
            { text: '2024 年 3 级试题', link: '2024' },
            { text: '2023 年 3 级试题', link: '2023' },
        ]
      },
      {
        text: '图形化认证四级',
        collapsed: false,
        base: '/scratch/level-04-',
        items: [
            { text: '2025 年 4 级试题', link: '2025' },
            { text: '2024 年 4 级试题', link: '2024' },
            { text: '2023 年 4 级试题', link: '2023' },
        ]
      }
      ]
    }
  ]
}

// Python 侧边栏
function sidebarPython(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '🐍 Python',
      items: [
        { text: '认证大纲 📋', link: 'site-config' },
        { text: '认证样题 📝', link: 'frontmatter-config' },
        {
          text: '默认主题',
          base: '/zh/reference/default-theme-',
          items: [
            { text: '概览', link: 'config' },
            { text: '导航栏', link: 'nav' },
            { text: '侧边栏', link: 'sidebar' },
            { text: '主页', link: 'home-page' },
            { text: '页脚', link: 'footer' },
            { text: '布局', link: 'layout' },
            { text: '徽章', link: 'badge' },
            { text: '团队页', link: 'team-page' },
            { text: '上下页链接', link: 'prev-next-links' },
            { text: '编辑链接', link: 'edit-link' },
            { text: '最后更新时间戳', link: 'last-updated' },
            { text: '搜索', link: 'search' },
            { text: 'Carbon Ads', link: 'carbon-ads' }
          ]
        }
      ]
    }
  ]
}

// C++ 侧边栏
function sidebarCpp(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '🎓 C++ ',
      items: [
        { text: '站点配置', link: 'site-config' },
        { text: 'frontmatter 配置', link: 'frontmatter-config' },
        { text: '运行时 API', link: 'runtime-api' },
        { text: 'CLI', link: 'cli' },
        {
          text: '默认主题',
          base: '/zh/reference/default-theme-',
          items: [
            { text: '概览', link: 'config' },
            { text: '导航栏', link: 'nav' },
            { text: '侧边栏', link: 'sidebar' },
            { text: '主页', link: 'home-page' },
            { text: '页脚', link: 'footer' },
            { text: '布局', link: 'layout' },
            { text: '徽章', link: 'badge' },
            { text: '团队页', link: 'team-page' },
            { text: '上下页链接', link: 'prev-next-links' },
            { text: '编辑链接', link: 'edit-link' },
            { text: '最后更新时间戳', link: 'last-updated' },
            { text: '搜索', link: 'search' },
            { text: 'Carbon Ads', link: 'carbon-ads' }
          ]
        }
      ]
    }
  ]
}