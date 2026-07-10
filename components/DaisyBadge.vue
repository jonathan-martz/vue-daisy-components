<script setup lang="ts">
import type { DaisyBadgeProps } from '../types/badge'
const {
  className,
  variant,
  size,
  outline,
  label,
} = withDefaults(defineProps<DaisyBadgeProps>(), {
  className: '',
  variant: 'badge-neutral',
  size: 'badge-md',
  outline: false,
})
</script>
<template>
  <span class="badge" :class="[className, variant, size, { 'badge-outline': outline }]">
    <slot>{{ label }}</slot>
  </span>
</template>
