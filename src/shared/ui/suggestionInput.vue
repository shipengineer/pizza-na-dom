<script setup lang="ts">

const query = ref('');
const isSuggestionPicked = ref(false)
const suggestions = ref([]);

const props = defineProps({
  apiCallback: {
    type: Function,
    required: true,
  }
})

watchDebounced(
    query,
    async (query) => {
      if (!isSuggestionPicked.value) { // если подсказка выбрана НЕ делаем запрос к API.
        suggestions.value = (await props.apiCallback(query)).suggestions;
      }
    },
    { debounce: 500}
)

// region Навигация стрелками на клавиатуре и поведение при выборе подсказки.
/**
 target.parentElement.firstElementChild == input

 Навигация построена на том, что input и div'ы с подсказками лежат в одном контейнере с классом input-container.
 При нажатии стрелок проверяем tagName брата-соседа и двигаем фокус:
 - если сосед - DIV, двигаем фокус на него.
 - если соседа нет (вверх от input, вниз от последнего div) или он не DIV (вверх от первого div), то
 двигаем фокус на последний div (от input наверх) или к input (от последнего div вниз).

 Enter/mouseclick на подсказку перемещает фокус на input, ставит флаг isSuggestionPicked в true, меняет текст инпута на
 текст подсказки и очищает список подсказок (suggestions).

 Esc на input и div-подсказках очищает input, ставит флаг isSuggestionPicked в true для предотвращения лишнего запроса
 к API и очищает список подсказок (suggestions).

 Фокус на input всегда перемещает каретку в конец текста input (caretToInputEndReplacer).
 */
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
const pickFocusedSuggestion = ({target}: any) => {
  target.parentElement.firstElementChild.focus();
  isSuggestionPicked.value = true;
  query.value = target.innerText;
  suggestions.value=[];
}
const clearInput = () => {
  query.value = '';
  isSuggestionPicked.value = true;
  suggestions.value=[];
}
const setIsSuggestionPickedFalse = () => {
  isSuggestionPicked.value ? isSuggestionPicked.value = false : '';
}
const caretToInputEndReplacer = ({target}: any) => {
  setTimeout(() => { // ставим перемещение каретки в eventLoop отдельной макрозадачей, иначе не работает.
    target.parentElement.firstElementChild.selectionStart = target.parentElement.firstElementChild.value.length;
  },0)
}
// endregion
</script>

<template>
  <section style="position: relative" class="input-container"
     @keydown.esc="clearInput">
    <div style="position: absolute">
    <input
      @input="setIsSuggestionPickedFalse"
      @focus="caretToInputEndReplacer"
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

        @click="pickFocusedSuggestion"
        @keydown.enter="pickFocusedSuggestion"
        @keydown.down="focusArrowDown"
        @keydown.up="focusArrowUp"

        class="suggestions__result">
      {{ suggestion.value }}
    </div>
  </div>
</section>
</template>


<style scoped lang="scss">
  .input-container {
    border-radius: 10px;
    border: 1px solid black;

    width: 300px;
    transition: 0.3ms ease-in-out;
    height: 30px;
  }
  .suggestions {
    &__input {
      height: 30px;
      color: black;
      width: 300px;
    }
    &__result {
      background-color: white;
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
