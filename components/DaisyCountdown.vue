<script setup lang="ts">
import { computed } from "vue";
import type { DaisyCountdownProps } from "../interfaces/DaisyCountdownProps";

const props = withDefaults(defineProps<DaisyCountdownProps>(), {
	className: "",
});

const countdownValue = computed(() =>
	Math.min(999, Math.max(0, Math.trunc(props.value ?? 0))),
);
</script>
<template>
  <span
    :aria-label="props.label"
    :class="['countdown font-mono text-2xl', props.className]"
  ><span
    v-if="props.value !== undefined"
    :style="{ '--value': countdownValue }"
    :aria-label="props.label ?? String(countdownValue)"
  >{{ countdownValue }}</span><slot v-else /></span>
</template>
