<script setup lang="ts">
import { badgeVariantClasses, buttonVariantClasses } from "../utils/variantClasses";
import { textSizeClasses } from "../utils/textSizeClasses";
import type { TextSize } from "../types/TextSize";
import type { PropType } from "vue";
import { computed } from "vue";
import type { DaisyCardProps } from "../interfaces/DaisyCardProps";

const props = defineProps({
	titleSize: {
		type: String as PropType<TextSize>,
	},
	descriptionSize: {
		type: String as PropType<TextSize>,
	},
	actionSize: {
		type: String as PropType<TextSize>,
	},
	className: {
		type: String,
		default: "",
	},
	title: {
		type: String,
	},
	description: {
		type: String,
	},
	image: {
		type: String,
	},
	imageAlt: {
		type: String,
	},
	imageFull: {
		type: Boolean,
		default: false,
	},
	bordered: {
		type: Boolean,
		default: false,
	},
	compact: {
		type: Boolean,
		default: false,
	},
	side: {
		type: Boolean,
		default: false,
	},
	actions: {
		type: Array as PropType<NonNullable<DaisyCardProps["actions"]>>,
		default: () => [],
	},
	badge: {
		type: String,
	},
	badgeVariant: {
		type: String as PropType<NonNullable<DaisyCardProps["badgeVariant"]>>,
	},
});

const badgeVariantClass = computed(
	() => badgeVariantClasses[props.badgeVariant ?? "primary"],
);
</script>

<template>
  <div
    class="card bg-base-100 shadow-xl"
    :class="[
      props.className,
      {
        'card-border': props.bordered,
        'card-compact': props.compact,
        'card-side': props.side,
        'image-full': props.imageFull,
      },
    ]"
  >
    <figure v-if="props.image">
      <img :src="props.image" :alt="props.imageAlt ?? props.title ?? 'Card image'" class="w-full object-cover" />
    </figure>

    <div class="card-body">
      <div v-if="props.title || props.badge" class="flex items-center justify-between gap-2">
        <h2 v-if="props.title" class="card-title" :class="props.titleSize && textSizeClasses[props.titleSize]">{{ props.title }}</h2>
        <span v-if="props.badge" class="badge" :class="badgeVariantClass">{{ props.badge }}</span>
      </div>

      <div v-if="$slots.default || props.description" class="prose prose-daisy max-w-none" :class="props.descriptionSize && textSizeClasses[props.descriptionSize]">
        <slot>
          <p v-if="props.description" class="text-base-content/70">{{ props.description }}</p>
        </slot>
      </div>

      <div v-if="(props.actions && props.actions.length > 0) || $slots.actions" class="card-actions justify-end mt-2">
        <slot name="actions">
          <button
            v-for="(action, index) in props.actions"
            :key="index"
            type="button"
            class="btn"
            :class="[buttonVariantClasses[action.variant ?? 'primary'], props.actionSize && textSizeClasses[props.actionSize]]"
            @click="action.onClick"
          >
            {{ action.label }}
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>
