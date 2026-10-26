<script setup lang="ts">
import type { DaisyTableProps } from "../interfaces/DaisyTableProps";

const { className } = withDefaults(defineProps<DaisyTableProps>(), {
	className: "",
});
</script>
<template>
  <table :class="['table', className]">
    <slot />
  </table>
</template>
