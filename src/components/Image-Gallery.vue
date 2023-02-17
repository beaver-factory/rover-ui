<template>
    <BaseUnit :height="6" :width="'calc(100vw - calc(2 * var(--unit)))'" :borderBottom="true">
        <img :src="img_loaded" :alt="`from a NASA Mars rover`">
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
        return roverStore.photos_loading ? "src/assets/loading_img.jpeg" : roverStore.photos[0].img_src;
    }
    return "src/assets/loading_img.jpeg" 
})

</script>

<script>
</script>