<template>
    <div class="radio-container">
        <UiButton v-for="button,index in buttons" :key="button.value" @click="clickHandler(button.value)" class="square">
        {{ button.title }}</UiButton>
    </div>
</template>

<script setup lang="ts">
const props=defineProps({
    buttons:{
        type:Array,
        default:[]
    } 
})
const color:globalThis.Ref<string>=ref('red')
    console.log(color)
    
const emits= defineEmits(['change'])
const clickHandler=function(newValue:string){
    emits('change',newValue)
}
interface Button{
    title:string,
    value:number| string,
}
</script>

<style scoped>

</style>