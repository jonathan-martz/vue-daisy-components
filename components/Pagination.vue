<script setup lang="ts">
import type { PaginationProps } from '../types/pagination'

const props = withDefaults(defineProps<PaginationProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['join', props.className]">
    <slot />
  </div>
</template>
