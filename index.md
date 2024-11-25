---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "小龙同学"
  text: "long long的成长之路"
  tagline: 永远相信美好的事情即将发生！
  image:
    src: /logo.png
    alt: 背景图片
  actions:
    - theme: brand
      text: 日常笔记
      link: /markdown-examples
    - theme: alt
      text: 关于我
      link: /about/aboutme.md

features:
  - icon: 🐞
    title: 小建议
    details: 选择永远大于努力 
  - icon: 📖
    title: 努力
    details: 如果决定了做一件事情就努力把他做好
  - icon: 💡
    title: 思考
    details: 做事情之前不妨先静下心来思考，不要人云亦云
lastUpdated: true
---
<!-- 添加到md文章末尾 -->
<confetti />
<VisitorPanel />



<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}


.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
