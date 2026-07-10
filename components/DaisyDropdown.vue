<script setup lang="ts">
import type { DaisyDropdownProps } from '../types/dropdown'
const { className } = withDefaults(defineProps<DaisyDropdownProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['dropdown', className]">
    <slot />
  </div>
</template>
