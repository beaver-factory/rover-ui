import { defineStore } from 'pinia'
import { ref } from 'vue'

const useFormStore = defineStore('form', () => {
  const selectedDate = ref<string>('')
  const selectedRover = ref<string>('')
  const selectedCam = ref<string>('')

  return { selectedDate, selectedRover, selectedCam }
})

export default useFormStore