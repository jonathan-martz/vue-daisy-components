<script setup lang="ts">
import type { PropType } from "vue";
import { computed } from "vue";
import type { DaisyStepsProps } from "../interfaces/DaisyStepsProps";

const props = defineProps({
	className: {
		type: String,
		default: "",
	},
	orientation: {
		type: String as PropType<NonNullable<DaisyStepsProps["orientation"]>>,
		default: "horizontal",
	},
});

const orientationClass = computed(() =>
	props.orientation === "vertical" ? "steps-vertical" : "steps-horizontal",
);
</script>
<template>
  <ul :class="['steps w-full', orientationClass, props.className]">
    <slot />
  </ul>
</template>
