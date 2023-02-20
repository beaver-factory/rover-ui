<template>
  <BaseUnit :height="1" :width="2" :border-bottom="true" :border-right="true">
    <div class="progressContainer">
      <label for="missionProgressBar">Mission Progress</label>
      <progress
        id="missionProgressBar"
        :value="missionProgress"
        max="100"
      ></progress>
    </div>
  </BaseUnit>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import BaseUnit from './BaseUnit.vue'

const missionProgress = ref<number>(5)
</script>

<style scoped>
.progressContainer {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

::-webkit-progress-bar {
  width: 100%;
  height: 20px;
  border-radius: 0;
  border: 1px solid white;
  background-color: #004f72;
}

/* Firefox */
progress::-moz-progress-bar {
  width: 100%;
  height: 20px;
  border-radius: 0;
  border: 1px solid white;
  background: white;
}
::-moz-progress-bar {
  width: 100%;
  height: 20px;
  border-radius: 0;
  border: 1px solid white;
  background-color: #004f72;
}

/* Chrome/Safari */
progress::-webkit-progress-value {
  background: white;
}

/* IE10 */
progress {
  background-color: #004f72;
}

progress {
  color: white;
}
</style>
