<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import type { DaisyModalProps } from "../interfaces/DaisyModalProps";

const props = withDefaults(defineProps<DaisyModalProps>(), {
	className: "",
	open: false,
});

const emit = defineEmits<{
	"update:open": [open: boolean];
	close: [];
}>();

const dialog = ref<HTMLDialogElement | null>(null);

const syncOpenState = (open: boolean) => {
	const element = dialog.value;
	if (!element) return;

	if (open && !element.open) element.showModal();
	if (!open && element.open) element.close();
};

onMounted(() => syncOpenState(props.open));
watch(() => props.open, syncOpenState);

const close = () => {
	emit("update:open", false);
	emit("close");
	syncOpenState(false);
};
</script>
<template>
  <dialog
    ref="dialog"
    :class="['modal', props.className]"
    @click.self="close"
    @cancel.prevent="close"
  >
    <div class="modal-box">
      <slot />
      <form method="dialog" class="modal-action">
        <slot name="actions">
          <button type="button" class="btn" @click="close">Close</button>
        </slot>
      </form>
    </div>
  </dialog>
</template>
