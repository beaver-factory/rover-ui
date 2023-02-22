<template>
  <div v-if="photos.length">
    <ImageGallery />
    <Thumbnails />
  </div>
  <BaseUnit v-else width="calc(100vw - calc(2 * var(--unit)))" :height="8">
    <div class="no-photos">
      <p>No photos were taken on this day, please try another combination</p>
    </div>
  </BaseUnit>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import Thumbnails from './Thumbnails.vue'
import ImageGallery from './Image-Gallery.vue'
import useRoverStore from '../stores/roverStore'
import BaseUnit from './BaseUnit.vue'

const roverStore = useRoverStore()
const { photos } = storeToRefs(roverStore)
</script>

<style scoped>
p {
  color: var(--primary-font-color);
}

.no-photos {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
