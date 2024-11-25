// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import confetti from "./components/confetti.vue";
import vitepressNprogress from 'vitepress-plugin-nprogress'
import 'vitepress-plugin-nprogress/lib/css/index.css'
import './custom-block.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  
  enhanceApp: (ctx) => {
    vitepressNprogress(ctx)
  },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
/*   enhanceApp({ app, router, siteData }) {
    // ...
  } */
    enhanceApp(ctx) {
      const { app } = ctx;
      app.component("confetti", confetti);
    },
    markdown: { 
      //行号显示
      lineNumbers: true, 
  
      //时间线
      config: (md) => {
        md.use(timeline);
      },
    }, 
  }

// 在.vitepress/theme/custom.css文件
/* color vars: https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css */
/* purple brand color: https://coolors.co/palette/dec9e9-dac3e8-d2b7e5-c19ee0-b185db-a06cd5-9163cb-815ac0-7251b5-6247aa */

/* Color Base */
