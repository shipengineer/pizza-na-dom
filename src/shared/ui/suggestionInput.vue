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


  const toggleActive = ({type, target}: any) => {
    type === "focus" ? target.classList.add("active") : target.classList.remove("active");
  }
  const focusArrowDown = ({target}: any) => {
    const { nextElementSibling } = target;
    nextElementSibling?.tagName == "DIV" ?
        nextElementSibling.focus() : target.parentElement.firstElementChild.focus();
  }
  const focusArrowUp = ({target}: any) => {
    const { previousElementSibling } = target;
    previousElementSibling?.tagName == "DIV" ||
    previousElementSibling?.tagName == "INPUT" ?
        previousElementSibling.focus() : target.parentElement.lastElementChild.focus();
  }
  const focusEnter = ({target}: any) => {
    target.parentElement.firstElementChild.value = target.innerText;
    suggestions.value = []
  }

  const logEvent = (event: any) => {
    console.log(event)
  }
</script>


<template>
  <UiBaseButton @click="console.log(suggestions)"> Log res</UiBaseButton>
  <div class="input-container">
    <input
        v-model="query"
        @change="logEvent"
        class="suggestions__input"

        tabindex="1"
        @keydown.down="focusArrowDown"
        @keydown.up="focusArrowUp"
        @keydown.esc="query=''">
    <div class="suggestions__result"
        v-for="suggestion in suggestions"
        :onfocus="toggleActive"
        :onblur="toggleActive"

        :tabindex="suggestions.indexOf(suggestion)+2"
        @keydown.enter="focusEnter"
        @keydown.down="focusArrowDown"
        @keydown.up="focusArrowUp"
        @keydown.esc="query=''">
      {{ suggestion.data.region }} {{ suggestion.data.city }} {{ suggestion.data.street_with_type }}
      {{ suggestion.data.house }} {{ suggestion.data.flat }}
    </div>
  </div>
</template>


<style scoped lang="scss">
  .input-container {
    border-radius: 10px;
    border: 1px solid black;

    background-color: white;
    width: 300px;
    transition: 0.3ms ease-in-out;


  }
  .suggestions {
    &__input {
      height: 30px;
      color: black;
    }
    &__result {
      color: black;
      z-index: 200;
      position: relative;
    }

  }
  .active {
    background-color: #78ab00;
  }
</style>
