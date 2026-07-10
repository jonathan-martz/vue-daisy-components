<script setup lang="ts">
import type { DaisyDiffProps } from '../interfaces/DaisyDiffProps'
const { className } = withDefaults(defineProps<DaisyDiffProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['diff', className]">
    <slot />
  </div>
</template>
