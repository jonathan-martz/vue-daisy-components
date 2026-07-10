<script setup lang="ts">
import type { BottomNavigationProps } from '../types/bottom-navigation'

const props = withDefaults(defineProps<BottomNavigationProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['btm-nav', props.className]">
    <slot />
  </div>
</template>
