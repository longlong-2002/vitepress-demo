import {} from 'vitepress';

export const sidebar = {
  '/leading/': [
    {
      text: '小小前端',
      collapsed: false,
      items: [
        { text: 'VitePress搭建并部署网站', link: '/leading/index' },
        { text: 'HTML', link: '/leading/html' },
        { text: 'CSS', link: '/leading/css' },
      ],
    },
  ],
  '/devops/': [
    {
      text: '运维',
      collapsed: false,
      items: [
        { text: 'Docker', link: '/devops/docker' },
        { text: 'Linux', link: '/devops/linux' },
        { text: 'Kubernetes', link: '/devops/kubernetes' },
        { text: 'CI-CD 配置', link: '/devops/CI-CD-GUIDE' },
      ],
    },
  ],
  '/experience/': [
    {
      text: '踩坑经验',
      collapsed: false,
      items: [{ text: '踩坑经验', link: '/experience/' }],
    },
  ],
  '/efficiency/': [
    {
      text: '在线工具',
      collapsed: false,
      items: [
        { text: '在线工具', link: '/efficiency/online-tools' },
        { text: '书签脚本', link: '/efficiency/bookmark-scripts' },
      ],
    },
    {
      text: '软件推荐与配置',
      collapsed: false,
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
  '/daily/': [
    {
      text: '日常笔记',
      collapsed: false,
      items: [
        { text: '日常笔记', link: '/daily/' },
        { text: 'AI Codex', link: '/daily/ai-codex/' },
      ],
    },
  ],
  '/goal/': [
    {
      text: '阶段目标',
      collapsed: false,
      items: [
        { text: '基础阶段', link: '/goal/phase/foundation' },
        { text: '探索阶段', link: '/goal/phase/exploration' },
        { text: '精通阶段', link: '/goal/phase/mastery' },
      ],
    },
    {
      text: '长期目标',
      collapsed: false,
      items: [
        { text: '技术方向', link: '/goal/long-term/technical' },
        { text: '管理能力', link: '/goal/long-term/management' },
        { text: '知识输出', link: '/goal/long-term/knowledge' },
      ],
    },
  ],
  '/about/': [
    {
      text: '关于我',
      collapsed: false,
      items: [
        { text: '所思所想', link: '/about/think' },
        { text: '自律篇', link: '/about/promise' },
      ],
    },
  ],
};