<script setup lang="ts">
import { textSizeClasses } from "../utils/textSizeClasses";
import type { TextSize } from "../types/TextSize";
import type { PropType } from "vue";
import {
	faCircleCheck,
	faCircleInfo,
	faCircleXmark,
	faTriangleExclamation,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed, ref } from "vue";
import type { DaisyAlertProps } from "../interfaces/DaisyAlertProps";

const props = defineProps({
	titleSize: {
		type: String as PropType<TextSize>,
	},
	messageSize: {
		type: String as PropType<TextSize>,
	},
	closeSize: {
		type: String as PropType<TextSize>,
	},
	className: {
		type: String,
		default: "",
	},
	variant: {
		type: String as PropType<NonNullable<DaisyAlertProps["variant"]>>,
		default: "info",
	},
	title: {
		type: String,
	},
	message: {
		type: String,
	},
	dismissible: {
		type: Boolean,
		default: false,
	},
});

const isVisible = ref(true);

const variantClass = computed(() => `alert-${props.variant}`);

const icon = computed(() => {
	if (props.variant === "success") return faCircleCheck;
	if (props.variant === "warning") return faTriangleExclamation;
	if (props.variant === "error") return faCircleXmark;
	return faCircleInfo;
});
</script>

<template>
  <div v-if="isVisible" role="alert" class="alert" :class="[props.className, variantClass]">
    <slot name="icon">
      <FontAwesomeIcon :icon="icon" class="text-lg" />
    </slot>
    <div>
      <p v-if="props.title" class="font-semibold" :class="props.titleSize && textSizeClasses[props.titleSize]">{{ props.title }}</p>
      <div :class="props.messageSize && textSizeClasses[props.messageSize]">
        <slot>
          <p v-if="props.message">{{ props.message }}</p>
        </slot>
      </div>
    </div>
    <button v-if="props.dismissible" type="button" class="btn btn-ghost btn-sm" :class="props.closeSize && textSizeClasses[props.closeSize]" aria-label="Close" @click="isVisible = false">
      <FontAwesomeIcon :icon="faXmark" />
    </button>
  </div>
</template>
