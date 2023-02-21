<template>
  <BaseUnit :height="2" :width="2" :border-bottom="true" :border-right="true">
    <div class="container">
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
    </div>
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

const chosenDate = ref<Date>(new Date())

watch(
  () => roverStore.manifest.name,
  (oldRover, newRover) => {
    if (oldRover !== newRover) {
      chosenDate.value = minDate.value
      //  force rerender
      calendarKey.value += 1
    }
  }
)

const changeDate = (): void => {
  // eslint-disable-next-line
  formStore.selectedDate = chosenDate.value.toISOString().split('T')[0]
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
  background-color: var(--selected-color);
  border: 1px solid white;
  border-radius: 0;
  padding: 3px;
  height: 3rem;
  width: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.dp__overlay_cell_pad {
  border-radius: 0;
  padding: 3px;
  height: 3rem;
  width: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.dp__overlay_cell_pad:hover {
  border-radius: 0;
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

.dp__overlay_cell {
  color: white;
}

.dp__cell_disabled,
.dp__overlay_cell_disabled {
  background-color: #004f72;
  color: #015e86;
}

.dp__overlay_cell_disabled:hover {
  background-color: #004f72;
  color: #015e86;
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
