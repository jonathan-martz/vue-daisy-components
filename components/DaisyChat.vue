<script setup lang="ts">
import type { PropType } from "vue";
import { computed } from "vue";
import type { DaisyChatProps } from "../interfaces/DaisyChatProps";

const props = defineProps({
	className: {
		type: String,
		default: "",
	},
	position: {
		type: String as PropType<NonNullable<DaisyChatProps["position"]>>,
		default: "start",
	},
});

const positionClass = computed(() =>
	props.position === "end" ? "chat-end" : "chat-start",
);
</script>
<template>
  <div :class="['chat', positionClass, props.className]">
    <slot />
  </div>
</template>
