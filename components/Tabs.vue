<script setup lang="ts">
import type { TabsProps } from '../types/tabs'

const props = withDefaults(defineProps<TabsProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['tabs tabs-boxed', props.className]">
    <slot />
  </div>
</template>
