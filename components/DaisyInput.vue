<script setup lang="ts">
import { computed } from "vue";
import type { DaisyInputProps } from "../interfaces/DaisyInputProps";

const props = withDefaults(defineProps<DaisyInputProps>(), {
	className: "",
	type: "text",
	disabled: false,
	invalid: false,
	modelValue: "",
});

const emit = defineEmits<{
	"update:modelValue": [value: string];
}>();

const inputClasses = computed(() => [
	"input",
	props.className,
	{ "input-error": props.invalid },
]);
</script>
<template>
  <input
    :type="props.type"
    :name="props.name"
    :value="props.modelValue"
    :placeholder="props.placeholder"
    :disabled="props.disabled"
    :required="props.required"
    :readonly="props.readonly"
    :aria-invalid="props.invalid"
    :class="inputClasses"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>
