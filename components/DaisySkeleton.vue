<script setup lang="ts">

const { className } = defineProps({
	className: {
		type: String,
		default: "",
	},
});
</script>
<template>
  <div aria-hidden="true" :class="['skeleton h-24 w-full', className]">
    <slot />
  </div>
</template>
