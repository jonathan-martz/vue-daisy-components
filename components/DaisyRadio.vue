<script setup lang="ts">
import type { DaisyRadioProps } from '../types/radio'
const { className } = withDefaults(defineProps<DaisyRadioProps>(), {
  className: '',
})
</script>
<template>
  <input type="radio" :class="['radio', className]" />
</template>
