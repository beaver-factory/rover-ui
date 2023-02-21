<template>
  <BaseUnit :height="1" :width="2" :border-bottom="true" :border-right="true">
    <div class="selectContainer">
      <label class="overlapping-label" :for="id">{{ label }}</label>
      <select :id="id" v-model="selected" @change="$emit('selected', selected)">
        <option v-for="option in options" :value="option" :key="option">
          {{ option }}
        </option>
      </select>
    </div>
  </BaseUnit>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseUnit from './BaseUnit.vue'

const props = defineProps({
  options: Array,
  id: String,
  label: String,
})

const selected = ref<string>(props.options[0])
</script>

<style scoped>
select {
  width: 100%;
  padding: 0.7rem;
  font-size: 1rem;
  color: white;
  background-color: #004f72;
  border: 1px solid white;
}

.selectContainer {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.overlapping-label {
  position: absolute;
  font-size: 0.6rem;
  margin-top: -2.8rem;
  margin-left: 0.3rem;
  padding: 0 0.3rem;
  background-color: #004f72;
  color: white;
}
</style>
