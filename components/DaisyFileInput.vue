<script setup lang="ts">
import type { DaisyFileInputProps } from "../interfaces/DaisyFileInputProps";

const props = withDefaults(defineProps<DaisyFileInputProps>(), {
	className: "",
	disabled: false,
	multiple: false,
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
