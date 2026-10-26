<template>
  <section
    class="headline flex items-center justify-between"
    :class="[props.className, { 'mb-3': !props.margin }]"
  >
    <h2 class="font-bold" :class="textSizeClasses[props.titleSize ?? 'lg']">
      <slot/>
    </h2>
    <section class="actions space-x-3">
      <slot name="actions"/>
    </section>
  </section>
</template>
<script setup lang="ts">
import type { PropType } from "vue";
import { textSizeClasses } from "../utils/textSizeClasses";
import type { TextSize } from "../types/TextSize";

const props = defineProps({
	titleSize: {
		type: String as PropType<TextSize>,
	},
	className: {
		type: String,
		default: "",
	},
	margin: {
		type: Boolean,
		default: false,
	},
});
</script>