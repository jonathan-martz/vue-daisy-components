<script setup lang="ts">
import type { AccordionItem } from '../types/accordion'

interface Props {
  items: AccordionItem[]
  name?: string
  joinItems?: boolean
  arrowIcon?: boolean
  plusIcon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  name: 'accordion',
  joinItems: true,
  arrowIcon: true,
  plusIcon: false,
})
</script>

<template>
  <div :class="{ 'join join-vertical w-full': joinItems }">
    <div
      v-for="item in items"
      :key="item.id"
      class="collapse"
      :class="[
        joinItems ? 'join-item border border-base-300' : 'mb-2 border border-base-300 rounded-box',
        arrowIcon && !plusIcon ? 'collapse-arrow' : '',
        plusIcon ? 'collapse-plus' : '',
      ]"
    >
      <input type="radio" :name="name" />

      <!-- Accordion Title -->
      <div class="collapse-title text-base font-semibold flex items-center gap-2">
        <i v-if="item.icon" :class="item.icon" class="text-primary" />
        {{ item.title }}
      </div>

      <!-- Accordion Content -->
      <div class="collapse-content text-base-content/80">
        <slot :name="`item-${item.id}`">
          <p>{{ item.content }}</p>
        </slot>
      </div>
    </div>
  </div>
</template>

