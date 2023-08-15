<template>
  <collapse-button/>
  <br>
  <collapse-group-list/>
  <br>
  <demo-button @click="show = !show">Показать</demo-button>
  <br>
  <transition name="bounce">
    <img v-if="show" src="@/assets/img/admin.jpg" alt="img">
  </transition>
</template>

<script setup>
import DemoButton from './DemoButton.vue'
import CollapseGroupList from '@/demo6/CollapseGroupList.vue';
import CollapseButton from '@/demo6/CollapseButton.vue';
import { ref } from 'vue'

const show = ref(true)
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
