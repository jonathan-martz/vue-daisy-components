<script setup lang="ts">
import { computed } from "vue";
import type { DaisyArtboardProps } from "../interfaces/DaisyArtboardProps";

const props = withDefaults(defineProps<DaisyArtboardProps>(), {
	className: "",
	orientation: "portrait",
	size: "medium",
	showNotch: true,
});

const deviceSizeClasses = computed(() => {
	const sizes = {
		small: {
			portrait: "max-w-56",
			landscape: "max-w-md",
		},
		medium: {
			portrait: "max-w-72",
			landscape: "max-w-xl",
		},
		large: {
			portrait: "max-w-96",
			landscape: "max-w-3xl",
		},
	};

	return sizes[props.size][props.orientation];
});

const orientationClasses = computed(() =>
	props.orientation === "portrait"
		? "aspect-[9/19] flex-col"
		: "aspect-[19/9] flex-row",
);

const notchClasses = computed(() =>
	props.orientation === "portrait"
		? "left-1/2 top-0 h-4 w-24 -translate-x-1/2 rounded-b-xl"
		: "left-0 top-1/2 h-24 w-4 -translate-y-1/2 rounded-r-xl",
);
</script>
<template>
  <div
    role="group"
    :aria-label="props.orientation === 'portrait' ? 'Phone preview' : 'Landscape phone preview'"
    :class="[
      'relative mx-auto w-full overflow-hidden rounded-[2.5rem] border-[10px] border-neutral bg-neutral p-1 shadow-xl',
      deviceSizeClasses,
      orientationClasses,
      props.className,
    ]"
  >
    <div
      v-if="props.showNotch"
      aria-hidden="true"
      :class="['absolute z-10 bg-neutral', notchClasses]"
    />
    <div class="h-full w-full overflow-auto rounded-[1.75rem] bg-base-100">
      <slot />
    </div>
  </div>
</template>
