<template>
  <BaseUnit :width="2" :border-right="true" :border-bottom="true">
    <p v-if="roverStore.manifest.name === 'Curiosity'">
      {{ roverStore.manifest.name }} has been active for
      {{ roverStore.manifest.max_sol }} solar days on Mars. During this time,
      the rover has taken a total of
      {{ roverStore.manifest.total_photos }} photos.
    </p>
    <p v-else>
      {{ roverStore.manifest.name }} was active for a total of
      {{ roverStore.manifest.max_sol }} solar days on Mars. During this time,
      the rover took a total of {{ roverStore.manifest.total_photos }} photos.
    </p>
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
  font-size: 0.6rem;
}
</style>
