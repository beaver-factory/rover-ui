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
  /* width: min-content; */
  width: 100%;
  padding: 0.5rem;
  background-color: #004f72;
  color: white;
  border: 1px solid white;
  font-size: 1rem;
}

.overlapping-label {
  position: absolute;
  font-size: 0.7rem;
  margin-top: -0.45rem;
  margin-left: 0.3rem;
  background-color: #004f72;
  color: white;
  padding: 0 0.5rem;
}
</style>
