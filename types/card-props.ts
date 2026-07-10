import type { CardAction } from './card-action'
import type { CardBadgeVariant } from './card-badge-variant'

export interface CardProps {
  title?: string
  description?: string
  image?: string
  imageAlt?: string
  imageFull?: boolean
  bordered?: boolean
  compact?: boolean
  side?: boolean
  actions?: CardAction[]
  badge?: string
  badgeVariant?: CardBadgeVariant
}

