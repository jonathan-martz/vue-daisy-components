<script setup lang="ts">
import type { BadgeVariant, BadgeSize } from '../types/badge'

interface Props {
  variant?: BadgeVariant
  size?: BadgeSize
  outline?: boolean
  label?: string
}

const {
  variant,
  size,
  outline,
  label,
} = withDefaults(defineProps<Props>(), {
  variant: 'badge-neutral',
  size: 'badge-md',
  outline: false,
})
</script>

<template>
  <span
    class="badge"
    :class="[
      variant,
      size,
      { 'badge-outline': outline },
    ]"
  >
    <slot>{{ label }}</slot>
  </span>
</template>
