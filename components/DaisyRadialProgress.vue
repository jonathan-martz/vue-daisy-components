<script setup lang="ts">
import type { DaisyRadialProgressProps } from '../interfaces/DaisyRadialProgressProps'
const { className } = withDefaults(defineProps<DaisyRadialProgressProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['radial-progress text-primary', className]">
    <slot />
  </div>
</template>
