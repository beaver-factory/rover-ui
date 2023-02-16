import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useRoverStore = defineStore('rover', () => {
    const photos = ref<string[]>([]);

    return {photos};
})