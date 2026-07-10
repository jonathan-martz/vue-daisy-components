<script setup lang="ts">
import type { DaisyCarouselProps } from '../types/carousel'
const { className } = withDefaults(defineProps<DaisyCarouselProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['carousel rounded-box', className]">
    <slot />
  </div>
</template>
