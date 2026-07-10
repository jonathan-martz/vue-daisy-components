<script setup lang="ts">
import type { DiffProps } from '../types/diff'

const props = withDefaults(defineProps<DiffProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['diff', props.className]">
    <slot />
  </div>
</template>
