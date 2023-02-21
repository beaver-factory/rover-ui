<template>
  <SelectComponent
    :options="rovers"
    id="rover-select"
    label="Rover"
    @selected="(selected) => handleSelect(selected)"
  ></SelectComponent>
</template>

<script lang="ts" setup>
import useFormStore from '../stores/formStore'
import useRoverStore from '../stores/roverStore'

import SelectComponent from './SelectComponent.vue'

const roverStore = useRoverStore()
const formStore = useFormStore()

const rovers = ['Curiosity', 'Opportunity', 'Spirit']

// setting default rover and initial manifest API call
roverStore.setManifest(formStore.selectedRover)

const handleSelect = (selected: string): void => {
  formStore.selectedRover = selected
  roverStore.setManifest(formStore.selectedRover)
}
</script>

<style scoped></style>
