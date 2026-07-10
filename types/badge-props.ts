import type { BadgeVariant } from './badge-variant'
import type { BadgeSize } from './badge-size'

export interface BadgeProps {
  variant?: BadgeVariant
  size?: BadgeSize
  outline?: boolean
  label?: string
}

