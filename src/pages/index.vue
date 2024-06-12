<template>
  <div>
    Это главная страница
    <UiButton :theme="theme" :click-handler="changeTheme">
      close
      <UiIconsCross color="#d3d3d3"/>
    </UiButton>
    <UiRadio :buttons="buttons">13</UiRadio>
    <UiSuggestionInput/>
  </div>
</template>

<script setup lang="ts">
const theme = ref('light')
const buttons = ref([
  {value: 1, title: '1'},
  {value: 5, title: '5'},
  {value: 30, title: '30'}
])
const changeTheme = function () {
  if (theme.value === 'black') {
    theme.value = 'light'
  } else {
    theme.value = 'black'
  }
}
</script>

<style scoped>

</style>
