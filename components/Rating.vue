<script setup lang="ts">
import type { RatingProps } from '../types/rating'

const props = withDefaults(defineProps<RatingProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['rating', props.className]">
    <slot />
  </div>
</template>
