<script setup lang="ts">
import type { DaisyRangeProps } from "../interfaces/DaisyRangeProps";

const props = withDefaults(defineProps<DaisyRangeProps>(), {
	className: "",
	min: 0,
	max: 100,
	step: 1,
	disabled: false,
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
