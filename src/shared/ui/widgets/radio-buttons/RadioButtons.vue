<template>
  <div class="radio-container">
    <UiButton
        v-for="checkbox in checkboxes"
        :key="checkbox.value"
        :class="{ active: checkbox.value==modelValue}"
        @click="$emit('update:modelValue', checkbox.value)">
      {{ checkbox.title }}
    </UiButton>
  </div>
</template>

<script setup lang="ts">/**
 Creates a two-way bound set of checkboxes of the following size.
 @property checkboxes - Array<Checkbox> - array of objects what represents checkboxes.
 */

defineProps({
  checkboxes: {
    type:Array<Checkbox>,
    default:[],
    required: true
  },
})

defineModel();
</script>

<style scoped>
.radio-container {
  display: flex;
  gap: 10px
}

.active {
  background-color: green;
}
</style>