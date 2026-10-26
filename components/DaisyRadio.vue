<script setup lang="ts">
import type { DaisyRadioProps } from "../interfaces/DaisyRadioProps";

const props = withDefaults(defineProps<DaisyRadioProps>(), {
	className: "",
	disabled: false,
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
