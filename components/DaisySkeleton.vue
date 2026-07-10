<script setup lang="ts">
import type { DaisySkeletonProps } from '../types/skeleton'
const { className } = withDefaults(defineProps<DaisySkeletonProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['skeleton h-24 w-full', className]">
    <slot />
  </div>
</template>
