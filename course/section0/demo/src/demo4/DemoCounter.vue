<template>
  <DemoContainer>
    <div class="counter">
      <CounterButton
        @action="counterStore.decrement"
        :disabled="counterStore.isDecrementDisabled"
      > - </CounterButton>
      <CounterValue :value="counterStore.value" />
      <CounterButton @action="counterStore.increment"> + </CounterButton>
    </div>
  </DemoContainer>
</template>
<script setup>
import CounterButton from '@/demo1/CounterButton.vue';
import CounterValue from '@/demo1/CounterValue.vue';
import {useCounterStore} from '@/demo4/store';
import DemoContainer from '@/components/DemoContainer.vue';

const counterStore = useCounterStore();

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
