<script setup lang="ts">

const props = defineProps({
	className: {
		type: String,
		default: "",
	},
	modelValue: {
		type: String,
		default: "",
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
	rows: {
		type: Number,
		default: 3,
	},
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
