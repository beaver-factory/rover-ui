<template>
  <BaseUnit :height="1" :width="2" :border-bottom="true" :border-right="true">
    <div class="selectContainer">
      <label class="overlapping-label" for="camera-select">Camera</label>
      <select id="camera-select" v-model="selectedCam" @change="handleSelect">
        <option v-for="cam in availableCams" :value="cam" :key="cam">
          {{ cam }}
        </option>
      </select>
    </div>
  </BaseUnit>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { watch, ref } from 'vue'
import useFormStore from '../stores/formStore'
import useRoverStore from '../stores/roverStore'

import BaseUnit from './BaseUnit.vue'

const roverStore = useRoverStore()
const formStore = useFormStore()

const { manifest } = storeToRefs(roverStore)
const { selectedRover, selectedDate, selectedCam } = storeToRefs(formStore)
const availableCams = ref<string[]>(['All'])

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

const handleSelect = (): void => {
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

<style scoped>
select {
  width: 100%;
  padding: 0.7rem;
  font-size: 1rem;
  color: white;
  background-color: #004f72;
  border: 1px solid white;
}

.selectContainer {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.overlapping-label {
  position: absolute;
  font-size: 0.6rem;
  margin-top: -2.8rem;
  margin-left: 0.3rem;
  padding: 0 0.3rem;
  background-color: #004f72;
  color: white;
}
</style>
