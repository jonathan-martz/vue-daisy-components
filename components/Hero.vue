<script setup lang="ts">
import type { HeroProps } from '../types/hero'

const props = withDefaults(defineProps<HeroProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['hero min-h-48 bg-base-200 rounded-box', props.className]">
    <slot />
  </div>
</template>
