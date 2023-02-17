<template>
  <BaseUnit :width="'100vw'" :border-bottom="true">
    <div class="logo-container">
      <img class="banner-logo" src="../assets/r2-logo.png" />
    </div>
  </BaseUnit>
</template>

<script lang="ts" setup>
import BaseUnit from './BaseUnit.vue';

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

</style>
