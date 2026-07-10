<script setup lang="ts">
import type { DaisyKbdProps } from '../interfaces/DaisyKbdProps'
const { className } = withDefaults(defineProps<DaisyKbdProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['kbd', className]">
    <slot />
  </div>
</template>
