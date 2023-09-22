<template>
  <BaseUnit
    :height="7"
    :width="'calc(100vw - calc(2 * var(--unit)))'"
    class="main_gallery"
    :border-bottom="true"
  >
    <button
      class="nav_button"
      @click="
        () => {
          handleClick(-1)
        }
      "
      :disabled="loaded"
      aria-labelledby="Back an Image"
    >
      <i class="arrow left" :class="{ disabled: loaded }"></i>
    </button>
    <div class="gallery_item">
      <p class="img_desc">Camera: {{ camLoaded }}</p>
      <img :src="imgLoaded" :alt="`from a NASA Mars rover`" class="main_img" />
      <p v-if="loaded" class="img_desc">Current photo:</p>
      <p v-else class="img_desc">
        Current photo: {{ roverStore.photoIndex + 1 }} /
        {{ roverStore.photos.length }}
      </p>
    </div>
    <button
      class="nav_button"
      @click.prevent="
        () => {
          handleClick(1)
        }
      "
      :disabled="loaded"
      aria-labelledby="Forward an Image"
    >
      <i class="arrow right" :class="{ disabled: loaded }"></i>
    </button>
  </BaseUnit>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue'
import BaseUnit from './BaseUnit.vue'
import useRoverStore from '../stores/roverStore'

const roverStore = useRoverStore()

const loaded: ComputedRef<boolean> = computed(
  (): boolean => !roverStore.photos[0]
)

const imgLoaded: ComputedRef<string> = computed((): string => {
  if (roverStore.photos[0]) {
    return roverStore.photosLoading
      ? '/loading_img.jpeg'
      : roverStore.photos[roverStore.photoIndex].img_src
  }
  return '/loading_img.jpeg'
})

const camLoaded: ComputedRef<string> = computed((): string => {
  if (roverStore.photos[0]) {
    return roverStore.photosLoading
      ? ''
      : roverStore.photos[roverStore.photoIndex].camera.full_name
  }
  return ''
})

const handleClick = (index: number): void => {
  roverStore.photoIndex =
    (roverStore.photoIndex + index + roverStore.photos.length) %
    roverStore.photos.length
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
  border: none;
}

.gallery_item {
  min-height: calc(6 * var(--unit));
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--primary-font-color);
}

.img_desc {
  height: var(--unit);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.main_img {
  max-height: calc(4 * var(--unit));
  min-height: calc(4 * var(--unit));
  max-width: calc(100vw - (4 * var(--unit)));
  min-width: calc(100vw - (4 * var(--unit)));
  object-fit: contain;
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
