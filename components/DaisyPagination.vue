<script setup lang="ts">
import type { DaisyPaginationProps } from "../interfaces/DaisyPaginationProps";

const { className } = withDefaults(defineProps<DaisyPaginationProps>(), {
	className: "",
});
</script>
<template>
  <nav aria-label="Pagination" :class="['join', className]">
    <slot />
  </nav>
</template>
