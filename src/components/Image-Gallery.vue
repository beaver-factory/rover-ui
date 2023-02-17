<template>
    <BaseUnit :height="6" :width="'calc(100vw - calc(2 * var(--unit)))'" :borderBottom="true">
        <button @click="() => {handleClick(-1)}" :disabled="roverStore.photoIndex === 0"><i class="arrow left"></i></button>
        <img :src="img_loaded" :alt="`from a NASA Mars rover`">
        <button @click.prevent="() => {handleClick(1)}" :disabled="roverStore.photoIndex === roverStore.photos.length"><i class="arrow right"></i></button>
    </BaseUnit>
</template>

<script setup lang="ts">
import BaseUnit from './BaseUnit.vue';
import { useRoverStore } from '../stores/roverStore';
import { onMounted, computed } from 'vue';


const roverStore = useRoverStore();

onMounted(async () => {
  await roverStore.setPhotos('curiosity', '2023-2-3');
})

const img_loaded = computed(() => {
    if (roverStore.photos[0]) {
        return roverStore.photos_loading ? "src/assets/loading_img.jpeg" : roverStore.photos[roverStore.photoIndex].img_src;
    }
    return "src/assets/loading_img.jpeg" 
})

const handleClick = (index: number):void => {
    roverStore.photoIndex += index;
}

</script>

<style>
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

</style>