

<template>
  <div>
    Это главная страница
<!--    <UiSuggestionInput :routes-callback="addressSuggestions"></UiSuggestionInput>-->
<!--    <UiSuggestionInput :routes-callback="emailSuggestions"></UiSuggestionInput>-->
<!--    <UiWidgetsRadioButtons :in-collomn=true :checkboxes=sizes></UiWidgetsRadioButtons>-->
  <UiCardsRenderer :pizza-cards="pizzaCards"/>
  </div>
</template>

<script setup lang="ts">
import {usePizzaStore} from "~/app/stores/pizzaStore";
const pizzaCards = usePizzaStore().pizzaCards;

</script>

<style scoped>
  * {
    display: flex;
    gap: 30px;
  }
</style>
