<template>
  <div class="docs-list">
    <div v-for="(item, index) in list" :key="index" class="docs-list-col">
      <div class="docs-list-row">
        <div class="doc-header">
          <img class="doc-header__logo" :src="item.logo" :alt="item.name">
          <div class="doc-header__title">
            {{ item.name }}
          </div>
        </div>
        <div class="doc-desc">
          {{ item.desc }}
        </div>
        <div class="doc-footer">
          <a v-if="item.gitHubLink" :href="item.gitHubLink" target="_blank">
            <GitHub :size="20" />
          </a>
          <a v-if="item.zhLink" class="doc-footer__btn" :href="item.zhLink" target="_blank">中文</a>
          <a v-if="item.enLink" class="doc-footer__btn" :href="item.enLink" target="_blank">English</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  list: any
}>()
</script>

<style scoped>
.docs-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -8px;
}

.docs-list-col {
  flex: 1 1;
  padding: 0 8px;
  margin-top: var(--hbs-blank-width);
  min-width: 253px;
  height: 130px;
}

.docs-list-row {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--hbs-c-bg-gray);
}

.doc-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 14px;
  height: 50px;
}

.doc-header__logo {
  width: 40px;
  height: 40px;
}

.doc-header__title {
  margin-right: 30px;
  margin-left: 10px;
  font-size: 16px;
  color: #4d4f91;
  text-align: left;
}

.doc-desc {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  padding: 10px 14px 0;
  height: 50px;
  font-size: 12px;
  color: #727171;
  text-align: left;
}

.doc-footer {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 4px 14px;
  height: 30px;
  background-color: #c3c4ce;
}

.doc-footer a {
  margin-right: 12px;
}

.doc-footer__btn {
  padding: 2px 6px;
  line-height: 16px;
  font-size: 12px;
  border: 1px solid var(--hbs-c-border);
  border-radius: 4px;
  transition: all .25s;
}

.doc-footer__btn:hover {
  border: 1px solid var(--hbs-c-text-primary);
  color: var(--hbs-c-text-primary);
}
</style>
