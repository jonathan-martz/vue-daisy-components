<script setup lang="ts">
import type { MaskProps } from '../types/mask'

const props = withDefaults(defineProps<MaskProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['mask mask-squircle w-16 h-16 bg-base-300', props.className]">
    <slot />
  </div>
</template>
