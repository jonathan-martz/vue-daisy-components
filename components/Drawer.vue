<script setup lang="ts">
import type { DrawerProps } from '../types/drawer'

const props = withDefaults(defineProps<DrawerProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['drawer', props.className]">
    <slot />
  </div>
</template>
