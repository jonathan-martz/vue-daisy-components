<script setup lang="ts">
import { computed } from "vue";

// TypeScript Interfaces für die Props definieren
interface Props {
	modelValue: string | number;
	label: string;
	variant?: "default" | "floating";
	type?: string;
	placeholder?: string;
	disabled?: boolean;
	error?: boolean;
}

// Props mit Standardwerten (Defaults)
const props = withDefaults(defineProps<Props>(), {
	variant: "default",
	type: "text",
	placeholder: "",
	disabled: false,
	error: false,
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
			"floating-label w-full",
			{ "validator-error": props.error }, // Falls du DaisyUI Validierungs-Klassen nutzt
		];
	}

	return [
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
    <span class="label">{{ label }}</span>
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
    <span>{{ label }}</span>
  </label>
</template>