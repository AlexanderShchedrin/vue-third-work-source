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
  <demo-button
    @mouseenter="show2 = !show2"
    @mouseleave="show2 = !show2"
  >Показать</demo-button>
  <br>
  <transition
    @enter="enterAnimation"
    @leave="leaveAnimation"
    :css="false"
  >
    <img v-if="show2" src="@/assets/img/admin.jpg" alt="img">
  </transition>
</template>

<script setup>
import DemoButton from './DemoButton.vue'
import CollapseGroupList from '@/demo6/CollapseGroupList.vue';
import CollapseButton from '@/demo6/CollapseButton.vue';
import { ref } from 'vue'

const show = ref(true)
const show2 = ref(true)

function clearAnimations (el, done) {
  el.addEventListener('animationend', () => {
    el.className = ''
    done()
  })
}

function enterAnimation (el, done) {
  el.className = 'bounce'
  clearAnimations(el, done)
}

function leaveAnimation (el, done) {
  el.className = 'bounce-reverse'
  clearAnimations(el, done)
}
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

.bounce {
  animation: bounce .5s;
}

.bounce-reverse {
  animation: bounce .5s reverse;
}

@keyframes bounce {
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
