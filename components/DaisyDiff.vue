<script setup lang="ts">

const props = defineProps({
	className: {
		type: String,
		default: "",
	},
});
</script>
<template>
  <div :class="['diff', props.className]">
    <template v-if="$slots.before || $slots.after">
      <div class="diff-item-1">
        <slot name="before" />
      </div>
      <div class="diff-item-2">
        <slot name="after" />
      </div>
      <div class="diff-resizer" />
    </template>
    <slot v-else />
  </div>
</template>
