<template>
  <component :is="layout">
    <slot/>
  </component>
</template>

<script setup>

import {useRoute} from 'vue-router';
import {shallowRef, watch} from 'vue';
import AppLayoutDefault from '@/layouts/AppLayoutDefault.vue';

const route = useRoute();
const layout = shallowRef();

// Наблюдаем за изменением маршрута
watch(() => route.meta, async meta => {
  try {
    // Пробуем найти компонент из свойства meta и динамически импортировать его
    if (meta.layout) {
      const component = await import(`@/layouts/${meta.layout}.vue`);
      layout.value = component?.default || AppLayoutDefault;
    } else {
      layout.value = AppLayoutDefault;
    }
  } catch (e) {
    console.error('Динамический шаблон не найден. Установлен шаблон по-умолчанию.', e)
    layout.value = AppLayoutDefault
  }
})
</script>
<style lang="scss" scoped>
.app_layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  display: flex;
  flex-grow: 1;
}
</style>
