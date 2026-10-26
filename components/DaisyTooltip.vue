<script setup lang="ts">
import type { PropType } from "vue";
import { computed } from "vue";
import type { DaisyTooltipProps } from "../interfaces/DaisyTooltipProps";

const props = defineProps({
	className: {
		type: String,
		default: "",
	},
	tip: {
		type: String,
		required: true,
	},
	position: {
		type: String as PropType<NonNullable<DaisyTooltipProps["position"]>>,
		default: "top",
	},
});

const positionClass = computed(() => {
	const positions = {
		top: "tooltip-top",
		bottom: "tooltip-bottom",
		left: "tooltip-left",
		right: "tooltip-right",
	};
	return positions[props.position];
});
</script>
<template>
  <div
    :data-tip="props.tip"
    :class="['tooltip', positionClass, props.className]"
  >
    <slot />
  </div>
</template>
