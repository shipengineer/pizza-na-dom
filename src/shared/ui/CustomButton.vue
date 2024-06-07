<script setup lang="ts">

defineProps({
  form: {
    type: String,
    default: 'rectangle'
  },
  color: {
    type: String,
    default: "light"
  }
})
</script>

<template>
  <button :class="`button_${form} button_${color}`">
    <slot/>
  </button>
</template>

<style scoped lang="scss">

</style>
