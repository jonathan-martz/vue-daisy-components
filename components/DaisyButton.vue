<script setup lang="ts">
import { textSizeClasses } from "../utils/textSizeClasses";
import type { TextSize } from "../types/TextSize";
import type { PropType } from "vue";
import { computed } from "vue";
import type { DaisyButtonProps } from "../interfaces/DaisyButtonProps";

const props = defineProps({
	textSize: {
		type: String as PropType<TextSize>,
	},
	className: {
		type: String,
		default: "",
	},
	variant: {
		type: String as PropType<NonNullable<DaisyButtonProps["variant"]>>,
		default: "primary",
	},
	size: {
		type: String as PropType<NonNullable<DaisyButtonProps["size"]>>,
	},
	responsiveSize: {
		type: Object as PropType<NonNullable<DaisyButtonProps["responsiveSize"]>>,
	},
	outline: {
		type: Boolean,
		default: false,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	loading: {
		type: Boolean,
		default: false,
	},
	block: {
		type: Boolean,
		default: false,
	},
	circle: {
		type: Boolean,
		default: false,
	},
	square: {
		type: Boolean,
		default: false,
	},
	active: {
		type: Boolean,
		default: false,
	},
	type: {
		type: String as PropType<NonNullable<DaisyButtonProps["type"]>>,
		default: "button",
	},
});

const emit = defineEmits<{
	click: [event: MouseEvent];
}>();

const variantClass = computed(() => `btn-${props.variant}`);

const sizeClass = computed(() =>
	props.size ? `btn-${props.size}` : undefined,
);

const buttonClasses = computed(() => {
	return [
		props.className,
		variantClass.value,
		sizeClass.value,
		props.textSize && textSizeClasses[props.textSize],
		...responsiveSizeClasses.value,
		{
			"btn-outline": props.outline,
			"btn-block": props.block,
			"btn-circle": props.circle,
			"btn-square": props.square,
			"btn-active": props.active,
		},
	];
});

const responsiveSizeClasses = computed(() => {
	const classes: string[] = [];
	const sizes = props.responsiveSize ?? (props.size ? {} : { md: "md" as const });
	for (const [breakpoint, size] of Object.entries(sizes)) {
		if (size) classes.push(`${breakpoint}:btn-${size}`);
	}

	return classes;
});
</script>

<template>
  <button
      class="btn"
      :class="buttonClasses"
      :disabled="props.disabled || props.loading"
      :aria-busy="props.loading"
      :type="props.type"
      @click="emit('click', $event)"
  >
    <span v-if="props.loading" class="loading loading-spinner loading-sm" />
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </button>
</template>
