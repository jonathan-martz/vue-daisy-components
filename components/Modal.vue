<script setup lang="ts">
import type { ModalProps } from '../types/modal'

const props = withDefaults(defineProps<ModalProps>(), {
  className: '',
})
</script>

<template>
  <div :class="['modal modal-open', props.className]">
    <div class="modal-box">
      <slot />
    </div>
  </div>
</template>
