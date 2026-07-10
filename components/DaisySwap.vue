<script setup lang="ts">
import type { DaisySwapProps } from '../interfaces/DaisySwapProps'
const { className } = withDefaults(defineProps<DaisySwapProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['swap', className]">
    <slot />
  </div>
</template>
