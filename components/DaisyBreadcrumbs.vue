<script setup lang="ts">
import type { DaisyBreadcrumbsProps } from '../types/breadcrumbs'
const { className } = withDefaults(defineProps<DaisyBreadcrumbsProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['breadcrumbs text-sm', className]">
    <slot />
  </div>
</template>
