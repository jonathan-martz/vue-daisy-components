<script setup lang="ts">
import type { DaisyCountdownProps } from '../interfaces/DaisyCountdownProps'
const { className } = withDefaults(defineProps<DaisyCountdownProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['countdown font-mono text-2xl', className]">
    <slot />
  </div>
</template>
