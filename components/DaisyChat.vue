<script setup lang="ts">
import type { DaisyChatProps } from '../interfaces/DaisyChatProps'
const { className } = withDefaults(defineProps<DaisyChatProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['chat chat-start', className]">
    <slot />
  </div>
</template>
