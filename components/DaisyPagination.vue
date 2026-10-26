<script setup lang="ts">

const { className } = defineProps({
	className: {
		type: String,
		default: "",
	},
});
</script>
<template>
  <nav aria-label="Pagination" :class="['join', className]">
    <slot />
  </nav>
</template>
