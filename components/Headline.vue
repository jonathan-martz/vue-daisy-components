<template>
  <section class="headline flex justify-between items-center">
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
  margin: {
    required: false,
    default: false,
    type: Boolean
  }
})
</script>