<script setup lang="ts">
import type { NavbarProps } from '../types/navbar'

const props = withDefaults(defineProps<NavbarProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['navbar bg-base-100 rounded-box shadow-sm', props.className]">
    <slot />
  </div>
</template>
