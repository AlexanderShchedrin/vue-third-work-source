<template>
  <DemoContainer>
    <div class="counter">
      <CounterButton @action="decrement"> - </CounterButton>
      <CounterValue :value="count" />
      <CounterButton @action="increment"> + </CounterButton>
    </div>
  </DemoContainer>
</template>
<script setup>
import {ref} from "vue";
import CounterButton from '@/demo1/CounterButton.vue';
import CounterValue from '@/demo1/CounterValue.vue';
import DemoContainer from '@/components/DemoContainer.vue';

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
