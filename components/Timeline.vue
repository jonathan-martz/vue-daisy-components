<script setup lang="ts">
import type { TimelineProps } from '../types/timeline'

const props = withDefaults(defineProps<TimelineProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['timeline timeline-vertical', props.className]">
    <slot />
  </div>
</template>
