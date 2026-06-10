import { defineConfig } from "vitepress";
import timeline from "vitepress-markdown-timeline";

export default defineConfig({
  base: "/",
  title: "龙龙的技术日记",
  appearance: "dark",

  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
  },

  head: [["link", { rel: "icon", href: "/logo.png" }]],
  description:
    "龙龙的成长之路，包含运维常用知识、源码阅读笔记、日常提效工具等",

  themeConfig: {
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    sidebarMenuLabel: "目录",
    returnToTopLabel: "返回顶部",

    outline: {
      level: [2, 4],
      label: "当前页大纲",
    },

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

    logo: "/logo.png",

    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },

    nav: [
      { text: "导航", link: "/" },
      {
        text: "小小前端",
        items: [
          { text: "VitePress搭建并部署网站", link: "/leading/index.md" },
          { text: "HTML", link: "/leading/html.md" },
          { text: "CSS", link: "/leading/css.md" },
        ],
      },
      {
        text: "DevOps",
        items: [
          { text: "Linux", link: "/devops/linux.md" },
          { text: "Kubernetes", link: "/devops/kubernetes.md" },
          { text: "Docker", link: "/devops/docker.md" },
        ],
      },
      {
        text: "踩坑经验",
        items: [{ text: "踩坑经验", link: "/experience/" }],
      },
      {
        text: "提效工具",
        items: [{ text: "提效工具", link: "/tools/tool.md" }],
      },
      {
        text: "日常笔记",
        items: [{ text: "日常笔记", link: "/daily" }],
      },
      {
        text: "关于我",
        items: [
          { text: "所思所想", link: "/about/aboutme.md" },
          { text: "自我承诺", link: "/about/promise.md" },
        ],
      },
    ],

    sidebar: {
      "/leading/": [
        {
          text: "小小前端",
          items: [
            { text: "VitePress搭建并部署网站", link: "/leading/index.md" },
            { text: "HTML", link: "/leading/html.md" },
            { text: "CSS", link: "/leading/css.md" },
          ],
        },
      ],
      "/devops/": [
        {
          text: "运维",
          items: [
            { text: "Docker", link: "/devops/docker.md" },
            { text: "Linux", link: "/devops/linux.md" },
            { text: "Kubernetes", link: "/devops/kubernetes.md" },
          ],
        },
      ],
      "/experience/": [
        {
          text: "踩坑经验",
          items: [{ text: "踩坑经验", link: "/experience/" }],
        },
      ],
      "/tools/": [
        {
          text: "Window工具",
          items: [{ text: "Window工具", link: "/tools/tool.md" }],
        },
      ],
      "/about/": [
        {
          text: "关于我",
          collapsed: false,
          items: [
            { text: "所思所想", link: "/about/think.md" },
            { text: "自律篇", link: "/about/promise.md" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/longlong-2002" },
    ],

    footer: {
      copyright: "Copyright @ 2024 longlong",
    },
  },
});
