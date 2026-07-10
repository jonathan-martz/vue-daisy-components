<script setup lang="ts">
import type { DaisyStatProps } from '../types/stat'
const { className } = withDefaults(defineProps<DaisyStatProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['stats shadow', className]">
    <slot />
  </div>
</template>
