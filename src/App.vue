<script setup lang="ts">
</script>

<template>
  <div class="banner">

  </div>

  <div class="app">
      <div class="sidebar">

    </div>

    <div class="photo">

    </div>
  </div>


</template>

<style scoped>



.banner {
  background-color: red;
  height: var(--unit);
  width: 100vw;
}

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
