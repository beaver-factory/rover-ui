<template>
  <BaseUnit :height="1" :width="2" :border-bottom="true" :border-right="true">
    <div class="selectContainer">
      <label
        id="roverSelectLabel"
        :class="roverStore.manifestLoading ? 'disabledLabel' : 'enabledLabel'"
        for="rover-select"
        >Rover</label
      >
      <select
        id="roverSelect"
        v-model="formStore.selectedRover"
        @change="handleSelect"
        :class="{ disabledElement: roverStore.manifestLoading }"
        :disabled="roverStore.manifestLoading"
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
  background-color: #004f72;
  border: 1px solid white;
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
  background-color: #004f72;
  z-index: 1;
}

.enabledLabel {
  color: var(--primary-font-color);
}
</style>
