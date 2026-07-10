<script setup lang="ts">
import type { CalendarProps } from '../types/calendar'

const props = withDefaults(defineProps<CalendarProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['calendar', props.className]">
    <slot />
  </div>
</template>
