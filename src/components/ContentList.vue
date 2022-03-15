
<template>
  <div class="content-list">
    <template v-for="i in 4" :key="i">
      <div v-for="key in Object.keys(data)" :key="key" class="doc-sec">
        <div class="doc-sec-header">
          <div class="doc-sec-header__icon" />
          <div class="doc-sec-header__title">
            {{ key }}
          </div>
        </div>

        <ListDocs :list="data[key]" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import data from '../config'
</script>

<style scoped>
.content-list {
  padding: 32px calc((100vw - var(--docs-max-width)) / 2) 96px 32px;
}

@media (max-width: 1376px) {
  .content-list {
    padding-left: var(--docs-sidebar-width);
  }
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
