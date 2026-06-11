<script setup lang="ts">
defineProps<{
  title?: string
  width?: string
  height?: string
  resizable?: boolean
}>()
</script>

<template>
  <div class="mac-window" :class="{ resizable }">
    <div class="mac-window-bar">
      <div class="mac-window-buttons">
        <span class="btn btn-close" />
        <span class="btn btn-minimize" />
        <span class="btn btn-maximize" />
      </div>
      <div class="mac-window-title">
        <slot name="title">
          <span v-if="title">{{ title }}</span>
        </slot>
      </div>
      <div class="mac-window-spacer" />
    </div>
    <div class="mac-window-body" :style="height ? { height } : {}">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.mac-window {
  border-radius: 10px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.3),
    0 0 0 0.5px rgba(0, 0, 0, 0.1);
  width: v-bind(width);
  max-width: 100%;
  margin: 24px 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.mac-window:hover {
  transform: translateY(-2px);
  box-shadow:
    0 25px 70px rgba(0, 0, 0, 0.35),
    0 0 0 0.5px rgba(0, 0, 0, 0.15);
}

.mac-window.resizable {
  min-height: 80px;
}

.mac-window-bar {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: linear-gradient(180deg, #e8e8ed 0%, #d4d4d9 100%);
  border-bottom: 1px solid #bfbfc4;
  user-select: none;
  -webkit-user-select: none;
  position: relative;
}

.dark .mac-window-bar {
  background: linear-gradient(180deg, #3a3a3c 0%, #2c2c2e 100%);
  border-bottom-color: #1c1c1e;
}

.mac-window-buttons {
  display: flex;
  gap: 8px;
  z-index: 1;
}

.mac-window-buttons .btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  cursor: default;
  transition: filter 0.15s ease;
}

.mac-window-buttons .btn:hover {
  filter: brightness(0.9);
}

.btn-close {
  background: #ff5f57;
  box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.15);
}

.btn-minimize {
  background: #febc2e;
  box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.15);
}

.btn-maximize {
  background: #28c840;
  box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.15);
}

.mac-window-title {
  flex: 1;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: #4a4a4c;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
}

.dark .mac-window-title {
  color: #a1a1a6;
}

.mac-window-spacer {
  width: 52px;
}

.mac-window-body {
  padding: 20px 24px;
  overflow-y: auto;
  min-height: 60px;
}
</style>
