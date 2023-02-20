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
      :background-color="backgroundColour"
      :height="1"
      :border-top="true"
      :border-right="true"
      :padding-units="0.5"
      @click="
        () => {
          roverStore.setIndex(i)
          highlightThumbnail(i)
        }
      "
    >
      <img class="thumbnail-img" :src="photo.img_src" />
    </BaseUnit>
  </BaseUnit>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useRoverStore } from '../stores/roverStore'
import BaseUnit from './BaseUnit.vue'

// const baseUnitWidth = window.innerHeight / 9
// const maxThumbnails = Math.floor(
//   ((window.innerWidth - baseUnitWidth * 2) / baseUnitWidth) * 2
// )

const roverStore = useRoverStore()
roverStore.setPhotos('curiosity', '2023-2-3')
const { photoIndex } = storeToRefs(roverStore)

const backgroundColour = ref('')

const highlightThumbnail = (index: number) => {
  if (index === photoIndex.value) {
    console.log('here', index)
    backgroundColour.value = 'hotpink'
  }
}
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
  background-color: hotpink;
}
.thumbnail:hover {
  background-color: grey;
}

.selected:hover {
  background-color: hotpink;
}
.thumbnail-img {
  width: 100%;
}
</style>
