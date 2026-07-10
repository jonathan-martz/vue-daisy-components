<script setup lang="ts">
import type { KbdProps } from '../types/kbd'

const props = withDefaults(defineProps<KbdProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['kbd', props.className]">
    <slot />
  </div>
</template>
