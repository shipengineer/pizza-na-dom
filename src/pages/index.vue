<template>
  <div>
    Это главная страница
    <UiSuggestionInput :api-callback="addressSuggestions"></UiSuggestionInput>
  </div>
</template>

<script setup lang="ts">
import {addressSuggestions} from "~/app/api/addressSuggestions";


</script>

<style scoped>

</style>
