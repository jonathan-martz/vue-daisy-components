<script setup lang="ts">
import type { DaisyFooterProps } from '../types/footer'
const { className } = withDefaults(defineProps<DaisyFooterProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['footer p-4 bg-base-200 text-base-content', className]">
    <slot />
  </div>
</template>
