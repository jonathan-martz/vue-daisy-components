<script setup lang="ts">
import type { PropType } from "vue";
import type { DaisyJoinProps } from "../interfaces/DaisyJoinProps";

const props = defineProps({
	className: {
		type: String,
		default: "",
	},
	orientation: {
		type: String as PropType<NonNullable<DaisyJoinProps["orientation"]>>,
		default: "horizontal",
	},
});
</script>
<template>
  <div
    :class="[
      'join',
      props.orientation === 'vertical' ? 'join-vertical' : 'join-horizontal',
      props.className,
    ]"
  >
    <slot />
  </div>
</template>
