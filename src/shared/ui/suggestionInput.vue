<script setup lang="ts">
  import {addressSuggestions} from "~/app/api/addressSuggestions";
  import {watchDebounced} from "@vueuse/shared";
  // TODO: допилить автоимпорт

  const query = ref("");
  let apiResponse = ref({ suggestions: [] });

  watchDebounced(
    query,
 async (query) => {
      apiResponse = await addressSuggestions(query)},
{ debounce: 400, maxWait: 1000}
  )


</script>

<template>
  <input class="suggestion-input" v-model="query">
  <UiBaseButton @click="console.log(apiResponse)"> Log res</UiBaseButton>
  <div v-for="suggestion in apiResponse.suggestions">
    {{ suggestion.data.city }}
  </div>
</template>

<style scoped>
  .suggestion-input {
    border: black 1px solid;
  }
</style>
