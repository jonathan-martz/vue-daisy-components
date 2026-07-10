<script setup lang="ts">
import type { DaisyTooltipProps } from '../interfaces/DaisyTooltipProps'
const { className } = withDefaults(defineProps<DaisyTooltipProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['tooltip', className]">
    <slot />
  </div>
</template>
