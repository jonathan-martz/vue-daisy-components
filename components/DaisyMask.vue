<script setup lang="ts">
import { computed } from "vue";
import type { DaisyMaskProps } from "../interfaces/DaisyMaskProps";

const props = withDefaults(defineProps<DaisyMaskProps>(), {
	className: "",
	shape: "squircle",
	size: "md",
});

const shapeClass = computed(() => {
	const shapes = {
		squircle: "mask-squircle",
		heart: "mask-heart",
		hexagon: "mask-hexagon",
		"hexagon-2": "mask-hexagon-2",
		decagon: "mask-decagon",
		pentagon: "mask-pentagon",
		diamond: "mask-diamond",
		square: "mask-square",
		circle: "mask-circle",
		star: "mask-star",
		"star-2": "mask-star-2",
		triangle: "mask-triangle",
		"triangle-2": "mask-triangle-2",
		"triangle-3": "mask-triangle-3",
		"triangle-4": "mask-triangle-4",
		parallelogram: "mask-parallelogram",
		"parallelogram-2": "mask-parallelogram-2",
		"parallelogram-3": "mask-parallelogram-3",
		"parallelogram-4": "mask-parallelogram-4",
	};
	return shapes[props.shape];
});
const sizeClass = computed(() => {
	const sizes = {
		sm: "size-8",
		md: "size-16",
		lg: "size-24",
	};
	return sizes[props.size];
});
</script>
<template>
  <div :class="['mask bg-base-300', shapeClass, sizeClass, props.className]">
    <slot />
  </div>
</template>
