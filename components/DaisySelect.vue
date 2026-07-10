<script setup lang="ts">
import type { DaisySelectProps } from '../types/select'
const { className } = withDefaults(defineProps<DaisySelectProps>(), {
  className: '',
})
</script>
<template>
  <select :class="['select select-bordered', className]">
    <slot>
      <option disabled selected>Choose</option>
    </slot>
  </select>
</template>
