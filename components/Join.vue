<script setup lang="ts">
import type { JoinProps } from '../types/join'

const props = withDefaults(defineProps<JoinProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['join', props.className]">
    <slot />
  </div>
</template>
