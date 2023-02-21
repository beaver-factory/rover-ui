<script setup lang="ts">
import Banner from './components/Banner.vue'
import Sidebar from './components/Sidebar.vue'
import Viewer from './components/Viewer.vue'
import useRoverStore from './stores/roverStore'

// Used to set initial photos array, need to decide on initial data fetching for default view
const roverStore = useRoverStore()
roverStore.setPhotos('curiosity', '2023-2-3')
</script>

<template>
  <Banner />

  <div class="app">
    <div class="sidebar">
      <Sidebar />
    </div>

    <Viewer />
  </div>
</template>

<style scoped>
.app {
  display: flex;
}

.sidebar {
  height: calc(100vh - var(--unit));
  width: calc(2 * var(--unit));
}
</style>
