<script setup lang="ts">
import type { DaisyBreadcrumbsProps } from "../interfaces/DaisyBreadcrumbsProps";

const { className } = withDefaults(defineProps<DaisyBreadcrumbsProps>(), {
	className: "",
});
</script>
<template>
  <nav aria-label="Breadcrumb" :class="['breadcrumbs text-sm', className]">
    <slot />
  </nav>
</template>
