<script setup lang="ts">
import type { PropType } from "vue";
import { textSizeClasses } from "../utils/textSizeClasses";
import type { TextSize } from "../types/TextSize";
import {
	faMinus,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref } from "vue";

const props = defineProps({
	titleSize: {
		type: String as PropType<TextSize>,
	},
	descriptionSize: {
		type: String as PropType<TextSize>,
	},
	className: {
		type: String,
		default: "",
	},
});
const isOpen = ref(false);
</script>
<template>
  <div class="collapse bg-base-200" :class="props.className">
    <input
      type="checkbox"
      :checked="isOpen"
      @change="isOpen = ($event.target as HTMLInputElement).checked"
    />
    <div class="collapse-title font-medium flex items-center gap-2" :class="textSizeClasses[props.titleSize ?? 'xl']">
      <FontAwesomeIcon :icon="isOpen ? faMinus : faPlus" />
      <slot name="title">Collapse</slot>
    </div>
    <div class="collapse-content">
      <div class="prose prose-daisy max-w-none" :class="props.descriptionSize && textSizeClasses[props.descriptionSize]">
        <slot />
      </div>
    </div>
  </div>
</template>
