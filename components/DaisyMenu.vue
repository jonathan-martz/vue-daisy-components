<script setup lang="ts">
import { computed } from "vue";
import type { DaisyMenuProps } from "../interfaces/DaisyMenuProps";

const props = withDefaults(defineProps<DaisyMenuProps>(), {
	className: "",
	horizontal: false,
	size: "md",
});

const sizeClass = computed(() => {
	const sizes = {
		xs: "menu-xs",
		sm: "menu-sm",
		md: "menu-md",
		lg: "menu-lg",
		xl: "menu-xl",
	};
	return sizes[props.size];
});
</script>
<template>
  <ul :class="['menu bg-base-200 rounded-box', sizeClass, { 'menu-horizontal': props.horizontal }, props.className]">
    <slot />
  </ul>
</template>
