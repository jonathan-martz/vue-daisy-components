<script setup lang="ts">
import { computed } from "vue";
import type { DaisyToastProps } from "../interfaces/DaisyToastProps";

const props = withDefaults(defineProps<DaisyToastProps>(), {
	className: "",
	position: "bottom-end",
});

const positionClass = computed(() => {
	const positions = {
		start: ["toast-start"],
		center: ["toast-center"],
		end: ["toast-end"],
		top: ["toast-top"],
		bottom: ["toast-bottom"],
		"top-start": ["toast-top", "toast-start"],
		"top-center": ["toast-top", "toast-center"],
		"top-end": ["toast-top", "toast-end"],
		"middle-start": ["toast-middle", "toast-start"],
		"middle-center": ["toast-middle", "toast-center"],
		"middle-end": ["toast-middle", "toast-end"],
		"bottom-start": ["toast-bottom", "toast-start"],
		"bottom-center": ["toast-bottom", "toast-center"],
		"bottom-end": ["toast-bottom", "toast-end"],
	};
	return positions[props.position];
});
</script>
<template>
  <div :class="['toast', positionClass, props.className]" aria-live="polite">
    <slot />
  </div>
</template>
