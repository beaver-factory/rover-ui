<template>
  <BaseUnit :height="1" :width="2" :border-bottom="true" :border-right="true">
    <div class="selectContainer">
      <label class="overlapping-label" for="rover-select">Rover</label>
      <select
        id="roverSelect"
        v-model="formStore.selectedRover"
        @change="handleSelect"
      >
        <option value="curiosity">Curiosity</option>
        <option value="opportunity">Opportunity</option>
        <option value="spirit">Spirit</option>
      </select>
    </div>
  </BaseUnit>
</template>

<script lang="ts" setup>
import useFormStore from '../stores/formStore'
import useRoverStore from '../stores/roverStore'

import BaseUnit from './BaseUnit.vue'

const roverStore = useRoverStore()
const formStore = useFormStore()

// setting default rover and initial manifest API call
formStore.selectedRover = 'curiosity'
roverStore.setManifest('curiosity')

const handleSelect = (): void => {
  roverStore.setManifest(formStore.selectedRover)
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
