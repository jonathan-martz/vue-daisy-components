<script setup lang="ts">
import type { DaisyTableProps } from '../interfaces/DaisyTableProps'
const { className } = withDefaults(defineProps<DaisyTableProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['table', className]">
    <slot />
  </div>
</template>
