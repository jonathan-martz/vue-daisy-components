<script setup lang="ts">
import type { PropType } from "vue";
import type { DaisyStatProps } from "../interfaces/DaisyStatProps";

const props = defineProps({
	className: {
		type: String,
		default: "",
	},
	orientation: {
		type: String as PropType<NonNullable<DaisyStatProps["orientation"]>>,
		default: "horizontal",
	},
	shadow: {
		type: Boolean,
		default: true,
	},
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
