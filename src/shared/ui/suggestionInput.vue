<script setup lang="ts">
// TODO: допилить автоимпорт 3🦉/ 10🦉
// TODO: функция подсказки по емайлу для инпута ???🦉/10🦉
// TODO: красиво показывать подсказки (скорее всего будет отдельно замороченное место) вынести в компонент с пропосом
//  с объектом подсказки. 8🦉/10🦉

import {addressSuggestions} from "~/app/api/addressSuggestions";

const props = defineProps({
  func: {
    type: Function,
    required: true,
  },
})

const query = ref('');
const isSuggestionPicked = ref(false)
const suggestions = ref([]);
console.log(props.func.name)
watchDebounced(
    query,
    async (query) => {
      if (!isSuggestionPicked.value) {
        suggestions.value = (await props.func(query)).suggestions;
      }
    },
    {debounce: 500}
)

const focusArrowDown = ({target}: any) => {
  const {nextElementSibling} = target;
  nextElementSibling?.tagName == "DIV" ?
      nextElementSibling.focus() : target.parentElement.firstElementChild.focus();
}
const focusArrowUp = ({target}: any) => {
  const {previousElementSibling} = target;
  previousElementSibling?.tagName == "DIV" ||
  previousElementSibling?.tagName == "INPUT" ?
      previousElementSibling.focus() : target.parentElement.lastElementChild.focus();
}
const pickSelectedSuggestion = ({target}: any) => {
  isSuggestionPicked.value = true;
  query.value = target.innerText;
  suggestions.value = []
}
const focusInput = ({target}: any) => {
  setTimeout(() => {
    target.selectionStart = target.value.length;
  }, 0)
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
        @focus="focusInput"
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
      <span v-if="func.name === 'addressSuggestions'">
              {{ suggestion.data.region }} {{ suggestion.data.city }} {{ suggestion.data.street_with_type }}
            {{ suggestion.data.house }} {{ suggestion.data.flat }}
      </span>
      <span v-else>
              {{ suggestion.value }}
      </span>
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