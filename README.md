# Vue Daisy Components

DaisyUI Komponenten mit Vue 3 `<script setup lang="ts">`, TailwindCSS und FontAwesome.

## Struktur

- `components/` enthaelt alle Daisy-Komponenten als `Daisy*`
- `interfaces/` enthaelt Interfaces
- `types/` enthaelt Type-Aliase
- `types/` enthaelt Re-Export-Dateien pro Komponente

## Komponenten aus `components.md`

1. DaisyAccordion
2. DaisyAlert
3. DaisyArtboard
4. DaisyAvatar
5. DaisyBadge
6. DaisyBottomNavigation
7. DaisyBreadcrumbs
8. DaisyButton
9. DaisyCalendar
10. DaisyCard
11. DaisyCarousel
12. DaisyChat
13. DaisyCheckbox
14. DaisyCollapse
15. DaisyCountdown
16. DaisyDiff
17. DaisyDivider
18. DaisyDrawer
19. DaisyDropdown
20. DaisyFileInput
21. DaisyFooter
22. DaisyHero
23. DaisyIndicator
24. DaisyInput
25. DaisyJoin
26. DaisyKbd
27. DaisyLink
28. DaisyLoading
29. DaisyMask
30. DaisyMenu
31. DaisyModal
32. DaisyNavbar
33. DaisyPagination
34. DaisyProgress
35. DaisyRadialProgress
36. DaisyRadio
37. DaisyRange
38. DaisyRating
39. DaisySelect
40. DaisySkeleton
41. DaisyStack
42. DaisyStat
43. DaisySteps
44. DaisySwap
45. DaisyTable
46. DaisyTabs
47. DaisyTextarea
48. DaisyThemeController
49. DaisyTimeline
50. DaisyToast
51. DaisyToggle
52. DaisyTooltip

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
