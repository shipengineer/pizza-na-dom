<script setup lang="ts">
/**
  Creates a set of checkboxes of the following size what can be styled by changing
  style in UiCustomButton component.
  @property checkboxes - Array<Checkbox> - array of objects what represents checkboxes.
 */

/* TODO: переместить интерфейс в соотв. папку (куда?) */
interface Checkbox{
  title: string,
  value: number,
  isSelected: boolean
}

const props = defineProps({
    checkboxes:{
      type:Array<Checkbox>,
      default:[],
      required: true
    } 
})

const refChecks = ref(props.checkboxes)

const emits=defineEmits(['changePizzaSize'])
const handleClickOnSize = (checkbox: Checkbox) => {
  emits('changePizzaSize', checkbox);
  props.checkboxes.forEach((checkbox) => checkbox.isSelected = false);
  checkbox.isSelected = true;
}

</script>

<template>
  <div class="radio-container">
    <!-- ВОПРОС: оставить хендлер через пропсы или сделать нативно через @click?-->
    <UiCustomButton
        v-for="checkbox in refChecks"
        styleClass="size-picker"
        :class="{ selected: checkbox.isSelected }"
        :click-handler="() => handleClickOnSize(checkbox)"
        :key="checkbox.value">
      {{ checkbox.title }}
    </UiCustomButton>
  </div>
</template>


<style scoped>
  .radio-container {
    display: flex;
    gap: 10px
  }
</style>
