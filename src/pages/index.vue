<template>
    <div>
Это главная страница
<UiButton :theme="theme" :click-handler="changeTheme">
    Нажми меня
</UiButton>
    </div>
</template>

<script setup lang="ts">
const theme=ref('light')

const changeTheme=function(){
    console.log(1)
    if(theme.value==='black'){
        theme.value='light'
    }else{
        theme.value='black'
    }
}
</script>

<style scoped>

</style>