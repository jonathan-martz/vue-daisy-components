<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
	className: {
		type: String,
		default: "",
	},
	modelValue: {
		type: String,
		default: "",
	},
	type: {
		type: String,
		default: "text",
	},
	name: {
		type: String,
	},
	placeholder: {
		type: String,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	required: {
		type: Boolean,
	},
	readonly: {
		type: Boolean,
	},
	invalid: {
		type: Boolean,
		default: false,
	},
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
