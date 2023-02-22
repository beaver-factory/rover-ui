<template>
  <BaseUnit :height="2" :width="2" :border-bottom="true" :border-right="true">
    <VueDatePicker
      id="dp"
      :key="calendarKey"
      inline
      :class="{ disabledElement: roverStore.manifestLoading }"
      :enable-time-picker="false"
      :min-date="minDate"
      :max-date="maxDate"
      :year-range="[minDate.getFullYear(), maxDate.getFullYear()]"
      :start-date="minDate"
      prevent-min-max-navigation
      auto-apply
      six-weeks
      v-model="chosenDate"
      @internal-model-change="changeDate"
      calendar-cell-class-name="dp-custom-cell"
      :day-class="highlightDate"
      menu-class-name="dp-custom-menu"
    >
    </VueDatePicker>
  </BaseUnit>
</template>

<script lang="ts" setup>
import VueDatePicker from '@vuepic/vue-datepicker'
import { watch, ref, computed } from 'vue'
import BaseUnit from './BaseUnit.vue'
import '@vuepic/vue-datepicker/dist/main.css'
import useRoverStore from '../stores/roverStore'
import useFormStore from '../stores/formStore'

const roverStore = useRoverStore()
const formStore = useFormStore()

const calendarKey = ref<number>(0)
const minDate = computed<Date>(() => new Date(roverStore.manifest.landing_date))
const maxDate = computed<Date>(() => new Date(roverStore.manifest.max_date))

// default date setting, for initial API call
const chosenDate = ref<Date>(new Date(formStore.selectedDate))

watch(
  () => roverStore.manifest.name,
  (newRover, oldRover) => {
    if (oldRover !== newRover) {
      chosenDate.value = new Date(roverStore.manifest.landing_date)
      if (newRover === 'Spirit' || newRover === 'Opportunity') {
        // adds one to landing date as no photos taken on landing date for these rovers
        chosenDate.value.setDate(chosenDate.value.getDate() + 1)
      }
      //  force rerender
      calendarKey.value += 1
    }
  }
)

const changeDate = (): void => {
  // eslint-disable-next-line
  formStore.selectedDate = chosenDate.value.toISOString().split('T')[0]
  roverStore.setPhotos(formStore.selectedRover, formStore.selectedDate)
}

const highlightDate = (newDate: Date): string => {
  let className = ''
  if (newDate.toISOString().split('T')[0] === formStore.selectedDate) {
    className = 'selected-date'
  }
  return className
}
</script>

<style>
/* MAIN COMPONENT SIZING */

.dp-custom-menu {
  border: none;
  background-color: var(--background-color);
  min-width: 0;
  min-height: 0;
}
.dp__instance_calendar:focus-visible,
.dp__main:focus-visible,
.dp__theme_light:focus-visible,
.dp__flex_display:focus-visible,
.dp__main:focus {
  outline: none;
  border: none;
}

.dp__instance_calendar > div > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(2 * var(--unit) - 2 * var(--padding));
}
.dp__calendar_row {
  margin: 0;
}

.dp__calendar_wrap > .dp__calendar {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: calc(calc(2 * var(--unit) - 2 * var(--padding)) * 0.7);
}

.dp__calendar_header {
  padding-top: 0.5vh;
  padding-bottom: 0.2vh;
}
.dp__cell_inner,
.dp__calendar_header_item {
  height: auto;
  padding: 0;
  width: calc(calc(2 * var(--unit) - 2 * var(--padding)) / 7);
  font-size: 1.2vh;
  color: var(--primary-font-color);
}
/* MONTH YEAR NAV BAR STYLING */

.dp__inner_nav {
  height: auto;
}
.dp__inner_nav:hover {
  background-color: inherit;
}
.dp__inner_nav > .dp__icon {
  stroke: var(--primary-font-color);
  fill: var(--primary-font-color);
}

.dp__inner_nav > .dp__icon:hover {
  stroke: var(--selected-color);
  fill: var(--selected-color);
}

.dp__inner_nav_disabled {
  background-color: inherit;
  opacity: var(--disabled-opacity);
}
.dp__inner_nav_disabled > .dp__icon:hover {
  stroke: var(--primary-font-color);
  fill: var(--primary-font-color);
}

.dp__month_year_select {
  color: var(--primary-font-color);
  font-size: 1.5vh;
  height: 100%;
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: 0;
}

.dp__month_year_row {
  height: auto !important;
}

/* CELLS (MAIN CALENDAR AND OVERLAY) */

.dp__overlay_cell_pad,
.dp-custom-cell {
  border-radius: 0;
}

.dp__active_date,
.dp__overlay_cell_active {
  background: var(--selected-color);
}

.dp__overlay_cell:hover,
.dp__date_hover:hover {
  color: var(--background-color);
}

.dp__cell_disabled,
.dp__overlay_cell_disabled {
  background-color: transparent;
  opacity: var(--disabled-opacity);
}

.dp__overlay_cell_disabled:hover {
  background-color: transparent;
  color: var(--primary-font-color);
}

.dp__today {
  border: var(--border);
}

.dp__cell_offset {
  color: var(--primary-font-color);
  opacity: var(--disabled-opacity);
}

/* OVERLAY (FOR MONTH/YEAR SELECTION) */
.dp__overlay,
.dp__overlay_container,
.dp__container_flex,
.dp__button {
  background-color: var(--background-color);
}

.dp__overlay_container {
  height: calc(2 * var(--unit) - 2 * var(--padding) - 35px) !important;
  overflow-y: overlay;
  border: var(--border);
}
.dp__overlay {
  border: var(--border);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  height: calc(2 * var(--unit) - 2 * var(--padding)) !important;
  color: var(--primary-font-color);
}

.dp__icon {
  stroke: var(--background-color);
  fill: var(--background-color);
}
.dp__icon:hover {
  stroke: var(--selected-color);
  fill: var(--selected-color);
}

.dp__button,
.dp__button:hover {
  background-color: var(--primary-font-color);
}
.dp__overlay_container::-webkit-scrollbar {
  width: 0.7vh;
}

.dp__overlay_container::-webkit-scrollbar-track {
  background-color: inherit;
}

.dp__overlay_container::-webkit-scrollbar-thumb {
  background-color: var(--selected-color);
  border: 0.5px solid #00000075;
}
</style>
