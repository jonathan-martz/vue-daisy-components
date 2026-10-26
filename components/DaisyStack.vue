<script setup lang="ts">

const props = defineProps({
	className: {
		type: String,
		default: "",
	},
	widthClass: {
		type: String,
		default: "",
	},
	heightClass: {
		type: String,
		default: "",
	},
});
</script>
<template>
  <div :class="['stack', props.widthClass, props.heightClass, props.className]">
    <slot />
  </div>
</template>
