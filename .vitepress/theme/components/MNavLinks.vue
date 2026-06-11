<script setup lang="ts">
import { computed } from 'vue';
import { slugify } from '@mdit-vue/shared';

import MNavLink from './MNavLink.vue';
import type { NavLink } from '../types';

const props = defineProps<{
  tag?: string;
  title: string;
  noIcon?: boolean;
  items: NavLink[];
}>();

const component = computed(() => props.tag ?? 'h2');

const formatTitle = computed(() => {
  return slugify(props.title);
});
</script>

<template>
  <component :is="component" v-if="title" :id="formatTitle" tabindex="-1">
    {{ title }}
    <a class="header-anchor" :href="'#' + formatTitle" aria-hidden="true"></a>
  </component>
  <div class="m-nav-links">
    <MNavLink
      v-for="item in items"
      :key="item.link"
      :noIcon="noIcon"
      v-bind="item"
    />
  </div>
</template>

<style lang="scss" scoped>
.m-nav-links {
  --m-nav-gap: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-row-gap: var(--m-nav-gap);
  grid-column-gap: var(--m-nav-gap);
  grid-auto-flow: row dense;
  justify-content: center;
  margin-top: var(--m-nav-gap);
}

@media (min-width: 500px) {
  .m-nav-links {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
}
@media (min-width: 640px) {
  .m-nav-links {
    grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
  }
}
@media (min-width: 768px) {
  .m-nav-links {
    grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  }
}
@media (min-width: 960px) {
  .m-nav-links {
    --m-nav-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}
@media (min-width: 1440px) {
  .m-nav-links {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
}
</style>