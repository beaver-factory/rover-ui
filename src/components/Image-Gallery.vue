<template>
  <BaseUnit
    :height="6"
    :width="'calc(100vw - calc(2 * var(--unit)))'"
    :borderBottom="true"
    class="main_gallery"
  >
    <button
      class="nav_button"
      @click="
        () => {
          handleClick(-1)
        }
      "
      :disabled="isDisabledLeft"
    >
      <i class="arrow left" :class="{ disabled: isDisabledLeft }"></i>
    </button>
    <div class="gallery_item">
      <p>Camera: {{ cam_loaded }}</p>
      <img :src="img_loaded" :alt="`from a NASA Mars rover`" class="main_img" />
    </div>
    <button
      class="nav_button"
      @click.prevent="
        () => {
          handleClick(1)
        }
      "
      :disabled="isDisabledRight"
    >
      <i class="arrow right" :class="{ disabled: isDisabledRight }"></i>
    </button>
  </BaseUnit>
</template>

<script setup lang="ts">
import BaseUnit from './BaseUnit.vue'
import { useRoverStore } from '../stores/roverStore'
import { onMounted, computed, ComputedRef } from 'vue'

const roverStore = useRoverStore()

onMounted(async () => {
  await roverStore.setPhotos('curiosity', '2023-2-3')
})

const isDisabledLeft: ComputedRef<boolean> = computed((): boolean => {
  if (roverStore.photoIndex === 0) {
    return true
  }
  return false
})

const isDisabledRight: ComputedRef<boolean> = computed((): boolean => {
  if (roverStore.photoIndex === roverStore.photos.length - 1) {
    return true
  }
  return false
})

const img_loaded: ComputedRef<string> = computed((): string => {
  if (roverStore.photos[0]) {
    return roverStore.photos_loading
      ? 'src/assets/loading_img.jpeg'
      : roverStore.photos[roverStore.photoIndex].img_src
  }
  return 'src/assets/loading_img.jpeg'
})

const cam_loaded: ComputedRef<string> = computed((): string => {
  if (roverStore.photos[0]) {
    return roverStore.photos_loading
      ? ''
      : roverStore.photos[roverStore.photoIndex].camera.full_name
  }
  return ''
})

const handleClick = (index: number): void => {
  roverStore.photoIndex += index
}
</script>

<style>
.main_gallery {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav_button {
  width: var(--unit);
  height: calc(5 * var(--unit));
  background-color: inherit;
  border: 0;
}

.gallery_item {
  min-height: calc(4 * var(--unit));
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.main_img {
  max-height: calc(4 * var(--unit));
  min-height: calc(4 * var(--unit));
  max-width: calc(100vw - (4 * var(--unit)));
  min-width: calc(100vw - (4 * var(--unit)));
  object-fit: contain;
  padding: var(--padding);
}

.arrow {
  border: solid white;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 3px;
  width: 20px;
  height: 20px;
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.disabled {
  border: solid #c7c7c7;
  border-width: 0 4px 4px 0;
}
</style>
