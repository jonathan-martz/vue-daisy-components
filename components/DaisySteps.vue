<script setup lang="ts">
import type { DaisyStepsProps } from '../interfaces/DaisyStepsProps'
const { className } = withDefaults(defineProps<DaisyStepsProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['steps w-full', className]">
    <slot />
  </div>
</template>
