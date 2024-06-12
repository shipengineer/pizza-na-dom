<template>
  <svg :fill="props.color" xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width="24"
       height="24">
    <rect y="10.5" width="24" height="2"/>
    <rect y="3.5" width="24" height="2"/>
    <rect y="17.5" width="24" height="2"/>
  </svg>

</template>
<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: '#000'
  }
})
</script>

<style scoped>

</style>