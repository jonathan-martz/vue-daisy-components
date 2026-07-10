<script setup lang="ts">
import type { DaisyThemeControllerProps } from '../types/theme-controller'
const { className } = withDefaults(defineProps<DaisyThemeControllerProps>(), {
  className: '',
})
</script>
<template>
  <input type="checkbox" value="dark" :class="['toggle theme-controller', className]" />
</template>
