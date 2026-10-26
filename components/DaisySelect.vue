<script setup lang="ts">
import type { DaisySelectProps } from "../interfaces/DaisySelectProps";

const props = withDefaults(defineProps<DaisySelectProps>(), {
	className: "",
	disabled: false,
	modelValue: "",
});

const emit = defineEmits<{
	"update:modelValue": [value: string];
}>();
</script>
<template>
  <select
    :name="props.name"
    :value="props.modelValue"
    :disabled="props.disabled"
    :required="props.required"
    :class="['select', props.className]"
    @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
  >
    <slot>
      <option disabled value="">Choose</option>
    </slot>
  </select>
</template>
