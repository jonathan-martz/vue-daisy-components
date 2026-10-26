<script setup lang="ts">

const { className } = defineProps({
	className: {
		type: String,
		default: "",
	},
});
</script>
<template>
  <nav aria-label="Bottom navigation" :class="['dock', className]">
    <slot />
  </nav>
</template>
