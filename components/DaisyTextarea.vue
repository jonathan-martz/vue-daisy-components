<script setup lang="ts">
import type { DaisyTextareaProps } from '../types/textarea'
const { className } = withDefaults(defineProps<DaisyTextareaProps>(), {
  className: '',
})
</script>
<template>
  <textarea :class="['textarea textarea-bordered', className]"><slot /></textarea>
</template>
