<script setup lang="ts">
import { computed } from "vue";
import type { DaisyCardProps } from "../interfaces/DaisyCardProps";

const props = withDefaults(defineProps<DaisyCardProps>(), {
	className: "",
	imageFull: false,
	bordered: false,
	compact: false,
	side: false,
	actions: () => [],
});

const badgeVariantClass = computed(
	() => `badge-${props.badgeVariant ?? "primary"}`,
);
</script>

<template>
  <div
    class="card bg-base-100 shadow-xl"
    :class="[
      props.className,
      {
        'card-bordered': props.bordered,
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
        <h2 v-if="props.title" class="card-title">{{ props.title }}</h2>
        <span v-if="props.badge" class="badge" :class="badgeVariantClass">{{ props.badge }}</span>
      </div>

      <slot>
        <p v-if="props.description" class="text-base-content/70">{{ props.description }}</p>
      </slot>

      <div v-if="(props.actions && props.actions.length > 0) || $slots.actions" class="card-actions justify-end mt-2">
        <slot name="actions">
          <button
            v-for="(action, index) in props.actions"
            :key="index"
            class="btn"
            :class="`btn-${action.variant ?? 'primary'}`"
            @click="action.onClick"
          >
            {{ action.label }}
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>
