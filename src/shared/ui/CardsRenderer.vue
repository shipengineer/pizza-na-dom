<script setup lang="ts">
  defineProps({
    pizzaCards: {
      type: Array<IPizza>,
      default: {} // тут бы неплохо сделать заглушку
    }
  })
</script>

<template>
  <div v-for="pizza in pizzaCards">
    <UiCard :pizza="pizza"/>
  </div>
</template>

<style scoped>

</style>
