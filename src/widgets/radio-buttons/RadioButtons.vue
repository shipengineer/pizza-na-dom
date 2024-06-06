<template>
    <div class="radioButtons">
        <p>{{ current }}</p>
        <UiButton v-for="btn in buttons" @click="current=btn.value" :class="btn.value===current?'active':''" :theme="props.theme">
        
            <UiIconsRadioOn v-if="btn.value===current"/>
            <UiIconsRadioOff v-else/><span>{{btn.name}}</span>
        </UiButton>
    </div>
</template>

<script setup lang="ts">
const emits=defineEmits(['update:modelValue','checked'])
const props=defineProps({
    buttons:{
        type:Array,
        default:[]
    },
    modelValue:{
        type:Number,
        required:true
    }
})
const current=ref(props.buttons[1].value)
watch(current,(newCurrent)=>{
emits('update:modelValue',newCurrent)
},{deep:true})

</script>

<style lang="scss" scoped>
.active{
    border: 1px solid red;
}
</style>