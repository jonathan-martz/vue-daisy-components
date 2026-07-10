<script setup lang="ts">
import type { DaisyToastProps } from '../interfaces/DaisyToastProps'
const { className } = withDefaults(defineProps<DaisyToastProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['toast', className]">
    <slot />
  </div>
</template>
