<script setup lang="ts">
import type { DaisyCheckboxProps } from "../interfaces/DaisyCheckboxProps";

const props = withDefaults(defineProps<DaisyCheckboxProps>(), {
	className: "",
	disabled: false,
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
