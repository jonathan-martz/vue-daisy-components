<script setup lang="ts">
import { ref, computed } from 'vue'
import type { AlertVariant } from '../types/alert'

interface Props {
  variant?: AlertVariant
  title?: string
  message?: string
  dismissible?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'alert-info',
  dismissible: false,
})

const visible = ref(true)

function dismiss() {
  visible.value = false
}

const iconClass = computed<string>(() => {
  switch (props.variant) {
    case 'alert-success': return 'fa-solid fa-circle-check'
    case 'alert-warning': return 'fa-solid fa-triangle-exclamation'
    case 'alert-error':   return 'fa-solid fa-circle-xmark'
    case 'alert-info':
    default:              return 'fa-solid fa-circle-info'
  }
})
</script>

<template>
  <transition name="fade">
    <div v-if="visible" role="alert" class="alert" :class="variant">

      <!-- Icon Slot -->
      <slot name="icon">
        <i :class="[iconClass, 'text-xl shrink-0']" />
      </slot>

      <!-- Content -->
      <div class="flex flex-col gap-0.5">
        <span v-if="title" class="font-bold">{{ title }}</span>
        <slot>
          <span v-if="message">{{ message }}</span>
        </slot>
      </div>

      <!-- Dismiss Button -->
      <button v-if="dismissible" class="btn btn-sm btn-ghost ml-auto" aria-label="Schließen" @click="dismiss">
        <i class="fa-solid fa-xmark" />
      </button>

    </div>
  </transition>
</template>

<style scoped>
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-leave-to {
  opacity: 0;
}
</style>

