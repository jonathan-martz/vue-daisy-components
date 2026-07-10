<script setup lang="ts">
import type { RangeProps } from '../types/range'

const props = withDefaults(defineProps<RangeProps>(), {
  className: '',
})
</script>

<template>
  <input type="range" :class="['range range-primary w-56', props.className]" />
</template>
