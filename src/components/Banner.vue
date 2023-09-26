<template>
  <BaseUnit :width="'100vw'" :border-bottom="true">
    <div class="logo-container">
      <!-- <img class="banner-logo" src="../assets/r2-logo.png" /> -->
      <h1 class="banner-title">ROVER</h1>
    </div>
  </BaseUnit>
</template>

<script lang="ts" setup>
import BaseUnit from './BaseUnit.vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jura:wght@500&display=swap');
.logo-container {
  height: 100%;
  display: flex;
  align-items: center;
}

.banner-logo {
  width: calc((2 * var(--unit)) - (2 * var(--padding)));
}

.banner-title {
  width: calc((2 * var(--unit)) - (2 * var(--padding)));
  color: white;
  letter-spacing: calc(((2 * var(--unit)) - (2 * var(--padding))) / 11);
  font-size: calc(((2 * var(--unit)) - (2 * var(--padding))) / 5);
  background-image: linear-gradient(white, white);
  background-size: 100% 3px;
  background-repeat: no-repeat;
  background-position: 100% 0%;
  font-family: 'Jura', Courier, monospace;
  text-align: center;
}
</style>
