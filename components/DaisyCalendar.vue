<script setup lang="ts">
import type { DaisyCalendarProps } from "../interfaces/DaisyCalendarProps";

const props = withDefaults(defineProps<DaisyCalendarProps>(), {
	className: "",
	disabled: false,
	modelValue: "",
});

const emit = defineEmits<{
	"update:modelValue": [value: string];
}>();
</script>
<template>
  <div :class="['bg-base-100 rounded-box p-4', props.className]">
    <slot>
      <input
        type="date"
        :name="props.name"
        :value="props.modelValue"
        :min="props.min"
        :max="props.max"
        :disabled="props.disabled"
        :class="['input', props.inputClassName]"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
    </slot>
  </div>
</template>
