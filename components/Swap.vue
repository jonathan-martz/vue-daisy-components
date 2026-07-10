<script setup lang="ts">
import type { SwapProps } from '../types/swap'

const props = withDefaults(defineProps<SwapProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['swap', props.className]">
    <slot />
  </div>
</template>
