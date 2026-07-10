<script setup lang="ts">
import type { DaisyThemeControllerProps } from '../interfaces/DaisyThemeControllerProps'
const { className } = withDefaults(defineProps<DaisyThemeControllerProps>(), {
  className: '',
})
</script>
<template>
  <input type="checkbox" value="dark" :class="['toggle theme-controller', className]" />
</template>
