<script setup lang="ts">

const { className } = defineProps({
	className: {
		type: String,
		default: "",
	},
});
</script>
<template>
  <nav :class="['navbar bg-base-100 rounded-box shadow-sm', className]">
    <slot />
  </nav>
</template>
