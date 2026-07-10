import type { BadgeSize } from '../types/BadgeSize'
import type { BadgeVariant } from '../types/BadgeVariant'
import type { ClassName } from './ClassName'

export interface DaisyBadgeProps extends ClassName {
  variant?: BadgeVariant
  size?: BadgeSize
  outline?: boolean
  label?: string
}
