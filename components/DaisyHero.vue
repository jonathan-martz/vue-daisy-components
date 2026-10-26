<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";
import type { DaisyHeroProps } from "../interfaces/DaisyHeroProps";

const props = defineProps({
	className: {
		type: String,
		default: "",
	},
	title: {
		type: String,
		default: "Hello there",
	},
	description: {
		type: String,
		default:
			"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
	},
	ctaText: {
		type: String,
		default: "Get Started",
	},
	imageUrl: {
		type: String,
		default: "",
	},
	imageAlt: {
		type: String,
		default: "Hero Image",
	},
	layout: {
		type: String as PropType<NonNullable<DaisyHeroProps["layout"]>>,
		default: "center",
	},
	bgImage: {
		type: String,
		default: "",
	},
	variant: {
		type: String as PropType<NonNullable<DaisyHeroProps["variant"]>>,
		default: "primary",
	},
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

      <div
          class="prose prose-daisy"
          :class="props.layout === 'center' || props.bgImage ? 'max-w-md' : 'max-w-none'"
      >
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

        <div class="not-prose">
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
  </div>
</template>