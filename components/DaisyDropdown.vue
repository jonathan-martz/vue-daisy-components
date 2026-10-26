<script setup lang="ts">
import { computed, ref, watch } from "vue";
import type { DaisyDropdownProps } from "../interfaces/DaisyDropdownProps";

const props = withDefaults(defineProps<DaisyDropdownProps>(), {
	className: "",
	position: "bottom",
});

const isOpen = ref(props.open ?? false);
watch(
	() => props.open,
	(open) => {
		if (open !== undefined) isOpen.value = open;
	},
);

const emit = defineEmits<{
	"update:open": [open: boolean];
}>();

const positionClass = computed(() => {
	const positions = {
		top: "dropdown-top",
		bottom: "dropdown-bottom",
		left: "dropdown-left",
		right: "dropdown-right",
		end: "dropdown-end",
	};
	return positions[props.position];
});

const updateOpen = (event: Event) => {
	isOpen.value = (event.currentTarget as HTMLDetailsElement).open;
	emit("update:open", isOpen.value);
};
</script>
<template>
  <details
    :open="isOpen"
    :class="['dropdown', positionClass, props.className]"
    @toggle="updateOpen"
  >
    <summary class="btn">
      <slot name="trigger">Open</slot>
    </summary>
    <div tabindex="0" class="dropdown-content z-10">
      <slot />
    </div>
  </details>
</template>
