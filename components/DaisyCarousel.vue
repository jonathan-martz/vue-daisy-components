<script setup lang="ts">

const props = defineProps({
	className: {
		type: String,
		default: "",
	},
	label: {
		type: String,
	},
});
</script>
<template>
  <div
    role="region"
    :aria-label="props.label"
    :class="['carousel rounded-box', props.className]"
  >
    <slot />
  </div>
</template>
