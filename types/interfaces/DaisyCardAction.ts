import type { CardActionVariant } from '../types/CardActionVariant'

export interface DaisyCardAction {
  label: string
  variant?: CardActionVariant
  onClick?: () => void
}
