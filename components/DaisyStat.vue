<script setup lang="ts">
import type { DaisyStatProps } from '../interfaces/DaisyStatProps'
const { className } = withDefaults(defineProps<DaisyStatProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['stats shadow', className]">
    <slot />
  </div>
</template>
