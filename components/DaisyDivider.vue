<script setup lang="ts">
import { textSizeClasses } from "../utils/textSizeClasses";
import type { TextSize } from "../types/TextSize";
import type { PropType } from "vue";
import { computed } from "vue";
import type { DaisyDividerProps } from "../interfaces/DaisyDividerProps";

const props = defineProps({
	labelSize: {
		type: String as PropType<TextSize>,
	},
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
    :class="['divider', orientationClass, props.labelSize && textSizeClasses[props.labelSize], props.className]"
    role="separator"
    :aria-orientation="props.orientation"
  >
    <slot>{{ props.label }}</slot>
  </div>
</template>
