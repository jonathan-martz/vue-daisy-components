<script setup lang="ts">

const { className } = defineProps({
	className: {
		type: String,
		default: "",
	},
});
</script>
<template>
  <div :class="['tabs tabs-box', className]" role="tablist">
    <slot />
  </div>
</template>
