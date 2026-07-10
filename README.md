# Vue Daisy Components

DaisyUI Komponenten mit Vue 3 `<script setup lang="ts">`, TailwindCSS und FontAwesome.

## Struktur

- `components/` enthaelt alle Daisy-Komponenten als `Daisy*`
- `interfaces/` enthaelt Interfaces
- `types/` enthaelt Type-Aliase
- `types/` enthaelt Re-Export-Dateien pro Komponente

## Beispiel (Nuxt)

```vue
<template>
  <DaisyButton
    variant="primary"
    :responsive-size="{ md: 'md', lg: 'lg' }"
  >
    Primary Button
  </DaisyButton>
</template>
```
