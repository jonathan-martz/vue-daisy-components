<script setup lang="ts">
import type { LoadingProps } from '../types/loading'

const props = withDefaults(defineProps<LoadingProps>(), {
  className: '',
})
</script>

<template>
  <span :class="['loading loading-spinner', props.className]" />
</template>
