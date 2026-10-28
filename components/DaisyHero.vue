<script setup lang="ts">
import type { PropType } from 'vue'
import type { DaisyHeroProps } from 'vue-daisyui-components/interfaces/DaisyHeroProps'
import { buttonVariantClasses } from 'vue-daisyui-components/utils/variantClasses'
import { textSizeClasses } from 'vue-daisyui-components/utils/textSizeClasses'

const props = defineProps({
  titleSize: String as PropType<DaisyHeroProps['titleSize']>,
  descriptionSize: String as PropType<DaisyHeroProps['descriptionSize']>,
  actionSize: String as PropType<DaisyHeroProps['actionSize']>,
  className: { type: String, default: '' },
  title: { type: String, default: 'Hello there' },
  description: {
    type: String,
    default: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
  },
  ctaText: { type: String, default: 'Get Started' },
  imageUrl: { type: String, default: '' },
  imageAlt: { type: String, default: 'Hero Image' },
  layout: { type: String as PropType<DaisyHeroProps['layout']>, default: 'center' },
  bgImage: { type: String, default: '' },
  variant: { type: String as PropType<NonNullable<DaisyHeroProps['variant']>>, default: 'primary' },
})

const emit = defineEmits<{
  'cta-click': []
}>()
</script>

<template>
  <div
      class="hero @container min-w-0 rounded-[inherit] bg-cover bg-center"
      :class="props.className"
      :style="props.bgImage ? { backgroundImage: `url(${props.bgImage})` } : undefined"
  >
    <div v-if="props.bgImage" class="hero-overlay rounded-[inherit] bg-black/60" aria-hidden="true"></div>

    <div
        class="hero-content w-full min-w-0 flex-col gap-6 px-4 py-8 @sm:gap-8 @sm:px-6 @sm:py-12 @3xl:gap-12 @3xl:px-8 @3xl:py-16"
        :class="{
          'text-center': props.layout === 'center',
          '@3xl:flex-row': props.layout === 'side',
          '@3xl:flex-row-reverse': props.layout === 'side-reverse',
        }"
    >
      <img
          v-if="props.imageUrl && !props.bgImage"
          :src="props.imageUrl"
          :alt="props.imageAlt"
          class="h-auto w-full min-w-0 max-w-sm rounded-lg object-contain shadow-2xl"
          :class="{ '@3xl:w-1/2': props.layout !== 'center' }"
      />

      <div
          class="w-full min-w-0 [overflow-wrap:anywhere]"
          :class="props.layout === 'center' ? 'max-w-prose' : '@3xl:flex-1'"
      >
        <h1
            class="font-bold leading-tight"
            :class="[
              props.titleSize ? textSizeClasses[props.titleSize] : 'text-3xl @sm:text-4xl @3xl:text-5xl',
              { 'text-neutral-content': props.bgImage },
            ]"
        >
          {{ props.title }}
        </h1>

        <p
            class="py-4 leading-relaxed @sm:py-6"
            :class="[
              props.descriptionSize ? textSizeClasses[props.descriptionSize] : 'text-base @3xl:text-lg',
              { 'text-neutral-content': props.bgImage },
            ]"
        >
          {{ props.description }}
        </p>

        <div
            class="flex min-w-0 flex-wrap gap-3 *:min-w-0 *:max-w-full *:whitespace-normal"
            :class="{ 'justify-center': props.layout === 'center' }"
        >
          <slot name="actions">
            <button
                type="button"
                class="btn h-auto min-h-12 w-full max-w-full whitespace-normal py-3 @sm:w-auto"
                :class="[buttonVariantClasses[props.variant], props.actionSize && textSizeClasses[props.actionSize]]"
                @click="emit('cta-click')"
            >
              {{ props.ctaText }}
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
