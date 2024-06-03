<template>
    <div>
Это главная страница
<UiButton :theme="theme" :click-handler="changeTheme">
   <UiIconsCart color="#d3d3d3"/> Нажми меня
</UiButton>
    </div>
</template>

<script setup lang="ts">
const theme=ref('light')

const changeTheme=function(){
    
    if(theme.value==='black'){
        theme.value='light'
    }else{
        theme.value='black'
    }
}
</script>

<style scoped>

</style>
