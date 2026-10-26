<script setup lang="ts">
import type { DaisyStackProps } from "../interfaces/DaisyStackProps";

const props = withDefaults(defineProps<DaisyStackProps>(), {
	className: "",
	widthClass: "",
	heightClass: "",
});
</script>
<template>
  <div :class="['stack', props.widthClass, props.heightClass, props.className]">
    <slot />
  </div>
</template>
