<script setup lang="ts">/**
  Creates a two-way bound set of checkboxes of the following size.
  @property checkboxes - Array<Checkbox> - array of objects what represents checkboxes.
*/
import BaseButton from "~/src/shared/ui/BaseButton.vue";

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
    <BaseButton
        v-for="checkbox in checkboxes"
        :key="checkbox.value"
        :class="{ active: checkbox.value==modelValue}"
        @click="$emit('update:modelValue', checkbox.value)">
      {{ checkbox.title }}
    </BaseButton>
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
