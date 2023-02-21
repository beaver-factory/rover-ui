<template>
  <RoverSelector></RoverSelector>
  <MissionInfo></MissionInfo>
  <DateSelector></DateSelector>
  <MissionProgress></MissionProgress>
  <CamSelector></CamSelector>
  <RoverDiagram></RoverDiagram>
</template>

<script lang="ts" setup>
import CamSelector from './CamSelector.vue'
import DateSelector from './DateSelector.vue'
import RoverSelector from './RoverSelector.vue'
import MissionProgress from './MissionProgress.vue'
import MissionInfo from './MissionInfo.vue'
import RoverDiagram from './RoverDiagram.vue'
</script>

<style scoped></style>
