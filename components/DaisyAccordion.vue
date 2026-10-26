<script setup lang="ts">
import type { PropType } from "vue";
import type { DaisyAccordionProps } from "../interfaces/DaisyAccordionProps";

const props = defineProps({
	className: {
		type: String,
		default: "",
	},
	items: {
		type: Array as PropType<NonNullable<DaisyAccordionProps["items"]>>,
		default: () => [],
	},
	name: {
		type: String,
	},
});
</script>
<template>
  <div :class="['space-y-2', props.className]">
    <details
      v-for="(item, index) in props.items"
      :key="`${props.name ?? 'accordion'}-${index}`"
      :name="props.name"
      class="collapse collapse-arrow border border-base-300"
    >
      <summary class="collapse-title font-semibold">{{ item.title }}</summary>
      <div class="collapse-content text-sm">{{ item.content }}</div>
    </details>
    <slot v-if="props.items.length === 0" />
  </div>
</template>
