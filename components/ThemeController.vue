<script setup lang="ts">
import type { ThemeControllerProps } from '../types/theme-controller'

const props = withDefaults(defineProps<ThemeControllerProps>(), {
  className: '',
})
</script>

<template>
  <input type="checkbox" value="dark" :class="['toggle theme-controller', props.className]" />
</template>
