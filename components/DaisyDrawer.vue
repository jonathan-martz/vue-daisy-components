<script setup lang="ts">
import type { DaisyDrawerProps } from '../types/drawer'
const { className } = withDefaults(defineProps<DaisyDrawerProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['drawer', className]">
    <slot />
  </div>
</template>
