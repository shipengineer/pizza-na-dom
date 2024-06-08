<script setup lang="ts">
  import {addressSuggestions} from "~/app/api/addressSuggestions";
  import {watchDebounced} from "@vueuse/shared";
  // TODO: допилить автоимпорт

  const query = ref("");
  const suggestions = ref([]);

  watchDebounced(
    query,
 async (query) => {
      suggestions.value = (await addressSuggestions(query)).suggestions;
    },
{ debounce: 500})
</script>


<template>
  <UiBaseButton @click="console.log(suggestions)"> Log res</UiBaseButton>
  <div class="input-container form">
    <input class="suggestion-input form" v-model="query">
    <div v-for="suggestion in suggestions">
      {{ suggestion.data.region }} {{ suggestion.data.city }} {{ suggestion.data.street_with_type }}
      {{ suggestion.data.house }} {{ suggestion.data.flat }}
    </div>
  </div>
</template>


<style scoped>
  .form {

  }
  .input-container{
    border-radius: 10px;
    background-color: #cecece;
    width: 300px;
    transition: 0.3ms ease-in-out;
  }
  .suggestion-input {
    height: 30px;
  }
</style>
