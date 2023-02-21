<template>
  <BaseUnit :height="2" :width="2" :border-bottom="true" :border-right="true">
    <VueDatePicker
      id="dp"
      :key="calendarKey"
      inline
      :disabled="roverStore.manifestLoading"
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
/* .dp__instance_calendar:focus-visible {
  outline: none;
} */

/* ------ OVERLAY ------ */

/* ------ PRIMARY SELECTOR ------- */

.dp-custom-menu {
  font-size: 1rem;
  border: none;
  background-color: #004f72;
  min-width: 0;
  min-height: 0;
  max-height: 100%;
}

.dp__inner_nav > .dp__icon {
  stroke: white;
  fill: white;
  height: 2vh;
  /* height: calc(calc(2 * var(--unit) - 2 * var(--padding)) * 0.3); */
}
.dp__instance_calendar > div > div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: calc(2 * var(--unit) - 2 * var(--padding));
}

.dp__inner_nav > .dp__icon:hover {
  stroke: var(--selected-color);
  fill: var(--selected-color);
}

.dp__inner_nav {
  height: auto;
}

.dp__inner_nav_disabled > .dp__icon:hover {
  stroke: white;
  fill: white;
}

.dp__inner_nav:hover {
  background-color: inherit;
}

.dp__inner_nav_disabled {
  background-color: inherit;
  opacity: var(--disabled-opacity);
}

.dp__month_year_row {
  height: auto !important;
}

.dp__calendar_row {
  margin: 0;
}

.dp__calendar {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: calc(calc(2 * var(--unit) - 2 * var(--padding)) * 0.7);
}
/* .dp__calendar_row {
  margin: 0;
} */

.dp__cell_inner,
.dp__calendar_header_item {
  height: auto;
  padding: 0;
  width: calc(calc(2 * var(--unit) - 2 * var(--padding)) / 7);
  font-size: 1.2vh;
  color: white;
}

.dp__calendar_header {
  padding-top: 5px;
  padding-bottom: 5px;
}

.dp__month_year_select {
  font-size: 1.5vh;
  height: auto;
}

/* ------ CELLS ------ */

.dp__active_date,
.dp__overlay_cell_active {
  background: var(--selected-color);
  /* padding: 3px;
  height: 3rem;
  width: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center; */
}

.dp__overlay_cell_active:hover {
  color: white !important;
}

.dp__overlay_cell_pad {
  padding: 8px 0;
  /* padding-top: 3px;
  padding-bottom: 3px; */
  /*
  height: 3rem;
  width: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center; */
}

.dp__overlay_cell_pad:hover {
  color: #004f72;
}

.dp-custom-cell {
  /* height: 1.3rem;
  width: 1.3rem;
  padding: 3px;
  margin: 0 2px; */
  color: white;
}

.dp__cell_offset {
  color: rgb(192, 186, 186);
}

.dp__cell_disabled,
.dp__overlay_cell_disabled {
  background-color: transparent;
  opacity: var(--disabled-opacity);
}

.dp__overlay_cell_disabled:hover {
  background-color: transparent;
  color: white;
}

/* ------ MONTH/YEAR ------ */
/* .dp__inner_nav {
  height: 1rem;
  width: 1.5rem;
  border-radius: 10%;
} */

/* .dp__inner_nav_disabled,
.dp__inner_nav_disabled:hover {
  background-color: #004f72;
} */

.dp__month_year_select {
  /* height: 1rem; */
  color: white;
}

/* MONTH YEAR CHOOSER OVERLAY */

.dp__overlay_container {
  height: calc(2 * var(--unit) - 2 * var(--padding) - 35px) !important;
  background-color: #004f72;
  overflow-y: overlay;
}
.dp__overlay {
  border: 1px solid white !important;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #004f72;
  height: calc(2 * var(--unit) - 2 * var(--padding)) !important;
  color: white;
}

.dp__icon {
  stroke: #004f72;
  fill: #004f72;
}
.dp__icon:hover {
  stroke: var(--selected-color);
  fill: var(--selected-color);
}

.dp__button,
.dp__button:hover {
  background-color: white;
}
.dp__overlay_container::-webkit-scrollbar {
  width: 0.7vh;
}

.dp__overlay_container::-webkit-scrollbar-track {
  background-color: inherit;
}

.dp__overlay_container::-webkit-scrollbar-thumb {
  background-color: var(--selected-color);
  border: 1px solid #a37331;
}
</style>
