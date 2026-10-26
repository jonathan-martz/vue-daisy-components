<script setup lang="ts">
import { textSizeClasses } from "../utils/textSizeClasses";
import type { TextSize } from "../types/TextSize";
import type { PropType } from "vue";
import { computed } from "vue";
import type { DaisyBadgeProps } from "../interfaces/DaisyBadgeProps";

const props = defineProps({
	labelSize: {
		type: String as PropType<TextSize>,
	},
	className: {
		type: String,
		default: "",
	},
	variant: {
		type: String as PropType<NonNullable<DaisyBadgeProps["variant"]>>,
		default: "neutral",
	},
	size: {
		type: String as PropType<NonNullable<DaisyBadgeProps["size"]>>,
		default: "md",
	},
	outline: {
		type: Boolean,
		default: false,
	},
	soft: {
		type: Boolean,
		default: false,
	},
	dash: {
		type: Boolean,
		default: false,
	},
	label: {
		type: String,
	},
});

const variantClass = computed(() => `badge-${props.variant}`);
const sizeClass = computed(() => `badge-${props.size}`);
</script>

<template>
  <span
    class="badge"
    :class="[
      props.className,
      variantClass,
      sizeClass,
      props.labelSize && textSizeClasses[props.labelSize],
      {
        'badge-outline': props.outline,
        'badge-soft': props.soft,
        'badge-dash': props.dash,
      },
    ]"
  >
    <slot>{{ props.label }}</slot>
  </span>
</template>
