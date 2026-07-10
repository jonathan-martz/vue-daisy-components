<script setup lang="ts">
import type { MenuProps } from '../types/menu'

const props = withDefaults(defineProps<MenuProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['menu bg-base-200 rounded-box w-56', props.className]">
    <slot />
  </div>
</template>
