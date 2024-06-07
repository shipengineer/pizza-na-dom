<script setup lang="ts">
/**
  Creates a set of checkboxes of the following size.
  @property checkboxes - Array<Checkbox> - array of objects what represents checkboxes.
 */

/* TODO: переместить интерфейс в соотв. папку (куда?) */
interface Checkbox{
  title: string,
  value: number | string,
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

const emits = defineEmits(["update:modelValue"])
let currentValue = props.checkboxes[0].value;

const handleClick = (newValue: number | string) => {
  emits("update:modelValue", newValue);
  currentValue = newValue;
}

</script>

<template>
  <div class="radio-container">
    <UiCustomButton
        v-for="checkbox in checkboxes"
        :key="checkbox.value"
        :class="{ active: checkbox.value==currentValue}"
        @click="handleClick(checkbox.value)">
      {{ checkbox.title }}
    </UiCustomButton>
  </div>
</template>


<style scoped>
  .radio-container {
    display: flex;
    gap: 10px
  }

  .active {
    background-color: green;
  }
</style>
