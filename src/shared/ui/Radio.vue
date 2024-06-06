<script setup lang="ts">
/**
  Creates a set of checkboxes of the following size what can be styled by changing style in UiCustomButton component.
  @property checkboxes - Array<Checkbox> - array of objects what represents checkboxes.
 */

/* TODO: переместить интерфейс в соотв. папку (куда?) */
interface Checkbox{
  title: string,
  value: number,
  isSelected: boolean
}

const props = defineProps({
    checkboxes: {
      type:Array<Checkbox>,
      default:[],
      required: true
    },
    modelValue: {
      type: Number,
    }
})

const refChecks = ref(props.checkboxes);

const handleClickOnSize = (checkbox: Checkbox) => {
  props.checkboxes.forEach((checkbox) => checkbox.isSelected = false);
  checkbox.isSelected = true;
}

</script>

<template>
  <div class="radio-container">
    <UiCustomButton
        v-for="checkbox in refChecks"
        styleClass="size-picker"
        :class="{ 'size-picker__selected': checkbox.isSelected }"
        :key="checkbox.value"
        :click-handler="() => handleClickOnSize(checkbox)">
      <input
          type="radio"
          :value="checkbox.value"
          :id="checkbox.title"
          @click="$emit('update:modelValue', $event.target.value)"
      >
      <label :for="checkbox.title">{{checkbox.title}}</label>
    </UiCustomButton>
  </div>
</template>


<style scoped>
  .radio-container {
    display: flex;
    gap: 10px
  }
</style>
