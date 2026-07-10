<script setup lang="ts">
import type { AvatarProps } from '../types/avatar'

const props = withDefaults(defineProps<AvatarProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['avatar', props.className]">
    <slot />
  </div>
</template>
