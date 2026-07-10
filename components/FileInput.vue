<script setup lang="ts">
import type { FileInputProps } from '../types/file-input'

const props = withDefaults(defineProps<FileInputProps>(), {
  className: '',
})
</script>

<template>
  <input type="file" :class="['file-input file-input-bordered', props.className]" />
</template>
