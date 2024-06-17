

<template>
  <div>
    Это главная страница
    <UiSuggestionInput :api-callback="addressSuggestions"></UiSuggestionInput>
    <UiSuggestionInput :api-callback="emailSuggestions"></UiSuggestionInput>
    <UiWidgetsRadioButtons :in-collomn=true :checkboxes=sizes></UiWidgetsRadioButtons>
  </div>
</template>

<script setup lang="ts">
import {addressSuggestions} from "~/app/api/addressSuggestions";
import {emailSuggestions} from "~/app/api/emailSuggestions";

const sizes: ICheckbox[] = [
  {
    title: "25",
    value: 25
  },
  {
    title: "35",
    value: 35
  },
  {
    title: "45",
    value: 45
  }

]

</script>

<style scoped>

</style>
