<script setup lang="ts">
import type { PropType } from "vue";
import { computed } from "vue";
import type { DaisyLoadingProps } from "../interfaces/DaisyLoadingProps";

const props = defineProps({
	className: {
		type: String,
		default: "",
	},
	variant: {
		type: String as PropType<NonNullable<DaisyLoadingProps["variant"]>>,
		default: "spinner",
	},
	size: {
		type: String as PropType<NonNullable<DaisyLoadingProps["size"]>>,
		default: "md",
	},
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
