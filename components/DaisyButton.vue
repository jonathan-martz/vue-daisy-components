<script setup lang="ts">
import { computed } from "vue";
import type { DaisyButtonProps } from "../interfaces/DaisyButtonProps";

const props = withDefaults(defineProps<DaisyButtonProps>(), {
	className: "",
	variant: "primary",
	outline: false,
	disabled: false,
	loading: false,
	block: false,
	circle: false,
	square: false,
	active: false,
	type: "button",
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
