<template>
  <div class="counter">
    <button @click="decrement"> - </button>
    <span>Current value: {{ count }}</span>
    <button @click="increment"> + </button>
  </div>
</template>
<script setup>
import {ref} from "vue";

const count = ref(0);

const decrement = () => count.value -= 1;

const increment = () => count.value += 1;

</script>
<style scoped lang="scss">
.counter {
  display: flex;
  align-items: center;

  button {
    margin: 0 10px;
    width: 2rem;
    height: 2rem;

    font-size: 1.5rem;
    color: white;

    border-radius: 50%;
    border: none;
    background: #dd0000;
    cursor: pointer;

    &:hover {
      background: #ff0000;
    }
  }
}
</style>
