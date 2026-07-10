<script setup lang="ts">
import type { DaisyCardProps } from '../types/card'
const {
  className,
  title,
  description,
  image,
  imageAlt,
  imageFull,
  bordered,
  compact,
  side,
  actions,
  badge,
  badgeVariant,
} = withDefaults(defineProps<DaisyCardProps>(), {
  className: '',
  imageFull: false,
  bordered: false,
  compact: false,
  side: false,
  actions: () => [],
  badgeVariant: 'badge-primary',
})
</script>
<template>
  <div
    class="card bg-base-100 shadow-xl"
    :class="[
      className,
      {
        'card-bordered': bordered,
        'card-compact': compact,
        'card-side': side,
        'image-full': imageFull,
      },
    ]"
  >
    <figure v-if="image">
      <img :src="image" :alt="imageAlt ?? title ?? 'Card image'" class="w-full object-cover" />
    </figure>
    <div class="card-body">
      <div v-if="title || badge" class="flex items-center justify-between gap-2">
        <h2 v-if="title" class="card-title">{{ title }}</h2>
        <span v-if="badge" class="badge" :class="badgeVariant">{{ badge }}</span>
      </div>
      <slot>
        <p v-if="description" class="text-base-content/70">{{ description }}</p>
      </slot>
      <div v-if="(actions && actions.length > 0) || $slots.actions" class="card-actions justify-end mt-2">
        <slot name="actions">
          <button
            v-for="(action, index) in actions"
            :key="index"
            class="btn"
            :class="action.variant ?? 'btn-primary'"
            @click="action.onClick"
          >
            {{ action.label }}
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>
