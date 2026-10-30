<script setup lang="ts">
import type { PropType } from "vue";
import type { DaisyStatProps } from "../interfaces/DaisyStatProps";
import { textSizeClasses } from "../utils/textSizeClasses";
import type { StatColor } from "../types/StatColor";

const statColorClasses: Record<StatColor, string> = {
	primary: "text-primary",
	secondary: "text-secondary",
	accent: "text-accent",
	neutral: "text-neutral",
	info: "text-info",
	success: "text-success",
	warning: "text-warning",
	error: "text-error",
	"base-content": "text-base-content",
};

const props = defineProps({
	className: {
		type: String,
		default: "",
	},
	orientation: {
		type: String as PropType<NonNullable<DaisyStatProps["orientation"]>>,
		default: "horizontal",
	},
	shadow: {
		type: Boolean,
		default: true,
	},
	title: {
		type: String,
	},
	titleColor: {
		type: String as PropType<StatColor>,
	},
	titleSize: {
		type: String as PropType<NonNullable<DaisyStatProps["titleSize"]>>,
	},
	value: {
		type: [String, Number],
	},
	valueColor: {
		type: String as PropType<StatColor>,
	},
	valueSize: {
		type: String as PropType<NonNullable<DaisyStatProps["valueSize"]>>,
	},
	desc: {
		type: String,
	},
	descColor: {
		type: String as PropType<StatColor>,
	},
	descSize: {
		type: String as PropType<NonNullable<DaisyStatProps["descSize"]>>,
	},
});
</script>
<template>
  <div
    :class="[
      'stats',
      {
        'stats-vertical': props.orientation === 'vertical',
        shadow: props.shadow,
      },
      props.className,
    ]"
  >
    <div v-if="props.title || props.value !== undefined || props.desc || $slots.figure" class="stat">
      <slot name="figure" />
      <div
        v-if="props.title"
        class="stat-title"
        :class="[
          props.titleColor && statColorClasses[props.titleColor],
          props.titleSize && textSizeClasses[props.titleSize],
        ]"
      >
        {{ props.title }}
      </div>
      <div
        v-if="props.value !== undefined"
        class="stat-value"
        :class="[
          props.valueColor && statColorClasses[props.valueColor],
          props.valueSize && textSizeClasses[props.valueSize],
        ]"
      >
        {{ props.value }}
      </div>
      <div
        v-if="props.desc"
        class="stat-desc"
        :class="[
          props.descColor && statColorClasses[props.descColor],
          props.descSize && textSizeClasses[props.descSize],
        ]"
      >
        {{ props.desc }}
      </div>
    </div>
    <slot />
  </div>
</template>
