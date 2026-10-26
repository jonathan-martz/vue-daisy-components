<script setup lang="ts">
import { computed } from "vue";
import type { DaisyDividerProps } from "../interfaces/DaisyDividerProps";

const props = withDefaults(defineProps<DaisyDividerProps>(), {
	className: "",
	orientation: "horizontal",
});

const orientationClass = computed(() =>
	props.orientation === "vertical" ? "divider-vertical" : "divider-horizontal",
);
</script>
<template>
  <div
    :class="['divider', orientationClass, props.className]"
    role="separator"
    :aria-orientation="props.orientation"
  >
    <slot>{{ props.label }}</slot>
  </div>
</template>
