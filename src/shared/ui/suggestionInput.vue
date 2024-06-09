<script setup lang="ts">
  import {addressSuggestions} from "~/app/api/addressSuggestions";
  import {watchDebounced} from "@vueuse/shared";
  import {className} from "postcss-selector-parser";

  // TODO: допилить автоимпорт
  // управление кнопками

  const query = ref("");
  const suggestions = ref([]);
  const focusDown = ({target}: any) => {
    const { nextSibling } = target;
    console.log(nextSibling)

    nextSibling.tagName == "DIV" ? nextSibling.focus() : target.parentElement.firstChild.focus();
  }
  const focusUp = ({target}: any) => {
    const { previousSibling } = target;
    console.log(previousSibling)
    if (previousSibling == null) {
      target.parentElement.childNodes[-1].focus()
    }
    previousSibling.tagName == "DIV" ? previousSibling.focus() : target.parentElement.firstChild.focus();
  }

  watchDebounced(
    query,
 async (query) => {
      suggestions.value = (await addressSuggestions(query)).suggestions;
    },
{ debounce: 500})

</script>


<template>
  <UiBaseButton @click="console.log(suggestions)"> Log res</UiBaseButton>
  <div class="input-container">
    <input
        v-model="query"
        tabindex="1"
        @keydown.down="focusDown"
        @keydown.up="focusUp"
        class="suggestion-input">
    <div
        v-for="suggestion in suggestions"
        @keydown.down="focusDown"
        @keydown.up="focusUp"
        onfocus="className='active'"
        onblur="className=''"
        :tabindex="suggestions.indexOf(suggestion)+2">
      {{ suggestion.data.region }} {{ suggestion.data.city }} {{ suggestion.data.street_with_type }}
      {{ suggestion.data.house }} {{ suggestion.data.flat }}
    </div>
  </div>
</template>


<style scoped>
  .input-container{
    border-radius: 10px;
    border: 1px solid black;
    color: black;
    width: 300px;
    transition: 0.3ms ease-in-out;
  }
  .suggestion-input {
    height: 30px;
  }
  .active {
    background-color: #78ab00;
  }
</style>
