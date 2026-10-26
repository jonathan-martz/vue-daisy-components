<script setup lang="ts">

const props = defineProps({
	className: {
		type: String,
		default: "",
	},
	href: {
		type: String,
		required: true,
	},
	target: {
		type: String,
	},
	rel: {
		type: String,
	},
	underline: {
		type: Boolean,
		default: true,
	},
});
</script>
<template>
  <a
    :href="props.href"
    :target="props.target"
    :rel="props.rel"
    :class="['link', { 'no-underline': !props.underline }, props.className]"
  >
    <slot />
  </a>
</template>
