<script setup lang="ts">
import { computed } from "vue";
import type { DaisyHeroProps } from "../interfaces/DaisyHeroProps";

const props = withDefaults(defineProps<DaisyHeroProps>(), {
	className: "",
	title: "Hello there",
	description:
		"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
	ctaText: "Get Started",
	imageUrl: "",
	imageAlt: "Hero Image",
	layout: "center",
	bgImage: "",
	variant: "primary",
});

const emit = defineEmits<{
	"cta-click": [];
}>();

const contentClasses = computed(() => {
	return [
		"hero-content",
		{
			"text-center": props.layout === "center" && !props.bgImage,
			"flex-col lg:flex-row": props.layout === "side",
			"flex-col lg:flex-row-reverse": props.layout === "side-reverse",
		},
	];
});

const heroStyles = computed(() => {
	if (props.bgImage) {
		return { backgroundImage: `url(${props.bgImage})` };
	}
	return {};
});

const buttonClasses = computed(() => `btn-${props.variant}`);
</script>

<template>
  <div
      class="hero bg-cover bg-center py-12"
      :class="props.className"
      :style="heroStyles"
  >
    <div v-if="props.bgImage" class="hero-overlay bg-black/60"></div>

    <div :class="contentClasses">
      <img
          v-if="props.imageUrl && !props.bgImage"
          :src="props.imageUrl"
          class="max-w-sm rounded-lg shadow-2xl"
          :alt="props.imageAlt"
      />

      <div :class="{ 'max-w-md': props.layout === 'center' || props.bgImage }">
        <h1
            class="text-5xl font-bold"
            :class="{ 'text-neutral-content': props.bgImage }"
        >
          {{ props.title }}
        </h1>

        <p
            class="py-6"
            :class="{ 'text-neutral-content': props.bgImage }"
        >
          {{ props.description }}
        </p>

        <slot name="actions">
          <button
              class="btn"
              :class="buttonClasses"
              @click="emit('cta-click')"
          >
            {{ props.ctaText }}
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>