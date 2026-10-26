<script setup lang="ts">
import {
	faMinus,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref } from "vue";
import type { DaisyCollapseProps } from "../interfaces/DaisyCollapseProps";

const { className } = withDefaults(defineProps<DaisyCollapseProps>(), {
	className: "",
});
const isOpen = ref(false);
</script>
<template>
  <div class="collapse bg-base-200" :class="className">
    <input
      type="checkbox"
      :checked="isOpen"
      @change="isOpen = ($event.target as HTMLInputElement).checked"
    />
    <div class="collapse-title text-xl font-medium flex items-center gap-2">
      <FontAwesomeIcon :icon="isOpen ? faMinus : faPlus" />
      <slot name="title">Collapse</slot>
    </div>
    <div class="collapse-content">
      <slot />
    </div>
  </div>
</template>
