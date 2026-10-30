<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import type { PropType } from "vue";
import type { DaisyStatIconProps } from "../interfaces/DaisyStatIconProps";
import type { StatColor } from "../types/StatColor";
import { textSizeClasses } from "../utils/textSizeClasses";

const statColorClasses: Record<StatColor, string> = {
	primary: "text-primary",
	secondary: "text-secondary",
	accent: "text-accent",
	neutral: "text-neutral",
	info: "text-info",
	success: "text-success",
	warning: "text-warning",
	error: "text-error",
	"base-content": "text-base-content",
};

const props = defineProps({
	icon: {
		type: Object as PropType<NonNullable<DaisyStatIconProps["icon"]>>,
		required: true,
	},
	color: {
		type: String as PropType<NonNullable<DaisyStatIconProps["color"]>>,
		default: "secondary",
	},
	size: {
		type: String as PropType<NonNullable<DaisyStatIconProps["size"]>>,
		default: "1x",
	},
	className: {
		type: String,
		default: "",
	},
});
</script>

<template>
  <div class="stat-figure" :class="[statColorClasses[props.color], props.className]">
    <FontAwesomeIcon
      :icon="props.icon"
      class="inline-block"
      :class="props.size === '1x' ? 'text-base' : textSizeClasses[props.size]"
      aria-hidden="true"
    />
  </div>
</template>
