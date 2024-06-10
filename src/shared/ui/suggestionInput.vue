<script setup lang="ts">
// TODO: проверить функцию focusEnter (название selectSuggestion, надо ли сбрасывать список подсказок) 1🦉/10🦉 ✅
// TODO: selectedSuggestion -> boolean? isSugggestionPicked? 1🦉/10🦉
// TODO: допилить автоимпорт 3🦉/ 10🦉
// TODO: передавать функцию API пропсами что бы инпут мог не только в адреса 4🦉/10🦉
// TODO: сделать фокус на инпут по выбору подсказки на Enter/mouseclick ???🦉/10🦉
/*+
    TODO: красиво показывать подсказки (скорее всего будет отдельно замороченное место) =>
     вынести в компонент с пропосом с объектом подсказки. 8🦉/10🦉
 */

  import {addressSuggestions} from "~/app/api/addressSuggestions";
  import {watchDebounced} from "@vueuse/shared";

  const query = ref('');
  const isSuggestionPicked = ref(false)
  const suggestions = ref([]);

  watchDebounced(
      query,
      async (query) => {
        if (!isSuggestionPicked.value) {
          suggestions.value = (await addressSuggestions(query)).suggestions;
        }
      },
      { debounce: 500})

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
  const pickSelectedSuggestion = ({target}: any) => {
    isSuggestionPicked.value = true;
    query.value = target.innerText;
    suggestions.value=[]
  }

</script>


<template>
  <div class="input-container"
       @keydown.esc="query=''">
    <input
      @input="isSuggestionPicked ? isSuggestionPicked = false : ''"
      v-model="query"
      class="suggestions__input"

      tabindex="1"
      @keydown.down="focusArrowDown"
      @keydown.up="focusArrowUp"
    />
    <div
        v-if="!isSuggestionPicked"
        v-for="suggestion in suggestions"
        :key="suggestions.indexOf(suggestion)+2"

        :tabindex="suggestions.indexOf(suggestion)+2"

        @click="pickSelectedSuggestion"
        @keydown.enter="pickSelectedSuggestion"
        @keydown.down="focusArrowDown"
        @keydown.up="focusArrowUp"

        class="suggestions__result">
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
      &:focus {
        background-color: $brand;
      }
    }

  }

</style>
