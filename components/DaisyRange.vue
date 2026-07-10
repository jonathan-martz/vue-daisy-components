<script setup lang="ts">
import type { DaisyRangeProps } from '../interfaces/DaisyRangeProps'
const { className } = withDefaults(defineProps<DaisyRangeProps>(), {
  className: '',
})
</script>
<template>
  <input type="range" :class="['range range-primary w-full', className]" />
</template>
