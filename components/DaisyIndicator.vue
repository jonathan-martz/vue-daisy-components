<script setup lang="ts">
import type { DaisyIndicatorProps } from '../types/indicator'
const { className } = withDefaults(defineProps<DaisyIndicatorProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['indicator', className]">
    <slot />
  </div>
</template>
