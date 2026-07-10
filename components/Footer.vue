<script setup lang="ts">
import type { FooterProps } from '../types/footer'

const props = withDefaults(defineProps<FooterProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['footer p-4 bg-base-200 text-base-content', props.className]">
    <slot />
  </div>
</template>
