<script setup lang="ts">
import type { StepsProps } from '../types/steps'

const props = withDefaults(defineProps<StepsProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['steps', props.className]">
    <slot />
  </div>
</template>
