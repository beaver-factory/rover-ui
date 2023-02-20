<template>
  <BaseUnit :height="2" :width="2" :border-bottom="true" :border-right="true">
    <div class="container">
      <VueDatePicker
        id="dp"
        :key="calendarKey"
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
import { watch, ref, computed } from 'vue'

const roverStore = useRoverStore()
const formStore = useFormStore()

const calendarKey = ref<number>(0)
const minDate = computed<Date>(() => new Date(roverStore.manifest.landing_date))
const maxDate = computed<Date>(() => new Date(roverStore.manifest.max_date))

watch(roverStore, () => {
  calendarKey.value += 1
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

.dp__theme_light:focus {
  border-radius: 0;
}

/* ------ OVERLAY ------ */

.dp__overlay,
.dp__overlay_container,
.dp__container_flex,
.dp__button {
  background-color: #004f72;
}

.dp__overlay_container {
  border: 1px solid white;
}

.dp__overlay_cell_disabled,
.dp__overlay_cell_disabled:hover {
  display: none;
}

/* ------ PRIMARY SELECTOR ------- */

.dp-custom-menu {
  font-size: 1rem;
  border: none;
  background-color: #004f72;
  min-width: 0;
  min-height: 0;
  max-height: 100%;
}

.dp__calendar_row {
  margin: 0;
}

/* ------ CELLS ------ */

.dp__active_date,
.dp__overlay_cell_active {
  background: #8c0e56;
  border: 1px solid white;
  border-radius: 0;
  padding: 3px;
}

.dp__active_date,
.dp__overlay_cell_active:hover {
  border-radius: 0;
}

.dp__overlay_cell {
  color: white;
}

.dp-custom-cell {
  height: 1.3rem;
  width: 1.3rem;
  padding: 3px;
  color: white;
  margin: 0 2px;
}

.dp-custom-cell:hover {
  border-radius: 0;
}

.dp__cell_offset {
  color: rgb(192, 186, 186);
}

.dp__cell_disabled {
  color: #036994;
}

/* ------ MONTH/YEAR ------ */
.dp__inner_nav {
  height: 1rem;
  width: 1.5rem;
  border-radius: 10%;
}

.dp__inner_nav_disabled,
.dp__inner_nav_disabled:hover {
  background-color: #004f72;
}

.dp__month_year_select {
  height: 1rem;
  color: white;
}

.dp__month_year_select:hover {
  border-radius: 0;
}

.dp__month_year_row {
  height: 1.5rem;
}

.dp__calendar_header {
  height: 1rem;
  padding-top: 0;
}

.dp__calendar_header_item {
  height: 1rem;
  width: 1.5rem;
  padding: 0;
}
</style>
