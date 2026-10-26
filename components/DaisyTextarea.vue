<script setup lang="ts">
import type { DaisyTextareaProps } from "../interfaces/DaisyTextareaProps";

const props = withDefaults(defineProps<DaisyTextareaProps>(), {
	className: "",
	disabled: false,
	rows: 3,
	modelValue: "",
});

const emit = defineEmits<{
	"update:modelValue": [value: string];
}>();
</script>
<template>
  <textarea
    :name="props.name"
    :value="props.modelValue"
    :placeholder="props.placeholder"
    :disabled="props.disabled"
    :required="props.required"
    :rows="props.rows"
    :class="['textarea', props.className]"
    @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
  />
</template>
