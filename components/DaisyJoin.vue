<script setup lang="ts">
import type { DaisyJoinProps } from '../interfaces/DaisyJoinProps'
const { className } = withDefaults(defineProps<DaisyJoinProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['join', className]">
    <slot />
  </div>
</template>
