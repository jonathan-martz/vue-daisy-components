<script setup lang="ts">
import type { DaisyLoadingProps } from '../types/loading'
const { className } = withDefaults(defineProps<DaisyLoadingProps>(), {
  className: '',
})
</script>
<template>
  <span :class="['loading loading-spinner', className]" />
</template>
