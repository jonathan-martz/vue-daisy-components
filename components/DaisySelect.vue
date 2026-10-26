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
	disabled: {
		type: Boolean,
		default: false,
	},
	required: {
		type: Boolean,
	},
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
