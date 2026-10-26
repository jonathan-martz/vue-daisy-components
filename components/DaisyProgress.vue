<script setup lang="ts">

const props = defineProps({
	className: {
		type: String,
		default: "",
	},
	value: {
		type: Number,
	},
	max: {
		type: Number,
		default: 100,
	},
});
</script>
<template>
  <progress
    :value="props.value"
    :max="props.max"
    :class="['progress progress-primary w-full', props.className]"
  ><slot /></progress>
</template>
