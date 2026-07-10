<script setup lang="ts">
import type { StatProps } from '../types/stat'

const props = withDefaults(defineProps<StatProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['stats shadow', props.className]">
    <slot />
  </div>
</template>
