<template>
  <div>
    Это главная страница
    <UiSuggestionInput :api-callback="addressSuggestions"></UiSuggestionInput>
    <UiSuggestionInput :api-callback="emailSuggestions"></UiSuggestionInput>
  </div>
</template>

<script setup lang="ts">
import {addressSuggestions} from "~/app/api/addressSuggestions";
import {emailSuggestions} from "~/app/api/emailSuggestions";


</script>

<style scoped>

</style>
