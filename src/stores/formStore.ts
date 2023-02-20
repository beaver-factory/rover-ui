import { defineStore } from 'pinia'
import { ref } from 'vue'

const useFormStore = defineStore('form', () => {
  const selectedDate = ref<string>('2023-01-01')
  const selectedRover = ref<string>('curiosity')
  const selectedCam = ref<string>('All')

  return { selectedDate, selectedRover, selectedCam }
})

export default useFormStore
