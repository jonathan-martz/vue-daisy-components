<script setup lang="ts">
import type { DaisyAccordionProps } from '../interfaces/DaisyAccordionProps'
const { className } = withDefaults(defineProps<DaisyAccordionProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['join join-vertical w-full', className]">
    <slot />
  </div>
</template>
