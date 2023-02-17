<template>
  <BaseUnit :height="2" :width="2" :border-bottom="true" :border-right="true">
    <div class="container">
      <VueDatePicker
        id="dp"
        :key="componentKey"
        inline
        :disabled="roverStore.manifest_loading"
        :enable-time-picker="false"
        :min-date="minDate"
        :max-date="maxDate"
        :year-range="[minDate.getFullYear(), maxDate.getFullYear()]"
        :start-date="minDate"
        prevent-min-max-navigation
        auto-apply
        six-weeks
        @internal-model-change="changeDate"
        calendar-cell-class-name="dp-custom-cell"
        :day-class="selectedDate"
        menu-class-name="dp-custom-menu"
      >
      </VueDatePicker>
    </div>
  </BaseUnit>
</template>

<script lang="ts" setup>
import BaseUnit from './BaseUnit.vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { useRoverStore } from '../stores/roverStore'
import { useFormStore } from '../stores/formStore'
import { watchEffect, ref } from 'vue'

const roverStore = useRoverStore()
const formStore = useFormStore()

const componentKey = ref<number>(0)
const minDate = ref<Date>(new Date())
const maxDate = ref<Date>(new Date())

const forceRerender = (): void => {
  componentKey.value += 1
}

watchEffect(() => {
  minDate.value = new Date(roverStore.manifest.landing_date)
  maxDate.value = new Date(roverStore.manifest.max_date)
  forceRerender()
})

const changeDate = (newDate: Date): void => {
  if (newDate) formStore.selectedDate = newDate.toISOString().split('T')[0]
}

const selectedDate = (calendarDates: Date): string => {
  if (calendarDates.toISOString().split('T')[0] === formStore.selectedDate) {
    return 'selected-date'
  } else {
    return ''
  }
}
</script>

<style>
.container {
  overflow: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dp-custom-menu {
  font-size: 1rem;
  border: none;
  background-color: #004f72;
  min-width: 0;
  min-height: 0;
  max-height: 100%;
}

.dp__active_date {
  background: #8c0e56;
}

.dp__today {
  border: 1px solid #8c0e56;
}

.dp-custom-cell {
  height: 0.8rem;
  width: 1.5rem;
  color: white;
}

.dp__cell_disabled {
  color: #036994;
}

.dp__calendar_header_item {
  height: 1rem;
  width: 1.5rem;
  padding-bottom: 1rem;
}
</style>
