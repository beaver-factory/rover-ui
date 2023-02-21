<template>
  <BaseUnit
    class="thumbnails-container"
    :height="1"
    :padding-units="0"
    width="calc(100vw - calc(2 * var(--unit)))"
  >
    <BaseUnit
      v-for="(photo, i) in roverStore.photos"
      class="thumbnail"
      :key="i"
      :class="{ selected: i == photoIndex }"
      :background-color="''"
      :border-top="true"
      :border-right="true"
      :padding-units="0.5"
      @click="roverStore.setIndex(i)"
    >
      <img
        class="thumbnail-img"
        :src="photosLoading ? 'src/assets/loading_img.jpeg' : photo.img_src"
        :alt="`a photo taken on ${photo.earth_date} by the ${photo.camera} camera on the ${photo.rover.name} rover`"
      />
    </BaseUnit>
  </BaseUnit>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import useRoverStore from '../stores/roverStore'
import BaseUnit from './BaseUnit.vue'

const roverStore = useRoverStore()
const { photoIndex, photosLoading } = storeToRefs(roverStore)
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

.thumbnail:hover {
  background-color: #ffffff;
  transition: 0.3s;
}
.selected {
  background-color: var(--selected-color);
}

.selected:hover {
  background-color: var(--selected-color);
  transition: 0.3s;
}
.thumbnail-img {
  width: 100%;
}
</style>
