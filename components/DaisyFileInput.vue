<script setup lang="ts">

const props = defineProps({
	className: {
		type: String,
		default: "",
	},
	name: {
		type: String,
	},
	accept: {
		type: String,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	multiple: {
		type: Boolean,
		default: false,
	},
	required: {
		type: Boolean,
	},
});
</script>
<template>
  <input
    type="file"
    :name="props.name"
    :accept="props.accept"
    :disabled="props.disabled"
    :multiple="props.multiple"
    :required="props.required"
    :class="['file-input', props.className]"
  />
</template>
