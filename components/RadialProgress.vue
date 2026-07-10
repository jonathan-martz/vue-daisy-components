<script setup lang="ts">
import type { RadialProgressProps } from '../types/radial-progress'

const props = withDefaults(defineProps<RadialProgressProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['radial-progress text-primary', props.className]">
    <slot />
  </div>
</template>
