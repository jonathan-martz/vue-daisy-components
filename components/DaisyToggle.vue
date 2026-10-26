<script setup lang="ts">
import { computed } from "vue";
import type { DaisyToggleProps } from "../interfaces/DaisyToggleProps";

const props = withDefaults(defineProps<DaisyToggleProps>(), {
	className: "",
	disabled: false,
	variant: "primary",
});

const emit = defineEmits<{
	"update:modelValue": [value: boolean];
}>();

const variantClass = computed(() => {
	const variants = {
		primary: "toggle-primary",
		secondary: "toggle-secondary",
		accent: "toggle-accent",
		neutral: "toggle-neutral",
	};
	return variants[props.variant];
});
</script>
<template>
  <input
    type="checkbox"
    :name="props.name"
    :checked="props.modelValue"
    :disabled="props.disabled"
    :class="['toggle', variantClass, props.className]"
    @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
  />
</template>
