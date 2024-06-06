<template>
    <div>
        <RadioButtons :buttons="sizes" v-model="result" theme="" class="radio"/>
        <p style="color: red;">{{ result }}</p>
    </div>
</template>

<script setup lang="ts">
const result=ref(10)
import RadioButtons from '../widgets/radio-buttons/RadioButtons.vue';
const sizes=[
    {name:'Оплата картой',
        value:'CARD'
    },
    {name:'Оплата наличкой',
        value:"CASH"
    },
    {name:'35',
        value:35
    },
    {name:'40',
        value:40
    }
]


  
</script>

<style scoped>
.radio{
    display: flex;
    flex-direction: column;
}
</style>
