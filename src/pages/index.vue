<template>
  <div>
    Это главная страница
    <UiRadio v-model="currentPizzaSize" :checkboxes=sizes></UiRadio>
    currentPizzaSize: {{ currentPizzaSize }}
  </div>
</template>

<script setup lang="ts">
  const currentPizzaSize = ref(25);

  const sizes = [
    {
      title: "25",
      value: 25,
    },
    {
      title: "30",
      value: 30,
    },
    {
      title: "35",
      value: 35,
    },
  ]


</script>


<style scoped>

</style>
