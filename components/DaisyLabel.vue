<script setup lang="ts">
import { textSizeClasses } from "../utils/textSizeClasses";
import type { TextSize } from "../types/TextSize";
import type { PropType } from "vue";
import { computed } from "vue";
import type { DaisyLabelProps } from "../interfaces/DaisyLabelProps";

// Props mit Standardwerten (Defaults)
const props = defineProps({
	labelSize: {
		type: String as PropType<TextSize>,
	},
	className: {
		type: String,
		default: "",
	},
	modelValue: {
		type: [String, Number] as PropType<NonNullable<DaisyLabelProps["modelValue"]>>,
		required: true,
	},
	label: {
		type: String,
		required: true,
	},
	variant: {
		type: String as PropType<NonNullable<DaisyLabelProps["variant"]>>,
		default: "default",
	},
	type: {
		type: String,
		default: "text",
	},
	placeholder: {
		type: String,
		default: "",
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	error: {
		type: Boolean,
		default: false,
	},
});

// Emits für das v-model Binding
const emit = defineEmits<(e: "update:modelValue", value: string) => void>();

// Computed Property für den Wert (Getter / Setter für v-model)
const inputValue = computed({
	get: () => props.modelValue.toString(),
	set: (value) => emit("update:modelValue", value),
});

// Dynamische Klassen für den umschließenden Container berechnen
const containerClasses = computed(() => {
	if (props.variant === "floating") {
		return [
			props.className,
			"floating-label w-full",
			{ "validator-error": props.error }, // Falls du DaisyUI Validierungs-Klassen nutzt
		];
	}

	return [
		props.className,
		"input w-full", // Basis-Klasse für Inputs, die als Wrapper für Labels dienen
		{
			"input-error": props.error,
			"input-disabled": props.disabled,
		},
	];
});
</script>

<template>
  <label v-if="variant === 'default'" :class="containerClasses">
    <span class="label" :class="props.labelSize && textSizeClasses[props.labelSize]">{{ label }}</span>
    <input
        v-model="inputValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
    />
  </label>

  <label v-else-if="variant === 'floating'" :class="containerClasses">
    <input
        v-model="inputValue"
        :type="type"
        :placeholder="placeholder || label"
        :disabled="disabled"
        class="input w-full"
        :class="{ 'input-error': error }"
    />
    <span :class="props.labelSize && textSizeClasses[props.labelSize]">{{ label }}</span>
  </label>
</template>