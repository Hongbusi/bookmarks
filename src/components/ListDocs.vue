<template>
  <div class="list">
    <div v-for="(item, index) in list" :key="index" class="list-item">
      <div>
        <div class="doc-header">
          <img class="doc-header__logo" :src="item.logo" :alt="item.name">
          <div class="doc-header__title">
            {{ item.name }}
          </div>
        </div>
        <div class="doc-desc">
          {{ item.desc }}
        </div>
      </div>
      <div class="doc-footer">
        <a v-if="item.gitHubLink" :href="item.gitHubLink" target="_blank">
          <GitHub :size="18" />
        </a>
        <a v-if="item.zhLink" class="doc-footer__btn" :href="item.zhLink" target="_blank">中文</a>
        <a v-if="item.enLink" class="doc-footer__btn" :href="item.enLink" target="_blank">English</a>
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
.list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.list-item {
  margin-top: var(--hbs-blank-width);
  margin-right: var(--hbs-blank-width);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1;
  min-width: 253px;
  height: 130px;
  background: #f9f9f9;
}

.doc-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-left: 14px;
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
  margin-top: 10px;
  margin-right: 14px;
  margin-left: 14px;
  height: 36px;
  font-size: 12px;
  color: #727171;
  text-align: left;
}

.doc-footer {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 4px 14px;
  line-height: 30px;
  background: #c3c4ce;
}

.doc-footer a {
  margin-right: 12px;
}

.doc-footer__btn {
  padding: 2px 6px;
  line-height: 16px;
  font-size: 12px;
  border: 1px solid #999;
  border-radius: 4px;
  transition: all .25s;
}

.doc-footer__btn:hover {
  border: 1px solid #42b883;
  color: #42b883;
}
</style>
