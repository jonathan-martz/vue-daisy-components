<script setup lang="ts">
import type { LinkProps } from '../types/link'

const props = withDefaults(defineProps<LinkProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['link', props.className]">
    <slot />
  </div>
</template>
