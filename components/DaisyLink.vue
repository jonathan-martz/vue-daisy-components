<script setup lang="ts">
import type { DaisyLinkProps } from "../interfaces/DaisyLinkProps";

const props = withDefaults(defineProps<DaisyLinkProps>(), {
	className: "",
	underline: true,
});
</script>
<template>
  <a
    :href="props.href"
    :target="props.target"
    :rel="props.rel"
    :class="['link', { 'no-underline': !props.underline }, props.className]"
  >
    <slot />
  </a>
</template>
