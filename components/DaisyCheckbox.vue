<script setup lang="ts">
import type { DaisyCheckboxProps } from '../interfaces/DaisyCheckboxProps'
const { className } = withDefaults(defineProps<DaisyCheckboxProps>(), {
  className: '',
})
</script>
<template>
  <input type="checkbox" :class="['checkbox', className]" />
</template>
