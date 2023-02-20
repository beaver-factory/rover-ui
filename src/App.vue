<script setup lang="ts">
import Banner from './components/Banner.vue'
import Sidebar from './components/Sidebar.vue'
import Viewer from './components/Viewer.vue'
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
  background-color: blue;
  height: calc(100vh - var(--unit));
  width: calc(2 * var(--unit));
}
</style>
