<template>
  <div>
    Это главная страница
    <UiBaseButton @click="click">Request</UiBaseButton>
  </div>
</template>

<script setup lang="ts">
  const click = async () => {
    const res = await addressSuggestions('москва хабар');
    console.log(res)
  }

</script>

<style scoped>
</style>
