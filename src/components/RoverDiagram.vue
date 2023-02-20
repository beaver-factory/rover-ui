<template>
  <BaseUnit
    :height="2"
    :width="2"
    :borderRight="true"
    class="rover_diagram_container"
  >
    <img class="rover_diagram" :src="selectedRoverDiagram" />
  </BaseUnit>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue'
import BaseUnit from './BaseUnit.vue'
import useFormStore from '../stores/formStore'

const formStore = useFormStore()

const selectedRoverDiagram: ComputedRef<string> = computed((): string =>
  formStore.selectedRover === 'curiosity'
    ? 'src/assets/curiosity.png'
    : 'src/assets/spirit-opportunity.png'
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
