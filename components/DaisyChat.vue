<script setup lang="ts">
import { computed } from "vue";
import type { DaisyChatProps } from "../interfaces/DaisyChatProps";

const props = withDefaults(defineProps<DaisyChatProps>(), {
	className: "",
	position: "start",
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
