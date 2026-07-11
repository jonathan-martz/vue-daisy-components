<script setup lang="ts">
import type { DaisyAvatarProps } from "../interfaces/DaisyAvatarProps";

const { className } = withDefaults(defineProps<DaisyAvatarProps>(), {
	className: "",
});
</script>
<template>
  <div :class="['avatar', className]">
    <slot />
  </div>
</template>
