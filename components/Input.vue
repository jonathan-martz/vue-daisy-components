<script setup lang="ts">
import type { InputProps } from '../types/input'

const props = withDefaults(defineProps<InputProps>(), {
  className: '',
})
</script>

<template>
  <input type="text" :class="['input input-bordered', props.className]" />
</template>
