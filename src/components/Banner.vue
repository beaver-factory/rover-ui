<template>
  <BaseUnit :width="'100vw'" :border-bottom="true">
    <div class="logo-container">
      <!-- <img class="banner-logo" src="../assets/r2-logo.png" /> -->
      <h1 class="banner-title">Rover</h1>
    </div>
  </BaseUnit>
</template>

<script lang="ts" setup>
import BaseUnit from './BaseUnit.vue'
</script>

<style scoped>
.logo-container {
  height: 100%;
  display: flex;
  align-items: center;
}

.banner-logo {
  width: calc((2 * var(--unit)) - (2 * var(--padding)));
}

.banner-title {
  color: white;
  letter-spacing: 0.5rem;
  font-size: 3rem;
  background-image: linear-gradient(white, white);
  background-size: 100% 3px;
  background-repeat: no-repeat;
  background-position: 100% 0%;
}
</style>
