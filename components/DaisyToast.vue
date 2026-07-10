<script setup lang="ts">
import type { DaisyToastProps } from '../types/toast'
const { className } = withDefaults(defineProps<DaisyToastProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['toast', className]">
    <slot />
  </div>
</template>
