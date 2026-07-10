<script setup lang="ts">
import type { CheckboxProps } from '../types/checkbox'

const props = withDefaults(defineProps<CheckboxProps>(), {
  className: '',
})
</script>

<template>
  <input type="checkbox" :class="['checkbox', props.className]" />
</template>
