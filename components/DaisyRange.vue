<script setup lang="ts">

const props = defineProps({
	className: {
		type: String,
		default: "",
	},
	modelValue: {
		type: Number,
	},
	name: {
		type: String,
	},
	min: {
		type: Number,
		default: 0,
	},
	max: {
		type: Number,
		default: 100,
	},
	step: {
		type: Number,
		default: 1,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits<{
	"update:modelValue": [value: number];
}>();
</script>
<template>
  <input
    type="range"
    :name="props.name"
    :value="props.modelValue"
    :min="props.min"
    :max="props.max"
    :step="props.step"
    :disabled="props.disabled"
    :class="['range range-primary w-full', props.className]"
    @input="emit('update:modelValue', Number(($event.target as HTMLInputElement).value))"
  />
</template>
