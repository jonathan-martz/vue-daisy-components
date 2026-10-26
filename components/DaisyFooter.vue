<script setup lang="ts">

const { className } = defineProps({
	className: {
		type: String,
		default: "",
	},
});
</script>
<template>
  <footer :class="['footer p-4 bg-base-200 text-base-content', className]">
    <slot />
  </footer>
</template>
