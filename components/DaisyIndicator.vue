<script setup lang="ts">
import type { DaisyIndicatorProps } from '../interfaces/DaisyIndicatorProps'
const { className } = withDefaults(defineProps<DaisyIndicatorProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['indicator', className]">
    <slot />
  </div>
</template>
