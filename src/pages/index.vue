<template>
  <div>
    Это главная страница
    <UiCustomButton :click-handler="showSize" style-class="selector">Current Size</UiCustomButton>
    <UiRadio v-model="currentPizzaSize" :checkboxes=sizes></UiRadio>
    currentPizzaSize: {{ currentPizzaSize }}
  </div>
</template>

<script setup lang="ts">
  const currentPizzaSize = ref(25);
  const showSize = () => {console.log(currentPizzaSize.value)}

  const sizes = [
    {
      title: "25",
      value: 25,
      isSelected: true
    },
    {
      title: "30",
      value: 30,
      isSelected: false
    },
    {
      title: "35",
      value: 35,
      isSelected: false
    },
  ]


</script>


<style scoped>

</style>
