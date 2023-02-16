<template>
  <RoverSelector></RoverSelector>
  <DateSelector></DateSelector>
  <MissionProgress></MissionProgress>
  <CamSelector></CamSelector>
  <!-- rover diagram will live here -->
</template>

<script lang="ts" setup>
import CamSelector from './CamSelector.vue';
import DateSelector from './DateSelector.vue';
import RoverSelector from './RoverSelector.vue';
import MissionProgress from './MissionProgress.vue';
</script>

<style scoped></style>
