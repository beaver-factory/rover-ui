<template>
  <BaseUnit
    :height="1"
    :width="2"
    :padding-units="1.5"
    :border-bottom="true"
    :border-right="true"
  >
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
  </BaseUnit>
</template>

<script lang="ts" setup>
import { useFormStore } from '../stores/formStore'
import { useRoverStore } from '../stores/roverStore'

import BaseUnit from './BaseUnit.vue'

const roverStore = useRoverStore()
const formStore = useFormStore()

formStore.selectedRover = 'curiosity'

const handleSelect = (): void => {
  roverStore.setManifest(formStore.selectedRover)
}
</script>

<style scoped>
select {
  width: 100%;
  height: 100%;
  padding: 0.4rem;
  font-size: 1rem;
  color: white;
  background-color: #004f72;
  border: 1px solid white;
}

.overlapping-label {
  position: absolute;
  font-size: 0.6rem;
  margin-top: -0.4rem;
  margin-left: 0.3rem;
  padding: 0 0.3rem;
  background-color: #004f72;
  color: white;
}
</style>
