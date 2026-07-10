<script setup lang="ts">
import type { SkeletonProps } from '../types/skeleton'

const props = withDefaults(defineProps<SkeletonProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['skeleton h-24 w-full', props.className]">
    <slot />
  </div>
</template>
