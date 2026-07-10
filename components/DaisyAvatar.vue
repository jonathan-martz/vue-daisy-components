<script setup lang="ts">
import type { DaisyAvatarProps } from '../types/avatar'
const { className } = withDefaults(defineProps<DaisyAvatarProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['avatar', className]">
    <slot />
  </div>
</template>
