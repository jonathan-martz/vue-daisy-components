<script setup lang="ts">
import type { DaisyCheckboxProps } from '../types/checkbox'
const { className } = withDefaults(defineProps<DaisyCheckboxProps>(), {
  className: '',
})
</script>
<template>
  <input type="checkbox" :class="['checkbox', className]" />
</template>
