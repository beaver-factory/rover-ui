<template>
  <div>
    <select @change="handleSelect">
      <option>Curiosity</option>
      <option>Opportunity</option>
      <option>Spirit</option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import { useFormStore } from '../stores/formStore'
import { useRoverStore } from '../stores/roverStore'

const roverStore = useRoverStore()
const formStore = useFormStore()

const handleSelect = (e: Event): void => {
  const element = e.target as HTMLInputElement
  const rover = element.value.toLowerCase()

  formStore.selectedRover = rover
  roverStore.setManifest(rover)
}
</script>

<style scoped></style>
