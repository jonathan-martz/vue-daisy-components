<script setup lang="ts">
import type { PropType } from "vue";
import type { DaisyRadioProps } from "../interfaces/DaisyRadioProps";

const props = defineProps({
	className: {
		type: String,
		default: "",
	},
	modelValue: {
		type: [String, Number] as PropType<NonNullable<DaisyRadioProps["modelValue"]>>,
	},
	value: {
		type: [String, Number] as PropType<NonNullable<DaisyRadioProps["value"]>>,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits<{
	"update:modelValue": [value: string | number];
}>();
</script>
<template>
  <input
    type="radio"
    :name="props.name"
    :value="props.value"
    :checked="props.modelValue === props.value"
    :disabled="props.disabled"
    :class="['radio', props.className]"
    @change="emit('update:modelValue', props.value)"
  />
</template>
