<script setup lang="ts">
import { computed } from "vue";
import type { DaisySwapProps } from "../interfaces/DaisySwapProps";

const props = withDefaults(defineProps<DaisySwapProps>(), {
	className: "",
	disabled: false,
	effect: "rotate",
});

const emit = defineEmits<{
	"update:modelValue": [value: boolean];
}>();

const effectClass = computed(() =>
	props.effect === "flip" ? "swap-flip" : "swap-rotate",
);
</script>
<template>
  <label :class="['swap', effectClass, { 'swap-active': props.modelValue }, props.className]">
    <input
      type="checkbox"
      :checked="props.modelValue"
      :disabled="props.disabled"
      @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <span class="swap-on"><slot name="on" /></span>
    <span class="swap-off"><slot name="off" /></span>
  </label>
</template>
