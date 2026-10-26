<script setup lang="ts">
import type { PropType } from "vue";
import type { DaisyAvatarProps } from "../interfaces/DaisyAvatarProps";

const props = defineProps({
	className: {
		type: String,
		default: "",
	},
	src: {
		type: String,
	},
	alt: {
		type: String,
	},
	initials: {
		type: String,
	},
	status: {
		type: String as PropType<NonNullable<DaisyAvatarProps["status"]>>,
	},
	placeholder: {
		type: Boolean,
		default: false,
	},
});
</script>
<template>
  <div :class="['avatar', props.status, { 'avatar-placeholder': props.placeholder }, props.className]">
    <slot>
      <div
        :class="[
          'w-12 rounded-full',
          props.placeholder ? 'bg-neutral text-neutral-content' : '',
        ]"
      >
        <img v-if="props.src" :src="props.src" :alt="props.alt" />
        <span v-else-if="props.initials" aria-hidden="true">{{ props.initials }}</span>
      </div>
    </slot>
  </div>
</template>
