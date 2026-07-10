<script setup lang="ts">
import type { DaisyLinkProps } from '../interfaces/DaisyLinkProps'
const { className } = withDefaults(defineProps<DaisyLinkProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['link', className]">
    <slot />
  </div>
</template>
