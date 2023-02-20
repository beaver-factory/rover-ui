<template>
  <BaseUnit
    class="thumbnails-container"
    :height="2"
    :padding-units="0"
    width="calc(100vw - calc(2 * var(--unit)))"
  >
    <BaseUnit
      v-for="(photo, i) in roverStore.photos"
      class="thumbnail"
      :key="i"
      :class="{ selected: i == photoIndex }"
      :background-color="''"
      :height="1"
      :border-top="true"
      :border-right="true"
      :padding-units="0.5"
      @click="roverStore.setIndex(i)"
    >
      <img
        class="thumbnail-img"
        :src="photos_loading ? 'src/assets/loading_img.jpeg' : photo.img_src"
      />
    </BaseUnit>
  </BaseUnit>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useRoverStore } from '../stores/roverStore'
import BaseUnit from './BaseUnit.vue'

const roverStore = useRoverStore()
roverStore.setPhotos('curiosity', '2023-2-3') // TODO: decide on initial load
const { photoIndex, photos_loading } = storeToRefs(roverStore)
</script>

<style scoped>
.thumbnails-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  overflow-x: scroll;
}

.thumbnail {
  display: flex;
  align-items: center;
}

.selected {
  background-color: #646464;
}
.thumbnail:hover {
  background-color: #c7c7c7;
  transition: 0.3s;
}

.selected:hover {
  background-color: #646464;
  transition: 0.3s;
}
.thumbnail-img {
  width: 100%;
}
</style>
