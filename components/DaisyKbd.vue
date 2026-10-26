<script setup lang="ts">
import type { DaisyKbdProps } from "../interfaces/DaisyKbdProps";

const { className } = withDefaults(defineProps<DaisyKbdProps>(), {
	className: "",
});
</script>
<template>
  <kbd :class="['kbd', className]">
    <slot />
  </kbd>
</template>
