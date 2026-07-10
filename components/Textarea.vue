<script setup lang="ts">
import type { TextareaProps } from '../types/textarea'

const props = withDefaults(defineProps<TextareaProps>(), {
  className: '',
})
</script>

<template>
  <textarea :class="['textarea textarea-bordered', props.className]">
    <slot />
  </textarea>
</template>
