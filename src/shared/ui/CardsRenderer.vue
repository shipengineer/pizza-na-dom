<script setup lang="ts">
  defineProps({
    pizzaCards: {
      type: Array<IPizza>,
      default: {} // тут бы неплохо сделать заглушку
    }
  })
</script>

<template>
  <div class="pizzas">
    <UiCard v-for="pizza in pizzaCards" :pizza="pizza"/>
  </div>
</template>

<style scoped>
 .pizzas {
   width: 840px;
   background-color: lightgrey;
   display: grid;
   justify-items: center;
   grid-template-columns: repeat(3, 1fr);
   grid-column-gap: 30px;
   grid-row-gap: 20px;
 }
</style>
