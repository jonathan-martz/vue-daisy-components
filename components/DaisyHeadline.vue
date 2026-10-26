<template>
  <section
    class="headline flex items-center justify-between"
    :class="[props.className, { 'mb-3': !props.margin }]"
  >
    <h2 class="font-bold text-lg">
      <slot/>
    </h2>
    <section class="actions space-x-3">
      <slot name="actions"/>
    </section>
  </section>
</template>
<script setup lang="ts">
import type { DaisyHeadlineProps } from "../interfaces/DaisyHeadlineProps";

const props = withDefaults(defineProps<DaisyHeadlineProps>(), {
	className: "",
	margin: false,
});
</script>