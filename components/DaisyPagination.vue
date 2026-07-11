<script setup lang="ts">
import type { DaisyPaginationProps } from "../interfaces/DaisyPaginationProps";

const { className } = withDefaults(defineProps<DaisyPaginationProps>(), {
	className: "",
});
</script>
<template>
  <div :class="['join', className]">
    <slot />
  </div>
</template>
