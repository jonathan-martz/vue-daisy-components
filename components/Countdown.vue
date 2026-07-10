<script setup lang="ts">
import type { CountdownProps } from '../types/countdown'

const props = withDefaults(defineProps<CountdownProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['countdown', props.className]">
    <slot />
  </div>
</template>
