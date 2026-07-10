<script setup lang="ts">
import type { DaisyBottomNavigationProps } from '../types/bottom-navigation'
const { className } = withDefaults(defineProps<DaisyBottomNavigationProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['btm-nav', className]">
    <slot />
  </div>
</template>
