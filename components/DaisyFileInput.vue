<script setup lang="ts">
import type { DaisyFileInputProps } from "../interfaces/DaisyFileInputProps";

const { className } = withDefaults(defineProps<DaisyFileInputProps>(), {
	className: "",
});
</script>
<template>
  <input type="file" :class="['file-input file-input-bordered', className]" />
</template>
