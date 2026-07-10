<script setup lang="ts">
import type { DaisyDropdownProps } from '../interfaces/DaisyDropdownProps'
const { className } = withDefaults(defineProps<DaisyDropdownProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['dropdown', className]">
    <slot />
  </div>
</template>
