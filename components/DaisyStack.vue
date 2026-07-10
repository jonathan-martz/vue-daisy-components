<script setup lang="ts">
import type { DaisyStackProps } from '../types/stack'
const { className } = withDefaults(defineProps<DaisyStackProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['stack', className]">
    <slot />
  </div>
</template>
