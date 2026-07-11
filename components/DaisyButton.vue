<script setup lang="ts">
import { computed } from 'vue'
import type { DaisyButtonProps } from '../interfaces/DaisyButtonProps'
import type { ButtonSize } from '../types/ButtonSize'
import type { ButtonResponsiveSizeMap } from '../types/ButtonResponsiveSizeMap'
import type { ButtonVariant } from '../types/ButtonVariant'

const props = withDefaults(defineProps<DaisyButtonProps>(), {
  className: '',
  variant: 'primary' as ButtonVariant,
  responsiveSize: () => ({ md: 'md' as ButtonSize }),
  outline: false,
  disabled: false,
  loading: false,
  block: false,
  circle: false,
  square: false,
  active: false,
  size: '',
  type: 'button',
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const variantClass = computed(() => `btn-${props.variant}`)

const sizeClass = computed(() => (props.size ? `btn-${props.size}` : undefined))

const buttonClasses = computed(() => {
  return [
    props.className,
    variantClass.value, // .value falls es refs/computeds sind
    sizeClass.value,
    ...(Array.isArray(responsiveSizeClasses.value) ? responsiveSizeClasses.value : []),
    {
      'btn-outline': props.outline,
      'btn-block': props.block,
      'btn-circle': props.circle,
      'btn-square': props.square,
      'btn-active': props.active,
    }
  ]
})

const responsiveSizeClasses = computed(() => {
  if (!props.responsiveSize) return []

  const classes: string[] = []
  for (const breakpoint in props.responsiveSize) {
    const currentSize = props.responsiveSize[breakpoint as keyof ButtonResponsiveSizeMap]
    if (currentSize) classes.push(`${breakpoint}:btn-${currentSize}`)
  }

  return classes
})
</script>

<template>
  <button
      class="btn"
      :class="buttonClasses"
      :disabled="props.disabled || props.loading"
      :type="props.type"
      @click="emit('click', $event)"
  >
    <span v-if="props.loading" class="loading loading-spinner loading-sm" />
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </button>
</template>
