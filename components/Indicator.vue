<script setup lang="ts">
import type { IndicatorProps } from '../types/indicator'

const props = withDefaults(defineProps<IndicatorProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['indicator', props.className]">
    <slot />
  </div>
</template>
