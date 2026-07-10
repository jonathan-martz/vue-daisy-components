<script setup lang="ts">
import type { ToggleProps } from '../types/toggle'

const props = withDefaults(defineProps<ToggleProps>(), {
  className: '',
})
</script>

<template>
  <input type="checkbox" :class="['toggle toggle-primary', props.className]" />
</template>
