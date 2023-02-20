<template>
  <BaseUnit :width="2" :border-right="true" :border-bottom="true">
    <div>
      <p v-if="roverStore.manifest.name === 'Curiosity'">
        <strong>{{ roverStore.manifest.name }}</strong> has been active for
        <strong>{{ roverStore.manifest.max_sol }}</strong> solar days on Mars.
        During this time, the rover has taken a total of
        <strong>{{ roverStore.manifest.total_photos }}</strong> photos.
      </p>
      <p v-else>
        <strong>{{ roverStore.manifest.name }}</strong> was active for a total
        of <strong>{{ roverStore.manifest.max_sol }}</strong> solar days on
        Mars. During this time, the rover took a total of
        <strong>{{ roverStore.manifest.total_photos }}</strong> photos.
      </p>
    </div>
  </BaseUnit>
</template>

<script lang="ts" setup>
import BaseUnit from './BaseUnit.vue'
import { useRoverStore } from '../stores/roverStore'

const roverStore = useRoverStore()
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
