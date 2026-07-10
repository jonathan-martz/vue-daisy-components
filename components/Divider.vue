<script setup lang="ts">
import type { DividerProps } from '../types/divider'

const props = withDefaults(defineProps<DividerProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['divider', props.className]">
    <slot />
  </div>
</template>
