<script setup lang="ts">
import type { DaisyArtboardProps } from "../interfaces/DaisyArtboardProps";

const { className } = withDefaults(defineProps<DaisyArtboardProps>(), {
	className: "",
});
</script>
<template>
  <div :class="['artboard artboard-horizontal phone-1', className]">
    <slot />
  </div>
</template>
