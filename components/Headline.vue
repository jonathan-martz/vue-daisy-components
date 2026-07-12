<template>
  <section class="headline flex justify-between">
    <h2 class="font-bold text-lg mb-3">
      <slot />
    </h2>
    <section class="actions space-x-3">
      <slot name="actions" />
    </section>
  </section>
</template>