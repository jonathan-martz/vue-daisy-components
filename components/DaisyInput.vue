<script setup lang="ts">
import type { DaisyInputProps } from '../interfaces/DaisyInputProps'
const { className } = withDefaults(defineProps<DaisyInputProps>(), {
  className: '',
})
</script>
<template>
  <input type="text" :class="['input input-bordered', className]" />
</template>
