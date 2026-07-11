<script setup lang="ts">
import type { DaisyNavbarProps } from "../interfaces/DaisyNavbarProps";

const { className } = withDefaults(defineProps<DaisyNavbarProps>(), {
	className: "",
});
</script>
<template>
  <div :class="['navbar bg-base-100 rounded-box shadow-sm', className]">
    <slot />
  </div>
</template>
