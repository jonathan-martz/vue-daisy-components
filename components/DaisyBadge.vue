<script setup lang="ts">
import { computed } from 'vue'
import type { DaisyBadgeProps } from '../types/badge'

const props = withDefaults(defineProps<DaisyBadgeProps>(), {
  className: '',
  variant: 'neutral',
  size: 'badge-md',
  outline: false,
})

const variantClass = computed(() => `badge-${props.variant}`)
</script>

<template>
  <span class="badge" :class="[props.className, variantClass, props.size, { 'badge-outline': props.outline }]">
    <slot>{{ props.label }}</slot>
  </span>
</template>
