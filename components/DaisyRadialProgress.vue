<script setup lang="ts">
import { computed } from "vue";
import type { DaisyRadialProgressProps } from "../interfaces/DaisyRadialProgressProps";

const props = withDefaults(defineProps<DaisyRadialProgressProps>(), {
	className: "",
	value: 0,
	max: 100,
});

const percentage = computed(() =>
	props.max > 0
		? Math.min(100, Math.max(0, (props.value / props.max) * 100))
		: 0,
);
const currentValue = computed(() =>
	Math.min(props.max, Math.max(0, props.value)),
);
</script>
<template>
  <div
    role="progressbar"
    :aria-valuenow="currentValue"
    :aria-valuemin="0"
    :aria-valuemax="props.max"
    :style="{ '--value': percentage }"
    :class="['radial-progress text-primary', props.className]"
  >
    <slot />
  </div>
</template>
