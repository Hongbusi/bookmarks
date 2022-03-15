<template>
  <div class="content">
    <div v-for="key in Object.keys(data)" :key="key" class="doc-sec">
      <div class="doc-sec-header">
        <div class="doc-sec-header__icon" />
        <div class="doc-sec-header__title">
          {{ key }}
        </div>
      </div>

      <ListDocs :list="data[key]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IData } from '../types'
defineProps<{
  data: IData
}>()
</script>

<style scoped>
.content {
  flex: 1;
  padding: 32px calc((100% - var(--docs-max-width)) / 2 + 20px) 96px 32px;
  margin-right: -20px;
  height: 100%;
}

.doc-sec {
  margin-bottom: 20px;
}

.doc-sec-header {
  display: flex;
  align-items: center;
  margin-right: 20px;
  height: 44px;
  color: #66687d;
  background: #f9f9f9;
}

.doc-sec-header__icon {
  width: 2px;
  height: 24px;
  background: #42b883;
}

.doc-sec-header__title {
  margin-left: 18px;
  font-size: 14px;
  font-weight: 700;
  color: #66687d;
}
</style>
