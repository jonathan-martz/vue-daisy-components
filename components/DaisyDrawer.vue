<script setup lang="ts">
import { ref, watch } from "vue";
import type { DaisyDrawerProps } from "../interfaces/DaisyDrawerProps";

const props = withDefaults(defineProps<DaisyDrawerProps>(), {
	className: "",
	side: "start",
});

const internalOpen = ref(props.open ?? false);
watch(
	() => props.open,
	(open) => {
		if (open !== undefined) internalOpen.value = open;
	},
);

const emit = defineEmits<{
	"update:open": [open: boolean];
}>();

const updateOpen = (event: Event) => {
	internalOpen.value = (event.target as HTMLInputElement).checked;
	emit("update:open", internalOpen.value);
};
</script>
<template>
  <div :class="['drawer', { 'drawer-end': props.side === 'end' }, props.className]">
    <input
      :id="props.id"
      type="checkbox"
      class="drawer-toggle"
      :checked="internalOpen"
      @change="updateOpen"
    />
    <div class="drawer-content">
      <slot v-if="$slots.content" name="content" />
      <slot v-else />
    </div>
    <div class="drawer-side">
      <label :for="props.id" aria-label="Close navigation" class="drawer-overlay" />
      <slot name="sidebar" />
    </div>
  </div>
</template>
