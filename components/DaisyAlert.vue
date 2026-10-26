<script setup lang="ts">
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
      <p v-if="props.title" class="font-semibold">{{ props.title }}</p>
      <slot>
        <p v-if="props.message">{{ props.message }}</p>
      </slot>
    </div>
    <button v-if="props.dismissible" type="button" class="btn btn-ghost btn-sm" @click="isVisible = false">
      <FontAwesomeIcon :icon="faXmark" />
    </button>
  </div>
</template>
