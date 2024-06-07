<script setup lang="ts">
/**
  Creates a two-way bound set of checkboxes of the following size.
  @property checkboxes - Array<Checkbox> - array of objects what represents checkboxes.
 */

/* TODO: переместить интерфейс в соотв. папку (куда?) */
interface Checkbox{
  title: string,
  value: number | string,
  isSelected: boolean
}

defineProps({
    checkboxes: {
      type:Array<Checkbox>,
      default:[],
      required: true
    },
})

defineModel();
</script>

<template>
  <div class="radio-container">
    <UiCustomButton
        v-for="checkbox in checkboxes"
        :key="checkbox.value"
        :class="{ active: checkbox.value==modelValue}"
        @click="$emit('update:modelValue', checkbox.value)">
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
