<script setup lang="ts">
import type { DaisyTabsProps } from '../types/tabs'
const { className } = withDefaults(defineProps<DaisyTabsProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['tabs tabs-boxed', className]">
    <slot />
  </div>
</template>
