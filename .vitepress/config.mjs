import { defineConfig } from "vitepress";
import timeline from "vitepress-markdown-timeline";
import { nav } from "./configs/nav.js";
import { sidebar } from "./configs/sidebar.js";

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
  ignoreDeadLinks: true,

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

    nav,
    sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/longlong-2002" },
    ],

    footer: {
      copyright: "Copyright @ 2024 longlong",
    },
  },
});
