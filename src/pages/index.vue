<template>
  <div>
    Это главная страница
    <UiRadio @change-pizza-size="changeSize" :checkboxes=sizes></UiRadio>
  </div>
</template>

<script setup lang="ts">
  const changeSize = function (size: number) {
    console.log(size)
  };
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
