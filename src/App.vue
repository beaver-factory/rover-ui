<script setup lang="ts">
import Banner from './components/Banner.vue'
import Sidebar from './components/Sidebar.vue'
import Viewer from './components/Viewer.vue'
</script>

<template>
  <Banner />

  <div class="app">
    <div class="sidebar">
      <Sidebar></Sidebar>
    </div>

    <Viewer></Viewer>
  </div>
</template>

<style scoped>
.app {
  display: flex;
}

.sidebar {
  background-color: blue;
  height: calc(100vh - var(--unit));
  width: calc(2 * var(--unit));
}

.photo {
  background-color: green;
  height: calc(100vh - var(--unit));
  width: calc(100vw - calc(2 * var(--unit)));
}
</style>
