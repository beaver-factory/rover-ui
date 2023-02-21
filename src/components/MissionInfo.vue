<template>
  <BaseUnit :width="2" :border-right="true" :border-bottom="true">
    <div>
      <p :class="{ disabledElement: roverStore.manifestLoading }">
        <strong>{{ roverStore.manifest.name }}</strong>
        {{ hasBeenOrWas }} active for
        <strong>{{ roverStore.manifest.max_sol }}</strong> solar days on Mars.
        During this time, the rover {{ hasTakenOrTook }} a total of
        <strong>{{ roverStore.manifest.total_photos }}</strong> photos.
      </p>
    </div>
  </BaseUnit>
</template>

<script lang="ts" setup>
import { ComputedRef, computed } from 'vue'
import BaseUnit from './BaseUnit.vue'
import useRoverStore from '../stores/roverStore'
import useFormStore from '../stores/formStore'

const roverStore = useRoverStore()
const formStore = useFormStore()

const hasBeenOrWas: ComputedRef<string> = computed((): string =>
  formStore.selectedRover === 'curiosity' ? ' has been ' : ' was '
)

const hasTakenOrTook: ComputedRef<string> = computed((): string =>
  formStore.selectedRover === 'curiosity' ? ' has taken ' : ' took '
)
</script>

<style scoped>
p {
  color: white;
  font-size: 1.2vh;
}

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
