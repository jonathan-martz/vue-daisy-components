<script setup lang="ts">
import type { DaisyJoinProps } from "../interfaces/DaisyJoinProps";

const props = withDefaults(defineProps<DaisyJoinProps>(), {
	className: "",
	orientation: "horizontal",
});
</script>
<template>
  <div
    :class="[
      'join',
      props.orientation === 'vertical' ? 'join-vertical' : 'join-horizontal',
      props.className,
    ]"
  >
    <slot />
  </div>
</template>
