<script setup lang="ts">
import type { PropType } from "vue";
import { computed } from "vue";
import type { DaisyTimelineProps } from "../interfaces/DaisyTimelineProps";

const props = defineProps({
	className: {
		type: String,
		default: "",
	},
	orientation: {
		type: String as PropType<NonNullable<DaisyTimelineProps["orientation"]>>,
		default: "vertical",
	},
});

const orientationClass = computed(() =>
	props.orientation === "horizontal"
		? "timeline-horizontal"
		: "timeline-vertical",
);
</script>
<template>
  <ul :class="['timeline', orientationClass, props.className]">
    <slot />
  </ul>
</template>
