<script setup lang="ts">
  import type {PropType} from "vue";

  defineProps({
    pizza: {
      type: Object as PropType<IPizza>,
      default: {} // накидать заглушку на случай отсутствия данных
    }
  })

</script>

<template>
  <div class="card">
    <img class="image" :src="pizza.image" alt="pizza-image">
    <div class="description">
      <div class="description__name">{{ pizza.name }}</div>
      <div class="description__text">{{ pizza.description }}</div>
      </div>

    <div class="price">
      <span v-if="pizza.prices.length > 1">от </span>
      <span>{{ pizza.prices[0] }} ₽</span>
    </div>
    <UiBaseButton
        form="sizepicker-form"
        color="sizepicker-color">
      Выбрать размер</UiBaseButton>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    height: 600px;
    width: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .image {
    height: 260px;
    width: 260px;
    border-radius: 5px;
  }
  .name {
    font-size: 1.5rem;
  }
  .description {
    height: 200px;
    padding: 0 40px 0 40px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    &__name {
      font-size: 1.4rem;
      height: 80px;
    }
    &__text {
      line-height: 1.4;
      font-size: 0.8rem;
    }

  }
  .price {
    height: 25px;
    font-size: 1.2rem;
  }
</style>
