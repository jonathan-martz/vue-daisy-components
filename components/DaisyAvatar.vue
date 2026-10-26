<script setup lang="ts">
import type { DaisyAvatarProps } from "../interfaces/DaisyAvatarProps";

const props = withDefaults(defineProps<DaisyAvatarProps>(), {
	className: "",
	placeholder: false,
});
</script>
<template>
  <div :class="['avatar', props.status, { 'avatar-placeholder': props.placeholder }, props.className]">
    <slot>
      <div
        :class="[
          'w-12 rounded-full',
          props.placeholder ? 'bg-neutral text-neutral-content' : '',
        ]"
      >
        <img v-if="props.src" :src="props.src" :alt="props.alt" />
        <span v-else-if="props.initials" aria-hidden="true">{{ props.initials }}</span>
      </div>
    </slot>
  </div>
</template>
