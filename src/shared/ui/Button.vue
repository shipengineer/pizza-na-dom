<template>
 <button class="btn" :class="`btn-${props.theme} btn--${props.form}`" @click="props.clickHandler">
   <slot/>
 </button>
</template>

<script setup lang="ts">
const props=defineProps({
  theme:{
    type:String,
    default:'light'
  },
  form:{
    type:String,
    default:'rectangle'
  },
  clickHandler:{
    type:Function,
    default:()=>{}
  }
})
</script>

<style scoped  lang="scss">
.btn{
  background: transparent;
  border: none;
    &-light{
      color:$brand;
    }
  &-black{
    color:$dark-brand;
  }
  &-transparent{
    
  }

}

</style>
