<script setup lang="ts">
import { computed } from "vue";
import type { DaisyBadgeProps } from "../types/badge";

const props = withDefaults(defineProps<DaisyBadgeProps>(), {
	className: "",
	variant: "neutral",
	size: "md",
	outline: false,
	soft: false,
	dash: false,
});

const variantClass = computed(() => `badge-${props.variant}`);
const sizeClass = computed(() => `badge-${props.size}`);
</script>

<template>
  <span
    class="badge"
    :class="[
      props.className,
      variantClass,
      sizeClass,
      {
        'badge-outline': props.outline,
        'badge-soft': props.soft,
        'badge-dash': props.dash,
      },
    ]"
  >
    <slot>{{ props.label }}</slot>
  </span>
</template>
