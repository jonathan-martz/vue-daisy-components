<script setup lang="ts">
import type { ToastProps } from '../types/toast'

const props = withDefaults(defineProps<ToastProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['toast', props.className]">
    <slot />
  </div>
</template>
