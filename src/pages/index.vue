<template>
  <div>
    Это главная страница
  <UiCardsRenderer :pizza-cards="pizzaCards"/>
  </div>
</template>

<script setup lang="ts">
import {usePizzaStore} from "~/app/stores/pizzaStore";
const pizzaCards = usePizzaStore().pizzaCards;

</script>

<style scoped>
  * {
    margin: 0 auto;
  }
</style>
