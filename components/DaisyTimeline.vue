<script setup lang="ts">
import { computed } from "vue";
import type { DaisyTimelineProps } from "../interfaces/DaisyTimelineProps";

const props = withDefaults(defineProps<DaisyTimelineProps>(), {
	className: "",
	orientation: "vertical",
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
