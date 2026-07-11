<script setup lang="ts">
import type { DaisyProgressProps } from "../interfaces/DaisyProgressProps";

const { className } = withDefaults(defineProps<DaisyProgressProps>(), {
	className: "",
});
</script>
<template>
  <div :class="['progress progress-primary w-full', className]">
    <slot />
  </div>
</template>
