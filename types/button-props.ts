import type { ButtonResponsiveSizeMap } from './button-responsive-size-map'
import type { ButtonSize } from './button-size'
import type { ButtonVariant } from './button-variant'

export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  responsiveSize?: ButtonResponsiveSizeMap
  outline?: boolean
  disabled?: boolean
  loading?: boolean
  block?: boolean
  circle?: boolean
  square?: boolean
  active?: boolean
  type?: 'button' | 'submit' | 'reset'
}

