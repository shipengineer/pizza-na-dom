<script setup lang="ts">
// TODO: допилить автоимпорт 3🦉/ 10🦉
// TODO: передавать функцию API пропсами что бы инпут мог не только в адреса 4🦉/10🦉
/*+
    TODO: красиво показывать подсказки (скорее всего будет отдельно замороченное место) =>
     вынести в компонент с пропосом с объектом подсказки. 8🦉/10🦉
 */

  import {suggestionsAPI} from "~/app/api/inputSuggestionAPI";

  const query = ref('');
  const isSuggestionPicked = ref(false)
  const suggestions = ref([]);

  onMounted(() => {
    const input = document.querySelector("input")
  })

  watchDebounced(
      query,
      async (query) => {
        if (!isSuggestionPicked.value) { // если подсказка выбрана НЕ делаем запрос к API.
          suggestions.value = (await suggestionsAPI.addressSuggestions(query)).suggestions;
        }
      },
      { debounce: 500}
  )

// region Навигация стрелками на клавиатуре и поведение при выборе подсказки.
/**
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
  const input = () => {return document.querySelector("input");} //исключительно ради читаемости следующих функций.
  const focusArrowDown = ({target}: any) => {
    const { nextElementSibling } = target;
    nextElementSibling?.tagName == "DIV" ?
        nextElementSibling.focus() : input()?.focus();
  }
  const focusArrowUp = ({target}: any) => {
    const { previousElementSibling } = target;
    previousElementSibling?.tagName == "DIV" ||
    previousElementSibling?.tagName == "INPUT" ?
        previousElementSibling.focus() : target.parentElement.lastElementChild.focus();
  }
  const pickFocusedSuggestion = ({target}: any) => {
    input()?.focus();
    isSuggestionPicked.value = true;
    query.value = target.innerText;
    suggestions.value=[];
  }
  const clearInput = () => {
    query.value = '';
    isSuggestionPicked.value = true;
    suggestions.value=[];
  }
  const caretToInputEndReplacer = () => {
    setTimeout(() => { // ставим перемещение каретки в eventLoop отдельной макрозадачей, иначе не работает.
      input().selectionStart = input().value.length;
    },0)
  }
// endregion
</script>


<template>
  <div class="input-container"
     @keydown.esc="clearInput">
    <!-- @input - снимаем флаг isSuggestionPicked.
    когда пользователь набирает текст в инпуте, считаем что подсказка не выбрана =>
    делаем запрос к API и отрисовываем подсказки -->
    <input
      @input="isSuggestionPicked ? isSuggestionPicked = false : ''"
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
