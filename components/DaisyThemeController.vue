<script setup lang="ts">
import { computed } from "vue";
import type { DaisyThemeControllerProps } from "../interfaces/DaisyThemeControllerProps";

const props = withDefaults(defineProps<DaisyThemeControllerProps>(), {
	className: "",
	type: "checkbox",
	value: "dark",
	disabled: false,
});

const emit = defineEmits<{
	"update:modelValue": [value: string | boolean];
}>();

const controlClass = computed(() =>
	props.type === "radio" ? "radio" : "toggle",
);

const checked = computed(() =>
	typeof props.modelValue === "boolean"
		? props.modelValue
		: props.modelValue === props.value,
);

const updateValue = (event: Event) => {
	const input = event.target as HTMLInputElement;
	emit(
		"update:modelValue",
		props.type === "radio" ? input.value : input.checked,
	);
};
</script>
<template>
  <input
    :type="props.type"
    :name="props.name"
    :value="props.value"
    :checked="checked"
    :disabled="props.disabled"
    :class="[controlClass, 'theme-controller', props.className]"
    @change="updateValue"
  />
</template>
