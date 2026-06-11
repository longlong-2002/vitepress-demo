<script setup lang="ts">
import { useData, inBrowser } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { nextTick, provide } from 'vue';
import Giscus from '@giscus/vue';

import { usePageId } from './composables';

import MNavVisitor from './components/MNavVisitor.vue';
import MDocFooter from './components/MDocFooter.vue';
import MAsideSponsors from './components/MAsideSponsors.vue';

const { Layout } = DefaultTheme;
const { isDark, theme, frontmatter } = useData();
const pageId = usePageId();

const { comment } = theme.value;

const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

function updateMetaThemeColor() {
  if (inBrowser) {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isDark.value ? '#1b1b1f' : '#3eaf7c');
    }
  }
}

updateMetaThemeColor();

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value;
    updateMetaThemeColor();
    return;
  }

  const hypotVal = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  const clipPath = [
    'circle(0px at ' + x + 'px ' + y + 'px)',
    'circle(' + hypotVal + 'px at ' + x + 'px ' + y + 'px)',
  ];

  // @ts-ignore
  await document.startViewTransition(async () => {
    isDark.value = !isDark.value;
    updateMetaThemeColor();
    await nextTick();
  }).ready;

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: '::view-transition-' + (isDark.value ? 'old' : 'new') + '(root)',
    },
  );
});
</script>

<template>
  <Layout v-bind="$attrs">
    <template #nav-bar-title-after>
      <MNavVisitor />
    </template>

    <template v-if="comment && frontmatter.comment !== false" #doc-footer-before>
      <div class="doc-comments">
        <Giscus
          id="comments"
          mapping="specific"
          :term="pageId"
          strict="1"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          :theme="isDark ? 'dark' : 'light'"
          lang="zh-CN"
          loading="lazy"
          v-bind="{ ...comment }"
        />
      </div>
    </template>

    <template #doc-after>
      <MDocFooter />
    </template>

    <template #aside-bottom>
      <MAsideSponsors />
    </template>
  </Layout>
</template>

<style>
.prev-next.prev-next {
  border-top: none;
}

.doc-comments {
  margin-top: 24px;
  margin-bottom: 48px;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 24px;
}
</style>