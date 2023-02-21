<template>
  <BaseUnit :height="1" :width="2" :border-top="true" :border-right="true">
    <div
      class="progressContainer"
      :class="{ disabledElement: roverStore.manifestLoading }"
    >
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
import { ref, watch } from 'vue'
import useFormStore from '../stores/formStore'
import useRoverStore from '../stores/roverStore'
import BaseUnit from './BaseUnit.vue'

const missionProgress = ref<number>(0)

const roverStore = useRoverStore()
const formStore = useFormStore()

const calcProgress = (
  max: string,
  landing: string,
  selected: string
): number => {
  const landingDate = new Date(landing).getTime()
  const lastDate = new Date(max).getTime()
  const selectedDate = new Date(selected).getTime()

  const completePercent = Math.floor(
    ((selectedDate - landingDate) / (lastDate - landingDate)) * 100
  )

  return completePercent <= 100 ? completePercent : 100
}

watch([() => roverStore.manifest.name, () => formStore.selectedDate], () => {
  const { max_date: maxDate, landing_date: landingDate } = roverStore.manifest
  missionProgress.value = calcProgress(
    maxDate,
    landingDate,
    formStore.selectedDate
  )
})
</script>

<style scoped>
.progressContainer {
  max-width: calc(var(--unit) * 2 - 20px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

label {
  color: var(--primary-font-color);
  font-size: 0.75rem;
}

/* Firefox */
progress::-moz-progress-bar {
  width: 100%;
  border-radius: 0;
  border: var(--border);
  background: white;
  transition: width 0.25s ease-in-out;
}

::-moz-progress-bar {
  width: 100%;
  border-radius: 0;
  border: var(--border);
  background-color: transparent;
  transition: width 0.25s ease-in-out;
}

/* Chrome/Safari */
::-webkit-progress-bar {
  width: 100%;
  border-radius: 0;
  border: var(--border);
  background-color: transparent;
  transition: width 0.25s ease-in-out;
}

progress::-webkit-progress-value {
  background: white;
  transition: width 0.25s ease-in-out;
}

/* IE10 */
progress {
  color: white;
  width: 100%;
  background-color: transparent;
  transition: width 0.25s ease-in-out;
}
</style>
