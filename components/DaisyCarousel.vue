<script setup lang="ts">
import type { DaisyCarouselProps } from "../interfaces/DaisyCarouselProps";

const props = withDefaults(defineProps<DaisyCarouselProps>(), {
	className: "",
});
</script>
<template>
  <div
    role="region"
    :aria-label="props.label"
    :class="['carousel rounded-box', props.className]"
  >
    <slot />
  </div>
</template>
