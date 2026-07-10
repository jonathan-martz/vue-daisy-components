<script setup lang="ts">
import type { DaisyLinkProps } from '../types/link'
const { className } = withDefaults(defineProps<DaisyLinkProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['link', className]">
    <slot />
  </div>
</template>
