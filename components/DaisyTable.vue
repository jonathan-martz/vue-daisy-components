<script setup lang="ts">
import type { DaisyTableProps } from '../types/table'
const { className } = withDefaults(defineProps<DaisyTableProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['table', className]">
    <slot />
  </div>
</template>
