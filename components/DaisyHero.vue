<script setup>
import { computed } from 'vue'

// Props definieren, um die Komponente flexibel zu steuern
const props = defineProps({
  title: {
    type: String,
    default: 'Hello there'
  },
  description: {
    type: String,
    default: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.'
  },
  ctaText: {
    type: String,
    default: 'Get Started'
  },
  imageUrl: {
    type: String,
    default: ''
  },
  // 'center', 'side' (Bild links) oder 'side-reverse' (Bild rechts)
  layout: {
    type: String,
    default: 'center',
    validator: (value) => ['center', 'side', 'side-reverse'].includes(value)
  },
  // Hintergrundbild für den gesamten Hero-Bereich (mit Overlay)
  bgImage: {
    type: String,
    default: ''
  },
  // Option für eine Custom Action (z.B. primär oder sekundär Button)
  buttonClass: {
    type: String,
    default: 'btn-primary'
  }
})

// Event-Emitter für den Klick auf den CTA-Button
const emit = defineEmits(['cta-click'])

// Dynamische Klassen für den Inhalts-Container basierend auf dem Layout berechnen
const contentClasses = computed(() => {
  return [
    'hero-content',
    {
      'text-center': props.layout === 'center' && !props.bgImage,
      'flex-col lg:flex-row': props.layout === 'side',
      'flex-col lg:flex-row-reverse': props.layout === 'side-reverse'
    }
  ]
})

// Inline-Styles für das Hintergrundbild generieren, falls vorhanden
const heroStyles = computed(() => {
  if (props.bgImage) {
    return { backgroundImage: `url(${props.bgImage})` }
  }
  return {}
})
</script>

<template>
  <div
      class="hero py-12 bg-gray-400"
      :style="heroStyles"
  >
    <div v-if="bgImage" class="hero-overlay bg-opacity-60"></div>

    <div :class="contentClasses">
      <img
          v-if="imageUrl && !bgImage"
          :src="imageUrl"
          class="max-w-sm rounded-lg shadow-2xl"
          alt="Hero Image"
      />

      <div :class="{ 'max-w-md': props.layout === 'center' || props.bgImage }">
        <h1
            class="text-5xl font-bold"
            :class="{ 'text-neutral-content': bgImage }"
        >
          {{ title }}
        </h1>

        <p
            class="py-6"
            :class="{ 'text-neutral-content': bgImage }"
        >
          {{ description }}
        </p>

        <slot name="actions">
          <button
              class="btn"
              :class="buttonClass"
              @click="emit('cta-click')"
          >
            {{ ctaText }}
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>