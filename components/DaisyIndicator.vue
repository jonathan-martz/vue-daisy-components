<script setup lang="ts">
import type { PropType } from "vue";
import { computed } from "vue";
import type { DaisyIndicatorProps } from "../interfaces/DaisyIndicatorProps";

const props = defineProps({
	className: {
		type: String,
		default: "",
	},
	position: {
		type: String as PropType<NonNullable<DaisyIndicatorProps["position"]>>,
		default: "top-end",
	},
});

const positionClass = computed(() => {
	const positions = {
		"top-start": "indicator-top indicator-start",
		"top-center": "indicator-top indicator-center",
		"top-end": "indicator-top indicator-end",
		"middle-start": "indicator-middle indicator-start",
		"middle-center": "indicator-middle indicator-center",
		"middle-end": "indicator-middle indicator-end",
		"bottom-start": "indicator-bottom indicator-start",
		"bottom-center": "indicator-bottom indicator-center",
		"bottom-end": "indicator-bottom indicator-end",
	};
	return positions[props.position];
});
</script>
<template>
  <div :class="['indicator', positionClass, props.className]">
    <span v-if="$slots.indicator" class="indicator-item">
      <slot name="indicator" />
    </span>
    <slot />
  </div>
</template>
