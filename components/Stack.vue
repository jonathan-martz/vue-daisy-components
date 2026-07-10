<script setup lang="ts">
import type { StackProps } from '../types/stack'

const props = withDefaults(defineProps<StackProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['stack', props.className]">
    <slot />
  </div>
</template>
