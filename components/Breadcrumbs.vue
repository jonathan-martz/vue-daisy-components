<script setup lang="ts">
import type { BreadcrumbsProps } from '../types/breadcrumbs'

const props = withDefaults(defineProps<BreadcrumbsProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['breadcrumbs', props.className]">
    <slot />
  </div>
</template>
