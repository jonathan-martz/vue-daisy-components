<script setup lang="ts">
import type { DaisyJoinProps } from '../types/join'
const { className } = withDefaults(defineProps<DaisyJoinProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['join', className]">
    <slot />
  </div>
</template>
