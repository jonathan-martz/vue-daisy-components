<script setup lang="ts">
import type { RadioProps } from '../types/radio'

const props = withDefaults(defineProps<RadioProps>(), {
  className: '',
})
</script>

<template>
  <input type="radio" :class="['radio', props.className]" />
</template>
