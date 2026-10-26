<script setup lang="ts">
import type { DaisySkeletonProps } from "../interfaces/DaisySkeletonProps";

const { className } = withDefaults(defineProps<DaisySkeletonProps>(), {
	className: "",
});
</script>
<template>
  <div aria-hidden="true" :class="['skeleton h-24 w-full', className]">
    <slot />
  </div>
</template>
