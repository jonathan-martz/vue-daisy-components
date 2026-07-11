<script setup lang="ts">
import type { DaisyToggleProps } from "../interfaces/DaisyToggleProps";

const { className } = withDefaults(defineProps<DaisyToggleProps>(), {
	className: "",
});
</script>
<template>
  <input type="checkbox" :class="['toggle toggle-primary', className]" />
</template>
