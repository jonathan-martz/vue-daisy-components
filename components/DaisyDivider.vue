<script setup lang="ts">
import type { PropType } from "vue";
import { computed } from "vue";
import type { DaisyDividerProps } from "../interfaces/DaisyDividerProps";

const props = defineProps({
	className: {
		type: String,
		default: "",
	},
	orientation: {
		type: String as PropType<NonNullable<DaisyDividerProps["orientation"]>>,
		default: "horizontal",
	},
	label: {
		type: String,
	},
});

const orientationClass = computed(() =>
	props.orientation === "vertical" ? "divider-vertical" : "divider-horizontal",
);
</script>
<template>
  <div
    :class="['divider', orientationClass, props.className]"
    role="separator"
    :aria-orientation="props.orientation"
  >
    <slot>{{ props.label }}</slot>
  </div>
</template>
