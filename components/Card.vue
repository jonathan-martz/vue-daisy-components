<script setup lang="ts">
import type { CardAction, CardBadgeVariant } from '../types/card'

interface Props {
  title?: string
  description?: string
  image?: string
  imageAlt?: string
  imageFull?: boolean
  bordered?: boolean
  compact?: boolean
  side?: boolean
  actions?: CardAction[]
  badge?: string
  badgeVariant?: CardBadgeVariant
}

const props = withDefaults(defineProps<Props>(), {
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
    :class="{
      'card-bordered': props.bordered,
      'card-compact': props.compact,
      'card-side': props.side,
      'image-full': props.imageFull,
    }"
  >
    <!-- Card Image -->
    <figure v-if="props.image">
      <img :src="props.image" :alt="props.imageAlt ?? props.title ?? 'Card image'" class="w-full object-cover" />
    </figure>

    <!-- Card Body -->
    <div class="card-body">
      <!-- Title + Badge -->
      <div v-if="props.title || props.badge" class="flex items-center justify-between gap-2">
        <h2 v-if="props.title" class="card-title">
          {{ props.title }}
        </h2>
        <span v-if="props.badge" class="badge" :class="props.badgeVariant">
          {{ props.badge }}
        </span>
      </div>

      <!-- Default Slot oder description -->
      <slot>
        <p v-if="props.description" class="text-base-content/70">{{ props.description }}</p>
      </slot>

      <!-- Actions -->
      <div v-if="(props.actions && props.actions.length > 0) || $slots.actions" class="card-actions justify-end mt-2">
        <slot name="actions">
          <button
            v-for="(action, index) in props.actions"
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
