import {} from 'vitepress';

export const nav = [
  { text: '导航', link: '/', activeMatch: '^/$' },
  {
    text: '小小前端',
    items: [
      { text: 'VitePress搭建并部署网站', link: '/leading/index' },
      { text: 'HTML', link: '/leading/html' },
      { text: 'CSS', link: '/leading/css' },
    ],
    activeMatch: '^/leading',
  },
  {
    text: 'DevOps',
    items: [
      { text: 'Linux', link: '/devops/linux' },
      { text: 'Kubernetes', link: '/devops/kubernetes' },
      { text: 'CI-CD 配置', link: '/devops/CI-CD-GUIDE' },
      { text: 'Docker', link: '/devops/docker' },
    ],
    activeMatch: '^/devops',
  },
  {
    text: '踩坑经验',
    items: [{ text: '踩坑经验', link: '/experience/' }],
    activeMatch: '^/experience',
  },
  {
    text: '提效工具',
    items: [
      { text: '在线工具', link: '/efficiency/online-tools' },
      { text: '书签脚本', link: '/efficiency/bookmark-scripts' },
      {
        text: '软件推荐与配置',
        items: [
          { text: '多平台软件', link: '/efficiency/software/cross-platform' },
          { text: 'Mac 平台', link: '/efficiency/software/mac' },
          { text: 'Windows 平台', link: '/efficiency/software/windows' },
          { text: '浏览器设置与扩展', link: '/efficiency/software/browser' },
          { text: 'Visual Studio Code 配置', link: '/efficiency/software/vscode' },
          { text: 'WebStorm 配置', link: '/efficiency/software/webstorm' },
        ],
      },
    ],
    activeMatch: '^/efficiency',
  },
  {
    text: '日常笔记',
    items: [
      { text: '日常笔记', link: '/daily/' },
      { text: 'AI Codex', link: '/daily/ai-codex/' },
    ],
    activeMatch: '^/daily/',
  },
  {
    text: '成长目标',
    items: [
      { text: '阶段目标', link: '/goal/phase/foundation' },
      { text: '长期目标', link: '/goal/long-term/technical' },
    ],
    activeMatch: '^/goal',
  },
  {
    text: '关于我',
    items: [
      { text: '所思所想', link: '/about/think' },
      { text: '自律篇', link: '/about/promise' },
    ],
    activeMatch: '^/about',
  },
];