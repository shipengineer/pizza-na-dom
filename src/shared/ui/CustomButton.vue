<script setup lang="ts">
/**
 Creates button with easily customizable appearance.

 For setting appearance write a style inside the component and set your style name as styleClass prop.
 For different appearance in dark and light modes add two sub-stiles with names "light" and "dark" inside your style.
 Check simple example in 'default' style in component's styles.

 @property clickHandler - Function - executes on click on the button.
 @property styleClass - String - name of style which be applied to the button.
*/

const appStore = useAppStore();
const { themeColor } = storeToRefs(appStore);
/* themeColor is global attribute setting dark or light mode for whole application */

defineProps({
  clickHandler: {
    type: Function,
    required: true,
    default: () => {alert("Set a function on clickHandler")}
  },
  styleClass: {
    type: String,
    required: true,
    default: 'default'
  },
});
</script>

<template>
  <button @click="clickHandler" :class="styleClass + ' ' + styleClass + '__' + themeColor">
    <slot/>
  </button>
</template>

<style scoped lang="scss">
.default {
  height: 100px;
  width: 100px;

  &__light {
    color: #ffffff;
    background-color: rgb(255, 0, 0);
  }
  &__dark {
    color: #000000;
    background-color: #009b95;
  }
}
.selector {
  height: 35px;
  font-size: 13px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 20px;
  border: none;
  font-family: 'Yandex', Arial, sans-serif;
  font-weight: 700;
  cursor: pointer;

  &__light {
    color: #ffffff;
    background-color: $brand;
  }
  &__dark {
    color: #000000;
    background-color: $dark-brand;
  }
}
.cart {
  display: flex;
  justify-content: center;
  align-items: center;


  border-radius: 50px;
  width: 80px;
  height: 80px;
  cursor: pointer;
  border: none;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, .2);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &__light {
    color: #000000;
    background-color: rgba(255, 255, 255, .8);
  }

  &__dark {
    color: #8a8a8a;
    background-color: rgba(0, 0, 0, 0.8);
  }
}
.size-picker {
  border: 5px solid gray;
  color: black;
  padding: 2px;
  transition: .9s;

  &__selected {
    border: 5px solid #fcc900;
  }
}
</style>
