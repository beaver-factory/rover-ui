<template>
  <BaseUnit
    :height="2"
    :width="2"
    :borderRight="true"
    :borderBottom="true"
    class="rover_diagram_container"
  >
    <img
      :src="selectedRoverDiagram"
      :class="[
        'rover_diagram',
        { disabledElement: roverStore.manifestLoading },
      ]"
    />
  </BaseUnit>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue'
import BaseUnit from './BaseUnit.vue'
import useFormStore from '../stores/formStore'
import useRoverStore from '../stores/roverStore'

const formStore = useFormStore()
const roverStore = useRoverStore()

const selectedRoverDiagram: ComputedRef<string> = computed((): string =>
  formStore.selectedRover === 'Curiosity'
    ? '/curiosity.png'
    : '/spirit-opportunity.png'
)
</script>

<style>
.rover_diagram_container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.rover_diagram {
  max-height: calc(1.8 * var(--unit));
  max-width: calc(1.8 * var(--unit));
}
</style>
