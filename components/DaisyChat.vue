<script setup lang="ts">
import type { DaisyChatProps } from '../types/chat'
const { className } = withDefaults(defineProps<DaisyChatProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['chat chat-start', className]">
    <slot />
  </div>
</template>
