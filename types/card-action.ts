import type { CardActionVariant } from './card-action-variant'

export interface CardAction {
  label: string
  variant?: CardActionVariant
  onClick?: () => void
}

