<script setup lang="ts">
import type { DaisyStatImageProps } from "../interfaces/DaisyStatImageProps";

const props = defineProps({
	src: {
		type: String,
		required: true,
	},
	alt: {
		type: String,
		default: "",
	},
	className: {
		type: String,
		default: "",
	},
});
</script>

<template>
  <div class="stat-figure" :class="props.className">
    <img :src="props.src" :alt="props.alt" class="inline-block h-8 w-8 object-cover" />
  </div>
</template>
