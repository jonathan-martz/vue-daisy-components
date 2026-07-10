<script setup lang="ts">
import type { DaisyCalendarProps } from '../types/calendar'
const { className } = withDefaults(defineProps<DaisyCalendarProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['bg-base-100 rounded-box p-4', className]">
    <slot />
  </div>
</template>
