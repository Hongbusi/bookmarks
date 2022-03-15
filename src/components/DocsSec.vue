
<template>
  <div v-for="key in Object.keys(data)" :key="key" class="docs-sec">
    <div class="docs-sec-header">
      {{ key }}
    </div>

    <DocsList :list="data[key]" />
  </div>
</template>

<script setup lang="ts">
import data from '../config'
</script>

<style scoped>
.docs-sec {
  margin-bottom: 20px;
}

.docs-sec-header {
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 18px;
  height: 44px;
  font-weight: 600;
  background-color: var(--hbs-c-bg-gray);
}

.docs-sec-header::before {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  content: "";
  border-right: 4px solid var(--hbs-c-bg-primary);
}
</style>
