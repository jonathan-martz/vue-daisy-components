<script setup lang="ts">

const { className } = defineProps({
	className: {
		type: String,
		default: "",
	},
});
</script>
<template>
  <nav aria-label="Breadcrumb" :class="['breadcrumbs text-sm', className]">
    <slot />
  </nav>
</template>
