<script setup lang="ts">
import type { TooltipProps } from '../types/tooltip'

const props = withDefaults(defineProps<TooltipProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['tooltip', props.className]">
    <slot />
  </div>
</template>
