<script setup lang="ts">
import type { DaisyBottomNavigationProps } from "../interfaces/DaisyBottomNavigationProps";

const { className } = withDefaults(defineProps<DaisyBottomNavigationProps>(), {
	className: "",
});
</script>
<template>
  <nav aria-label="Bottom navigation" :class="['dock', className]">
    <slot />
  </nav>
</template>
