import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline"; 
// https://vitepress.dev/reference/site-config
export default defineConfig({
  
  
    //appearance:true, //默认浅色且开启切换
  //启用深色模式
  appearance:'dark', 
  // appearance:false, // 关闭
  // appearance: "force-dark", // 强制深色主题
  
  
  markdown: {
        //行号显示
        lineNumbers: true, //false关闭
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
  },
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  title: "龙龙的技术日记",
  description: "龙龙的成长之路，包含运维常用知识、源码阅读笔记、日常提效工具等",
  themeConfig: {
  

        //自定义上下页名
        docFooter: { 
          prev: '上一页', 
          next: '下一页', 
        }, 

    //侧边栏文字更改(移动端)
    sidebarMenuLabel:'目录', 

    //返回顶部文字修改
    returnToTopLabel:'返回顶部', 


    outline: { 
      level: [2,4], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: '当前页大纲' // 文字显示
    },

     // 设置搜索框的样式
     search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    logo:'/logo.png',  
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
          dateStyle: "full",
          timeStyle: "medium",
        },
      },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '导航', link: '/' },
      {
        text: '小小前端',
        items: [
          {
            text: 'VitePress搭建并部署网站',
            link: "/leading/index.md"
          },
          {
            text: 'HTML',
            link: "/leading/html.md"
          },
          {
            text: 'CSS',
            link: "/leading/css.md"
          },
        ]
      },
      {
        text: 'DevOps',
        items: [
          {
            text: 'Linux',
            link: '/devops/linux.md'
          },
          {
            text: 'Kubernetes',
            link: '/devops/kubernetes.md'
          },          {
            text: 'Docker',
            link: '/devops/docker.md'
          }

        ]
      },
      {
        text: '踩坑经验',
        items: [
          {
            text: '踩坑经验',
            link: '/experience/'
          }
        ]
      },
      {
        text: '提效工具',
        items: [
          {
            text: '提效工具',
            link: '/tools/tool.md'
          }
        ]
      },
      {
        text: '日常笔记',
        items: [
          {
            text: '日常笔记',
            link: '/daily'
          }
        ]
      },
      {
        text: '关于我',
        items: [
          {
            text: '所思·所想',
            link: '/about/aboutme.md' 
          },
          {
            text: '自我承诺',
            link: '/about/promise.md' 
          }
        ]
        
      },
      
    ],
      
     
/*        sidebar: [
      {
        text: '小小前端',
        items: [
          { text: 'VitePress搭建并部署网站', link: '/leading/' }

        ]
      },

      {
        text: 'docker',
        items: [
          { text: 'Markdown 演示', link: '/markdown-examples' }
        ]
      }
    ], */


    sidebar: {
      // 目录1
      '/leading/': [
        {
          text: '小小前端',
          items: [
            { text: 'VitePress搭建并部署网站', link: '/leading/index.md' },
            { text: 'HTML', link: '/leading/html.md' },
            { text: 'CSS', link: '/leading/css.md' }
          ],
        },
      ],
      '/devops/': [
        {
          text: '运维',
          items: [
            { text: 'docker', link: '/devops/docker.md' },
            { text: 'Linux', link: '/devops/linux.md' },
            { text: 'Kubernetes', link: '/devops/kubernetes.md' }
          ],
        },
      ],

      '/experience/': [
        {
          text: '踩坑经验',
          items: [
            { text: '踩坑经验', link: '/experience/' },
          ],
        },
      ],

      '/tools/': [
        {
          text: 'window工具',
          items: [
            { text: 'window工具', link: '/tools/tool.md' },
          ],
        },
      ],

      // 目录2
      '/about/': [
        {
          text: '关于我',
          //侧边栏折叠
          collapsed: false,
          items: [
            { text: '所思所想', link: '/about/think.md' },
            { text: '自律篇', link: '/about/promise.md' },
          ],
        },
      ],
    },






/* 
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示 */
 

    socialLinks: [
      { icon: 'github', link: 'https://github.com/longlong-2002' }
    ],
    footer:{
        copyright:"Copyright @ 2024 longlong",
        },
  }
})
