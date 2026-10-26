<script setup lang="ts">
import type { PropType } from "vue";
import type { DaisyCheckboxProps } from "../interfaces/DaisyCheckboxProps";

const props = defineProps({
	className: {
		type: String,
		default: "",
	},
	modelValue: {
		type: Boolean,
	},
	name: {
		type: String,
	},
	value: {
		type: [String, Number] as PropType<NonNullable<DaisyCheckboxProps["value"]>>,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits<{
	"update:modelValue": [value: boolean];
}>();
</script>
<template>
  <input
    type="checkbox"
    :name="props.name"
    :value="props.value"
    :checked="props.modelValue"
    :disabled="props.disabled"
    :class="['checkbox', props.className]"
    @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
  />
</template>
