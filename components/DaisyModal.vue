<script setup lang="ts">
import type { DaisyModalProps } from '../types/modal'
const { className } = withDefaults(defineProps<DaisyModalProps>(), {
  className: '',
})
</script>
<template>
  <div :class="['modal modal-open', className]">
    <div class="modal-box">
      <slot />
    </div>
  </div>
</template>
