<script setup lang="ts">
import type { DropdownProps } from '../types/dropdown'

const props = withDefaults(defineProps<DropdownProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['dropdown', props.className]">
    <slot />
  </div>
</template>
