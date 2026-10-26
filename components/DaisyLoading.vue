<script setup lang="ts">
import { computed } from "vue";
import type { DaisyLoadingProps } from "../interfaces/DaisyLoadingProps";

const props = withDefaults(defineProps<DaisyLoadingProps>(), {
	className: "",
	variant: "spinner",
	size: "md",
});

const loadingClasses = computed(() => [
	"loading",
	`loading-${props.variant}`,
	`loading-${props.size}`,
	props.className,
]);
</script>
<template>
  <span role="status" aria-label="Loading" :class="loadingClasses" />
</template>
