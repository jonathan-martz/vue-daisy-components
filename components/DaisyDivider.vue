<script setup lang="ts">
import type { DaisyDividerProps } from '../interfaces/DaisyDividerProps'
const { className } = withDefaults(defineProps<DaisyDividerProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['divider', className]">
    <slot />
  </div>
</template>
