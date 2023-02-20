<template>
  <BaseUnit :width="2" :border-right="true" :border-bottom="true">
    <div v-if="!roverStore.manifestLoading">
      <p>
        <strong>{{ roverStore.manifest.name }}</strong>
        <span v-if="isRoverActive"> has been </span
        ><span v-else> was </span>active for
        <strong>{{ roverStore.manifest.max_sol }}</strong> solar days on Mars.
        During this time, the rover <span v-if="isRoverActive"> has taken </span
        ><span v-else> took </span> a total of
        <strong>{{ roverStore.manifest.total_photos }}</strong> photos.
      </p>
    </div>
  </BaseUnit>
</template>

<script lang="ts" setup>
import { ComputedRef, computed } from 'vue'
import BaseUnit from './BaseUnit.vue'
import useRoverStore from '../stores/roverStore'
import useFormStore from '../stores/formStore'

const roverStore = useRoverStore()
const formStore = useFormStore()

const isRoverActive: ComputedRef<boolean> = computed(
  (): boolean => formStore.selectedRover === 'curiosity'
)
</script>

<style scoped>
p {
  color: white;
  font-size: 1.2vh;
}
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
