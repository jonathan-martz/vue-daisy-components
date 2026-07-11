<script setup lang="ts">
import type { DaisyRadioProps } from "../interfaces/DaisyRadioProps";

const { className } = withDefaults(defineProps<DaisyRadioProps>(), {
	className: "",
});
</script>
<template>
  <input type="radio" :class="['radio', className]" />
</template>
