<template>
  <BaseUnit :height="1" :width="2" :border-bottom="true" :border-right="true">
    <div
      class="selectContainer"
      :class="{ disabledElement: roverStore.manifestLoading }"
    >
      <label id="roverSelectLabel" for="rover-select">Rover</label>
      <select
        id="roverSelect"
        v-model="formStore.selectedRover"
        @change="handleSelect"
      >
        <option value="curiosity">Curiosity</option>
        <option value="opportunity">Opportunity</option>
        <option value="spirit">Spirit</option>
      </select>
    </div>
  </BaseUnit>
</template>

<script lang="ts" setup>
import useFormStore from '../stores/formStore'
import useRoverStore from '../stores/roverStore'

import BaseUnit from './BaseUnit.vue'

const roverStore = useRoverStore()
const formStore = useFormStore()

formStore.selectedRover = 'curiosity'

const handleSelect = (): void => {
  roverStore.setManifest(formStore.selectedRover)
}
</script>

<style scoped>
select {
  width: 100%;
  padding: 0.7rem;
  font-size: 1rem;
  color: var(--primary-font-color);
  background-color: var(--background-color);
  border: var(--border);
}

.selectContainer {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#roverSelectLabel {
  position: absolute;
  font-size: 0.6rem;
  margin-top: -2.8rem;
  margin-left: 0.3rem;
  padding: 0 0.3rem;
  background-color: var(--background-color);
  color: var(--primary-font-color);
  z-index: 1;
}
</style>
