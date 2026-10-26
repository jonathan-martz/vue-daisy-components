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

const props = defineProps({
	className: {
		type: String,
		default: "",
	},
	margin: {
		type: Boolean,
		default: false,
	},
});
</script>