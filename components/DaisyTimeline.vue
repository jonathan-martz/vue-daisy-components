<script setup lang="ts">
import type { DaisyTimelineProps } from '../types/timeline'
const { className } = withDefaults(defineProps<DaisyTimelineProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['timeline timeline-vertical', className]">
    <slot />
  </div>
</template>
