<script setup lang="ts">
import { computed } from "vue";
import type { DaisyTooltipProps } from "../interfaces/DaisyTooltipProps";

const props = withDefaults(defineProps<DaisyTooltipProps>(), {
	className: "",
	position: "top",
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
