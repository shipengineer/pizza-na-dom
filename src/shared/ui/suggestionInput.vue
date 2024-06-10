<script setup lang="ts">
  import {addressSuggestions} from "~/app/api/addressSuggestions";
  import {watchDebounced} from "@vueuse/shared";
  // TODO: допилить автоимпорт
  // TODO: передавать функцию API пропсами что бы инпут мог не только в адреса
  const query = ref('');
  const selectedSuggestion = ref('')
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
    selectedSuggestion.value = target.innerText;
    query.value = selectedSuggestion.value;
    suggestions.value=[]
  }

</script>


<template>
  <UiBaseButton @click="console.log(suggestions)"> Log res</UiBaseButton>
  <div class="input-container">
    <input
      @input="selectedSuggestion = ''"
      v-model="query"
      class="suggestions__input"

      tabindex="1"
      @keydown.down="focusArrowDown"
      @keydown.up="focusArrowUp"
      @keydown.esc="query=''">
    <div
        class="suggestions__result"
        v-if="!selectedSuggestion"
        v-for="suggestion in suggestions"
        :key="suggestions.indexOf(suggestion)+2"
        :onfocus="toggleActive"
        :onblur="toggleActive"

        :tabindex="suggestions.indexOf(suggestion)+2"
        @click="focusEnter"
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
      width: 300px;
    }
    &__result {
      color: black;
      z-index: 200;
      position: relative;
      &:hover {
        background-color: #ff9970;
      }
    }

  }
  .active {
    background-color: $brand;
  }
</style>
