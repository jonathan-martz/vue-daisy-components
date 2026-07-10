<script setup lang="ts">
import type { DaisyHeroProps } from '../types/hero'
const { className } = withDefaults(defineProps<DaisyHeroProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['hero min-h-48 bg-base-200 rounded-box', className]">
    <slot />
  </div>
</template>
