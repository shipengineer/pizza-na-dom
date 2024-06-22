<script setup lang="ts">
const nuxtApp = useNuxtApp();
</script>

<template>
  <div>
    Это страница pizza id: {{ $route.params.id }}
  </div>
</template>

<style scoped>

</style>