<template>
  <SelectComponent
    :options="availableCams"
    id="camera-select"
    label="Camera"
    @selected="(selected) => handleSelect(selected)"
  ></SelectComponent>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { watch, ref } from 'vue'
import useFormStore from '../stores/formStore'
import useRoverStore from '../stores/roverStore'

import SelectComponent from './SelectComponent.vue'

const roverStore = useRoverStore()
const formStore = useFormStore()

const { manifest } = storeToRefs(roverStore)
const { selectedRover, selectedDate, selectedCam } = storeToRefs(formStore)
const availableCams = ref<string[]>([])

const findCams = (): void => {
  const selectedDayManifest = manifest.value.photos.filter(
    (day) => day.earth_date === selectedDate.value
  )
  if (selectedDayManifest.length) {
    availableCams.value = ['All', ...selectedDayManifest[0].cameras]
  } else {
    availableCams.value = ['None available']
  }
}

findCams()

watch([selectedDate, manifest], () => {
  findCams()
  // eslint-disable-next-line
  selectedCam.value = availableCams.value[0]
})

const handleSelect = (selected: string): void => {
  selectedCam.value = selected
  roverStore.setIndex(0)
  if (selectedCam.value === 'All') {
    roverStore.setPhotos(selectedRover.value, selectedDate.value)
  } else {
    roverStore.setPhotos(
      selectedRover.value,
      selectedDate.value,
      selectedCam.value
    )
  }
}
</script>

<style scoped></style>
