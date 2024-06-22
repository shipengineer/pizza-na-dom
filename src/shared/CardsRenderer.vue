<script setup lang="ts">
defineProps({
  pizzaCards: {
    type: Array<IPizza>,
    default: {} // тут бы неплохо сделать заглушку
  }
})
</script>

<template>
  <section class="pizzas">
    <UiCard v-for="pizza in pizzaCards" :pizza="pizza"/>
  </section>
</template>


<style scoped>
.pizzas {
  width: 890px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-template-rows: auto;
  column-gap: 25px;
  row-gap: 30px;
  justify-items: center;
}
</style>
