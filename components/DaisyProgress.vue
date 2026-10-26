<script setup lang="ts">
import type { DaisyProgressProps } from "../interfaces/DaisyProgressProps";

const props = withDefaults(defineProps<DaisyProgressProps>(), {
	className: "",
	max: 100,
});
</script>
<template>
  <progress
    :value="props.value"
    :max="props.max"
    :class="['progress progress-primary w-full', props.className]"
  ><slot /></progress>
</template>
