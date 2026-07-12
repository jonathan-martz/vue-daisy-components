<template>
  <section class="headline flex justify-between mb-3 items-center">
    <h2 class="font-bold text-lg">
      <slot />
    </h2>
    <section class="actions space-x-3">
      <slot name="actions" />
    </section>
  </section>
</template>