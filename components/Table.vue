<script setup lang="ts">
import type { TableProps } from '../types/table'

const props = withDefaults(defineProps<TableProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['table', props.className]">
    <slot />
  </div>
</template>
