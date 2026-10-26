<script setup lang="ts">

const { className } = defineProps({
	className: {
		type: String,
		default: "",
	},
});
</script>
<template>
  <kbd :class="['kbd', className]">
    <slot />
  </kbd>
</template>
