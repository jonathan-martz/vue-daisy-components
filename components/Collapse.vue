<script setup lang="ts">
import { ref } from 'vue'
import type { CollapseProps } from '../types/collapse'

interface Props {
  title: string
  open?: boolean
  icon?: 'arrow' | 'plus' | 'none'
  bordered?: boolean
  bg?: 'bg-base-100' | 'bg-base-200' | 'bg-base-300'
}

const props = withDefaults(defineProps<Props>(), {
  open: false,
  icon: 'arrow',
  bordered: false,
  bg: 'bg-base-200',
})

const isOpen = ref(props.open)

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div
    class="collapse rounded-box"
    :class="[
      bg,
      { 'collapse-arrow': icon === 'arrow' },
      { 'collapse-plus': icon === 'plus' },
      { 'border border-base-300': bordered },
      { 'collapse-open': isOpen },
      { 'collapse-close': !isOpen },
    ]"
  >
    <!-- Collapse Trigger -->
    <div
      class="collapse-title text-base font-semibold cursor-pointer flex items-center gap-2 select-none"
      @click="toggle"
    >
      <!-- Icon Slot (optional) -->
      <slot name="icon">
        <i v-if="icon === 'arrow'" class="fa-solid fa-chevron-right transition-transform duration-200" :class="{ 'rotate-90': isOpen }" />
        <i v-else-if="icon === 'plus'" :class="isOpen ? 'fa-solid fa-minus' : 'fa-solid fa-plus'" class="transition-all duration-200" />
      </slot>
      <span>{{ title }}</span>
    </div>

    <!-- Collapse Content -->
    <div class="collapse-content text-base-content/80">
      <slot />
    </div>
  </div>
</template>

