<script setup lang="ts">
import { ref, computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleInfo, faCircleCheck, faTriangleExclamation, faCircleXmark, faXmark } from '@fortawesome/free-solid-svg-icons'
import type { DaisyAlertProps } from '../types/alert'
const {
  className,
  variant,
  title,
  message,
  dismissible,
} = withDefaults(defineProps<DaisyAlertProps>(), {
  className: '',
  variant: 'alert-info',
  dismissible: false,
})
const isVisible = ref(true)
const icon = computed(() => {
  if (variant === 'alert-success') return faCircleCheck
  if (variant === 'alert-warning') return faTriangleExclamation
  if (variant === 'alert-error') return faCircleXmark
  return faCircleInfo
})
</script>
<template>
  <div v-if="isVisible" role="alert" class="alert" :class="[className, variant]">
    <slot name="icon">
      <FontAwesomeIcon :icon="icon" class="text-lg" />
    </slot>
    <div>
      <p v-if="title" class="font-semibold">{{ title }}</p>
      <slot>
        <p v-if="message">{{ message }}</p>
      </slot>
    </div>
    <button v-if="dismissible" class="btn btn-ghost btn-sm" @click="isVisible = false">
      <FontAwesomeIcon :icon="faXmark" />
    </button>
  </div>
</template>
