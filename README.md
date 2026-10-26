# Vue Daisy Components

DaisyUI Komponenten mit Vue 3 `<script setup lang="ts">`,
TailwindCSS und FontAwesome. Die vollstaendige Komponentenliste mit Links zur
jeweiligen daisyUI-Dokumentation steht in [components.md](./components.md).

## Struktur

- `components/` enthaelt alle Daisy-Komponenten als `Daisy*`
- `interfaces/` enthaelt Komponenten-Props und gemeinsam genutzte Interfaces
- `types/` enthaelt wiederverwendbare Type-Aliase und Variant-/Breakpoint-Typen
- Kleine Dateien in `types/` exportieren Komponenten-Props fuer bestehende Importpfade erneut

## Beispiel (Nuxt)

```vue
<template>
  <DaisyButton
    variant="primary"
  >
    Primary Button
  </DaisyButton>
</template>
```

## DaisyHero

```vue
<script setup lang="ts">
import DaisyHero from "./components/DaisyHero.vue";

const handleCtaClick = () => {
	console.log("Hero CTA clicked");
};
</script>

<template>
	<DaisyHero
		title="Build something great"
		description="A responsive hero section styled with daisyUI and Tailwind CSS."
		cta-text="Get started"
		image-url="/images/hero.webp"
		image-alt="A preview of the product"
		layout="side"
		variant="primary"
		class-name="min-h-96 rounded-box"
		@cta-click="handleCtaClick"
	/>
</template>
```

Use the `actions` slot to provide custom CTA content. Set `bg-image` to use a
background image with an overlay.
