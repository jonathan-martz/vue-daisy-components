<script setup lang="ts">
import type { DaisyCalendarProps } from "../interfaces/DaisyCalendarProps";

const { className } = withDefaults(defineProps<DaisyCalendarProps>(), {
	className: "",
});
</script>
<template>
  <div :class="['bg-base-100 rounded-box p-4', className]">
    <slot />
  </div>
</template>
