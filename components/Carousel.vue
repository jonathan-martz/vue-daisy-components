<script setup lang="ts">
import type { CarouselProps } from '../types/carousel'

const props = withDefaults(defineProps<CarouselProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['carousel', props.className]">
    <slot />
  </div>
</template>
