<script setup lang="ts">
import type { SelectProps } from '../types/select'

const props = withDefaults(defineProps<SelectProps>(), {
  className: '',
})
</script>

<template>
  <select :class="['select select-bordered', props.className]">
    <slot>
      <option disabled selected>Choose</option>
    </slot>
  </select>
</template>
