import {defineStore} from "pinia";

export const useAppStore = defineStore('appStore', () => {
    const themeColor = ref('light');
    function changeTheme() {
        themeColor.value == 'dark' ? themeColor.value = 'light' : themeColor.value = 'dark';
    }
    return { themeColor, changeTheme }
})
