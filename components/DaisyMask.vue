<script setup lang="ts">
import type { DaisyMaskProps } from "../interfaces/DaisyMaskProps";

const { className } = withDefaults(defineProps<DaisyMaskProps>(), {
	className: "",
});
</script>
<template>
  <div :class="['mask mask-squircle w-16 h-16 bg-base-300', className]">
    <slot />
  </div>
</template>
