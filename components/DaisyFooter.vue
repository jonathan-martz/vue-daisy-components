<script setup lang="ts">
import type { DaisyFooterProps } from "../interfaces/DaisyFooterProps";

const { className } = withDefaults(defineProps<DaisyFooterProps>(), {
	className: "",
});
</script>
<template>
  <footer :class="['footer p-4 bg-base-200 text-base-content', className]">
    <slot />
  </footer>
</template>
