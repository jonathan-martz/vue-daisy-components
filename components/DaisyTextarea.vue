<script setup lang="ts">
import type { DaisyTextareaProps } from '../interfaces/DaisyTextareaProps'
const { className } = withDefaults(defineProps<DaisyTextareaProps>(), {
  className: '',
})
</script>
<template>
  <textarea :class="['textarea textarea-bordered', className]"><slot /></textarea>
</template>
