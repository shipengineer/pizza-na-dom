<script setup lang="ts">
/* TODO: переместить интерфейс в соотв. папку (куда?) */
interface Size{
  title: string,
  value: number,
  isSelected: boolean
}

defineProps({
    sizes:{
      type:Array<Size>,
      default:[],
      required: true
    } 
})

const emits=defineEmits(['changePizzaSize'])
const handleClickOnSize = (newSize: number) => {
  emits('changePizzaSize', newSize)
  // TODO: перевешивать isSelected на кликнутый размер и снимать со всех остальных.
}

</script>

<template>
  <div class="radio-container">
    <!-- ВОПРОС: оставить хендлер через пропсы или сделать нативно через @click?-->
    <UiCustomButton
        v-for="size in sizes"
        styleClass="size-picker"
        :class="{ selected: size.isSelected }"
        :click-handler="() => handleClickOnSize(size.value)"
        :key="size.value">
      {{ size.title }}
    </UiCustomButton>
  </div>
</template>


<style scoped>
  .radio-container {
    display: flex;
    gap: 10px
  }
</style>
