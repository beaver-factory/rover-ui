import { defineStore } from 'pinia'
import { ref } from 'vue'

const useFormStore = defineStore('form', () => {
  const selectedDate = ref<string>('2012-08-06') // curiosity landing date
  const selectedRover = ref<string>('Curiosity')
  const selectedCam = ref<string>('All')

  return { selectedDate, selectedRover, selectedCam }
})

export default useFormStore
