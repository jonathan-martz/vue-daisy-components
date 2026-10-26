# Vue Daisy Components

DaisyUI Komponenten mit Vue 3 `<script setup lang="ts">`,
TailwindCSS und FontAwesome. Die vollstaendige Komponentenliste mit Links zur
jeweiligen daisyUI-Dokumentation steht in [components.md](./components.md).

## Struktur

- `components/` enthaelt alle Daisy-Komponenten als `Daisy*`
- `interfaces/` enthaelt Komponenten-Props und gemeinsam genutzte Interfaces
- `types/` enthaelt wiederverwendbare Type-Aliase und Variant-/Breakpoint-Typen
- Kleine Dateien in `types/` exportieren Komponenten-Props fuer bestehende Importpfade erneut

Die Komponenten verwenden Runtime-Props. Externe Interfaces bleiben fuer die
TypeScript-Typisierung erhalten, muessen aber vom Vue-SFC-Compiler nicht ueber das
Dateisystem aufgeloest werden.

Der Regressionstest fuer die Kompilierung ohne `fs`-Adapter laesst sich mit
`node --test tests/runtime-props.test.mjs` ausfuehren.

## Tailwind CSS und Typography

Importiere die CSS-Datei einmal in deiner Anwendung und verarbeite sie mit deiner
Tailwind-CSS-4-Integration:

```css
@import "vue-daisyui-components/styles.css";
```

Sie aktiviert daisyUI und `@tailwindcss/typography` und registriert die
Komponenten als Tailwind-Quellen. Verwende diesen Import statt separater
Tailwind-/daisyUI-Plugin-Imports, um doppelte Styles zu vermeiden.

Hero, Card, Accordion und Collapse verwenden `prose` in ihren Inhaltsbereichen.
`prose-daisy` passt die Textfarben an das aktive daisyUI-Theme an. Eigene
Bedienelemente innerhalb dieser Inhalts-Slots sollten mit `not-prose`
umschlossen werden. Hero-Aktionen und Card-Aktionen liegen bereits ausserhalb
der Typography-Stile.

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

Textgroessen akzeptieren Tailwind-Namen ohne `text-`-Praefix: `xs`, `sm`,
`base`, `lg`, `xl`, `2xl` bis `9xl`. Ohne Angabe bleibt die bisherige Groesse
erhalten.

| Komponenten | Props |
| --- | --- |
| DaisyHero, DaisyCard | `titleSize`, `descriptionSize`, `actionSize` |
| DaisyAccordion, DaisyCollapse | `titleSize`, `descriptionSize` |
| DaisyAlert | `titleSize`, `messageSize`, `closeSize` |
| DaisyHeadline | `titleSize` |
| DaisyLabel, DaisyDivider, DaisyBadge | `labelSize` |
| DaisyModal | `closeSize` |
| DaisyButton | `textSize` |

Die Props stylen die eingebauten Textbereiche bzw. deren Slot-Container.
Eigene Elemente mit expliziten Schriftgroessen in Slots behalten ihre Groesse.

```vue
<script setup lang="ts">
import DaisyHero from "vue-daisyui-components/components/DaisyHero.vue";

const handleCtaClick = () => {
	console.log("Hero CTA clicked");
};
</script>

<template>
	<DaisyHero
		title="Build something great"
		title-size="4xl"
		description="A responsive hero section styled with daisyUI and Tailwind CSS."
		description-size="lg"
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
