<script setup lang="ts">
import type { ArtboardProps } from '../types/artboard'

const props = withDefaults(defineProps<ArtboardProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['artboard', props.className]">
    <slot />
  </div>
</template>
