<script setup lang="ts">
import type { DaisyStatProps } from "../interfaces/DaisyStatProps";

const props = withDefaults(defineProps<DaisyStatProps>(), {
	className: "",
	orientation: "horizontal",
	shadow: true,
});
</script>
<template>
  <div
    :class="[
      'stats',
      {
        'stats-vertical': props.orientation === 'vertical',
        shadow: props.shadow,
      },
      props.className,
    ]"
  >
    <slot />
  </div>
</template>
