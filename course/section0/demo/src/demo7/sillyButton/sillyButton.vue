<template>
  <button @click="$emit('click')">{{ label }}</button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
})
</script>
