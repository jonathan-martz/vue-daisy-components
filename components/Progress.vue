<script setup lang="ts">
import type { ProgressProps } from '../types/progress'

const props = withDefaults(defineProps<ProgressProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['progress progress-primary w-56', props.className]">
    <slot />
  </div>
</template>
