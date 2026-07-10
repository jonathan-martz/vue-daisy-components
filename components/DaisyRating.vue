<script setup lang="ts">
import type { DaisyRatingProps } from '../types/rating'
const { className } = withDefaults(defineProps<DaisyRatingProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['rating', className]">
    <slot />
  </div>
</template>
