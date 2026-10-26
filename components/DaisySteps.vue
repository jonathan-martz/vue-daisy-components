<script setup lang="ts">
import { computed } from "vue";
import type { DaisyStepsProps } from "../interfaces/DaisyStepsProps";

const props = withDefaults(defineProps<DaisyStepsProps>(), {
	className: "",
	orientation: "horizontal",
});

const orientationClass = computed(() =>
	props.orientation === "vertical" ? "steps-vertical" : "steps-horizontal",
);
</script>
<template>
  <ul :class="['steps w-full', orientationClass, props.className]">
    <slot />
  </ul>
</template>
