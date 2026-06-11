import { h, watch } from 'vue';
import { useData, EnhanceAppContext } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

import { createMediumZoomProvider } from './composables/useMediumZoom';

import MLayout from './MLayout.vue';
import MNavLinks from './components/MNavLinks.vue';
import confetti from './components/confetti.vue';
import VisitorPanel from './components/VisitorPanel.vue';
import MacWindow from './components/MacWindow.vue';

import './styles/index.scss';

if (typeof window !== 'undefined') {
  if (window.navigator && navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      for (let registration of registrations) {
        registration.unregister();
      }
    });
  }

  if ('caches' in window) {
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          return caches.delete(key);
        }),
      );
    });
  }
}

let homePageStyle: HTMLStyleElement | undefined;

export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {};
    const { frontmatter } = useData();

    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass;
    }

    return h(MLayout, props);
  },
  enhanceApp({ app, router }: EnhanceAppContext) {
    createMediumZoomProvider(app, router);

    app.component('MNavLinks', MNavLinks);
    app.component('confetti', confetti);
    app.component('VisitorPanel', VisitorPanel);
    app.component('MacWindow', MacWindow);

    app.provide('DEV', process.env.NODE_ENV === 'development');

    if (typeof window !== 'undefined') {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === '/'),
        { immediate: true },
      );
    }
  },
};

if (typeof window !== 'undefined') {
  const browser = navigator.userAgent.toLowerCase();
  if (browser.includes('chrome')) {
    document.documentElement.classList.add('browser-chrome');
  } else if (browser.includes('firefox')) {
    document.documentElement.classList.add('browser-firefox');
  } else if (browser.includes('safari')) {
    document.documentElement.classList.add('browser-safari');
  }
}

function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return;
    homePageStyle = document.createElement('style');
    homePageStyle.innerHTML = ':root { animation: rainbow 12s linear infinite; }';
    document.body.appendChild(homePageStyle);
  } else {
    if (!homePageStyle) return;
    homePageStyle.remove();
    homePageStyle = undefined;
  }
}
