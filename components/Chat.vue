<script setup lang="ts">
import type { ChatProps } from '../types/chat'

const props = withDefaults(defineProps<ChatProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['chat chat-start', props.className]">
    <slot />
  </div>
</template>
