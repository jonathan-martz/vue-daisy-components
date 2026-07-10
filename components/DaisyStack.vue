<script setup lang="ts">
import type { DaisyStackProps } from '../interfaces/DaisyStackProps'
const { className } = withDefaults(defineProps<DaisyStackProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['stack', className]">
    <slot />
  </div>
</template>
