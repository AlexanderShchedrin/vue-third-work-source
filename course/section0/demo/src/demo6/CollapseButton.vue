<template>
  <button @click="open = !open">
    Показать/скрыть
  </button>
  <transition>
    <p v-if="open">Элемент</p>
  </transition>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
