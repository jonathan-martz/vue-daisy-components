<script setup lang="ts">
import { computed } from "vue";
import type { DaisyRatingProps } from "../interfaces/DaisyRatingProps";

const props = withDefaults(defineProps<DaisyRatingProps>(), {
	className: "",
	size: "md",
	max: 5,
	half: false,
	allowClear: false,
	disabled: false,
});

const emit = defineEmits<{
	"update:modelValue": [value: number];
}>();

const ratingValues = computed(() =>
	Array.from(
		{ length: props.max * (props.half ? 2 : 1) },
		(_, index) => (index + 1) / (props.half ? 2 : 1),
	),
);
</script>
<template>
  <div
    :class="['rating', `rating-${props.size}`, { 'rating-half': props.half }, props.className]"
    role="radiogroup"
    :aria-label="props.label"
  >
    <input
      v-if="props.allowClear"
      type="radio"
      :name="props.name"
      class="rating-hidden"
      value="0"
      :checked="!props.modelValue"
      :disabled="props.disabled"
      aria-label="Clear rating"
      @change="emit('update:modelValue', 0)"
    />
    <input
      v-for="value in ratingValues"
      :key="value"
      type="radio"
      :name="props.name"
      :value="value"
      :checked="props.modelValue === value"
      :disabled="props.disabled"
      :class="[
        'mask mask-star-2 bg-orange-400',
        props.half ? (value % 1 === 0.5 ? 'mask-half-1' : 'mask-half-2') : '',
      ]"
      :aria-label="`${value} star${value === 1 ? '' : 's'}`"
      @change="emit('update:modelValue', value)"
    />
  </div>
</template>
