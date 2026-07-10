<script setup lang="ts">
import type { DaisyMenuProps } from '../interfaces/DaisyMenuProps'
const { className } = withDefaults(defineProps<DaisyMenuProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['menu bg-base-200 rounded-box w-56', className]">
    <slot />
  </div>
</template>
