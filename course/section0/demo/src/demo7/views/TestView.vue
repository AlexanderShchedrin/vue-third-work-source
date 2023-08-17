<!-- App.vue -->
<template>
  <SillyButton type="increment" @click="store.increment"/>
  <p>{{ counterStore.count }}</p>
</template>

<script setup>
import { useCounterStore } from "@/store";
import SillyButton from '@/demo7/sillyButton/sillyButton.vue';

const counterStore = useCounterStore();
</script>
