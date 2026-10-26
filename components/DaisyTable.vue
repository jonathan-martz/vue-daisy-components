<script setup lang="ts">

const { className } = defineProps({
	className: {
		type: String,
		default: "",
	},
});
</script>
<template>
  <table :class="['table', className]">
    <slot />
  </table>
</template>
