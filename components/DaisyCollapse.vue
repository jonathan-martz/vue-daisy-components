<script setup lang="ts">
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronRight, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import type { DaisyCollapseProps } from '../types/collapse'
const {
  className,
} = withDefaults(defineProps<DaisyCollapseProps>(), {
  className: '',
})
const isOpen = ref(false)
</script>
<template>
  <div class="collapse bg-base-200" :class="className">
    <input type="checkbox" :checked="isOpen" @change="isOpen = !isOpen" />
    <div class="collapse-title text-xl font-medium flex items-center gap-2">
      <FontAwesomeIcon :icon="isOpen ? faMinus : faPlus" />
      <slot name="title">Collapse</slot>
      <FontAwesomeIcon :icon="faChevronRight" class="ml-auto" :class="{ 'rotate-90': isOpen }" />
    </div>
    <div class="collapse-content">
      <slot />
    </div>
  </div>
</template>
