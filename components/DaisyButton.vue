<script setup lang="ts">
import { computed } from 'vue'
import type { DaisyButtonProps, ButtonResponsiveSizeMap } from '../types/button'
const {
  className,
  variant,
  size,
  responsiveSize,
  outline,
  disabled,
  loading,
  block,
  circle,
  square,
  active,
  type,
} = withDefaults(defineProps<DaisyButtonProps>(), {
  className: '',
  variant: 'btn-primary',
  responsiveSize: () => ({ md: 'btn-md' }),
  outline: false,
  disabled: false,
  loading: false,
  block: false,
  circle: false,
  square: false,
  active: false,
  type: 'button',
})
const emit = defineEmits<{
  click: [event: MouseEvent]
}>()
const responsiveSizeClasses = computed(() => {
  if (!responsiveSize) return []
  const classes: string[] = []
  for (const breakpoint in responsiveSize) {
    const currentSize = responsiveSize[breakpoint as keyof ButtonResponsiveSizeMap]
    if (currentSize) classes.push(`${breakpoint}:${currentSize}`)
  }
  return classes
})
</script>
<template>
  <button
    class="btn"
    :class="[
      className,
      variant,
      size,
      ...responsiveSizeClasses,
      {
        'btn-outline': outline,
        'btn-block': block,
        'btn-circle': circle,
        'btn-square': square,
        'btn-active': active,
      },
    ]"
    :disabled="disabled || loading"
    :type="type"
    @click="emit('click', $event)"
  >
    <span v-if="loading" class="loading loading-spinner loading-sm" />
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </button>
</template>
